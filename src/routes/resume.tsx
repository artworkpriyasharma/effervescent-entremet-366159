import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

const experience = [
  {
  title: 'Brand Growth & Digital Commerce Consultant',
  company: 'Independent Practice',
  period: 'Aug 2022 – Present',
  type: 'Consulting',
  highlights: [
    'Managed Shopify ecosystem for Zest Mélange, supporting a platform receiving 50,000 visitors daily, with full merchandising, seasonal campaigns and website optimisation',
    'Developed social media campaigns, outdoor branding and corporate communication for Zest Corporation, the parent jewellery brand',
    'Owned annual marketing calendar, integrated campaigns, exhibitions, partnerships and PR coordination for Baaya Design on a retainer basis',
    'Led event branding, product photography coordination and premium catalogue development for Ancora Design (USA)',
    "Conceptualised founder-led campaigns and brand storytelling for A Toddler Thing, a kids' wear brand",
    'Managed advertising communication and campaign messaging for Saffron Stays',
    'Optimised the Azafran organic cosmetics website for user experience, navigation and conversion',
    'Led campaign strategy, creative direction and product storytelling for ARMAF, an international fragrance brand — focus on premium positioning',
    'Delivered full brand repositioning for Saturday Club patisserie — new tone of voice, visual identity and customer-facing brand expression',
    'Developed campaign strategy, launch communication and AI-assisted marketing workflows for confidential luxury fragrance brands (NDA)',
    'Brought AI-powered tools (ChatGPT, Claude, Perplexity, Gamma) into day-to-day workflows for research, copywriting, and competitive intelligence',
  ],
  brands: ['Zest Mélange', 'Zest Corporation', 'Baaya Design', 'Ancora Design', "A Toddler Thing", 'Saffron Stays', 'Azafran', 'ARMAF', 'Saturday Club', 'Luxury Fragrance (NDA)'],
},
  {
    title: 'Marketing Manager',
    company: 'Baaya Design',
    period: 'Sep 2021 – Jul 2022',
    type: 'Full-Time',
    highlights: [
      'Worked directly with founders to own the annual marketing calendar for a premium luxury home décor brand',
      'Led integrated campaign planning and execution across digital and offline touchpoints',
      'Managed exhibitions, brand partnerships and PR coordination',
      'Oversaw all website communication, product storytelling and brand copy',
      'Built the foundation for a continued consulting relationship post full-time tenure',
    ],
    brands: ['Baaya Design'],
  },
  {
    title: 'Digital Strategist & Content Head',
    company: 'Mediatrix Advertising Pvt. Ltd.',
    period: 'Jan 2016 – Aug 2021',
    type: 'Full-Time',
    highlights: [
      'Led integrated marketing strategies and campaign planning for multiple brand clients',
      'Drove market research, competitive analysis and brand communication frameworks',
      'Managed end-to-end content operations including strategy, production and calendar management',
      'Primary client communication and stakeholder management across accounts',
      'Built internal content workflows and team processes across a 5-year tenure',
    ],
    brands: ['Multiple Brand Clients'],
  },
  {
    title: 'Social Media Executive',
    company: 'Brides of India',
    period: 'Jan 2015 – Dec 2015',
    type: 'Full-Time',
    highlights: [
      'Supported digital marketing and brand communication initiatives for a leading bridal media platform',
      'Managed social media calendar, content creation and community engagement',
    ],
    brands: ['Brides of India'],
  },
]

