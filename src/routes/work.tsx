import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/work')({
  component: Work,
})

const caseStudies = [
  {
    id: 'zest-melange',
    brand: 'Zest Mélange',
    category: 'Fashion & Lifestyle',
    services: ['Shopify Ecosystem', 'Merchandising', 'Campaign Leadership', 'SEO', 'Website Optimisation'],
    period: 'Aug 2022 – Present',
    overview:
      'Full ownership of a large-scale Shopify ecosystem supporting a fashion and lifestyle D2C brand, managing SKUs and driving visitors through strategic merchandising, SEO, and seasonal campaign execution.',
    deliverables: [
      'End-to-end Shopify ecosystem management with 500+ SKUs',
      'Seasonal campaign planning and execution (3+ per year)',
      'Google Merchant Center coordination and product feed management',
      'SEO strategy and website optimisation for organic growth',
      'Cross-functional collaboration with designers and developers',
      'Product storytelling and copywriting across all touchpoints',
    ],
    tags: ['D2C', 'Shopify', 'Fashion', 'Campaign'],
  },
  {
    id: 'baaya-design',
    brand: 'Baaya Design',
    category: 'Luxury Home Décor',
    services: ['Brand Strategy', 'Annual Marketing Calendar', 'Exhibition Management', 'PR', 'Partnerships'],
    period: 'Sep 2021 – Present',
    overview:
      'Long-term strategic brand relationship spanning a full-time Marketing Manager role and an ongoing consulting partnership. Complete ownership of brand marketing direction, calendar, and all external-facing communications for a premium home décor brand.',
    deliverables: [
      'Full ownership of annual marketing calendar and campaign strategy',
      'Exhibition planning and brand activation management',
      'Brand partnerships and collaborative initiative strategy',
      'PR coordination and press relationships',
      'Website communication and editorial content direction',
      'Founder collaboration on strategic brand decisions',
    ],
    tags: ['', 'Home Décor', 'Brand Strategy', 'PR'],
  },
  {
    id: 'Armaf',
    brand: 'Armaf',
    category: 'Luxury Fragrance',
    services: ['Campaign Strategy', 'Creative Direction', 'Product Storytelling', 'Launch Communication'],
    period: '2022 – Present',
    overview:
      'Campaign strategy and creative leadership for a luxury fragrance brand, developing the narrative and visual language for product launches with a focus on premium D2C positioning in an increasingly competitive market.',
    deliverables: [
      'Campaign strategy for fragrance launch communications',
      'Creative concept development for video and static campaigns',
      'Premium product storytelling and brand copy',
      'Launch communication strategy and rollout planning',
      'AI-assisted content workflows for faster turnaround',
    ],
    tags: ['Fragrance', 'Luxury', 'Campaign', 'D2C'],
  },
  {
    id: 'saturday-club',
    brand: 'Saturday Club',
    category: 'F&B · Patisserie',
    services: ['Brand Repositioning', 'Identity Strategy', 'Tone of Voice', 'Visual Direction'],
    period: '2023',
    overview:
      'Led a comprehensive brand identity repositioning for a patisserie brand, shifting from a generic presentation to a quirky, lively brand expression that resonated more authentically with its target audience and differentiated it in a crowded market.',
    deliverables: [
      'Brand identity audit and repositioning strategy',
      'New tone of voice framework and messaging guidelines',
      'Visual direction for brand identity evolution',
      'Customer-facing brand expression overhaul',
      'Content and communication style guide',
    ],
    tags: ['F&B', 'Branding', 'Repositioning', 'Identity'],
  },
  {
    id: 'luxury-fragrance-nda',
    brand: 'Confidential Luxury Brands',
    category: 'Luxury Fragrance (NDA)',
    services: ['Campaign Strategy', 'AI Marketing Workflows', 'Launch Communication', 'Creative Direction'],
    period: '2022 – Present',
    overview:
      'Campaign strategy, creative direction, launch communication and AI-assisted marketing workflows for additional luxury fragrance brand engagements. Specific brand details are withheld under non-disclosure agreement.',
    deliverables: [
      'Campaign strategy and launch communication planning',
      'Creative concept development',
      'AI-powered marketing workflow design and implementation',
      'Product storytelling for fragrance launches',
      'Competitive intelligence and market research',
    ],
    tags: ['Luxury', 'Fragrance', 'NDA', 'AI Marketing'],
  },

  {
    id: 'zest-corporation',
    brand: 'Zest Corporation',
    category: 'Jewellery',
    services: ['Social Media Campaigns', 'Outdoor Branding', 'Event Standees', 'Corporate Communication'],
    period: '2022 – Present',
    overview:
      'Social media campaigns, outdoor branding and corporate communication for the parent jewellery brand behind Zest Mélange, supporting brand visibility across offline and digital touchpoints.',
    deliverables: [
      'Social media campaign planning and execution',
      'Outdoor branding and event standee design direction',
      'Corporate communication and brand messaging',
    ],
    tags: ['Jewellery', 'Branding', 'Corporate'],
  },
  {
    id: 'ancora-design',
    brand: 'Ancora Design (USA)',
    category: 'Luxury Home Décor',
    services: ['Event Branding', 'Product Photography', 'Catalogue Design'],
    period: '2022 – Present',
    overview:
      'Event branding, product photography coordination and premium catalogue development for a US-based luxury home décor brand.',
    deliverables: [
      'Event branding and on-site brand presence',
      'Coordination of product photography shoots',
      'Development of premium product catalogues',
    ],
    tags: ['Luxury', 'Home Décor', 'USA', 'Events'],
  },
  {
    id: 'a-toddler-thing',
    brand: 'A Toddler Thing',
    category: "Kids' Wear",
    services: ['Campaign Conceptualisation', 'Advertising Communication', 'Brand Storytelling'],
    period: '2022 – Present',
    overview:
      "Founder-led campaign conceptualisation and brand storytelling for a kids' wear D2C brand, shaping advertising communication across channels.",
    deliverables: [
      'Conceptualised founder-led campaigns',
      'Managed advertising communication strategy',
      "Developed brand storytelling for the kids' wear category",
    ],
    tags: ["Kids' Wear", 'D2C', 'Storytelling'],
  },
  {
    id: 'saffron-stays',
    brand: 'Saffron Stays',
    category: 'Hospitality',
    services: ['Advertising Communication', 'Campaign Messaging'],
    period: '2022 – Present',
    overview:
      'Advertising communication and campaign messaging support for a boutique hospitality and villa-stays brand.',
    deliverables: [
      'Managed advertising communication',
      'Developed campaign messaging frameworks',
    ],
    tags: ['Hospitality', 'Campaign'],
  },
  {
    id: 'azafran',
    brand: 'Azafran',
    category: 'Organic Cosmetics',
    services: ['Website UX', 'Navigation Optimisation', 'Conversion Copy'],
    period: '2022 – Present',
    overview:
      'Website experience optimisation for an organic cosmetics brand, improving navigation, usability and conversion-focused communication.',
    deliverables: [
      'Optimised website user experience and navigation',
      'Improved conversion-focused on-site communication',
    ],
    tags: ['Organic Cosmetics', 'UX', 'Conversion'],
  },
]

