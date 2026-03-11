import { NavLink } from 'react-router-dom';
import { ClipboardCheck, Lock } from 'lucide-react';
import type { LessonStatus } from '@playbook/shared';

interface SidebarNavItemProps {
  to: string;
  title: string;
  status: LessonStatus;
  isModule?: boolean;
  isKnowledgeCheck?: boolean;
  locked?: boolean;
}

function StatusDot({ status, isKnowledgeCheck, locked, isActive }: {
  status: LessonStatus;
  isKnowledgeCheck?: boolean;
  locked?: boolean;
  isActive?: boolean;
}) {
  if (locked) return <Lock size={13} className="text-text-secondary/40 flex-shrink-0" />;
  if (isKnowledgeCheck) return <ClipboardCheck size={15} className="text-primary flex-shrink-0" />;

  if (status === 'completed') {
    return (
      <span className="w-4 h-4 rounded-full bg-success border-2 border-success flex-shrink-0 flex items-center justify-center">
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
          <polyline points="1,3 3,5 7,1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (isActive || status === 'in_progress') {
    return <span className="w-4 h-4 rounded-full border-2 border-primary bg-primary/10 flex-shrink-0" />;
  }
  return <span className="w-4 h-4 rounded-full border-2 border-border flex-shrink-0" />;
}

export default function SidebarNavItem({ to, title, status, isKnowledgeCheck, locked }: SidebarNavItemProps) {
  if (locked) {
    return (
      <span
        className="flex items-center gap-2.5 py-2.5 pl-[42px] pr-5 text-sm text-text-secondary/50 cursor-not-allowed border-l-[3px] border-transparent"
        title="Complete previous lessons to unlock"
      >
        <StatusDot status={status} isKnowledgeCheck={isKnowledgeCheck} locked />
        <span className="truncate">{title}</span>
      </span>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2.5 py-2.5 pl-[42px] pr-5 text-sm transition-colors border-l-[3px] ${
          isActive
            ? 'border-l-primary bg-primary/[0.06] text-primary font-semibold'
            : 'border-l-transparent text-text-secondary hover:bg-primary/[0.04] hover:text-primary'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <StatusDot status={status} isKnowledgeCheck={isKnowledgeCheck} isActive={isActive} />
          <span className="truncate">{title}</span>
        </>
      )}
    </NavLink>
  );
}
