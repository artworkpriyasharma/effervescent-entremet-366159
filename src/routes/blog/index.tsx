import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  const posts = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#18181A', padding: '5rem 2rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Perspectives</p>
          <h1
            className="display-lg font-display"
            style={{ color: '#F8F4ED', marginBottom: '1.5rem' }}
          >
            Brand strategy & commerce insights
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(248,244,237,0.5)', maxWidth: '520px', lineHeight: 1.75 }}>
            Observations from the intersection of premium brand building, digital commerce, and AI-enabled marketing operations.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5px',
              background: '#E0DBD2',
            }}
            className="blog-grid"
          >
            {posts.map((post) => (
              <Link
                key={post._meta.path}
                to="/blog/$slug"
                params={{ slug: post._meta.path }}
                style={{ textDecoration: 'none' }}
              >
                <article
                  className="card-lift"
                  style={{
                    background: '#F8F4ED',
                    padding: '2.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column' as const,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap' as const,
                        gap: '0.375rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {post.tags.map((tag) => (
                        <span key={tag} className="tag tag-gold">{tag}</span>
                      ))}
                    </div>

                    <h2
                      className="font-display"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        color: '#18181A',
                        lineHeight: 1.2,
                        marginBottom: '1rem',
                      }}
                    >
                      {post.title}
                    </h2>

                    <p style={{ fontSize: '0.9rem', color: '#7C776F', lineHeight: 1.7 }}>
                      {post.summary}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: '2rem',
                      paddingTop: '1.5rem',
                      borderTop: '1px solid #E0DBD2',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ fontSize: '0.75rem', color: '#A09A92' }}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#C09A5B',
                      }}
                    >
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <style>{`
            @media (max-width: 1023px) {
              .blog-grid { grid-template-columns: repeat(2,1fr) !important; }
            }
            @media (max-width: 639px) {
              .blog-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>
    </div>
  )
}