// Client logos — pulled from real engagements above.
// To add a logo image: 1) upload the PNG/SVG file into /public/logos/
// 2) set its "src" below to '/logos/your-file-name.png'
// Leaving "src" empty shows the brand name as text instead — so this
// works right now and you can fill in images one at a time whenever ready.
// To make a logo clickable, add "url" with the client's website (include https://).
// Leaving "url" empty just shows the logo without a link.
const clientLogos: { name: string; src?: string; url?: string }[] = [
  { name: 'Zest Mélange', src: '/logos/zestmelange-logo.png', url: '' },
  { name: 'Baaya Design', src: '/logos/baayadesign-logo.png', url: '' },
  { name: 'Armaf', src: '/logos/armaf-logo.png', url: '' },
  { name: 'Saturday Club', src: '/logos/saturday-club-logo.png', url: '' },
  { name: 'Zest Corporation', src: '/logos/zestcorporation-logo.png', url: '' },
  { name: 'Ancora Design', src: '/logos/ancora-logo.png', url: '' },
  { name: 'A Toddler Thing', src: '/logos/atoddlerthing-logo.png', url: '' },
  { name: 'Saffron Stays', src: '/logos/saffronstays-logo.png', url: '' },
  { name: 'Azafran', src: '/logos/azafran-logo.png', url: '' },
]

