import './HomePage.css';
import profileImg from '../assets/yg-profile.avif';

import awardLeftImage from '../assets/awards/awards-left.png';
import awardRightImage from '../assets/awards/awards-right.png';

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="video-bg-wrapper">
        <iframe
          src="https://www.youtube.com/embed/3_mT9YFcbBk?autoplay=1&mute=1&controls=0&loop=1&playlist=3_mT9YFcbBk&modestbranding=1&rel=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      <div className="hero-section">
        <h1>Yimin Gu</h1>
        <h3>/ Yeemean Goo /</h3>
        <h5>Produce. Direct. Edit.</h5>
      </div>

      <div className="story-card">
        <div className="story-text">
          <h2>My Story</h2>
          <p>
            Ever since Yimin watched “Amélie” at the age of 11, she knew she wanted to make films
            that bring people together.
          </p>
          <p>
            After getting recognized at the Student Academy Award for her thesis on autism, Yimin
            went on to direct celebrity documentaries for Tencent and executive produce commercial
            campaigns for Nike.
          </p>
          <p>
            In 2024, she built the mobile streaming platform SaltyTV from the ground up in just
            under 7 months, serving as Executive Producer. She also spearheaded a R&D unit
            innovating AI-enhanced immersive asset pipelines for games and VFX production.
          </p>
          <p>Yimin is currently developing a feature animation film "Love Struck."</p>
        </div>
        <img src={profileImg} alt="Yimin Gu" className="profile-photo" />
      </div>

      <div className="awards-section">
        <img src={awardLeftImage} alt="Awards Left" className="award-image" />
        <img src={awardRightImage} alt="Awards Right" className="award-image" />
      </div>
    </div>
  );
}

export default HomePage;
