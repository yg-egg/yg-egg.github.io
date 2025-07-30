import logoCollageImage from '../assets/brand-logos/logos.png';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Ideas start with a hello:</h1>
      <a href="mailto:mgchelle93@gmail.com" style={styles.email}>
        mgchelle93@gmail.com
      </a>

      <img src={logoCollageImage} alt="Brand Logos" style={styles.logos} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
    color: 'white',
  },
  heading: {
    fontSize: '2.25rem',
    marginBottom: '10px',
    marginTop: '0',
  },
  email: {
    display: 'inline-block',
    fontSize: '2rem',
    marginBottom: '40px',
    color: '#ffffff',
    textDecoration: 'underline',
    wordBreak: 'break-word',
  },
  logos: {
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    marginTop: '5rem',
  },
};

export default ContactPage;
