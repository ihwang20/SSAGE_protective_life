import { ChevronLeft, ChevronRight, ClipboardCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LessonNavProps {
  courseSlug: string;
  prevLesson?: { moduleSlug: string; slug: string; title: string } | null;
  nextLesson?: { moduleSlug: string; slug: string; title: string } | null;
  knowledgeCheckLink?: string | null;
  currentIndex: number;
  totalLessons: number;
  minTimeRemaining?: number;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}:${String(s).padStart(2, '0')}` : `${s}s`;
}

export default function LessonNav({
  courseSlug,
  prevLesson,
  nextLesson,
  knowledgeCheckLink,
  currentIndex,
  totalLessons,
  minTimeRemaining = 0,
}: LessonNavProps) {
  const forwardBlocked = minTimeRemaining > 0;

  const forwardButton = () => {
    if (forwardBlocked) {
      return (
        <button
          disabled
          className="flex flex-col items-end gap-0.5 px-5 py-2.5 text-sm bg-primary/40 text-white rounded-button cursor-not-allowed"
          title={`Read for ${formatTime(minTimeRemaining)} more before continuing`}
        >
          <span className="flex items-center gap-2 font-semibold">
            <Clock size={14} />
            {formatTime(minTimeRemaining)}
          </span>
        </button>
      );
    }

    if (nextLesson) {
      return (
        <Link
          to={`/courses/${courseSlug}/modules/${nextLesson.moduleSlug}/lessons/${nextLesson.slug}`}
          className="flex flex-col items-end gap-0.5 px-5 py-2.5 text-sm bg-primary text-white hover:bg-primary-hover transition-colors rounded-button border-2 border-primary hover:border-primary-hover"
        >
          <span className="flex items-center gap-2 font-semibold">
            Next
            <ChevronRight size={16} />
          </span>
          <span className="text-[11px] font-normal opacity-70 truncate max-w-[180px]">{nextLesson.title}</span>
        </Link>
      );
    }

    if (knowledgeCheckLink) {
      return (
        <Link
          to={knowledgeCheckLink}
          className="flex flex-col items-end gap-0.5 px-5 py-2.5 text-sm bg-primary text-white rounded-button border-2 border-primary hover:bg-primary-hover hover:border-primary-hover transition-colors"
        >
          <span className="flex items-center gap-2 font-semibold">
            <ClipboardCheck size={15} />
            Knowledge Check
          </span>
          <span className="text-[11px] font-normal opacity-70">Test your understanding</span>
        </Link>
      );
    }

    return (
      <Link
        to={`/courses/${courseSlug}/completion`}
        className="flex flex-col items-end gap-0.5 px-5 py-2.5 text-sm bg-success text-white rounded-button border-2 border-success hover:opacity-90 transition-opacity"
      >
        <span className="font-semibold">Complete Course</span>
        <span className="text-[11px] font-normal opacity-70">You've finished all lessons</span>
      </Link>
    );
  };

  return (
    <div className="flex items-center justify-between py-8 mt-8 border-t border-border" data-print-hide>
      {prevLesson ? (
        <Link
          to={`/courses/${courseSlug}/modules/${prevLesson.moduleSlug}/lessons/${prevLesson.slug}`}
          className="flex flex-col items-start gap-0.5 px-5 py-2.5 text-sm bg-white text-primary hover:bg-surface transition-colors rounded-button border-2 border-primary"
        >
          <span className="flex items-center gap-2 font-semibold">
            <ChevronLeft size={16} />
            Previous
          </span>
          <span className="text-[11px] font-normal text-text-secondary truncate max-w-[180px]">{prevLesson.title}</span>
        </Link>
      ) : (
        <div />
      )}

      <span className="text-xs text-text-secondary">
        {currentIndex} / {totalLessons}
      </span>

      {forwardButton()}
    </div>
  );
}
