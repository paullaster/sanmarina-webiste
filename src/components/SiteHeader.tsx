"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { company, navLinks, type NavItem } from "@/lib/content";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/Button";
import { useCart } from "@/components/CartProvider";

const qsellOrigin = process.env.NEXT_PUBLIC_QSELL_API_URL?.replace(/\/$/, "");

function cartPrice(price: number | undefined): string {
  if (price === undefined || !Number.isFinite(price)) return "Price on request";
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 2,
  }).format(price);
}

function DesktopNavItem({ link }: { link: NavItem }) {
  const [open, setOpen] = useState(false);
  const itemId = useId();

  if (!link.children?.length) {
    return (
      <li>
        <Link
          href={link.href}
          className="text-muted hover:text-accent focus-visible:outline-accent inline-flex min-h-11 items-center px-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {link.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="text-muted hover:text-accent focus-visible:outline-accent inline-flex min-h-11 items-center gap-1 px-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-expanded={open}
        aria-controls={`${itemId}-menu`}
        onClick={() => setOpen((value) => !value)}
      >
        {link.label}
        <span aria-hidden="true" className="text-[0.65rem]">
          ▾
        </span>
      </button>
      <ul
        id={`${itemId}-menu`}
        role="list"
        className={`border-border bg-bg-elevated absolute top-full left-0 z-50 min-w-[14rem] border py-2 shadow-sm ${open ? "block" : "hidden"}`}
      >
        <li>
          <Link
            href={link.href}
            className="text-ink hover:bg-bg-muted hover:text-accent focus-visible:outline-accent block px-4 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={() => setOpen(false)}
          >
            Overview
          </Link>
        </li>
        {link.children.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              className="text-muted hover:bg-bg-muted hover:text-accent focus-visible:outline-accent block px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function SiteHeader() {
  const { items, itemCount, removeFromCart, setQuantity, clearCart } =
    useCart();
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const cartToggleRef = useRef<HTMLButtonElement>(null);
  const cartPanelRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const checkoutHref =
    qsellOrigin === undefined || items.length === 0
      ? null
      : `${qsellOrigin}/checkout?handoff=${encodeURIComponent(
          JSON.stringify(items.map(({ id, quantity }) => ({ id, quantity }))),
        )}`;

  const closeMenu = useCallback(() => {
    setOpen(false);
    setExpanded(null);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, closeMenu]);

  useEffect(() => {
    if (!cartOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setCartOpen(false);
      cartToggleRef.current?.focus();
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      const target = event.target;
      if (
        target instanceof Node &&
        !cartPanelRef.current?.contains(target) &&
        !cartToggleRef.current?.contains(target)
      ) {
        setCartOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [cartOpen]);

  return (
    <header
      role="banner"
      className="border-border bg-bg-elevated/95 safe-px sticky top-0 z-40 border-b backdrop-blur-sm"
      style={{ boxShadow: "var(--header-shadow)" }}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-2 py-2.5 sm:gap-3 sm:py-3">
        <Link
          href="/"
          className="focus-visible:outline-accent min-h-12 min-w-0 shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label={`${company.publicName} — home`}
        >
          <BrandLogo size="header" priority />
        </Link>

        <nav className="hidden items-center xl:flex" aria-label="Primary">
          <ul className="flex items-center gap-0.5" role="list">
            {navLinks.map((link) => (
              <DesktopNavItem key={link.href + link.label} link={link} />
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <button
            ref={cartToggleRef}
            aria-expanded={cartOpen}
            aria-haspopup="dialog"
            aria-label={`Shopping cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
            className="border-accent text-accent hover:bg-bg-muted focus-visible:outline-accent relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-11 sm:w-auto sm:gap-2 sm:px-3"
            onClick={() => setCartOpen((value) => !value)}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 7H6"
              />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            <span className="bg-accent absolute -top-1 -right-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full px-1 text-[0.65rem] leading-none text-white tabular-nums sm:static sm:min-h-6 sm:min-w-6 sm:px-1.5 sm:py-0.5 sm:text-xs">
              {itemCount}
            </span>
          </button>
          <Button
            href="/contact"
            variant="secondary"
            className="!hidden !min-h-10 !px-3 !py-2 !text-xs tracking-wide uppercase lg:!inline-flex"
            aria-label="Request a site assessment"
          >
            Request a site assessment
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="border-border text-ink focus-visible:outline-accent ml-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-haspopup="dialog"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span
                className={`bg-ink block h-0.5 w-5 transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`bg-ink block h-0.5 w-5 transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`bg-ink block h-0.5 w-5 transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        {cartOpen ? (
          <div
            aria-label="Shopping cart"
            className="border-border bg-bg-elevated absolute top-full right-0 z-50 mt-2 max-h-[min(75vh,38rem)] w-[min(92vw,25rem)] overflow-y-auto rounded-lg border shadow-lg"
            ref={cartPanelRef}
            role="dialog"
          >
            <div className="border-border flex items-center justify-between border-b p-4">
              <div>
                <h2 className="font-display text-ink text-lg font-bold">
                  Your cart
                </h2>
                <p className="text-muted text-xs" aria-live="polite">
                  {itemCount} {itemCount === 1 ? "item" : "items"}
                </p>
              </div>
              <button
                aria-label="Close cart"
                className="text-muted hover:text-ink border-border inline-flex min-h-10 min-w-10 items-center justify-center rounded-md border text-xl"
                onClick={() => setCartOpen(false)}
                type="button"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {items.length === 0 ? (
              <p className="text-muted p-5 text-sm">
                Your cart is empty. Add products from Our Shop to get started.
              </p>
            ) : (
              <>
                <ul className="divide-border divide-y" role="list">
                  {items.map((item) => (
                    <li className="flex gap-3 p-4" key={item.id}>
                      {item.imageUrl ? (
                        // Product image URLs come from the public catalogue feed.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          alt=""
                          className="bg-bg-muted h-16 w-16 rounded object-cover"
                          loading="lazy"
                          src={item.imageUrl}
                        />
                      ) : null}
                      <div className="min-w-0 flex-1">
                        <p className="text-ink line-clamp-2 text-sm font-semibold">
                          {item.name}
                        </p>
                        <p className="text-muted mt-1 text-xs">
                          {cartPrice(item.price)} / {item.baseUnitName}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            aria-label={`Decrease ${item.name} quantity`}
                            className="border-border inline-flex h-8 w-8 items-center justify-center rounded border text-base"
                            onClick={() =>
                              setQuantity(item.id, item.quantity - 1)
                            }
                            type="button"
                          >
                            −
                          </button>
                          <span
                            aria-label={`Quantity ${item.quantity}`}
                            className="min-w-6 text-center text-sm tabular-nums"
                          >
                            {item.quantity}
                          </span>
                          <button
                            aria-label={`Increase ${item.name} quantity`}
                            className="border-border inline-flex h-8 w-8 items-center justify-center rounded border text-base"
                            onClick={() =>
                              setQuantity(item.id, item.quantity + 1)
                            }
                            type="button"
                          >
                            +
                          </button>
                          <button
                            className="text-accent ml-auto min-h-8 px-2 text-xs font-semibold underline underline-offset-2"
                            onClick={() => removeFromCart(item.id)}
                            type="button"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-border flex items-center justify-between border-t p-4">
                  <button
                    className="text-muted text-xs font-semibold underline underline-offset-2"
                    onClick={clearCart}
                    type="button"
                  >
                    Clear cart
                  </button>
                  {checkoutHref === null ? (
                    <p className="text-muted max-w-40 text-right text-xs">
                      Checkout is temporarily unavailable.
                    </p>
                  ) : (
                    <a
                      className="bg-accent hover:bg-accent-deep inline-flex min-h-11 items-center justify-center rounded-md px-4 text-sm font-semibold text-white"
                      href={checkoutHref}
                      onClick={() => {
                        clearCart();
                        setCartOpen(false);
                      }}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Proceed to checkout
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        ) : null}
      </div>

      <div
        className={`fixed inset-0 z-30 bg-[rgba(26,35,48,0.4)] xl:hidden ${open ? "block" : "hidden"}`}
        aria-hidden={!open}
        onClick={closeMenu}
      />

      <nav
        ref={panelRef}
        id={menuId}
        className={`border-border bg-bg-elevated absolute inset-x-0 top-full z-40 max-h-[min(80vh,36rem)] overflow-y-auto border-b xl:hidden ${open ? "block" : "hidden"}`}
        aria-label="Mobile primary"
        aria-hidden={!open}
        role={open ? "dialog" : undefined}
        aria-modal={open || undefined}
        aria-labelledby={open ? `${menuId}-title` : undefined}
      >
        <p id={`${menuId}-title`} className="sr-only">
          Site navigation
        </p>
        <ul
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
          role="list"
        >
          {navLinks.map((link, index) => (
            <li key={link.href + link.label}>
              {link.children?.length ? (
                <div>
                  <button
                    type="button"
                    className="text-ink hover:bg-bg-muted focus-visible:outline-accent flex min-h-12 w-full items-center justify-between rounded-sm px-3 py-3 text-left text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    aria-expanded={expanded === link.label}
                    onClick={() =>
                      setExpanded((value) =>
                        value === link.label ? null : link.label,
                      )
                    }
                  >
                    {link.label}
                    <span aria-hidden="true">▾</span>
                  </button>
                  {expanded === link.label ? (
                    <ul
                      className="border-border mb-2 ml-3 border-l pl-3"
                      role="list"
                    >
                      <li>
                        <Link
                          ref={index === 0 ? firstLinkRef : undefined}
                          href={link.href}
                          className="text-ink hover:text-accent flex min-h-10 items-center text-sm font-medium"
                          onClick={closeMenu}
                        >
                          Overview
                        </Link>
                      </li>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="text-muted hover:text-accent flex min-h-10 items-center text-sm"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : (
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  className="text-ink hover:bg-bg-muted focus-visible:outline-accent flex min-h-12 items-center rounded-sm px-3 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li className="pt-2">
            <Button
              href="/contact"
              className="!min-h-12 w-full"
              onClick={closeMenu}
            >
              Request a site assessment
            </Button>
          </li>
        </ul>
      </nav>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {open ? "Navigation menu opened" : "Navigation menu closed"}
      </div>
    </header>
  );
}
