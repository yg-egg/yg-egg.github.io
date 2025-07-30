import FilmCard from '../components/FilmCard.jsx';

import englishImage from '../assets/fiction/english.jpg';
import lacedImage from '../assets/fiction/laced.jpg';
import letsImage from '../assets/fiction/lets.jpg';
import onceImage from '../assets/fiction/once.jpg';
import swimImage from '../assets/fiction/swim.jpg';
import ubuntuImage from '../assets/fiction/ubuntu.jpeg';
import zmanImage from '../assets/fiction/zman.jpg';

const fictions = [
  {
    role: 'Director',
    title: 'English Lessons',
    summary: 'Winner of "Best Short - Horror/Thriller" at Asians on Film Festival.',
    photo: englishImage,
    link: 'https://youtu.be/B3MhO6-dta0',
  },
  {
    role: 'Assistant Production Coordinator',
    title: 'Let\s Scare Julie',
    summary:
      'When a group of teen girls sets out to scare their reclusive new neighbor, what seemed like a simple prank goes horribly wrong.',
    photo: letsImage,
    link: 'https://youtu.be/BCjAtp9nYzY',
  },
  {
    role: 'Editor',
    title: 'Z Man',
    summary:
      'After a 7-year-old boy witnesses a crime in his South Central neighborhood, he dresses up as a superhero to ensure the safety of his community.',
    photo: zmanImage,
    link: 'https://youtu.be/PCwkqGIzekQ',
  },
  {
    role: 'Editor',
    title: 'Laced',
    summary: 'An Urbanworld Revolt! Young Filmmaker Showcase Finalist.',
    photo: lacedImage,
    link: 'https://youtu.be/QS-DfU0EISU',
  },
  {
    role: 'Editor',
    title: 'Ubuntu',
    summary: 'Winner of “People’s Choice Awards” at The Mosquers Film Festival.',
    photo: ubuntuImage,
    link: 'https://youtu.be/GBmhsQ3YgqU',
  },
  {
    role: 'Editor',
    title: 'Once Upon a Time in a Haunted House',
    summary: 'Winner of Best Horror at LA Shorts.',
    photo: onceImage,
    link: 'https://youtu.be/rqD05nfdIxE',
  },
];

export default function FictionPage() {
  return (
    <div style={pageStyles.container}>
      {fictions.map(({ photo, link, role, title, summary }) => (
        <FilmCard
          key={title}
          role={role}
          title={title}
          summary={summary}
          photo={photo}
          link={link}
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
