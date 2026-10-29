"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/CartProvider";
import type { StoreProduct } from "@/components/ProductCatalog";

const apiBase = process.env.NEXT_PUBLIC_QSELL_API_URL?.replace(/\/$/, "");

function isProduct(value: unknown): value is StoreProduct {
  if (typeof value !== "object" || value === null) return false;
  return (
    "id" in value &&
    typeof value.id === "string" &&
    "name" in value &&
    typeof value.name === "string" &&
    "slug" in value &&
    typeof value.slug === "string" &&
    "description" in value &&
    typeof value.description === "string" &&
    "imageUrl" in value &&
    typeof value.imageUrl === "string" &&
    "stockQuantity" in value &&
    typeof value.stockQuantity === "number" &&
    "baseUnitName" in value &&
    typeof value.baseUnitName === "string"
  );
}

function priceText(price: number | undefined): string {
  if (price === undefined || !Number.isFinite(price)) return "Price on request";
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 2,
  }).format(price);
}

export function ShopProductDetails() {
  const [product, setProduct] = useState<StoreProduct | null>(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { items, addToCart, setQuantity } = useCart();
  const cartItem =
    product === null ? undefined : items.find((item) => item.id === product.id);

  useEffect(() => {
    const controller = new AbortController();
    const loadProduct = async () => {
      await Promise.resolve();
      if (controller.signal.aborted) return;
      if (!apiBase) {
        setError(
          "Product details are not configured yet. Please return to Our Shop or contact us.",
        );
        setLoading(false);
        return;
      }

      const slug = new URLSearchParams(window.location.search).get("slug");
      if (slug === null || slug.length === 0 || slug.length > 160) {
        setError("We could not find that product. Please return to Our Shop.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${apiBase}/api/store/products/${encodeURIComponent(slug)}`,
          {
            signal: controller.signal,
            headers: { Accept: "application/json" },
          },
        );
        if (response.status === 404) throw new Error("product-not-found");
        if (!response.ok) throw new Error("product-unavailable");
        const payload: unknown = await response.json();
        if (!isProduct(payload)) throw new Error("product-invalid");
        setProduct(payload);
        setImage(payload.imageUrl);
      } catch (cause: unknown) {
        if (cause instanceof DOMException && cause.name === "AbortError")
          return;
        setError(
          cause instanceof Error && cause.message === "product-not-found"
            ? "This product is no longer available. Please browse Our Shop for current products."
            : "We could not load this product right now. Please try again.",
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    void loadProduct();

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <p
        className="text-muted border-border rounded-lg border bg-white p-6"
        role="status"
      >
        Loading product details…
      </p>
    );
  }

  if (error !== null || product === null) {
    return (
      <div className="space-y-4" role="alert">
        <h1
          className="font-display text-ink text-2xl font-bold"
          id="product-details-title"
        >
          Product details
        </h1>
        <p className="text-muted">
          {error ?? "Product details are unavailable."}
        </p>
        <Link
          className="text-accent inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
          href="/shop"
        >
          Return to Our Shop
        </Link>
      </div>
    );
  }

  const images = [product.imageUrl, ...(product.additionalImages ?? [])].filter(
    (url) => url.trim() !== "",
  );
  const add = () =>
    addToCart({
      id: product.id,
      name: product.name,
      slug: product.slug,
      ...(product.price === undefined ? {} : { price: product.price }),
      imageUrl: product.imageUrl,
      baseUnitName: product.baseUnitName,
    });

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-3">
        <div className="border-border relative aspect-square overflow-hidden rounded-lg border bg-white">
          {image === "" ? (
            <div
              aria-hidden="true"
              className="bg-bg-muted absolute inset-3 rounded"
            />
          ) : (
            // Match the catalogue cards and storefront gallery: contain the image instead of cropping it.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={product.name}
              className="h-full w-full object-contain p-3"
              src={image}
            />
          )}
        </div>
        {images.length > 1 ? (
          <ul
            aria-label={`Pictures of ${product.name}`}
            className="flex flex-wrap gap-2"
            role="list"
          >
            {images.map((url, index) => (
              <li key={`${url}-${index}`}>
                <button
                  aria-label={`Show product picture ${index + 1}`}
                  aria-pressed={image === url}
                  className={`relative h-16 w-16 overflow-hidden rounded border-2 bg-white ${image === url ? "border-accent" : "border-border"}`}
                  onClick={() => setImage(url)}
                  type="button"
                >
                  {/* Gallery thumbnails also preserve the complete product image. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="h-full w-full object-contain p-1"
                    loading="lazy"
                    src={url}
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="flex flex-col">
        <p className="font-display text-accent text-xs font-semibold tracking-[0.16em] uppercase">
          {product.category || product.brand || "Product"}
        </p>
        <h1
          className="font-display text-ink mt-2 text-3xl font-bold tracking-tight"
          id="product-details-title"
        >
          {product.name}
        </h1>
        {product.brand ? (
          <p className="text-muted mt-2">Brand: {product.brand}</p>
        ) : null}
        <p className="font-display text-ink mt-5 text-2xl font-bold">
          {priceText(product.price)}
        </p>
        <p className="text-muted mt-2 text-sm">
          {product.stockQuantity > 0
            ? `Available · sold per ${product.baseUnitName}`
            : "Availability confirmed on enquiry"}
        </p>
        <p className="text-ink mt-6 leading-relaxed whitespace-pre-line">
          {product.description}
        </p>

        {product.specifications && product.specifications.length > 0 ? (
          <section
            aria-labelledby="product-specifications"
            className="border-border mt-7 border-t pt-5"
          >
            <h2
              className="font-display text-ink text-lg font-bold"
              id="product-specifications"
            >
              Specifications
            </h2>
            <dl className="divide-border mt-3 divide-y">
              {product.specifications.map((specification) => (
                <div
                  className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-4 py-3 text-sm"
                  key={specification.key}
                >
                  <dt className="text-muted">{specification.key}</dt>
                  <dd className="text-ink font-medium">
                    {specification.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {cartItem ? (
            <div className="border-accent flex min-h-12 items-center justify-between rounded-md border-2 px-3">
              <span className="text-accent text-sm font-semibold">In cart</span>
              <div className="flex items-center gap-3">
                <button
                  aria-label={`Remove one ${product.name} from cart`}
                  className="border-border text-accent inline-flex h-9 w-9 items-center justify-center rounded-md border text-lg"
                  onClick={() => setQuantity(product.id, cartItem.quantity - 1)}
                  type="button"
                >
                  −
                </button>
                <span
                  aria-label={`${cartItem.quantity} in cart`}
                  className="text-ink min-w-5 text-center text-sm font-bold tabular-nums"
                >
                  {cartItem.quantity}
                </span>
                <button
                  aria-label={`Add one ${product.name} to cart`}
                  className="bg-accent inline-flex h-9 w-9 items-center justify-center rounded-md text-lg text-white"
                  onClick={add}
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          ) : (
            <button
              className="bg-accent hover:bg-accent-deep inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white"
              onClick={add}
              type="button"
            >
              Add to cart
            </button>
          )}
          <a
            className="border-accent text-accent hover:bg-bg-muted inline-flex min-h-12 items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold"
            href={`${apiBase}/product/${encodeURIComponent(product.slug)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Buy now
          </a>
        </div>
        <Link
          className="text-accent mt-6 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4"
          href="/shop"
        >
          ← Back to Our Shop
        </Link>
      </div>
    </div>
  );
}
