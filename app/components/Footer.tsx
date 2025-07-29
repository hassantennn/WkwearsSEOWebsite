import {Suspense} from 'react';
import {Await, NavLink} from 'react-router';
import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer({
  footer: footerPromise,
  header,
  publicStoreDomain,
}: FooterProps) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => {
          const logoUrl = header.shop.brand?.logo?.image?.url;
          return (
            <footer className="footer">
              <div className="footer-inner">
                <div className="footer-col footer-quote-block">
                  {logoUrl && (
                    <img src={logoUrl} alt={header.shop.name} className="footer-logo" />
                  )}
                  <p className="footer-description">
                    Premium modest wear crafted with care. Discover elegant designs
                    that celebrate your style.
                  </p>
                </div>
                <div className="footer-col">
                  <h3>Quick Links</h3>
                  <ul className="footer-links">
                    <li>
                      <NavLink prefetch="intent" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <a href="#header-search">Search</a>
                    </li>
                    <li>
                      <NavLink prefetch="intent" to="/collections/all">
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink prefetch="intent" to="/blogs">
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink prefetch="intent" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink prefetch="intent" to="/account">
                        Account
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h3>Customer Service</h3>
                  {footer?.menu && header.shop.primaryDomain?.url && (
                    <FooterMenu
                      menu={footer.menu}
                      primaryDomainUrl={header.shop.primaryDomain.url}
                      publicStoreDomain={publicStoreDomain}
                    />
                  )}
                </div>
                <div className="footer-col">
                  <h3>Connect</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@wkwears.com">info@wkwears.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom">
                © {new Date().getFullYear()} {header.shop.name}. All rights reserved.
              </div>
            </footer>
          );
        }}
      </Await>
    </Suspense>
  );
}

function FooterMenu({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
}: {
  menu: FooterQuery['menu'];
  primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: string;
}) {
  return (
    <ul className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return (
          <li key={item.id}>
            {isExternal ? (
              <a href={url} rel="noopener noreferrer" target="_blank">
                {item.title}
              </a>
            ) : (
              <NavLink
                end
                prefetch="intent"
                style={activeLinkStyle}
                to={url}
              >
                {item.title}
              </NavLink>
            )}
          </li>
        );
      })}
    </ul>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : '#4b3621',
  };
}
