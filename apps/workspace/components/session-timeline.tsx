import type { SessionPoint } from "@/lib/types";

export function SessionTimeline({ sessions }: { sessions: SessionPoint[] }) {
  if (sessions.length === 0) {
    return (
      <footer className="timeline timeline--empty">
        <span className="timeline__title">Session timeline</span>
        <span>No local longitudinal sessions yet.</span>
      </footer>
    );
  }

  return (
    <footer className="timeline">
      <span className="timeline__title">Session timeline</span>
      <div className="timeline__track">
        {sessions.map((session, index) => (
          <div className="timeline-point" key={session.id}>
            <span className={`timeline-point__dot timeline-point__dot--${session.kind}`} />
            <div>
              <strong>{session.label}</strong>
              <span>{session.detail}</span>
            </div>
            {index < sessions.length - 1 ? <span className="timeline-point__line" /> : null}
          </div>
        ))}
      </div>
    </footer>
  );
}
