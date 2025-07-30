import bieImage from '../assets/brand-logos/bie.jpg';
import dclImage from '../assets/brand-logos/dcl.png';
import leagueImage from '../assets/brand-logos/league.png';
import nikeImage from '../assets/brand-logos/nike.jpg';
import rndhImage from '../assets/brand-logos/rndh.png';
import tantanImage from '../assets/brand-logos/tantan.png';
import tencentImage from '../assets/brand-logos/tencent.png';
import workingImage from '../assets/brand-logos/working-nation.png';

const logos = [
  { id: 'bie', src: bieImage, alt: 'BIE' },
  { id: 'dcl', src: dclImage, alt: 'DCL' },
  { id: 'league', src: leagueImage, alt: 'League' },
  { id: 'nike', src: nikeImage, alt: 'Nike' },
  { id: 'rndh', src: rndhImage, alt: 'RNDH' },
  { id: 'tantan', src: tantanImage, alt: 'Tantan' },
  { id: 'tencent', src: tencentImage, alt: 'Tencent' },
  { id: 'working', src: workingImage, alt: 'Working Nation' },
];

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Ideas start with a hello:</h1>
      <a href="mailto:mgchelle93@gmail.com" style={styles.email}>
        mgchelle93@gmail.com
      </a>

      <div style={styles.logoGrid}>
        {logos.map(({ id, src, alt }) => (
          <div key={id} style={styles.logoItem}>
            <img src={src} alt={alt} style={styles.logoImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '80px 20px',
    textAlign: 'center',
    color: 'white',
  },
  heading: {
    fontSize: '2.25rem',
    marginBottom: '10px',
  },
  email: {
    display: 'inline-block',
    fontSize: '2rem',
    marginBottom: '40px',
    color: '#ffffff',
    textDecoration: 'underline',
    wordBreak: 'break-word',
  },
  logoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '30px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  logoImage: {
    maxHeight: '60px',
    maxWidth: '100%',
    objectFit: 'contain',
  },
};

export default ContactPage;
