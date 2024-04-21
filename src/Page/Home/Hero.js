export default function HeroSection() {
    return (
      <section id="heroSection" className="heroSection">
        <div className="heroSectionDivContent">
          <div className="heroSectionContent">
            <p className="sectionTitle">Hey, I'm Jean Baptiste N.</p>
            <h1 className="herosectionTitle">
              <span className="heroSectionTitleColor">Full Stack</span>{" "}
              <br />
              Web Developer
            </h1>
            <p className="heroSectionDescription">
              An organised, efficient,innovative, creative and multilinguistic person.
              <br /> On making and producing smart a better quality product in the right time. Hire me!
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="heroSectionImg">
          <img src="./img/profile.png" alt="Hero Section" />
        </div>
      </section>
    );
  }