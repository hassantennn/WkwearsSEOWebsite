// app/components/Footer.tsx
import { Suspense } from 'react';
import { Await, NavLink } from 'react-router';
import type { FooterQuery, HeaderQuery } from 'storefrontapi.generated';

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
            <footer className="footer bg-[#f5e9d7] py-10">
              <div className="footer-inner max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 px-6">
                {/* Column 1 */}
                <div className="footer-col border border-[#D3C0B0]/30 p-6 rounded-lg text-center">
                  {logoUrl && (
                    <img
                      src={logoUrl}
                      alt={header.shop.name}
                      className="footer-logo mb-4 mx-auto"
                    />
                  )}
                  <p className="footer-description text-[#4b3621] leading-relaxed">
                    Premium modest wear crafted with care. Discover elegant designs that celebrate your style.
                  </p>
                </div>

                {/* Column 2 */}
                <div className="footer-col border border-[#D3C0B0]/30 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold mb-6 text-[#4b3621]">Quick Links</h3>
                  <ul className="footer-links space-y-2 text-[#4b3621]">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><a href="#header-search">Search</a></li>
                    <li><NavLink to="/collections/all">Shop</NavLink></li>
                    <li><NavLink to="/blogs">Blog</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/account">Account</NavLink></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="footer-col border border-[#D3C0B0]/30 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold mb-6 text-[#4b3621]">Customer Service</h3>
                  {footer?.menu && header.shop.primaryDomain?.url && (
                    <FooterMenu
                      menu={footer.menu}
                      primaryDomainUrl={header.shop.primaryDomain.url}
                      publicStoreDomain={publicStoreDomain}
                    />
                  )}
                </div>

                {/* Column 4 */}
                <div className="footer-col border border-[#D3C0B0]/30 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold mb-6 text-[#4b3621]">Connect</h3>
                  <ul className="footer-links space-y-2 text-[#4b3621]">
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

              <div className="footer-bottom text-center mt-8 text-[#4b3621]">
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
  const items = menu?.items ?? FALLBACK_FOOTER_MENU.items;
  return (
    <ul className="footer-menu space-y-2" role="navigation">
      {items.map((item) => {
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
              <a href={url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            ) : (
              <NavLink to={url} style={activeLinkStyle}>
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
    { id: '1', title: 'Privacy Policy', url: '/policies/privacy-policy' },
    { id: '2', title: 'Refund Policy', url: '/policies/refund-policy' },
    { id: '3', title: 'Shipping Policy', url: '/policies/shipping-policy' },
    { id: '4', title: 'Terms of Service', url: '/policies/terms-of-service' },
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
