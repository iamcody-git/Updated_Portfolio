import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../Context";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tjyabv1",
        "template_qygn4k5",
        formRef.current,
        "KXaMTLuEJZ001EvaR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="relative mt-32 md:mt-90">
      <h1 className="text-center text-3xl font-bold mb-8">Contact</h1>
      <div className="absolute top-0 left-0 bg-yellow-400 w-2 h-full"></div>
      <div className="flex px-8 md:px-30">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-8">Let's discuss</h1>
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
              <span className="text-lg font-light">
                (+977) 9848745588
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
              <span className="text-lg font-light">
                iamcody.github@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6" />
              <span className="text-lg font-light">Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-lg font-light mb-8">
            <b>Hey,</b> I am open to collaboration opportunities for projects
            that align with my skills and interests. If you have an exciting
            project in mind, feel free to reach out. I am passionate about
            freelancing and eager to contribute my expertise to create
            meaningful and innovative solutions together. If you have a fitting
            role available, I would love to discuss how I can add value to your
            team and help drive innovation and success. Let's connect and
            explore the possibilities of working together on impactful
            projects.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              className="w-full px-4 py-2 border-b border-black"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="w-full px-4 py-2 border-b border-black"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
              className="w-full px-4 py-2 border-b border-black"
              required
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              className="w-full px-4 py-2 border-b border-black"
              required
            />
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg transition-transform hover:scale-105">
              Submit
            </button>
            <br />
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
