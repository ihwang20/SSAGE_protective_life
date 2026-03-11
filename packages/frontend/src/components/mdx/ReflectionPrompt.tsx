interface ReflectionPromptProps {
  question: string;
  answer?: string;
  children?: React.ReactNode;
}

export default function ReflectionPrompt({ question }: ReflectionPromptProps) {
  return (
    <div className="reflection">
      <div className="reflection-label">🪞 Reflection</div>
      <div className="reflection-question">{question}</div>
    </div>
  );
}