const services = [
  { area: 'Brand Strategy', items: ['Brand Positioning', 'Go-to-Market', 'Storytelling', 'Campaign Strategy'] },
  { area: 'Digital Commerce', items: ['Shopify Ecosystems', 'Shopify SEO', 'Google Merchant Center', 'Customer Journey'] },
  { area: 'AI & Operations', items: ['ChatGPT · Claude · Gemini', 'AI-Powered Workflows', 'Canva AI · Gamma', 'Content Automation'] },
  { area: 'Leadership', items: ['Founder Collaboration', 'Cross-functional Teams', 'Marketing Calendar', 'Stakeholder Management'] },
]

const testimonials = [
  {
    quote: 'Disha was an absolute pleasure to work with during our rebranding journey. She quickly understood our vision and brought fresh strategic thinking that helped shape the brand direction. She is proactive, creative, dependable, and always willing to go the extra mile. Her ability to combine marketing strategy with execution made her a valuable part of the project, and we would happily recommend her to any brand looking for a thoughtful marketing professional.',
    name: 'Sanaya',
    role: 'The Saturday Club',
  },
  {
    quote: 'Working with Disha was a wonderful experience. She played an important role in strengthening our website and refining our brand communication. She understood our audience well, was highly responsive, and consistently brought thoughtful ideas to the table. Disha is professional, detail-oriented, and genuinely invested in delivering quality work. We truly enjoyed working with her and would gladly recommend her.',
    name: 'Swathi',
    role: 'A Toddler Thing',
  },
  {
    quote: 'Disha has been associated with Baaya Design for quite some time, first as a full-time team member and later as a consultant. Throughout this journey, she has consistently demonstrated professionalism, creativity, and a deep understanding of our brand. She has been reliable, proactive, and a pleasure to work with, contributing meaningfully across digital marketing and brand communication. We have always appreciated her commitment, strategic thinking, and positive attitude, and we wholeheartedly recommend her to anyone looking for an experienced and dependable marketing professional.',
    name: 'Shibani',
    role: 'Baaya Design',
  },
]

