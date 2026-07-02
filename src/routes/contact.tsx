import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (submitted) {
    return (
      <div
        style={{
          minHeight: 'calc(100vh - 68px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: '#F8F4ED',
        }}
      >
        <div style={{ textAlign: 'center' as const, maxWidth: '480px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '1px solid rgba(192,154,91,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              background: 'rgba(192,154,91,0.08)',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C09A5B" strokeWidth="1.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: '2.5rem',
              fontWeight: 400,
              color: '#18181A',
              marginBottom: '0.75rem',
            }}
          >
            Message Received
          </h2>
          <p style={{ fontSize: '1rem', color: '#7C776F', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Thank you for reaching out. I'll review your message and get back to you promptly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-ghost"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

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
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Contact</p>
          <h1
            className="display-lg font-display"
            style={{ color: '#F8F4ED', marginBottom: '1.5rem', maxWidth: '600px' }}
          >
            Let's build something exceptional together
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(248,244,237,0.5)',
              maxWidth: '520px',
              lineHeight: 1.75,
            }}
          >
            Open to senior brand strategy, digital commerce, and marketing leadership
            roles in Dubai, UAE. Happy to discuss your brand's challenges.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2.5rem',
              }}
            >
              <span style={{ width: '32px', height: '1px', background: '#C09A5B' }} />
              <p
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#C09A5B',
                }}
              >
                Contact Information
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2rem', marginBottom: '3.5rem' }}>
              {[
                {
  label: 'Phone',
  value: '+91-7045719408',
  href: 'tel:+917045719408',
  icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
},
                {
                  label: 'Location',
                  value: 'Mumbai, India → Dubai, UAE',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
                {
                  label: 'Availability',
                  value: 'Available in 45 days for Dubai, UAE roles',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      border: '1px solid #E0DBD2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: '#C09A5B',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#A09A92',
                        marginBottom: '0.3rem',
                      }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: '0.9375rem',
                          color: '#18181A',
                          textDecoration: 'none',
                          fontWeight: 500,
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          ;(e.currentTarget as HTMLElement).style.color = '#C09A5B'
                        }}
                        onMouseLeave={(e) => {
                          ;(e.currentTarget as HTMLElement).style.color = '#18181A'
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: '0.9375rem', color: '#18181A', fontWeight: 500 }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* What I'm looking for */}
            <div
              style={{
                padding: '2rem',
                background: '#F0EBE0',
                border: '1px solid #E0DBD2',
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
                What I'm Looking For
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Senior Brand Strategist or Marketing Manager roles',
                  'Digital Commerce Lead positions with Shopify focus',
                  'Head of Marketing at premium D2C or luxury brands',
                  'Brand & Content Strategy leadership in UAE',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      marginBottom: '0.625rem',
                      fontSize: '0.875rem',
                      color: '#18181A',
                      lineHeight: 1.65,
                    }}
                  >
                    <span style={{ color: '#C09A5B', flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2.5rem',
              }}
            >
              <span style={{ width: '32px', height: '1px', background: '#C09A5B' }} />
              <p
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#C09A5B',
                }}
              >
                Send a Message
              </p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                setLoading(true)
                const form = e.currentTarget
                const formData = new FormData(form)
                fetch('/contact.html', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(
                    formData as unknown as Record<string, string>,
                  ).toString(),
                })
                  .then(() => {
                    setLoading(false)
                    setSubmitted(true)
                  })
                  .catch(() => {
                    setLoading(false)
                    setSubmitted(true)
                  })
              }}
              style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.5rem' }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
                className="form-cols"
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#7C776F',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      background: '#F0EBE0',
                      border: '1px solid #E0DBD2',
                      borderRadius: '0',
                      fontSize: '0.9375rem',
                      color: '#18181A',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      fontFamily: 'Outfit, system-ui, sans-serif',
                    }}
                    onFocus={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = '#C09A5B'
                    }}
                    onBlur={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = '#E0DBD2'
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    style={{
                      display: 'block',
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#7C776F',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company"
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      background: '#F0EBE0',
                      border: '1px solid #E0DBD2',
                      borderRadius: '0',
                      fontSize: '0.9375rem',
                      color: '#18181A',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      fontFamily: 'Outfit, system-ui, sans-serif',
                    }}
                    onFocus={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = '#C09A5B'
                    }}
                    onBlur={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = '#E0DBD2'
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#7C776F',
                    marginBottom: '0.5rem',
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: '#F0EBE0',
                    border: '1px solid #E0DBD2',
                    borderRadius: '0',
                    fontSize: '0.9375rem',
                    color: '#18181A',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: 'Outfit, system-ui, sans-serif',
                  }}
                  onFocus={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#C09A5B'
                  }}
                  onBlur={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#E0DBD2'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  style={{
                    display: 'block',
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#7C776F',
                    marginBottom: '0.5rem',
                  }}
                >
                  Role / Opportunity Type
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="e.g. Head of Brand Marketing"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: '#F0EBE0',
                    border: '1px solid #E0DBD2',
                    borderRadius: '0',
                    fontSize: '0.9375rem',
                    color: '#18181A',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: 'Outfit, system-ui, sans-serif',
                  }}
                  onFocus={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#C09A5B'
                  }}
                  onBlur={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#E0DBD2'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#7C776F',
                    marginBottom: '0.5rem',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role or project..."
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: '#F0EBE0',
                    border: '1px solid #E0DBD2',
                    borderRadius: '0',
                    fontSize: '0.9375rem',
                    color: '#18181A',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    resize: 'vertical' as const,
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    lineHeight: 1.65,
                  }}
                  onFocus={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#C09A5B'
                  }}
                  onBlur={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#E0DBD2'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-dark"
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 639px) {
          .form-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
