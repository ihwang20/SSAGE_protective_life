import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCourse } from '../../context/CourseContext';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

interface TopBarProps {
  onSidebarToggle: () => void;
}

export default function TopBar({ onSidebarToggle }: TopBarProps) {
  const { course, navTree } = useCourse();
  const { theme } = useTheme();
  const { user, logout } = useAuth();

  const completedPercent = navTree
    ? Math.round((navTree.completed_lessons / Math.max(navTree.total_lessons, 1)) * 100)
    : 0;

  const orgName = theme?.organization_name || 'Protective Life';
  const orgMark = orgName
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-primary">
      <div className="flex items-center h-[60px] px-6 gap-4">
        {/* Hamburger / sidebar toggle */}
        <button
          onClick={onSidebarToggle}
          className="flex flex-col gap-[5px] p-2 text-primary flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Toggle sidebar"
        >
          <span className="block w-[22px] h-[2px] bg-current rounded-sm" />
          <span className="block w-[22px] h-[2px] bg-current rounded-sm" />
          <span className="block w-[22px] h-[2px] bg-current rounded-sm" />
        </button>

        {/* Logo mark + org name */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0 no-underline">
          <div className="w-9 h-9 bg-primary rounded text-white flex items-center justify-center text-[13px] font-bold tracking-tight leading-none">
            {orgMark}
          </div>
          <div className="hidden sm:block text-[13px] font-bold text-primary leading-tight max-w-[130px]">
            {orgName}
          </div>
        </Link>

        {/* Course title */}
        <div className="flex-1 text-sm font-semibold text-text-secondary truncate hidden md:block">
          {course?.title}
        </div>

        {/* Progress bar + label */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <div className="w-[180px] h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-in-out"
              style={{
                width: `${completedPercent}%`,
                background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
              }}
            />
          </div>
          <span className="text-xs text-text-secondary whitespace-nowrap">{completedPercent}%</span>
        </div>

        {/* User avatar + logout */}
        {user && (
          <div className="flex items-center gap-2 ml-1 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center">
              <span className="text-xs font-bold text-primary leading-none">
                {user.name?.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase() || '?'}
              </span>
            </div>
            <button
              onClick={logout}
              className="p-1.5 rounded-md hover:bg-surface transition-colors text-text-secondary hover:text-text-primary"
              aria-label="Log out"
              title="Log out"
            >
              <LogOut size={16} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
