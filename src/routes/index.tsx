import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const highlights = [
  { number: '11+', label: 'Years of Experience', sub: 'Brand & Digital Commerce' },
  { number: '50K+', label: 'SKUs Managed', sub: 'Shopify Ecosystems' },
  { number: '700K', label: 'Daily Visitors', sub: 'Peak Platform Traffic' },
  { number: 'Multiple Seasonal', label: 'Brand Engagements', sub: 'Consulting & Full-Time' },
  { number: '12-15', label: 'Team Members Led', sub: 'Cross-functional Teams' },
  { number: '25+', label: 'Customer Journeys Optimised', sub: 'UX, Messaging & Funnel Gaps' },
]

const featuredWork = [
  {
    brand: 'Zest Mélange',
    category: 'Fashion · Lifestyle',
    service: 'Shopify Ecosystem · Campaign Leadership · SEO',
    result: 'Managed a 50,000+ SKU Shopify store supporting up to 700K daily visitors with full merchandising and seasonal campaign execution.',
  },
  {
    brand: 'Baaya Design',
    category: 'Luxury Home Décor',
    service: 'Brand Strategy · Annual Marketing Calendar · PR',
    result: 'Owned the complete marketing calendar and brand direction for a premium home décor brand over 4+ years.',
  },
  {
    brand: 'Armaf',
    category: 'International Fragrance',
    service: 'Campaign Strategy · Product Storytelling · Launch',
    result: 'Led campaign strategy and creative concepts for premium fragrance launches with focus on international, elevated brand positioning.',
  },
  {
    brand: 'Saturday Club',
    category: 'F&B · Patisserie',
    service: 'Brand Identity · Repositioning · Tone of Voice',
    result: 'Led a full brand reposition — shifting visual identity, messaging, and customer experience to a distinct, lively expression.',
  },
]

const expertise = [
  { area: 'Brand Strategy', items: ['Brand Positioning', 'Go-to-Market', 'Storytelling', 'Campaign Strategy'] },
  { area: 'Digital Commerce', items: ['Shopify Ecosystems', 'Shopify SEO', 'Google Merchant Center', 'Customer Journey'] },
  { area: 'AI & Operations', items: ['ChatGPT · Claude · Gemini', 'AI-Powered Workflows', 'Canva AI · Gamma', 'Content Automation'] },
  { area: 'Leadership', items: ['Founder Collaboration', 'Cross-functional Teams', 'Marketing Calendar', 'Stakeholder Management'] },
]

