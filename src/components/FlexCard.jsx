export default function FlexCard({ photo, link, wide = false }) {
  const containerStyle = {
    width: '100%',
    maxWidth: wide ? '100%' : '300px',
    margin: '0 auto',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '12px',
    display: 'block',
    maxHeight: wide ? 'none' : '500px',
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={containerStyle}
    >
      <img src={photo} alt="" style={imageStyle} />
    </a>
  );
}
