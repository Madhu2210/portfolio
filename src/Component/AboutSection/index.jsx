import "./about.scss";
import { AosWrapper, SectionHeading, UnderHightlight } from "../Common/Wrapper";
import ProfilePic from "../../assets/IMG/Profilephoto.jfif";

const About = () => {
  const infoData = [
    // <p key="1">Hello! My name is Ankit and I enjoy creating things that live on the internet.
    //   My interest in web development started back in 2021  when I decided to try
    //   editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot  about HTML & CSS!
    // </p>,
    // <p key="2">Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
    //   a start-up, a huge corporation, and a student-led design studio. My main focus these days is building
    //   accessible, inclusive products and digital experiences at <UnderHightlight onClick={() => console.log("helo")}>
    //     Neosoft
    //   </UnderHightlight > for a variety of clients.
    // </p>,
    // <p key="3">I also recently launched a course that covers everything you  need to
    //   build a web app with the Spotify API using Node & React.
    // </p>
    <p key="1">
      Heello , My name is Madhu kahar, a results-driven Frontend Developer with around 4
      years of experience in React.js and modern web technologies. I am an
      expert in designing, developing, and optimizing responsive web
      applications using HTML5, CSS3, and JavaScript (ES6+). Proficient in React
      features such as Hooks, Redux, and Context API, I also have experience in
      integrating RESTful APIs and NextJs.
    </p>,
    <p key="2">Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
      a start-up, a huge corporation, and a student-led design studio. My main focus these days is building
      accessible, inclusive products and digital experiences at <UnderHightlight onClick={() => console.log("helo")}>
        Bajaj Broking
      </UnderHightlight > for a variety of clients.
    </p>,
  ];

  const skillList = ["React", "JavaScript", "HTML5", "CSS3", "SCSS", "Next"];
  return (
    <section id="about">
      <AosWrapper animation={"fade-up"} anchor={"top top"}>
        <SectionHeading>About me</SectionHeading>
        <div className="section-container">
          <div className="section-left">
            {infoData}
            <div className="skill-list">
              <h4>
                Here are a few technologies I’ve been working with recently:
              </h4>
              <ul className="styled-list">
                {skillList.map((item, key) => (
                  <AosWrapper
                    animation="fade-up"
                    delay={(key + 1) * 10}
                    type="list"
                    key={key}
                  >
                    {item}
                  </AosWrapper>
                ))}
              </ul>
            </div>
          </div>
          <div className="section-right">
            <div className="img-container">
              <img src={ProfilePic} alt="" />
            </div>
          </div>
        </div>
      </AosWrapper>
    </section>
  );
};

export default About;