const mediaGallery = {
  videos: [
    { title: 'Campaign Video', src: '/gallery/armaf-video-1.mp4', thumbnail: '/gallery/thumbs/armaf-video-1-thumb.jpg', brand: 'Armaf' },
    { title: 'Campaign Video', src: '/gallery/armaf-video-2.mp4', thumbnail: '/gallery/thumbs/armaf-video-2-thumb.jpg', brand: 'Armaf' },
    { title: 'Campaign Video', src: '/gallery/armaf-video-3.mp4', thumbnail: '/gallery/thumbs/armaf-video-3-thumb.jpg', brand: 'Armaf' },
    { title: 'Campaign Video', src: '/gallery/atoddlerthing-video-1.mp4', thumbnail: '/gallery/thumbs/atoddlerthing-video-1-thumb.jpg', brand: 'A Toddler Thing' },
    { title: 'Campaign Video', src: '/gallery/baayadesign-video-1.mp4', thumbnail: '/gallery/thumbs/baayadesign-video-1-thumb.jpg', brand: 'Baaya Design' },
    { title: 'Campaign Video', src: '/gallery/baayadesign-video-2.mp4', thumbnail: '/gallery/thumbs/baayadesign-video-2-thumb.jpg', brand: 'Baaya Design' },
    { title: 'Campaign Video', src: '/gallery/thesaturdayclub-video-1.mp4', thumbnail: '/gallery/thumbs/thesaturdayclub-video-1-thumb.jpg', brand: 'Saturday Club' },
    { title: 'Campaign Video', src: '/gallery/zestcorporation-video-1.mp4', thumbnail: '/gallery/thumbs/zestcorporation-video-1-thumb.jpg', brand: 'Zest Corporation' },
    { title: 'Campaign Video', src: '/gallery/zestmelange-video-1.mp4', thumbnail: '/gallery/thumbs/zestmelange-video-1-thumb.jpg', brand: 'Zest Mélange' },
    { title: 'Campaign Video', src: '/gallery/zestmelange-video-2.mp4', thumbnail: '/gallery/thumbs/zestmelange-video-2-thumb.jpg', brand: 'Zest Mélange' },
  ],
  statics: [
    { title: 'Campaign Creative', src: '/gallery/armaf-static-1.png', brand: 'Armaf', type: 'Static' },
    { title: 'Campaign Creative', src: '/gallery/thesaturdayclub-static-1.png', brand: 'Saturday Club', type: 'Static' },
    { title: 'Campaign Creative', src: '/gallery/ancoradesign-static-1.png', brand: 'Ancora Design', type: 'Static' },
    { title: 'Campaign Creative', src: '/gallery/ancoradesign-static-2.png', brand: 'Ancora Design', type: 'Static' },
    { title: 'Campaign Creative', src: '/gallery/zestmelange-static-1.png', brand: 'Zest Mélange', type: 'Static' },
    { title: 'Campaign Creative', src: '/gallery/zestmelange-static-2.png', brand: 'Zest Mélange', type: 'Static' },
    { title: 'Campaign Creative', src: '/gallery/atoddlerthing-static-1.png', brand: 'A Toddler Thing', type: 'Static' },
    { title: 'Campaign Creative', src: '/gallery/saffronstays-static-1.jpeg', brand: 'Saffron Stays', type: 'Static' },
    { title: 'Campaign Creative', src: '/gallery/zestcorporation-static-1.png', brand: 'Zest Corporation', type: 'Static' },
    { title: 'Campaign Creative', src: '/gallery/baayadesign-static-1.png', brand: 'Baaya Design', type: 'Static' },
  ],
}

// Only loads/downloads a video's source once its card actually scrolls into
// view, instead of every video on the page trying to fetch at once.
function LazyVideoCard({ video }: { video: { title: string; src: string; thumbnail: string; brand: string } }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' } // start loading a bit before it's actually visible
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="media-card"
      style={{ aspectRatio: '9/16', cursor: 'pointer', background: '#0F0F10' }}
      onClick={(e) => {
        const vid = e.currentTarget.querySelector('video') as HTMLVideoElement | null
        if (!vid) return
        if (vid.paused) {
          vid.play()
        } else {
          vid.pause()
        }
      }}
    >
      {inView && (
        <video
          src={video.src}
          poster={video.thumbnail || undefined}
          playsInline
          preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      <div className="media-overlay">
        <div className="play-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 4L16 10L6 16V4Z" fill="#18181A" />
          </svg>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1.5rem 1.25rem 1rem',
          background: 'linear-gradient(to top, rgba(24,24,26,0.9), transparent)',
        }}
      >
        <p style={{ fontSize: '0.625rem', color: '#C09A5B', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
          {video.brand}
        </p>
        <p style={{ fontSize: '0.875rem', color: '#F8F4ED' }}>{video.title}</p>
      </div>
    </div>
  )
}

export default function Work() {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0].id)
  const active = caseStudies.find((c) => c.id === activeStudy)!

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: '#18181A',
          padding: '5rem 2rem 4rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Work</p>
          <h1
            className="display-lg font-display"
            style={{ color: '#F8F4ED', marginBottom: '1.5rem', maxWidth: '700px' }}
          >
            Brand work across premium & luxury verticals
          </h1>
          <p
  style={{
    fontSize: '1rem',
    color: 'rgba(248,244,237,0.5)',
    maxWidth: '580px',
    lineHeight: 1.75,
  }}
