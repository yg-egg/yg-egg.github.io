import { Link } from 'wouter';

export default function NotFoundPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Page Not Found</h2>
      <p style={styles.text}>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a style={styles.button}>Go Back Home</a>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '12px',
    maxWidth: '600px',
    margin: '40px auto',
    boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: '6rem',
    margin: 0,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '2rem',
    margin: '10px 0 20px',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: '12px 30px',
    fontSize: '1.1rem',
    textDecoration: 'none',
    borderRadius: '30px',
    boxShadow: '0 4px 15px rgba(74, 144, 226, 0.6)',
    transition: 'background-color 0.3s ease',
  },
  // Optional hover effect if using CSS-in-JS libs, or add in CSS:
  // You can add inline events or use CSS stylesheets to add hover effect.
};
