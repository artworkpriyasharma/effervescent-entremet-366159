import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div
        style={{
          minHeight: 'calc(100vh - 68px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ textAlign: 'center' as const }}>
          <h1 className="font-display" style={{ fontSize: '2rem', fontWeight: 400, color: '#18181A', marginBottom: '1rem' }}>
            Post not found
          </h1>
          <Link to="/blog/" style={{ color: '#C09A5B', textDecoration: 'none', fontSize: '0.875rem' }}>
            ← Back to Perspectives
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div>
      <section style={{ background: '#18181A', padding: '5rem 2rem 4rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link
            to="/blog/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#C09A5B',
              textDecoration: 'none',
              marginBottom: '2.5rem',
            }}
          >
            ← All Perspectives
          </Link>

          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.375rem', marginBottom: '1.5rem' }}>
            {post.tags.map((tag) => (
              <span key={tag} className="tag tag-gold">{tag}</span>
            ))}
          </div>

          <h1
            className="display-md font-display"
            style={{ color: '#F8F4ED', marginBottom: '1.5rem' }}
          >
            {post.title}
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(248,244,237,0.4)' }}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(192,154,91,0.4)' }} />
            <p style={{ fontSize: '0.8125rem', color: 'rgba(248,244,237,0.4)' }}>{post.author}</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#7C776F',
              lineHeight: 1.8,
              borderLeft: '3px solid #C09A5B',
              paddingLeft: '1.5rem',
              marginBottom: '3rem',
              fontStyle: 'italic',
            }}
          >
            {post.summary}
          </p>

          <div
            dangerouslySetInnerHTML={{ __html: html as string }}
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.85,
              color: '#3E3E42',
            }}
          />

          <div
            style={{
              marginTop: '4rem',
              paddingTop: '3rem',
              borderTop: '1px solid #E0DBD2',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap' as const,
              gap: '1rem',
            }}
          >
            <Link
              to="/blog/"
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#C09A5B',
                textDecoration: 'none',
              }}
            >
              ← All Perspectives
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
