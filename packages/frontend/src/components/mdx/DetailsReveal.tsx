import { type ReactNode } from 'react';

interface DetailsRevealProps {
  summary: string;
  children: ReactNode;
}

export default function DetailsReveal({ summary, children }: DetailsRevealProps) {
  return (
    <details
      style={{
        border: '1px solid #E5E7EB',
        borderRadius: '6px',
        overflow: 'hidden',
        marginBottom: '0.75rem',
      }}
    >
      <summary
        style={{
          padding: '0.55rem 0.9rem',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '0.82rem',
          color: '#4F46E5',
          backgroundColor: '#F5F3FF',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          userSelect: 'none',
          listStyle: 'none',
        }}
      >
        <span style={{ fontSize: '0.65rem', transition: 'transform 0.2s' }}>▶</span>
        {summary}
      </summary>
      <div
        style={{
          padding: '0.75rem 0.9rem',
          backgroundColor: '#fff',
          fontSize: '0.85rem',
          color: '#374151',
          lineHeight: 1.6,
          borderTop: '1px solid #E5E7EB',
        }}
      >
        {children}
      </div>
    </details>
  );
}
