import type { ReactNode } from 'react';

type CalloutType = 'tip' | 'concept' | 'warning' | 'note';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const defaultTitles: Record<CalloutType, string> = {
  tip: 'Tip',
  concept: 'Key Concept',
  warning: 'Warning',
  note: 'Note',
};

const icons: Record<CalloutType, string> = {
  concept: '🔑',
  tip: '💡',
  warning: '⚠️',
  note: 'ℹ️',
};

export default function Callout({ type = 'note', title, children }: CalloutProps) {
  return (
    <div className={`callout ${type}`}>
      <div className="callout-header">
        <span className="callout-icon">{icons[type]}</span>
        {title || defaultTitles[type]}
      </div>
      <div>{children}</div>
    </div>
  );
}
