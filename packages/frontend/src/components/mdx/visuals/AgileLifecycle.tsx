import ScrollReveal from '../ScrollReveal';

const stages = [
  {
    number: '01',
    title: 'Assess & Plan',
    color: '#4F46E5',
    bg: '#EEF2FF',
    roles: [
      {
        name: 'Organization Leaders',
        desc: 'Provide vision and direction based on diagnostic findings',
      },
      {
        name: 'Program Office',
        desc: 'Develops roadmaps using Economic View (ROI analysis) and Systems Thinking (big picture)',
      },
      {
        name: 'Architecture Review Board (ARB)',
        desc: 'Confirms system architecture is robust and approves plans before hand-over to build teams',
      },
      {
        name: 'Voice of Customer (VOC) & Voice of Marketplace (VOM)',
        desc: 'Inform requirements and strategic direction',
      },
    ],
  },
  {
    number: '02',
    title: 'Agile Design, Build, Test',
    color: '#1D4ED8',
    bg: '#EFF6FF',
    badge: 'Continuous Value Delivery',
    roles: [
      {
        name: 'Product Owners / Product Managers',
        desc: 'Drive adherence to the roadmap and manage the product backlog',
      },
      {
        name: 'Backlog',
        desc: 'Actively managed to ensure continuous flow of features and enablers scoped to build teams',
      },
      {
        name: 'Agile Build Teams',
        desc: 'Develop incremental features in sprint cycles; iterative process with tested features delivered against the roadmap plan',
      },
      {
        name: 'Scrum Masters',
        desc: 'Manage build teams, remove roadblocks, and ensure cadence is consistent with delivering to roadmap',
      },
    ],
    quote: '"Develop on cadence / Deliver on demand"',
  },
  {
    number: '03',
    title: 'Deploy & Adopt Users',
    color: '#0D9488',
    bg: '#F0FDFA',
    roles: [
      {
        name: 'Business Leaders',
        desc: 'Sign off on delivery requirements and confirm readiness for adoption',
      },
      {
        name: 'Release Management',
        desc: 'Schedules release, coordinates deployment logistics, and verifies all dependencies are met',
      },
      {
        name: 'Change Management Team',
        desc: 'Ensures end users are prepared, trained, and supported through the transition',
      },
      {
        name: 'VOC / VOB Feedback',
        desc: 'Captures user and business feedback to feed into Stage 1, creating a continuous improvement cycle',
      },
    ],
  },
] as const;

export default function AgileLifecycle() {
  return (
    <ScrollReveal>
      <div className="my-8">
        {/* Title bar */}
        <div style={{ background: '#1E1B4B', borderRadius: '10px 10px 0 0', padding: '0.7rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
            Solution Development Lifecycle
          </div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', fontWeight: 500 }}>
            Agile Development Methods
          </div>
        </div>

        {/* Three-column stage layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', border: '1px solid #E5E7EB', borderTop: 'none', borderRadius: '0 0 10px 10px', overflow: 'hidden' }}>
          {stages.map((stage, si) => (
            <div
              key={si}
              style={{ borderRight: si < stages.length - 1 ? '1px solid #E5E7EB' : 'none', display: 'flex', flexDirection: 'column' }}
            >
              {/* Column header */}
              <div style={{ background: stage.color, padding: '0.6rem 1rem' }}>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.63rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Stage {stage.number}
                </div>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '0.88rem', marginTop: '0.15rem' }}>
                  {stage.title}
                </div>
                {'badge' in stage && stage.badge && (
                  <div style={{ marginTop: '0.4rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.63rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: 20, letterSpacing: '0.04em' }}>
                    <span style={{ fontSize: '0.75rem' }}>↻</span> {stage.badge}
                  </div>
                )}
              </div>

              {/* Role cards */}
              <div style={{ background: stage.bg, padding: '0.65rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {stage.roles.map((role, ri) => (
                  <div
                    key={ri}
                    style={{ background: 'white', borderRadius: 6, padding: '0.5rem 0.65rem', border: `1px solid ${stage.color}25` }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.76rem', color: stage.color, marginBottom: '0.2rem' }}>
                      {role.name}
                    </div>
                    <div style={{ fontSize: '0.73rem', color: '#6B7280', lineHeight: 1.45 }}>
                      {role.desc}
                    </div>
                  </div>
                ))}

                {'quote' in stage && stage.quote && (
                  <div style={{ marginTop: 'auto', paddingTop: '0.6rem', borderTop: `1px dashed ${stage.color}40`, textAlign: 'center', fontSize: '0.74rem', fontStyle: 'italic', color: stage.color, fontWeight: 600, lineHeight: 1.4 }}>
                    {stage.quote}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Feedback loop */}
        <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.55rem 1rem', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#1E1B4B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ color: 'white', fontSize: '0.85rem', lineHeight: 1 }}>↺</span>
          </div>
          <div style={{ flex: 1, fontSize: '0.78rem', color: '#374151' }}>
            <span style={{ fontWeight: 700 }}>Feedback Loop</span>
            <span style={{ color: '#6B7280' }}> — to adjust plans based on business dynamics</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.68rem', whiteSpace: 'nowrap', color: '#9CA3AF', gap: '0.2rem' }}>
            <span style={{ background: '#F0FDFA', color: '#0D9488', padding: '0.15rem 0.45rem', borderRadius: 4, fontWeight: 600 }}>Stage 3</span>
            <span>→</span>
            <span style={{ background: '#EEF2FF', color: '#4F46E5', padding: '0.15rem 0.45rem', borderRadius: 4, fontWeight: 600 }}>Stage 1</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
