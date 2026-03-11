import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon?: string;
  title: string;
  badge?: string;
  children: ReactNode;
}

export default function FeatureCard({ icon, title, badge, children }: FeatureCardProps) {
  return (
    <div className="feature-card">
      {icon && <div className="feature-card-icon">{icon}</div>}
      <div>
        <h4>{title}{badge && <span className="feature-id">{badge}</span>}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}
