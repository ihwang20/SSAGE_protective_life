interface UserStoryProps {
  title: string;
  badge?: string;
  as: string;
  acceptanceCriteria?: string[];
}

export default function UserStory({ title, badge, as: asText, acceptanceCriteria }: UserStoryProps) {
  return (
    <div className="user-story">
      <h4>{title}{badge && <span className="feature-id">{badge}</span>}</h4>
      <div className="story-as">{asText}</div>
      {acceptanceCriteria && (
        <div>
          <div className="story-ac-title">Acceptance Criteria</div>
          <ul className="story-ac">
            {acceptanceCriteria.map((ac, i) => <li key={i}>{ac}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
