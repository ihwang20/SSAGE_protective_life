interface Step {
  title: string;
  description?: string;
}

interface ProcessFlowProps {
  steps: Step[];
  activeStep?: number;
}

export default function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <div className="process-flow">
      {steps.map((step, i) => (
        <div key={i} className="process-step">
          <div className="step-num">{i + 1}</div>
          <div className="step-content">
            <h4>{step.title}</h4>
            {step.description && <p>{step.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