export default function Home() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{
          background: '#18181A',
          minHeight: 'calc(100vh - 68px)',
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'flex-end',
          padding: '0 2rem 5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background texture lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 79px,
              rgba(192,154,91,0.04) 80px
            )`,
          }}
        />

        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            border: '1px solid rgba(192,154,91,0.12)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '12%',
            right: '6.5%',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            border: '1px solid rgba(192,154,91,0.07)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <p
            className="eyebrow anim-fade-up"
            style={{ color: '#C09A5B', marginBottom: '2rem' }}
          >
            Brand · Digital Commerce · AI Marketing
          </p>

          <h1
            className="display-xl anim-fade-up anim-delay-1"
            style={{ color: '#F8F4ED', marginBottom: '2.5rem' }}
          >
            Disha<br />Soni
          </h1>

          <div
            className="anim-fade-up anim-delay-2"
            style={{
              width: '80px',
              height: '1px',
              background: '#C09A5B',
              marginBottom: '2.5rem',
            }}
          />

          <p
            className="anim-fade-up anim-delay-3"
            style={{
              maxWidth: '580px',
              fontSize: 'clamp(1.0625rem, 1.9vw, 1.25rem)',
              color: '#C09A5B',
              fontStyle: 'italic' as const,
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}
          >
            I turn gaps into actionable insight — spotting what isn't working and building the fix, from strategy through execution.
          </p>

          <p
  className="anim-fade-up anim-delay-3"
  style={{
    maxWidth: '580px',
    fontSize: 'clamp(1rem, 1.8vw, 1.1875rem)',
    color: 'rgba(248,244,237,0.65)',
    lineHeight: 1.75,
    marginBottom: '3rem',
  }}
>
  11+ years partnering with founders and leadership teams to build
  premium consumer brands across fashion, jewellery, luxury home
  décor, beauty, hospitality, kids' wear, organic cosmetics, fragrance
  and D2C commerce — with AI-enabled marketing operations woven into
  every engagement. Dubai-ready.
</p>

          <div
            className="anim-fade-up anim-delay-4"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}
          >
            <Link to="/work" className="btn-dark">
              View Work
            </Link>
            <Link to="/resume" className="btn-ghost-light">
              Full Resume
            </Link>
            <a href="mailto:work.dishasoni@gmail.com" className="btn-ghost-light">
              Get in Touch
            </a>
          </div>

          <div
            className="anim-fade-up anim-delay-5"
            style={{
              marginTop: '4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap' as const,
            }}
          >
            <div style={{ width: '40px', height: '1px', background: 'rgba(192,154,91,0.4)' }} />
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(248,244,237,0.35)',
              }}
            >
              Mumbai, India
            </span>
            <span style={{ color: 'rgba(192,154,91,0.4)', fontSize: '0.75rem' }}>→</span>
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C09A5B',
              }}
            >
              Open to Dubai, UAE
            </span>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
                Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── How I Work ────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', background: '#F8F4ED' }}>
        <div className="reveal" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How I Work</p>
          <h2
            className="display-md font-display"
            style={{ color: '#18181A', marginBottom: '4rem', maxWidth: '560px' }}
          >
            Turning gaps into growth
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2px',
              background: '#E0DBD2',
            }}
            className="approach-grid"
          >
            {[
              {
                step: '01',
                title: 'Spot the Gap',
                desc: 'I look past the obvious metrics to find where a brand\u2019s story, system, or customer journey is quietly breaking down.',
              },
              {
                step: '02',
                title: 'Shape the Insight',
                desc: 'Every gap becomes a clear, actionable point of view \u2014 grounded in what\u2019s actually happening, not guesswork.',
              },
              {
                step: '03',
                title: 'Drive the Action',
                desc: 'From strategy to execution, I stay hands-on until the fix is live, measurable, and owned by the team.',
              },
            ].map((item) => (
              <div key={item.step} style={{ background: '#F8F4ED', padding: '2.5rem 2rem' }}>
                <p
                  className="font-display"
                  style={{ fontSize: '1.5rem', color: '#C09A5B', marginBottom: '1.25rem' }}
                >
                  {item.step}
                </p>
                <h3
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: '#18181A',
                    marginBottom: '0.85rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#7C776F', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            .approach-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Stats ──────────────────────────────────────── */}
      <section style={{ background: '#F0EBE0', borderBottom: '1px solid #E0DBD2' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
          className="stats-grid reveal"
        >
          {highlights.map((stat, i) => (
            <div
              key={stat.number}
              style={{
                padding: '2.5rem 2rem',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid #E0DBD2' : 'none',
                borderBottom: i < 3 ? '1px solid #E0DBD2' : 'none',
              }}
              className="stat-item"
            >
              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 300,
                  color: '#18181A',
                  lineHeight: 1,
                  marginBottom: '0.35rem',
                }}
              >
                {stat.number}
              </p>
              <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#18181A', marginBottom: '0.2rem' }}>
                {stat.label}
              </p>
              <p style={{ fontSize: '0.75rem', color: '#7C776F' }}>{stat.sub}</p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 767px) {
            .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
            .stat-item { border-bottom: 1px solid #E0DBD2; }
          }
        `}</style>
      </section>

      {/* ── Featured Work ────────────────────────────── */}
      <section style={{ padding: '7rem 2rem' }}>
        <div className="reveal" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '4rem',
              flexWrap: 'wrap' as const,
              gap: '1.5rem',
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Selected Work</p>
              <h2
                className="display-md font-display"
                style={{ color: '#18181A', maxWidth: '480px' }}
              >
                Premium brands shaped across D2C & luxury verticals
              </h2>
            </div>
            <Link to="/work" className="btn-ghost">
              All Case Studies →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5px',
              background: '#E0DBD2',
            }}
            className="work-grid"
          >
            {featuredWork.map((item) => (
              <div
                key={item.brand}
                className="card-lift"
                style={{ background: '#F8F4ED', padding: '2.5rem' }}
              >
                <div style={{ marginBottom: '1.75rem' }}>
                  <span
                    className="tag tag-gold"
                    style={{ marginBottom: '0.75rem', display: 'inline-block' }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="font-display"
                    style={{ fontSize: '1.875rem', fontWeight: 500, color: '#18181A', lineHeight: 1.1 }}
                  >
                    {item.brand}
                  </h3>
                </div>
                <div style={{ width: '32px', height: '1px', background: '#C09A5B', marginBottom: '1.5rem' }} />
                <p
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#7C776F',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.service}
                </p>
                <p style={{ fontSize: '0.9375rem', color: '#7C776F', lineHeight: 1.7 }}>
                  {item.result}
                </p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 767px) {
              .work-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ── Core Expertise ──────────────────────────── */}
      <section
        style={{
          background: '#18181A',
          padding: '7rem 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '-120px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            border: '1px solid rgba(192,154,91,0.08)',
            pointerEvents: 'none',
          }}
        />
        <div className="reveal" style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Expertise</p>
          <h2
            className="display-md font-display"
            style={{ color: '#F8F4ED', marginBottom: '4rem', maxWidth: '520px' }}
          >
            The strategic toolkit behind premium brand growth
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2px',
              background: 'rgba(192,154,91,0.12)',
            }}
            className="expertise-grid"
          >
            {expertise.map((area) => (
              <div
                key={area.area}
                style={{
                  background: '#18181A',
                  padding: '2rem 1.75rem',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = '#2C2C2E'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = '#18181A'
                }}
              >
                <div
                  style={{ width: '28px', height: '1px', background: '#C09A5B', marginBottom: '1.25rem' }}
                />
                <h3
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#F8F4ED',
                    marginBottom: '1.25rem',
                  }}
                >
                  {area.area}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {area.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(248,244,237,0.5)',
                        marginBottom: '0.5rem',
                        paddingLeft: '1rem',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: '#C09A5B',
                          fontSize: '0.6875rem',
                        }}
                      >
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 1023px) {
              .expertise-grid { grid-template-columns: repeat(2,1fr) !important; }
            }
            @media (max-width: 639px) {
              .expertise-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ── Industries ────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid #E0DBD2' }}>
        <div
          className="reveal"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            gap: '4rem',
            alignItems: 'center',
            flexWrap: 'wrap' as const,
          }}
        >
          <div style={{ flex: '0 0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Industries</p>
            <h2
              className="display-md font-display"
              style={{ maxWidth: '280px', color: '#18181A' }}
            >
              Vertical depth across premium markets
            </h2>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexWrap: 'wrap' as const,
              gap: '0.625rem',
              minWidth: '280px',
            }}
          >
            {[
  'Fashion', 'Responsible Fashion', 'Luxury Home Décor',
  'Jewellery', 'Beauty', 'Organic Cosmetics', 'Hospitality',
  "Kids' Wear", 'Fragrance', 'F&B / Patisserie',
  'Lifestyle', 'D2C Commerce', 'Advertising',
].map((industry) => (
              <span
                key={industry}
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.125rem',
                  fontSize: '0.8125rem',
                  color: '#18181A',
                  border: '1px solid #E0DBD2',
                  background: '#F8F4ED',
                  transition: 'border-color 0.2s, background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#C09A5B'
                  el.style.background = 'rgba(192,154,91,0.05)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#E0DBD2'
                  el.style.background = '#F8F4ED'
                }}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Executive Profile ────────────────────── */}
      <section style={{ padding: '7rem 2rem', background: '#F0EBE0' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'center',
          }}
          className="profile-grid reveal"
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Executive Profile</p>
            <h2
              className="display-md font-display"
              style={{ color: '#18181A', marginBottom: '2rem' }}
            >
              Strategist. Storyteller. Brand Builder.
            </h2>
            <div style={{ width: '48px', height: '1px', background: '#C09A5B', marginBottom: '2rem' }} />
            <p style={{ fontSize: '1rem', color: '#7C776F', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Brand, Digital Commerce & AI Marketing Strategist with 11+ years of
              experience partnering with founders and leadership teams to build premium
              consumer brands across fashion, jewellery, luxury home décor, fragrance
              and D2C commerce.
            </p>
            <p style={{ fontSize: '1rem', color: '#7C776F', lineHeight: 1.8, marginBottom: '2rem' }}>
              Equally comfortable owning a brand's marketing calendar end-to-end or
              collaborating cross-functionally with designers, developers and founders
              to bring premium positioning to life. Actively bringing AI-powered
              workflows into day-to-day marketing operations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
              <Link to="/resume" className="btn-dark">View Full Resume</Link>
              <Link to="/contact" className="btn-ghost">Let's Talk</Link>
            </div>
          </div>

          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                background: '#C8C2B8',
              }}
            >
              {[
                { label: 'Nationality', value: 'Indian' },
                { label: 'Visa Status', value: 'Employment Visa Required' },
                { label: 'Languages', value: 'English · Hindi · Marathi' },
                { label: 'Location', value: 'Mumbai → Dubai' },
               { label: 'Current Role', value: 'Independent Consultant' },
{ label: 'Phone', value: '+91-7045719408' },
{ label: 'Availability', value: '45 Days' },
              ].map((item) => (
                <div key={item.label} style={{ background: '#F8F4ED', padding: '1.5rem' }}>
                  <p
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#C09A5B',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#18181A', fontWeight: 500 }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 1023px) {
            .profile-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </section>

      {/* ── CTA Banner ──────────────────────────── */}
      <section
        className="reveal"
        style={{
          background: '#C09A5B',
          padding: '5rem 2rem',
          textAlign: 'center' as const,
        }}
      >
        <p
          className="font-display"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            color: '#18181A',
            marginBottom: '0.75rem',
          }}
        >
          Ready to build your next premium brand?
        </p>
        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(24,24,26,0.65)',
            maxWidth: '480px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
          }}
        >
          Open to senior brand, digital commerce, and marketing leadership
          roles in Dubai, UAE.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
          <a
            href="mailto:work.dishasoni@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2.25rem',
              background: '#18181A',
              color: '#F8F4ED',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            work.dishasoni@gmail.com
          </a>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2.25rem',
              background: 'transparent',
              color: '#18181A',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid rgba(24,24,26,0.35)',
            }}
          >
            Send a Message
          </Link>
        </div>
      </section>
    </div>
  )
}
