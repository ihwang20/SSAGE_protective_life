import { useState, useEffect } from 'react';
import {
  X, BookOpen, Search, ChevronDown, ChevronRight, ClipboardCheck,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useCourse } from '../../context/CourseContext';
import SidebarNavItem from './SidebarNavItem';

interface SidebarProps {
  open: boolean;
  collapsed: boolean;
  onClose: () => void;
  onCollapseToggle: () => void;
}

export default function Sidebar({ open, collapsed, onClose }: SidebarProps) {
  const { slug, moduleSlug } = useParams<{ slug: string; moduleSlug: string }>();
  const { navTree, loading } = useCourse();

  // Track which modules are expanded
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());

  // Auto-expand the current module
  useEffect(() => {
    if (moduleSlug) {
      setExpandedModules((prev) => {
        if (prev.has(moduleSlug)) return prev;
        const next = new Set(prev);
        next.add(moduleSlug);
        return next;
      });
    }
  }, [moduleSlug]);

  const toggleModule = (modSlug: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(modSlug)) next.delete(modSlug);
      else next.add(modSlug);
      return next;
    });
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed top-0 left-0 h-full z-50 transition-all duration-300 overflow-hidden
          bg-surface border-r border-border
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:sticky lg:top-[60px] lg:h-[calc(100vh-60px)] lg:z-auto
          ${collapsed ? 'lg:w-0 lg:border-r-0' : 'lg:translate-x-0 lg:w-[280px]'}
          w-[280px]`}
      >
        <div className="h-full overflow-y-auto flex flex-col">
          {/* Mobile header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border lg:hidden">
            <span className="font-semibold text-sm text-text-primary">Navigation</span>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-border text-text-secondary"
              aria-label="Close sidebar"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1" aria-label="Course navigation">
            {loading ? (
              <div className="px-5 py-8 text-sm text-text-secondary animate-pulse">
                Loading navigation...
              </div>
            ) : navTree ? (
              navTree.modules.map((mod) => {
                const isExpanded = expandedModules.has(mod.slug);
                const isActiveSection = mod.slug === moduleSlug;

                return (
                  <div key={mod.slug} className="border-b border-border">
                    {/* Section header */}
                    <button
                      onClick={() => toggleModule(mod.slug)}
                      className={`w-full flex items-center justify-between px-5 py-3.5 text-left transition-colors
                        hover:bg-primary/5
                        ${isActiveSection ? 'bg-primary/[0.08]' : ''}`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="inline-flex items-center justify-center text-[11px] font-bold text-primary bg-primary/10 rounded px-1.5 py-0.5 flex-shrink-0">
                          {mod.order}
                        </span>
                        <span className="text-xs font-semibold text-text-secondary leading-snug truncate">
                          {mod.title}
                        </span>
                      </div>
                      <span className="flex-shrink-0 ml-2 text-text-secondary/60">
                        {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      </span>
                    </button>

                    {/* Lesson items */}
                    {isExpanded && (
                      <div className="bg-white">
                        {mod.lessons.map((lesson) => (
                          <SidebarNavItem
                            key={lesson.slug}
                            to={`/courses/${slug}/modules/${mod.slug}/lessons/${lesson.slug}`}
                            title={lesson.title}
                            status={lesson.status}
                          />
                        ))}
                        {mod.has_knowledge_check && (
                          <SidebarNavItem
                            key={`${mod.slug}-kc`}
                            to={`/courses/${slug}/modules/${mod.slug}/knowledge-check`}
                            title="Knowledge Check"
                            status="not_started"
                            isKnowledgeCheck
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="px-5 py-8 text-sm text-text-secondary">No content available.</div>
            )}
          </nav>

          {/* Footer links */}
          <div className="border-t border-border p-4">
            {slug && (
              <>
                <Link
                  to={`/courses/${slug}/glossary`}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-text-secondary hover:bg-primary/5 hover:text-text-primary rounded transition-colors"
                >
                  <BookOpen size={15} className="text-primary" />
                  Glossary
                </Link>
                <Link
                  to={`/courses/${slug}/search`}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-text-secondary hover:bg-primary/5 hover:text-text-primary rounded transition-colors"
                >
                  <Search size={15} className="text-primary" />
                  Search
                </Link>
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
