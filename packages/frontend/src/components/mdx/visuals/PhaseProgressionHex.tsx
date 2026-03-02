import React from 'react';
import ScrollReveal from '../ScrollReveal';

export default function PhaseProgressionHex() {
  const phases = [
    { name: 'Diagnose Data', description: 'Connect to data sources, surface patterns and anomalies', color: '#93C5FD', textColor: '#3B82F6', startCol: 1, filled: new Set([2, 6, 8]) },
    { name: 'Prioritize Opps', description: 'Rank based on impact, feasibility, criticality', color: '#6366F1', textColor: '#6366F1', startCol: 2, filled: new Set([0, 3, 5, 7, 9]) },
    { name: 'Design & Prototype', description: 'Create and test AI-powered solutions', color: '#4338CA', textColor: '#4338CA', startCol: 3, filled: new Set([0, 1, 3, 4, 5, 7, 8, 10]) },
    { name: 'Implement Solutions', description: 'Deploy through Agile delivery methods', color: '#22C55E', textColor: '#16A34A', startCol: 4, filled: new Set([0, 1, 2, 3, 4, 5, 6, 8, 9]) },
    { name: 'Sustain Improvements', description: 'Monitor, govern, and continuously improve', color: '#9CA3AF', textColor: '#6B7280', startCol: 3, filled: new Set([0, 1, 2, 3, 4, 5, 6, 7, 9, 10]) },
    { name: 'Change Management', description: 'Enable organizational readiness and adoption', color: '#4B5563', textColor: '#4B5563', startCol: 0, filled: new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) },
  ];

  const TOTAL_COLS = 14;
  const r = 18;
  const sw = Math.sqrt(3);
  const hexW = r * sw;
  const rowH = r * 2 + 14;

  const hexPoints = (cx: number, cy: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (i * 60 + 30) * Math.PI / 180;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(' ');

  return (
    <ScrollReveal>
      <div className="my-8">
        <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1E1B4B', marginBottom: '0.25rem' }}>
          AI-Enabled Problem Solving — Phase Progression
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#6B7280', marginBottom: '1rem' }}>
          Effective AI-enabled problem solving requires progressively broader engagement — from targeted data diagnosis to organization-wide change management.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {phases.map((phase, row) => {
            const numCols = TOTAL_COLS - phase.startCol;
            const leftPad = phase.startCol * hexW;
            const localW = numCols * hexW + hexW * 0.5;
            return (
              <React.Fragment key={row}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
                  <div style={{ width: 220, flexShrink: 0, textAlign: 'right', paddingRight: '8px', lineHeight: 1.2 }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: phase.textColor }}>{phase.name}</div>
                    <div style={{ fontSize: '0.72rem', color: '#9CA3AF', marginTop: '2px' }}>{phase.description}</div>
                  </div>
                  <div style={{ paddingLeft: leftPad, flexShrink: 0 }}>
                    <svg viewBox={`0 0 ${localW} ${rowH}`} preserveAspectRatio="xMinYMid meet" style={{ width: localW, height: rowH, display: 'block' }}>
                      {Array.from({ length: numCols }, (_, col) => {
                        const cx = col * hexW + hexW / 2;
                        const cy = r + 1;
                        const isFilled = phase.filled.has(col);
                        return (
                          <polygon
                            key={col}
                            points={hexPoints(cx, cy)}
                            fill={isFilled ? phase.color : 'none'}
                            stroke={isFilled ? phase.color : '#D1D5DB'}
                            strokeWidth={isFilled ? 1.5 : 1}
                            opacity={isFilled ? 0.9 : 0.35}
                          />
                        );
                      })}
                    </svg>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}
