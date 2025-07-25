export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center',
        fontSize: '0.9rem',
        marginTop: 'auto',
      }}
    >
      <div style={{ marginBottom: '10px' }}>Yimin Gu</div>
      <div style={{ marginBottom: '10px' }}>
        <a
          href="mailto:mgchelle93@gmail.com"
          style={{ color: 'white', textDecoration: 'underline' }}
        >
          mgchelle93@gmail.com
        </a>
      </div>
      <div>©2023 by Yimin Gu</div>
    </footer>
  );
}
