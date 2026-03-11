import type { ReactNode } from 'react';

interface BeforeAfterProps {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
}

function toBullets(content: ReactNode) {
  if (typeof content !== 'string') return <div>{content}</div>;
  const items = content.split('. ').map(s => s.trim()).filter(Boolean);
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function BeforeAfter({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterProps) {
  return (
    <div className="before-after">
      <div className="ba-panel before">
        <div className="ba-label">{beforeLabel}</div>
        {toBullets(before)}
      </div>
      <div className="ba-panel after">
        <div className="ba-label">{afterLabel}</div>
        {toBullets(after)}
      </div>
    </div>
  );
}
