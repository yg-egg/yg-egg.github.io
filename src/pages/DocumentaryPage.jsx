import FilmCard from '../components/FilmCard.jsx';

const documentaries = [
  {
    videoId: 'DblsK5NO6-k',
    role: 'Writer',
    title: 'Cycles',
    summary: 'A short documentary on bike life and African American imprisonment.',
  },
  {
    videoId: '1',
    role: 'Director',
    title: 'Into Miles',
    summary: 'An 1-hour documentary featuring multinational idol group into 1, generating approx. 10 million views and over 6000 comments on Tencent Video.',
  },
  {
    videoId: '2',
    role: 'Director',
    title: 'Love at the Golden Age',
    summary: 'A promotional doc for dating app TanTan. These senior dancehall regulars\' outlook on love and relationship may surprise many. ',
  },
  {
    videoId: '3',
    role: 'Editor',
    title: 'WorkingNation Veteran Series',
    summary: 'A short documentary on the struggles veteran face returning to civilian life.',
  },
  {
    videoId: '4',
    role: 'Editor',
    title: 'Ronald McDonald House Mother\'s Day Special',
    summary: 'A charity piece comissioned by Ronald McDonald House Bay Area to raise money for the program.',
  },
  {
    videoId: '5',
    role: 'Director',
    title: 'Home at Last',
    summary: 'A documentary of the struggles of a family with an autistic boy. Placed as Semifinalist for the Student Academy Award.',
  },
  {
    videoId: '6',
    role: 'Editor',
    title: 'LPL Esports Camp',
    summary: 'Episode 3 of a documentary series on the journey of a group of teenagers in the LPL Esports Summer Camp. Commissioned by Bilibili.',
  },
  {
    videoId: '7',
    role: 'Editor',
    title: 'Mongolian Horseman',
    summary: 'A sizzle for Oscar winner Bira Mart. Since then, the project successfully launched as a feature film. It is currently in post-production.',
  },
  {
    videoId: '8',
    role: 'Editor',
    title: 'Face of a Nation',
    summary: 'A documentary centered on America\'s failure to participate in the World\'s Fair.',
  },
];

export default function DocumentaryPage() {
  return (
    <div style={pageStyles.container}>
      {documentaries.map(({ videoId, role, title, summary }) => (
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