const tools = [
  { category: 'Commerce', items: ['Shopify', 'Shopify SEO', 'Google Merchant Center'] },
  { category: 'Performance', items: ['Meta Ads', 'Google Ads', 'Mailchimp'] },
  { category: 'AI & Content', items: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Gamma', 'Higgsfield', 'Canva AI'] },
  { category: 'Creative', items: ['Canva', 'Meta Business Suite', 'Microsoft Office'] },
]

const coreSkills = [
  'Brand Strategy', 'Campaign Strategy', 'Go-to-Market', 'Storytelling', 'Product Launches',
  'Shopify Ecosystems', 'Merchandising', 'Customer Journey', 'SEO', 'Annual Marketing Calendar',
  'Founder Collaboration', 'Stakeholder Management', 'Project Coordination', 'Cross-Functional Leadership',
  'AI-Enabled Marketing', 'Market Research', 'Competitive Intelligence', 'Content Strategy',
]

export default function Resume() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: '#18181A',
          padding: '5rem 2rem',
          borderBottom: '1px solid rgba(192,154,91,0.2)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Resume</p>
          <h1
            className="display-lg font-display"
            style={{ color: '#F8F4ED', marginBottom: '1.5rem' }}
          >
            Disha Soni
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(248,244,237,0.55)',
              maxWidth: '620px',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
            }}
          >
            Brand, Digital Commerce & AI Marketing Strategist · 11+ Years ·
            Fashion, Jewellery, Luxury Home Décor, Fragrance & D2C Commerce
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
            <a
              href="/Disha_Soni_Resume.pdf"
  download
  className="btn-dark"
