import { useState } from 'react';

export default function FilmCard({ videoId, role, title, summary }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: isHovered ? 'scale(1.035)' : 'scale(1)',
        transition: 'transform 0.2s ease-in-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.videoWrapper}>
        {!!videoId && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&loop=1&playlist=${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <small style={styles.role}>{role}</small>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.summary}>{summary}</p>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    backgroundColor: 'rgba(0,0,0,0.55)',
    padding: '16px',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // 16:9
    height: 0,
    overflow: 'hidden',
    borderRadius: '8px',
  },
  role: {
    fontSize: '0.75rem',
    opacity: 0.8,
    marginTop: '8px',
  },
  title: {
    fontSize: '1.25rem',
    margin: '4px 0',
  },
  summary: {
    fontSize: '1rem',
    lineHeight: 1.4,
  },
};
