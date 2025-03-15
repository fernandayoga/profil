import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import emotionera from "../assets/img/emotionera.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

  const projects = [
    {
      title: "Emotionera",
      description: "Emotional Intelligence Website",
      imgUrl: emotionera,
      href: "https://github.com/fernandayoga/emotinera.git"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>Setiap proyek yang saya kerjakan adalah hasil dari dedikasi dan penerapan keterampilan yang telah saya pelajari. Melalui berbagai pengalaman ini, saya terus mengasah kemampuan dalam pengembangan teknologi dan inovasi digital.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              
              
            
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}