>
  11+ years of consulting and full-time engagements across fashion, luxury home décor, jewellery, fragrance, hospitality, kids' wear and organic cosmetics — spanning brand strategy, Shopify ecosystems, campaign leadership, creative direction and AI-enabled marketing operations for both Indian and international brands.
       </p>
        </div>
      </section>

      {/* Case Studies — Tab Interface */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '300px 1fr',
              gap: '3rem',
              alignItems: 'start',
            }}
            className="case-grid"
          >
            {/* Left: Brand list */}
            <div className="case-list-sticky">
              <p
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#A09A92',
                  marginBottom: '1rem',
                }}
              >
                Select Engagement
              </p>

              {caseStudies.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setActiveStudy(study.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left' as const,
                    padding: '1.25rem 1.5rem',
                    background: activeStudy === study.id ? '#18181A' : 'transparent',
                    border: 'none',
                    borderLeft: `2px solid ${activeStudy === study.id ? '#C09A5B' : '#E0DBD2'}`,
                    cursor: 'pointer',
                    transition: 'background 0.2s ease, border-color 0.2s ease',
                    marginBottom: '2px',
                  }}
                  onMouseEnter={(e) => {
                    if (activeStudy !== study.id) {
                      ;(e.currentTarget as HTMLElement).style.background = '#F0EBE0'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeStudy !== study.id) {
                      ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                    }
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: activeStudy === study.id ? '#C09A5B' : '#A09A92',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {study.category}
                  </p>
                  <p
                    className="font-display"
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: activeStudy === study.id ? 500 : 400,
                      color: activeStudy === study.id ? '#F8F4ED' : '#18181A',
                    }}
                  >
                    {study.brand}
                  </p>
                </button>
              ))}
            </div>

            {/* Right: Active study detail */}
            <div key={active.id}>
              {/* Header */}
              <div
                style={{
                  padding: '2.5rem',
                  background: '#F0EBE0',
                  marginBottom: '1.5px',
                }}
              >
                <span className="tag tag-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                  {active.category}
                </span>
                <h2
                  className="display-md font-display"
                  style={{ color: '#18181A', marginBottom: '0.5rem' }}
                >
                  {active.brand}
                </h2>
                <p style={{ fontSize: '0.8125rem', color: '#7C776F' }}>{active.period}</p>
              </div>

              {/* Overview */}
              <div
                style={{
                  padding: '2.5rem',
                  background: '#F8F4ED',
                  border: '1px solid #E0DBD2',
                  borderTop: 'none',
                  marginBottom: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#C09A5B',
                    marginBottom: '1rem',
                  }}
                >
                  Engagement Overview
                </h3>
                <p style={{ fontSize: '1rem', color: '#18181A', lineHeight: 1.75 }}>
                  {active.overview}
                </p>
              </div>

              {/* Services + Deliverables */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                }}
                className="detail-grid"
              >
                <div
                  style={{
                    padding: '2rem',
                    border: '1px solid #E0DBD2',
                    background: '#F8F4ED',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#C09A5B',
                      marginBottom: '1.25rem',
                    }}
                  >
                    Services
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.5rem' }}>
                    {active.services.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    padding: '2rem',
                    border: '1px solid #E0DBD2',
                    background: '#F8F4ED',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#C09A5B',
                      marginBottom: '1.25rem',
                    }}
                  >
                    Tags
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.5rem' }}>
                    {active.tags.map((t) => (
                      <span key={t} className="tag tag-gold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div
                style={{
                  padding: '2rem 2.5rem',
                  border: '1px solid #E0DBD2',
                  background: '#F8F4ED',
                }}
              >
                <h3
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#C09A5B',
                    marginBottom: '1.25rem',
                  }}
                >
                  Key Deliverables
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {active.deliverables.map((d) => (
                    <li
                      key={d}
                      style={{
                        display: 'flex',
                        gap: '0.875rem',
                        marginBottom: '0.75rem',
                        fontSize: '0.9375rem',
                        color: '#18181A',
                        lineHeight: 1.65,
                      }}
                    >
                      <span style={{ color: '#C09A5B', flexShrink: 0 }}>—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Logos ─────────────────────────────────── */}
      <section
        style={{
          padding: '3.5rem 2rem',
          background: '#F0EBE0',
          borderTop: '1px solid #E0DBD2',
          borderBottom: '1px solid #E0DBD2',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#A09A92',
              textAlign: 'center' as const,
              marginBottom: '2rem',
            }}
          >
            Brands I've Worked With
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              justifyContent: 'center',
              gap: '2.5rem 3.5rem',
            }}
          >
            {clientLogos.map((logo) => {
              const content = logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  style={{
                    maxHeight: '48px',
                    maxWidth: '140px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.75,
                    transition: 'opacity 0.2s ease',
                  }}
                  className="logo-item"
                />
              ) : (
                <span
                  className="font-display logo-item"
                  style={{
                    fontSize: '1.25rem',
                    color: '#7C776F',
                    opacity: 0.75,
                    letterSpacing: '0.02em',
                    transition: 'opacity 0.2s ease',
                  }}
                >
                  {logo.name}
                </span>
              )

              const wrapperStyle = {
                display: 'flex' as const,
                alignItems: 'center' as const,
                justifyContent: 'center' as const,
                height: '48px',
              }

              return logo.url ? (
                <a
                  key={logo.name}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${logo.name} website`}
                  style={{ ...wrapperStyle, textDecoration: 'none' }}
                >
                  {content}
                </a>
              ) : (
                <div key={logo.name} style={wrapperStyle}>
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Campaign Media ──────────────────────────────── */}
      <section
        style={{
          padding: '6rem 2rem',
          background: '#18181A',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '3.5rem',
              flexWrap: 'wrap' as const,
              gap: '1.5rem',
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Campaign Media</p>
              <h2
                className="display-md font-display"
                style={{ color: '#F8F4ED' }}
              >
                Videos & Static Campaigns
              </h2>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(248,244,237,0.4)', maxWidth: '300px', textAlign: 'right' as const }}>
              Campaign videos and static creative assets from brand engagements
            </p>
          </div>

          {/* Video Gallery */}
          <div style={{ marginBottom: '3rem' }}>
            <p
              style={{
                fontSize: '0.625rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#C09A5B',
                marginBottom: '1.5rem',
              }}
            >
              Campaign Videos
            </p>

            {mediaGallery.videos.length > 0 ? (
              <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5px',
    background: '#2C2C2E',
  }}
  className="video-grid"
>
  {mediaGallery.videos.map((video) => (
    <LazyVideoCard key={video.src} video={video} />
  ))}
              </div>
            ) : (
              <div
                style={{
                  border: '1px dashed rgba(192,154,91,0.25)',
                  padding: '4rem 2rem',
                  textAlign: 'center' as const,
                  background: 'rgba(192,154,91,0.03)',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    border: '1px solid rgba(192,154,91,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C09A5B" strokeWidth="1.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p
                  className="font-display"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: '#F8F4ED',
                    marginBottom: '0.5rem',
                  }}
                >
                  Campaign Videos Coming Soon
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(248,244,237,0.35)' }}>
                  Video assets from brand campaign work will be uploaded here
                </p>
              </div>
            )}
          </div>

          {/* Static Gallery */}
          <div>
            <p
              style={{
                fontSize: '0.625rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#C09A5B',
                marginBottom: '1.5rem',
              }}
            >
              Static Campaigns & Creative Assets
            </p>

            {mediaGallery.statics.length > 0 ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.5px',
                  background: '#2C2C2E',
                }}
                className="static-grid"
              >
                {mediaGallery.statics.map((item) => (
                  <div
                    key={item.src}
                    className="media-card"
                    style={{ aspectRatio: '1/1' }}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className="media-overlay">
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '1.25rem',
                        }}
                      >
                        <p style={{ fontSize: '0.625rem', color: '#C09A5B', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                          {item.brand}
                        </p>
                        <p style={{ fontSize: '0.875rem', color: '#F8F4ED' }}>{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                style={{
                  border: '1px dashed rgba(192,154,91,0.25)',
                  padding: '4rem 2rem',
                  textAlign: 'center' as const,
                  background: 'rgba(192,154,91,0.03)',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    border: '1px solid rgba(192,154,91,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C09A5B" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <p
                  className="font-display"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: '#F8F4ED',
                    marginBottom: '0.5rem',
                  }}
                >
                  Static Creative Assets Coming Soon
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(248,244,237,0.35)' }}>
                  Campaign imagery, social creatives and brand visuals will appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', background: '#F8F4ED' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem', textAlign: 'center' as const }}>
            Services
          </p>
          <h2
            className="display-md font-display"
            style={{ color: '#18181A', textAlign: 'center' as const, marginBottom: '3.5rem' }}
          >
            What I Do
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5px',
              background: '#E0DBD2',
            }}
            className="services-grid"
          >
            {services.map((s) => (
              <div key={s.area} style={{ padding: '2.5rem', background: '#F8F4ED' }}>
                <h3
                  className="font-display"
                  style={{ fontSize: '1.25rem', color: '#18181A', marginBottom: '1.25rem' }}
                >
                  {s.area}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {s.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: '0.875rem',
                        color: '#7C776F',
                        marginBottom: '0.6rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', background: '#18181A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem', textAlign: 'center' as const, color: '#C09A5B' }}>
            Testimonials
          </p>
          <h2
            className="display-md font-display"
            style={{ color: '#F8F4ED', textAlign: 'center' as const, marginBottom: '3.5rem' }}
          >
            What People Say
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5px',
              background: '#2C2C2E',
            }}
            className="testimonial-grid"
          >
            {testimonials.map((t, i) => (
              <div key={i} style={{ padding: '2.5rem', background: '#18181A' }}>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'rgba(248,244,237,0.75)',
                    lineHeight: 1.75,
                    marginBottom: '1.5rem',
                    fontStyle: 'italic' as const,
                  }}
                >
                  "{t.quote}"
                </p>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8F4ED' }}>{t.name}</p>
                <p style={{ fontSize: '0.75rem', color: '#C09A5B' }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '5rem 2rem',
          textAlign: 'center' as const,
          borderTop: '1px solid #E0DBD2',
        }}
      >
        <p className="eyebrow" style={{ marginBottom: '1rem' }}>Let's Collaborate</p>
        <h2
          className="display-md font-display"
          style={{ color: '#18181A', marginBottom: '1.5rem' }}
        >
          Ready to bring strategic brand thinking to your team?
        </h2>
        <p
          style={{
            fontSize: '1rem',
            color: '#7C776F',
            maxWidth: '480px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
          }}
        >
          Open to senior brand, digital commerce, and marketing leadership roles in Dubai, UAE.
        </p>
        <Link to="/contact" className="btn-dark">
          Start a Conversation
        </Link>
      </section>

      <style>{`
  a:has(.logo-item):hover .logo-item { opacity: 1 !important; }

  .case-list-sticky { position: sticky; top: 90px; }

  @media (max-width: 1023px) {
    .case-grid { grid-template-columns: 1fr !important; }
    .case-list-sticky { position: static !important; top: auto !important; margin-bottom: 2rem; }
    .services-grid { grid-template-columns: repeat(2,1fr) !important; }
    .testimonial-grid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 767px) {
    .detail-grid { grid-template-columns: 1fr !important; }
    .services-grid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 420px) {
    .static-grid { grid-template-columns: 1fr !important; }
    .video-grid { grid-template-columns: 1fr !important; }
  }
`}</style>
    </div>
  )
}
