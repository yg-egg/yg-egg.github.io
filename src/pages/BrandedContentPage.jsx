import './BrandedContentPage.css';

import FlexCard from '../components/FlexCard.jsx';

import chunkyImage from '../assets/branded/chunky.png';
import vintageImage from '../assets/branded/vintage.png';
import pegasusImage from '../assets/branded/pegasus.png';
import jordantwoImage from '../assets/branded/jordantwo.png';
import jordanImage from '../assets/branded/jordan.png';
import flyeaseImage from '../assets/branded/flyease.png';
import dunkImage from '../assets/branded/dunk.jpg';
import idenfullImage from '../assets/branded/idenfull.png';
import iden2 from '../assets/branded/iden2.png';
import iden3 from '../assets/branded/iden3.png';

const brandedItems = [
  { id: 'b1', photo: chunkyImage, link: 'https://youtube.com/shorts/NPvd839UTX0?feature=share' },
  { id: 'b2', photo: vintageImage, link: 'https://youtube.com/shorts/wGlbdgs7_iw?feature=share' },
  { id: 'b3', photo: pegasusImage, link: 'https://youtube.com/shorts/uNOtnonsDEM?feature=share' },
  { id: 'b4', photo: jordantwoImage, link: 'https://youtube.com/shorts/PdqY6LnS8FI?feature=share' },
  { id: 'b5', photo: jordanImage, link: 'https://youtube.com/shorts/KJ3THD0YZH4?feature=share' },
  { id: 'b6', photo: flyeaseImage, link: 'https://youtube.com/shorts/3h25Ilu7HnU?feature=share' },
  { id: 'b7', photo: dunkImage, link: 'https://youtube.com/shorts/u4ir8jjZdG8?feature=share' },
  { id: 'b8', photo: idenfullImage, link: 'https://youtu.be/V1MQxegGrj8' },
  { id: 'b9', photo: iden2, link: 'https://youtu.be/b6ERQa34Ef4' },
  { id: 'b10', photo: iden3, link: 'https://youtu.be/tHOQO6A3GX0' },

];

export default function BrandedContentPage() {
  return (
    <div style={pageStyles.container}>
      {brandedItems.map(({ id, photo, link }) => (
        <div key={id} style={pageStyles.item}>
          <FlexCard photo={photo} link={link} />
        </div>
      ))}
    </div>
  );
}

const pageStyles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '20px',
    padding: '40px 20px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  item: {
    minWidth: '240px',
    maxWidth: '75vw',
    minHeight: '200px',
    maxHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
