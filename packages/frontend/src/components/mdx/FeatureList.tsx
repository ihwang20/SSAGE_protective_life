import type { ReactNode } from 'react';

export default function FeatureList({ children }: { children: ReactNode }) {
  return <div className="feature-list">{children}</div>;
}
