import Markdown from 'react-markdown';

interface PromptExampleProps {
  prompt: string;
  response: string;
  model?: string;
}

export default function PromptExample({ prompt, response, model = 'AI' }: PromptExampleProps) {
  return (
    <div className="prompt-example">
      <div className="prompt-header">
        <span className="prompt-dot dot-red" />
        <span className="prompt-dot dot-yellow" />
        <span className="prompt-dot dot-green" />
        AI Prompt Example
      </div>
      <div className="prompt-body">
        <div className="chat-msg user">
          <div className="chat-role">You</div>
          <div className="chat-bubble">{prompt.replace(/\\n/g, '\n')}</div>
        </div>
        <div className="chat-msg ai">
          <div className="chat-role">{model}</div>
          <div className="chat-bubble">
            <Markdown>{response.replace(/\\n/g, '\n')}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
