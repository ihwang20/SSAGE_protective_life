import ScrollReveal from '../ScrollReveal';

const branches = [
  {
    label: 'Dispatch & Routing',
    color: '#4F46E5',
    bg: '#EEF2FF',
    sub: ['Geographic routing mismatch', 'Skill-to-job misalignment'],
  },
  {
    label: 'Technician Capability',
    color: '#0891B2',
    bg: '#ECFEFF',
    sub: ['Training completion gaps', 'Workforce experience shift'],
  },
  {
    label: 'Parts Availability',
    color: '#16A34A',
    bg: '#DCFCE7',
    sub: ['Truck stock-out rates', 'Inventory forecast misalignment'],
  },
  {
    label: 'Job Complexity',
    color: '#D97706',
    bg: '#FEF3C7',
    sub: ['Multi-issue service calls', 'New service type gaps'],
  },
  {
    label: 'Customer & Scheduling',
    color: '#9333EA',
    bg: '#F3E8FF',
    sub: ['Narrow appointment windows', 'Incomplete pre-visit data'],
  },
];

export default function IssuesTreeDiagram() {
  return (
    <ScrollReveal>
      <div className="my-6" style={{ overflowX: 'auto' }}>
        {/* Root node */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            background: '#1E1B4B',
            color: 'white',
            padding: '10px 28px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.85rem',
            textAlign: 'center',
            lineHeight: 1.4,
          }}>
            Why is Metro Cable's First-Visit Resolution Rate Declining?
            <div style={{ fontSize: '0.72rem', fontWeight: 400, color: '#C7D2FE', marginTop: '2px' }}>
              78% → 62% over 12 months
            </div>
          </div>
        </div>

        {/* Stem from root down */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 2, height: 14, background: '#CBD5E1' }} />
        </div>

        {/* Horizontal connector bar — aligned to centers of outer branches */}
        <div style={{ position: 'relative', marginLeft: '10%', marginRight: '10%' }}>
          <div style={{ height: 2, background: '#CBD5E1' }} />

          {/* L1 branches */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
            {branches.map((branch, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Vertical stem from horizontal bar down to L1 node */}
                <div style={{ width: 2, height: 14, background: '#CBD5E1' }} />

                {/* L1 node card */}
                <div style={{
                  width: '100%',
                  background: branch.bg,
                  border: `1.5px solid ${branch.color}50`,
                  borderRadius: '6px',
                  padding: '8px 7px',
                }}>
                  <div style={{
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    color: branch.color,
                    marginBottom: '6px',
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}>
                    {branch.label}
                  </div>

                  {/* Vertical stem inside L1 to L2 items */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: 1, height: 10, background: `${branch.color}50` }} />
                  </div>

                  {/* L2 sub-issues */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {branch.sub.map((s, si) => (
                      <div key={si} style={{
                        background: 'white',
                        border: `1px solid ${branch.color}30`,
                        borderRadius: '4px',
                        padding: '4px 6px',
                        fontSize: '0.65rem',
                        color: '#374151',
                        lineHeight: 1.3,
                      }}>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ fontSize: '0.7rem', color: '#9CA3AF', marginTop: '0.6rem', textAlign: 'center', fontStyle: 'italic' }}>
          Each L1 branch becomes a testable area of investigation. Each L2 sub-issue generates one or more hypotheses.
        </p>
      </div>
    </ScrollReveal>
  );
}