>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
            <a
              href="mailto:work.dishasoni@gmail.com"
              className="btn-ghost-light"
            >
              Get in Touch
            </a>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' as const }}>
            {[
           { label: 'Email', value: 'work.dishasoni@gmail.com' },
{ label: 'Phone', value: '+91-7045719408' },
{ label: 'Location', value: 'Mumbai → Dubai, UAE' },
              { label: 'Visa', value: 'Employment Visa Required' },
              { label: 'Languages', value: 'English · Hindi · Marathi' },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#C09A5B',
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.label}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(248,244,237,0.7)' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="resume-grid"
        >
          {/* Left: Experience */}
          <div>
            {/* Career highlights banner */}
            <section style={{ marginBottom: '5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2rem',
                }}
              >
                <span
                  style={{
                    width: '32px',
                    height: '1px',
                    background: '#C09A5B',
                    flexShrink: 0,
                  }}
                />
                <h2
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#C09A5B',
                  }}
                >
                  Career Highlights
                </h2>
              </div>

              <div
                style={{
                  border: '1px solid #E0DBD2',
                  background: '#F0EBE0',
                  padding: '2rem',
                }}
              >
                <ul style={{ listStyle: 'none', padding: 0 }}>
  {[
    '11+ years of progressive experience across Brand, Digital Commerce & Marketing for premium and luxury D2C brands',
    'Managed Shopify ecosystem with 50,000+ SKUs, supporting a platform receiving approximately 500,000–700,000 visitors daily',
    'Owned the planning and execution of seasonal integrated marketing campaigns from strategic concept through launch',
    'Worked directly with founders and cross-functional teams (design, development, PR) to shape brand direction',
    'Led creative conceptualisation for video and static campaigns across fashion, jewellery and fragrance categories',
    'Led a full brand identity repositioning for a patisserie brand, shifting tone of voice to a quirky, lively brand expression',
    'Brought AI-powered workflows into day-to-day operations — improving turnaround time on creative and content cycles',
  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        gap: '0.875rem',
                        marginBottom: '0.875rem',
                        fontSize: '0.9375rem',
                        color: '#18181A',
                        lineHeight: 1.65,
                      }}
                    >
                      <span style={{ color: '#C09A5B', flexShrink: 0, marginTop: '0.15rem' }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Experience */}
            <section>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '3rem',
                }}
              >
                <span
                  style={{
                    width: '32px',
                    height: '1px',
                    background: '#C09A5B',
                    flexShrink: 0,
                  }}
                />
                <h2
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#C09A5B',
                  }}
                >
                  Professional Experience
                </h2>
              </div>

              <div style={{ position: 'relative' }}>
                {/* Timeline line */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    bottom: 0,
                    width: '1px',
                    background: '#E0DBD2',
                  }}
                />

                {experience.map((job, idx) => (
                  <div
                    key={job.title}
                    style={{
                      paddingLeft: '2.5rem',
                      paddingBottom: idx < experience.length - 1 ? '3.5rem' : 0,
                      position: 'relative',
                    }}
                  >
                    {/* Timeline dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-4px',
                        top: '6px',
                        width: '9px',
                        height: '9px',
                        borderRadius: '50%',
                        background: idx === 0 ? '#C09A5B' : '#E0DBD2',
                        border: '2px solid',
                        borderColor: idx === 0 ? '#C09A5B' : '#C8C2B8',
                      }}
                    />

                    <div style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' as const }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.15rem 0.6rem',
                          fontSize: '0.5625rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          background: idx === 0 ? 'rgba(192,154,91,0.12)' : '#F0EBE0',
                          color: idx === 0 ? '#C09A5B' : '#7C776F',
                          border: '1px solid',
                          borderColor: idx === 0 ? 'rgba(192,154,91,0.3)' : '#E0DBD2',
                        }}
                      >
                        {job.type}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: '#A09A92',
                          fontWeight: 400,
                        }}
                      >
                        {job.period}
                      </span>
                    </div>

                    <h3
                      className="font-display"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        color: '#18181A',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {job.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#7C776F',
                        marginBottom: '1.25rem',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {job.company}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem' }}>
                      {job.highlights.map((h) => (
                        <li
                          key={h}
                          style={{
                            display: 'flex',
                            gap: '0.75rem',
                            marginBottom: '0.625rem',
                            fontSize: '0.9rem',
                            color: '#7C776F',
                            lineHeight: 1.65,
                          }}
                        >
                          <span style={{ color: '#C09A5B', flexShrink: 0 }}>—</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.4rem' }}>
                      {job.brands.map((b) => (
                        <span key={b} className="tag">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Sidebar */}
          <div className="resume-sticky">
            {/* Education */}
            <section style={{ marginBottom: '3rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ width: '24px', height: '1px', background: '#C09A5B' }} />
                <h2
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#C09A5B',
                  }}
                >
                  Education
                </h2>
              </div>

              <div
                style={{
                  padding: '1.5rem',
                  border: '1px solid #E0DBD2',
                  background: '#F8F4ED',
                }}
              >
                <h3
                  className="font-display"
                  style={{ fontSize: '1.125rem', fontWeight: 500, color: '#18181A', marginBottom: '0.25rem' }}
                >
                  B.Tech — Ceramic Engineering
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#7C776F' }}>
                  Bachelor of Technology
                </p>
              </div>
            </section>

            {/* Tools */}
            <section style={{ marginBottom: '3rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ width: '24px', height: '1px', background: '#C09A5B' }} />
                <h2
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#C09A5B',
                  }}
                >
                  Tools & Platforms
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.25rem' }}>
                {tools.map((group) => (
                  <div key={group.category}>
                    <p
                      style={{
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#A09A92',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {group.category}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.375rem' }}>
                      {group.items.map((tool) => (
                        <span key={tool} className="tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Skills */}
            <section style={{ marginBottom: '3rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ width: '24px', height: '1px', background: '#C09A5B' }} />
                <h2
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#C09A5B',
                  }}
                >
                  Core Skills
                </h2>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.375rem' }}>
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="tag"
                    style={{
                      transition: 'border-color 0.2s, color 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = '#C09A5B'
                      el.style.color = '#C09A5B'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = '#E0DBD2'
                      el.style.color = '#7C776F'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div
              style={{
                padding: '1.75rem',
                background: '#18181A',
                textAlign: 'center' as const,
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: '#F8F4ED',
                  marginBottom: '0.5rem',
                }}
              >
                Interested in working together?
              </p>
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: 'rgba(248,244,237,0.5)',
                  marginBottom: '1.25rem',
                }}
              >
                Open to senior roles in Dubai, UAE
              </p>
             <Link to="/contact" className="btn-dark" style={{ width: '100%', justifyContent: 'center' }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .resume-sticky { position: sticky; top: 90px; }
        @media (max-width: 1023px) {
          .resume-grid { grid-template-columns: 1fr !important; }
          .resume-sticky { position: static !important; top: auto !important; margin-top: 2rem; }
        }
      `}</style>
    </div>
  )
}
