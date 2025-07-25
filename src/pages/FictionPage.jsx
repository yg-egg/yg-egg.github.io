import FilmCard from '../components/FilmCard.jsx';

const fictions = [
  {
    videoId: 'DblsK5NO6-k',
    role: 'Director',
    title: 'English Lessons',
    summary: 'Winner of "Best Short - Horror/Thriller" at Asians on Film Festival.',
  },
  {
    videoId: '1',
    role: 'Assistant Production Coordinator',
    title: 'Let\s Scare Julie',
    summary: 'When a group of teen girls sets out to scare their reclusive new neighbor, what seemed like a simple prank goes horribly wrong.',
  },
  {
    videoId: '2',
    role: 'Editor',
    title: 'Z Man',
    summary: 'After a 7-year-old boy witnesses a crime in his South Central neighborhood, he dresses up as a superhero to ensure the safety of his community.',
  },
  {
    videoId: '3',
    role: 'Editor',
    title: 'Laced',
    summary: 'An Urbanworld Revolt! Young Filmmaker Showcase Finalist.',
  },
  {
    videoId: '4',
    role: 'Editor',
    title: 'Ubuntu',
    summary: 'Winner of “People’s Choice Awards” at The Mosquers Film Festival.',
  },
  {
    videoId: '5',
    role: 'Editor',
    title: 'Once Upon a Time in a Haunted House',
    summary: 'Winner of Best Horror at LA Shorts.',
  }
];

export default function FictionPage() {
  return (
    <div style={pageStyles.container}>
      {fictions.map(({ videoId, role, title, summary }) => (
        <FilmCard
          key={videoId}
          videoId={videoId}
          role={role}
          title={title}
          summary={summary}
        />
      ))}
    </div>
  );
}

const pageStyles = {
  container: {
    maxWidth: '1200px',
    margin: '40px auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
  },
};
