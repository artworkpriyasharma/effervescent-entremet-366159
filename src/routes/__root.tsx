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
            © 2025 Disha Soni. All rights reserved.
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
