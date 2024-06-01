import "./Intro.css";
import sample from '../../Utils/Resumecody.pdf'
import background from '../../assets/background.png'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name">PRASHANT ADHIKARI</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Software Developer</div>
            </div>
          </div>
          <p className="i-desc">
          an aspiring software developer with a passion to become full stack developer. Exploring the intersection<br/> of technology and innovation to create intelligent solutions for a better future.
          </p>
          <div className="resume">
            <a href={sample} download="sample.pdf">Resume</a>
          </div>
        </div>
        <div className="right-wrapper">
          <img src={background} alt="" />
        </div>
       </div>
    </div>
  );
};

export default Intro;