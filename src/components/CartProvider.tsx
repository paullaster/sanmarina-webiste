"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type CartProduct = {
  id: string;
  name: string;
  slug: string;
  price?: number;
  imageUrl: string;
  baseUnitName: string;
};

export type CartItem = CartProduct & { quantity: number };

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "sm-engineering-guest-cart-v1";
const EMPTY_CART: CartItem[] = [];
const CartContext = createContext<CartContextValue | null>(null);
const listeners = new Set<() => void>();
let itemsSnapshot: CartItem[] = EMPTY_CART;
let cartLoaded = false;

function validCart(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (item): item is CartItem =>
      typeof item === "object" &&
      item !== null &&
      "id" in item &&
      typeof item.id === "string" &&
      "name" in item &&
      typeof item.name === "string" &&
      "slug" in item &&
      typeof item.slug === "string" &&
      "imageUrl" in item &&
      typeof item.imageUrl === "string" &&
      "baseUnitName" in item &&
      typeof item.baseUnitName === "string" &&
      "quantity" in item &&
      Number.isSafeInteger(item.quantity) &&
      item.quantity > 0 &&
      (!("price" in item) ||
        item.price === undefined ||
        (typeof item.price === "number" && Number.isFinite(item.price))),
  );
}

function notify() {
  for (const listener of listeners) listener();
}

function loadCart() {
  if (cartLoaded || typeof window === "undefined") return;
  cartLoaded = true;
  try {
    itemsSnapshot = validCart(
      JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]"),
    );
  } catch {
    itemsSnapshot = EMPTY_CART;
  }
}

function saveCart(next: CartItem[]) {
  itemsSnapshot = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Keep this session's cart usable when browser storage is unavailable.
  }
  notify();
}

function handleStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEY) return;
  try {
    itemsSnapshot = validCart(
      event.newValue === null ? [] : JSON.parse(event.newValue),
    );
  } catch {
    itemsSnapshot = EMPTY_CART;
  }
  notify();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  loadCart();
  listener();
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function getSnapshot() {
  return itemsSnapshot;
}

function getServerSnapshot() {
  return EMPTY_CART;
}

function addProduct(product: CartProduct) {
  const existing = itemsSnapshot.find((item) => item.id === product.id);
  if (existing) {
    saveCart(
      itemsSnapshot.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
    return;
  }
  saveCart([...itemsSnapshot, { ...product, quantity: 1 }]);
}

function removeProduct(productId: string) {
  saveCart(itemsSnapshot.filter((item) => item.id !== productId));
}

function updateQuantity(productId: string, quantity: number) {
  if (!Number.isSafeInteger(quantity) || quantity < 0) return;
  if (quantity === 0) {
    removeProduct(productId);
    return;
  }
  saveCart(
    itemsSnapshot.map((item) =>
      item.id === productId ? { ...item, quantity } : item,
    ),
  );
}

function clearCart() {
  saveCart([]);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const value = useMemo(
    () => ({
      items,
      itemCount,
      addToCart: addProduct,
      removeFromCart: removeProduct,
      setQuantity: updateQuantity,
      clearCart,
    }),
    [items, itemCount],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const value = useContext(CartContext);
  if (value === null)
    throw new Error("useCart must be used inside CartProvider");
  return value;
}
