import { HeadContent, Scripts, createRootRoute, Link, useRouterState } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Disha Soni — Brand Strategist & Digital Commerce Expert' },
      { name: 'description', content: 'Brand, Digital Commerce & AI Marketing Strategist with 11+ years building premium consumer brands. Available for senior roles in Dubai, UAE.' },
      { name: 'keywords', content: 'brand strategist Dubai, digital commerce UAE, AI marketing, Shopify expert, luxury brand marketing, marketing manager Dubai' },
    ],
  }),
  shellComponent: RootDocument,
})

function Nav() {
  const router = useRouterState()
  const path = router.location.pathname

  const links = [
    { to: '/', label: 'Home' },
    { to: '/work', label: 'Work' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(248, 244, 237, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E0DBD2',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <span
              className="font-display"
              style={{
                fontSize: '1.375rem',
                fontWeight: 500,
                color: '#18181A',
                letterSpacing: '0.01em',
              }}
            >
              Disha Soni
            </span>
            <span
              style={{
                width: '1px',
                height: '18px',
                background: '#C09A5B',
                opacity: 0.6,
              }}
            />
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#7C776F',
              }}
            >
              Brand Strategist
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
          }}
          className="hidden-mobile"
        >
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="nav-link"
              data-active={path === to ? 'true' : 'false'}
            >
              {label}
            </Link>
          ))}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              paddingLeft: '2rem',
              borderLeft: '1px solid #E0DBD2',
            }}
          >
            <span className="availability-dot" />
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#C09A5B',
              }}
            >
              Available · Dubai
            </span>
          </div>
        </nav>

        {/* Mobile nav - simplified */}
        <nav
          className="show-mobile"
          style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
        >
          {links.slice(1).map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="nav-link"
              data-active={path === to ? 'true' : 'false'}
              style={{ fontSize: '0.6875rem' }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

function Footer() {
  return (
    <footer
      style={{
        background: '#18181A',
        color: '#F8F4ED',
        padding: '3rem 2rem',
        marginTop: '0',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column' as const,
          gap: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap' as const,
            gap: '2rem',
          }}
        >
          <div>
            <p
              className="font-display"
              style={{ fontSize: '1.75rem', fontWeight: 400, marginBottom: '0.5rem' }}
            >
              Disha Soni
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(248,244,237,0.5)' }}>
              Brand · Digital Commerce · AI Marketing
            </p>
          </div>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' as const }}>
            <div>
              <p
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C09A5B',
                  marginBottom: '0.75rem',
                }}
              >
                Navigate
              </p>
              {[['/', 'Home'], ['/work', 'Work'], ['/resume', 'Resume'], ['/contact', 'Contact']].map(([to, label]) => (
                <div key={to} style={{ marginBottom: '0.4rem' }}>
                  <Link
                    to={to}
                    style={{
                      fontSize: '0.8125rem',
                      color: 'rgba(248,244,237,0.6)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>

            <div>
              <p
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C09A5B',
                  marginBottom: '0.75rem',
                }}
              >
                Contact
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(248,244,237,0.6)', marginBottom: '0.4rem' }}>
                work.dishasoni@gmail.com
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(248,244,237,0.6)', marginBottom: '0.4rem' }}>
                Mumbai, India
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(248,244,237,0.6)' }}>
                Open to Dubai, UAE
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(248,244,237,0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap' as const,
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.75rem', color: 'rgba(248,244,237,0.35)' }}>
            © 2026 Disha Soni. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="availability-dot" />
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#C09A5B',
              }}
            >
              Available for Premium Roles
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
function WhatsAppButton() {
  return (
    
      href="https://wa.me/917045719408"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        zIndex: 999,
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'scale(1.08)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
      }}
      aria-label="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 4.99L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 2c2.19 0 4.24.85 5.79 2.4a8.13 8.13 0 0 1 2.39 5.79c0 4.51-3.67 8.18-8.18 8.18-1.44 0-2.85-.38-4.09-1.09l-.29-.17-3.05.8.82-2.97-.19-.31a8.13 8.13 0 0 1-1.24-4.34C3.99 7.67 7.66 4 12.13 4h-.09z"/>
        <path d="M9.5 6.5c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62 0 1.54 1.13 3.03 1.29 3.24.16.21 2.19 3.5 5.42 4.77 2.68 1.05 3.22.84 3.8.79.58-.05 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.6-.37-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.68.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.87-1.76-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.73-.98-2.36-.26-.62-.52-.54-.71-.55h-.6z"/>
      </svg>
    </a>
  )
}
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />
        <main style={{ paddingTop: '68px' }}>
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
