"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export type StoreProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand?: string;
  price?: number;
  imageUrl: string;
  additionalImages?: string[];
  specifications?: { key: string; value: string }[];
  stockQuantity: number;
  baseUnitName: string;
  slug: string;
};

type CatalogResponse = {
  products: StoreProduct[];
  pagination: { nextCursor: string | null; total: number };
};

const apiBase = process.env.NEXT_PUBLIC_QSELL_API_URL?.replace(/\/$/, "");

function isCatalogResponse(value: unknown): value is CatalogResponse {
  if (typeof value !== "object" || value === null || !("products" in value)) {
    return false;
  }
  return Array.isArray(value.products);
}

function formatPrice(price: number | undefined): string {
  if (price === undefined || !Number.isFinite(price)) return "Price on request";
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 2,
  }).format(price);
}

export function ProductCatalog() {
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cartMessage, setCartMessage] = useState("");
  const sentinelRef = useRef<HTMLDivElement>(null);
  const displayError = apiBase
    ? error
    : "The product catalogue is not configured yet. Please contact us for current availability.";

  useEffect(() => {
    if (!apiBase) return;

    const controller = new AbortController();
    fetch(`${apiBase}/api/store/products?sort=name`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("catalogue-unavailable");
        const payload: unknown = await response.json();
        if (!isCatalogResponse(payload)) throw new Error("catalogue-invalid");
        setProducts(payload.products);
        setNextCursor(payload.pagination?.nextCursor ?? null);
      })
      .catch((cause: unknown) => {
        if (cause instanceof DOMException && cause.name === "AbortError")
          return;
        setError(
          "We could not load the product catalogue right now. Please contact us for current availability.",
        );
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const loadMore = useCallback(async () => {
    if (!apiBase || nextCursor === null || loadingMore) return;
    setLoadingMore(true);
    setError(null);
    try {
      const url = new URL(`${apiBase}/api/store/products`);
      url.searchParams.set("sort", "name");
      url.searchParams.set("cursor", nextCursor);
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("catalogue-unavailable");
      const payload: unknown = await response.json();
      if (!isCatalogResponse(payload)) throw new Error("catalogue-invalid");
      setProducts((current) => [...current, ...payload.products]);
      setNextCursor(payload.pagination?.nextCursor ?? null);
    } catch {
      setError("More products could not be loaded. Please try again.");
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, nextCursor]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || nextCursor === null || loading || loadingMore || error)
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) void loadMore();
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [error, loadMore, loading, loadingMore, nextCursor]);

  return (
    <div aria-live="polite" className="mt-8">
      {loading && apiBase ? (
        <p
          className="text-muted border-border rounded-lg border bg-white p-6"
          role="status"
        >
          Loading products…
        </p>
      ) : null}

      {displayError ? (
        <p
          className="border-border text-muted rounded-lg border bg-white p-6 text-sm"
          role="alert"
        >
          {displayError}
        </p>
      ) : null}

      {!loading && !displayError && products.length === 0 ? (
        <p className="text-muted border-border rounded-lg border bg-white p-6">
          There are no products available to display right now. Please contact
          us for assistance.
        </p>
      ) : null}

      {products.length > 0 ? (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {products.map((product) => (
            <li key={product.id}>
              <article className="brand-card relative flex h-full flex-col">
                <Link
                  aria-label={`View details for ${product.name}`}
                  className="relative block aspect-square w-full overflow-hidden bg-white"
                  href={`/shop/product?slug=${encodeURIComponent(product.slug)}`}
                >
                  {product.imageUrl ? (
                    // The storefront uses contain so different product shapes remain fully visible.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      alt={product.name}
                      className="h-full w-full object-contain p-3"
                      decoding="async"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      src={product.imageUrl}
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="bg-bg-muted absolute inset-3 rounded"
                    />
                  )}
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-accent text-xs font-semibold tracking-[0.16em] uppercase">
                    {product.category || product.brand || "Solar product"}
                  </p>
                  <h2 className="font-display text-ink mt-2 text-lg leading-snug font-bold">
                    <Link
                      className="hover:text-accent focus-visible:outline-accent rounded-sm after:absolute after:inset-0 after:z-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      href={`/shop/product?slug=${encodeURIComponent(product.slug)}`}
                    >
                      {product.name}
                    </Link>
                  </h2>
                  <p className="text-muted mt-2 line-clamp-3 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <p className="font-display text-ink mt-4 text-xl font-bold">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-muted mt-1 text-xs">
                    {product.stockQuantity > 0
                      ? `Available · sold per ${product.baseUnitName}`
                      : "Availability confirmed on enquiry"}
                  </p>
                  <div className="relative z-10 mt-auto grid grid-cols-2 gap-2 pt-5">
                    <div className="relative z-10">
                      <ProductCartActions
                        onMessage={setCartMessage}
                        product={product}
                      />
                    </div>
                    <a
                      className="border-accent text-accent hover:bg-bg-muted inline-flex min-h-12 min-w-0 items-center justify-center rounded-md border px-2 py-3 text-sm font-semibold transition-colors sm:px-5"
                      href={`${apiBase}/product/${encodeURIComponent(product.slug)}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      ) : null}

      <p className="sr-only" aria-live="polite" role="status">
        {cartMessage}
      </p>

      {nextCursor !== null ? (
        <div className="mt-8 min-h-12 text-center" ref={sentinelRef}>
          {loadingMore ? (
            <p className="text-muted p-3 text-sm" role="status">
              Loading more products…
            </p>
          ) : null}
          {error ? (
            <button
              className="border-accent text-accent hover:bg-bg-muted inline-flex min-h-12 items-center justify-center rounded-md border px-6 py-3 text-sm font-semibold"
              onClick={() => void loadMore()}
              type="button"
            >
              Try loading more
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function ProductCartActions({
  product,
  onMessage,
}: {
  product: StoreProduct;
  onMessage: (message: string) => void;
}) {
  const { items, addToCart, setQuantity } = useCart();
  const cartItem = items.find((item) => item.id === product.id);
  const add = () => {
    addToCart({
      id: product.id,
      name: product.name,
      slug: product.slug,
      ...(product.price === undefined ? {} : { price: product.price }),
      imageUrl: product.imageUrl,
      baseUnitName: product.baseUnitName,
    });
  };

  if (!cartItem) {
    return (
      <button
        className="bg-accent hover:bg-accent-deep inline-flex min-h-12 w-full items-center justify-center rounded-md px-2 py-3 text-sm font-semibold text-white transition-colors sm:px-5"
        onClick={() => {
          add();
          onMessage(`${product.name} added to your cart.`);
        }}
        type="button"
      >
        Add to cart
      </button>
    );
  }

  return (
    <div
      aria-label={`${cartItem.quantity} ${product.name} in cart`}
      className="border-accent flex min-h-12 items-center justify-center rounded-md border-2 px-1 sm:px-2 md:justify-between"
    >
      <span className="text-accent hidden text-sm font-semibold md:inline">
        In cart
      </span>
      <div className="flex items-center gap-0.5">
        <button
          aria-label={`Remove one ${product.name} from cart`}
          className="text-accent border-border inline-flex h-10 w-10 items-center justify-center rounded-md border text-lg"
          onClick={() => {
            setQuantity(product.id, cartItem.quantity - 1);
            onMessage(
              cartItem.quantity === 1
                ? `${product.name} removed from your cart.`
                : `Quantity updated for ${product.name}.`,
            );
          }}
          type="button"
        >
          −
        </button>
        <span
          aria-label={`${cartItem.quantity} ${product.name} in cart`}
          className="text-ink min-w-4 text-center text-sm font-bold tabular-nums"
        >
          {cartItem.quantity}
        </span>
        <button
          aria-label={`Add one ${product.name} to cart`}
          className="bg-accent inline-flex h-10 w-10 items-center justify-center rounded-md text-lg text-white"
          onClick={() => {
            add();
            onMessage(`Quantity updated for ${product.name}.`);
          }}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}
