import photo from '../../assets/cpimage.jpg';
import "./About.css";

const About = () => {
  return (
    <div className="a">
    <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img
          src={photo}
          alt=""
          className="a-img"
        />
      </div>
    </div>
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-desc">
      I am a passionate BCA and a perpetual learner. 
        Embracing the ever-evolving world of technology, I am constantly seeking 
        new knowledge and skills to broaden my understanding. With a deep curiosity 
        and a commitment to growth, I am excited to explore the limitless 
        possibilities that the field of computer science has to offer. <br/><br/> Driven by my 
        love for problem-solving and creativity, I actively engage in coding projects 
        and explore various programming languages. I thrive on challenges, relishing 
        the opportunity to apply my skills to develop innovative software solutions. 
        With a collaborative mindset, I eagerly seek opportunities to contribute to 
        impactful projects and collaborate with like-minded individuals in the 
        computer science community. 
      </p>
      </div>
  </div>
  );
};

export default About;


