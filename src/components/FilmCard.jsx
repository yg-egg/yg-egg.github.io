import { useState } from 'react';

export default function FilmCard({ photo, role, title, summary, notes, link }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (link) window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      style={{
        ...styles.card,
        transform: isHovered ? 'scale(1.035)' : 'scale(1)',
        transition: 'transform 0.2s ease-in-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.imageWrapper}>
        <img src={photo} alt={title} style={styles.image} />
      </div>
      <small style={styles.role}>{role}</small>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.summary}>{summary}</p>
      {notes && <p style={styles.summary}>{notes}</p>}
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
  imageWrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom: '177.78%', // 9:16 aspect ratio
    overflow: 'hidden',
    borderRadius: '8px',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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
