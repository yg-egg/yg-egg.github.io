import { useState } from 'react';

export default function FlexCard({ photo, link }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (link) window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...styles.card,
        transform: isHovered ? 'scale(1.035)' : 'scale(1)',
        transition: 'transform 0.2s ease-in-out',
      }}
    >
      <div style={styles.imageWrapper}>
        <img src={photo} alt="branded content" style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'inline-block', // important for masonry effect
    marginBottom: '20px',
    width: '100%',
    transition: 'transform 0.2s ease-in-out',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    aspectRatio: '9 / 16', // natural vertical aspect ratio
  },
  image: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};
