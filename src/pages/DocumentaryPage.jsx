import FilmCard from '../components/FilmCard.jsx';

import cyclesImg from '../assets/documentary/cycles.jpg';
import intoImage from '../assets/documentary/into.jpg';
import loveImage from '../assets/documentary/love.png';
import workingImage from '../assets/documentary/working.png';
import mcdonaldsImage from '../assets/documentary/mcdonalds.png';
import homeImage from '../assets/documentary/home.jpg';
import leagueImage from '../assets/documentary/league.png';
import mongolianImage from '../assets/documentary/mongolian.png';
import faceImage from '../assets/documentary/face.jpg';

const documentaries = [
  {
    role: 'Writer',
    title: 'Cycles',
    summary: 'A short documentary on bike life and African American imprisonment.',
    photo: cyclesImg,
    link: 'https://www.youtube.com/watch?v=DblsK5NO6-k&list=PLnk3xF794N6Bu9G8P7pBtksWJ9RKXP3h3&index=9',
  },
  {
    role: 'Director',
    title: 'Into Miles',
    summary:
      'An 1-hour documentary featuring multinational idol group into 1, generating approx. 10 million views and over 6000 comments on Tencent Video.',
    photo: intoImage,
    link: 'https://www.youtube.com/watch?v=N9eTrNVciIY',
  },
  {
    videoId: '2',
    role: 'Director',
    title: 'Love at the Golden Age',
    summary:
      "A promotional doc for dating app TanTan. These senior dancehall regulars' outlook on love and relationship may surprise many. ",
    photo: loveImage,
    link: 'https://youtu.be/B1lfyhoSV-o?si=3AWhMNLruYnsIgMt',
  },
  {
    videoId: '3',
    role: 'Editor',
    title: 'WorkingNation Veteran Series',
    summary: 'A short documentary on the struggles veteran face returning to civilian life.',
    photo: workingImage,
    link: 'https://youtu.be/Rm_inGo1T3Q?si=kyc-gEiYuQM6iy9x',
  },
  {
    videoId: '4',
    role: 'Editor',
    title: "Ronald McDonald House Mother's Day Special",
    summary:
      'A charity piece comissioned by Ronald McDonald House Bay Area to raise money for the program.',
    photo: mcdonaldsImage,
    link: 'https://youtu.be/fXlCVIxFbqg?si=CXlVMVOEkMhg5Czg',
  },
  {
    videoId: '5',
    role: 'Director',
    title: 'Home at Last',
    summary:
      'A documentary of the struggles of a family with an autistic boy. Placed as Semifinalist for the Student Academy Award.',
    photo: homeImage,
    link: 'https://youtu.be/ILZTK-Eax4g?si=xN-Cc3x-aJRkXHP0',
  },
  {
    videoId: '6',
    role: 'Editor',
    title: 'LPL Esports Camp',
    summary:
      'Episode 3 of a documentary series on the journey of a group of teenagers in the LPL Esports Summer Camp. Commissioned by Bilibili.',
    photo: leagueImage,
    link: 'https://youtu.be/I7CsTISoDrY',
  },
  {
    videoId: '7',
    role: 'Editor',
    title: 'Mongolian Horseman',
    summary:
      'A sizzle for Oscar winner Bira Mart. Since then, the project successfully launched as a feature film. It is currently in post-production.',
    photo: mongolianImage,
    link: 'https://youtu.be/sbIWaIyqVD0?si=4pcaQSiAH09Nno_6',
  },
  {
    videoId: '8',
    role: 'Editor',
    title: 'Face of a Nation',
    summary: "A documentary centered on America's failure to participate in the World's Fair.",
    photo: faceImage,
    link: 'https://youtu.be/7i0zYBycAXM?si=AN1raqQQJAs7f2UX',
  },
];

export default function DocumentaryPage() {
  return (
    <div style={pageStyles.container}>
      {documentaries.map(({ role, title, summary, photo, link }) => (
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
