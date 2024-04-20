import data from "../../data/index.json";

export default function MySkills() {
  return (
    <>
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>        
        ))}
      </div>
    </section>

    <section className="experiencesContainer">
      <div  className="experiencesSectionDiv">
        <div className="experiencesSection">
          {data?.frontend?.map((item)=>(
            <div key={item.id} className="experienceItemDiv">
              <div className="experienceIconDiv">
                <img src='./img/icon.png' className="icon"></img>
                <p className="experiencesMainParagraph">{item.name}</p>
              </div> 
            </div> 
          ))}     
        </div>
     </div>
    </section>
  </>
  );
}