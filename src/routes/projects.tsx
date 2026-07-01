import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div style={{ padding: '5rem 2rem', textAlign: 'center' as const }}>
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>
        <p className="eyebrow" style={{ marginBottom: '1rem' }}>Redirecting</p>
        <h1 className="font-display" style={{ fontSize: '2.5rem', fontWeight: 400, color: '#18181A', marginBottom: '1rem' }}>
          Brand Work & Case Studies
        </h1>
        <p style={{ color: '#7C776F', marginBottom: '2rem' }}>
          Explore the full portfolio of brand engagements, campaign work, and case studies.
        </p>
        <Link to="/work" className="btn-dark">
          View Work →
        </Link>
      </div>
    </div>
  )
}
