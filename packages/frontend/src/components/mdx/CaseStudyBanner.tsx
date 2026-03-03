import { BookOpen } from 'lucide-react';
import { type ReactNode } from 'react';

interface CaseStudyBannerProps {
  children: ReactNode;
}

export default function CaseStudyBanner({ children }: CaseStudyBannerProps) {
  return (
    <details
      style={{
        border: '1.5px solid #F59E0B',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '1.5rem',
      }}
    >
      <summary
        style={{
          padding: '0.6rem 0.9rem',
          cursor: 'pointer',
          backgroundColor: '#FFFBEB',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          listStyle: 'none',
          userSelect: 'none',
        }}
      >
        <BookOpen size={16} color="#B45309" style={{ flexShrink: 0 }} />
        <div>
          <span style={{ fontWeight: 700, fontSize: '0.82rem', color: '#92400E' }}>
            Metro Cable Case Study Companion
          </span>
          <span style={{ fontSize: '0.75rem', color: '#B45309', marginLeft: '0.5rem' }}>
            — Suggested: expand and read first if new to this case study
          </span>
        </div>
      </summary>
      <div
        style={{
          padding: '0.85rem 1rem',
          backgroundColor: '#fff',
          borderTop: '1px solid #FDE68A',
          fontSize: '0.83rem',
          color: '#374151',
          lineHeight: 1.65,
        }}
      >
        {children}
      </div>
    </details>
  );
}
