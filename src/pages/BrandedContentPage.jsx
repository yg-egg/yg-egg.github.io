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
  { id: 'b10', photo: iden3, link: 'https://youtu.be/tHOQO6A3GX0', wide: true },
  { id: 'b1', photo: chunkyImage, link: 'https://youtube.com/shorts/NPvd839UTX0?feature=share', wide: false },
  { id: 'b2', photo: vintageImage, link: 'https://youtube.com/shorts/wGlbdgs7_iw?feature=share', wide: false },
  { id: 'b3', photo: pegasusImage, link: 'https://youtube.com/shorts/uNOtnonsDEM?feature=share', wide: false },
  { id: 'b6', photo: flyeaseImage, link: 'https://youtube.com/shorts/3h25Ilu7HnU?feature=share', wide: false },
  { id: 'b9', photo: iden2, link: 'https://youtu.be/b6ERQa34Ef4', wide: true },
  { id: 'b8', photo: idenfullImage, link: 'https://youtu.be/V1MQxegGrj8', wide: true },
  { id: 'b4', photo: jordantwoImage, link: 'https://youtube.com/shorts/PdqY6LnS8FI?feature=share', wide: false },
  { id: 'b5', photo: jordanImage, link: 'https://youtube.com/shorts/KJ3THD0YZH4?feature=share', wide: false },
  { id: 'b7', photo: dunkImage, link: 'https://youtube.com/shorts/u4ir8jjZdG8?feature=share', wide: false },
];

export default function BrandedContentPage() {
  return (
    <div style={styles.grid}>
      {brandedItems.map(({ id, photo, link, wide }) => (
        <div
          key={id}
          style={wide ? styles.fullSpan : styles.centeredGridItem}
        >
          <FlexCard photo={photo} link={link} wide={wide} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
    padding: '40px 1rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  fullSpan: {
    gridColumn: '1 / -1',
  },
  centeredGridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
};
