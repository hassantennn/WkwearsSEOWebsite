import { Suspense } from 'react';
import { Await, NavLink, useAsyncValue } from 'react-router';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import type { HeaderQuery, CartApiQueryFragment } from 'storefrontapi.generated';
import { useAside } from '~/components/Aside';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const { shop, menu } = header;

  const logoUrl = 'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/logo-removebg-preview-2.png?v=1753421784';

  return (
    <>
      <header className="header">
        <form id="header-search" className="search-form" role="search" aria-label="Search entire store">
          <input
            type="search"
            placeholder="Search entire store here..."
            aria-label="Search entire store"
            className="search-input"
            spellCheck={false}
            autoComplete="off"
          />
          <button type="submit" className="search-button" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>

        <a href="/" className="logo-link" aria-label="Home">
          <img src={logoUrl} alt={shop.name || 'Logo'} className="logo" />
        </a>

        <nav className="header-ctas" role="navigation">
          <NavLink
            to="/account"
            prefetch="intent"
            className={({ isActive }) => (isActive ? "account-link active" : "account-link")}
          >
            <Suspense fallback="Account">
              <Await resolve={isLoggedIn} errorElement="Account">
                {(loggedIn) => (loggedIn ? 'Account' : 'Account')}
              </Await>
            </Suspense>
          </NavLink>
          <CartToggle cart={cart} />
        </nav>
      </header>

      <div className="header-menu-block">
        <HeaderMenu
          menu={menu}
          viewport="desktop"
          primaryDomainUrl={header.shop.primaryDomain.url}
          publicStoreDomain={publicStoreDomain}
        />
      </div>

      <style>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 0;
          border-bottom: 1px solid #d9c5b2;
          background: linear-gradient(to right, #faf9f5, #fff);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          font-family: 'Playfair Display', serif;
        }
        .search-form {
          display: flex;
          align-items: center;
          max-width: 320px;
          flex-grow: 1;
          margin-right: auto;
          border: 1px solid #d9c5b2;
          border-radius: 40px;
          padding: 0 0.75rem;
          background: #fff;
          height: 36px;
          margin-left: 1rem;
        }
        .search-input {
          flex-grow: 1;
          border: none;
          outline: none;
          padding: 0 1rem;
          font-style: italic;
          font-size: 0.9rem;
          color: #555;
          background: transparent;
          height: 100%;
        }
        .search-button {
          background: transparent;
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-link {
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          flex-grow: 0;
          margin: 0 auto;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .logo {
          max-width: 100%;
          max-height: 80px;
          height: auto;
          width: auto;
          cursor: pointer;
        }
        .header-ctas {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-right: 1rem;
          font-weight: 500;
          color: #333;
        }
        .account-link {
          color: inherit;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          text-transform: uppercase;
          font-size: 0.85rem;
        }
        .account-link:hover {
          text-decoration: none !important;
          cursor: pointer;
        }
        .account-link.active {
          font-weight: 700;
          border-bottom: 2px solid #d4af37;
        }
        .header-menu-block {
          border-top: 1px solid #d9c5b2;
          background: linear-gradient(to right, #faf9f5, #fff);
          padding: 0.75rem 0;
          display: flex;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .header-menu-desktop {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .header-menu-item {
          font-weight: 500;
          color: black;
          text-decoration: none;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          font-size: 0.85rem;
          text-transform: uppercase;
          border-bottom: 2px solid transparent;
          transition: none;
        }
        .header-menu-item:hover {
          color: black;
          cursor: pointer;
          text-decoration: none !important;
          border-bottom-color: transparent !important;
        }
        .header-menu-item.active {
          border-bottom-color: #d4af37;
          font-weight: 700;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .cart-count {
          background: red;
          color: white;
          font-weight: bold;
          font-size: 0.75rem;
          padding: 2px 6px;
          border-radius: 50%;
          margin-left: 4px;
        }
        .cart-link svg {
          display: block;
          stroke: #666;
          transition: stroke 0.2s ease;
          width: 20px;
          height: 20px;
        }
        .cart-link:hover svg {
          stroke: #0071e3;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const className = `header-menu-${viewport}`;
  const { close } = useAside();

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          className={({ isActive }) => (isActive ? "header-menu-item active" : "header-menu-item")}
          to="/"
        >
          Home
        </NavLink>
      )}
      {menu?.items.map((item) => {
        if (!item.url) return null;

        let url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;

        // Rewrite the Shopify contact page to the custom contact route
        if (/\/pages\/contact\/?$/.test(url)) {
          url = url.replace(/\/pages\/contact\/?$/, '/contact');
        }

        return (
          <NavLink
            className={({ isActive }) => (isActive ? "header-menu-item active" : "header-menu-item")}
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

function CartToggle({ cart }: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

function CartBadge({ count }: { count: number | null }) {
  const { open } = useAside();
  const { publish, shop, cart, prevCart } = useAnalytics();

  const showCount = typeof count === 'number' && count > 0;

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
      aria-label={`Cart with ${count ?? 0} items`}
      className="cart-link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {showCount && <span className="cart-count">{count}</span>}
    </a>
  );
}
