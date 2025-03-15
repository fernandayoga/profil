import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProductSertif } from "./ProductSertif";
import Front from "../assets/img/sertification/Front-end.png"
import Web from "../assets/img/sertification/web-dasar.png"
import AI from "../assets/img/sertification/AI.png"
import ML from "../assets/img/sertification/ML.png"
import React from "../assets/img/sertification/React.png"
import flutter1 from "../assets/img/sertification/Flutter.png"
import flutter2 from "../assets/img/sertification/Flutter2.png"
import flutter3 from "../assets/img/sertification/flutter3.png"
import JS from "../assets/img/sertification/CODEPOLITAN_page-0001.jpg"
import Alibaba from "../assets/img/sertification/alibaba.png"
import Data from "../assets/img/sertification/data.png"
import backEnd from "../assets/img/sertification/BackEnd.png"
import wmk1 from "../assets/img/sertification/wmk.png"
import wmk2 from "../assets/img/sertification/wmk2.png"
import DataScience from "../assets/img/sertification/DataScience.png"


import colorSharp from "../assets/img/color-sharp.png"


export const Sertification = () => {

  const projects = [
    {
      imgUrl: Front,
    },
    {
      imgUrl: Web,
    },
    {
      imgUrl: AI,
    },
    {
      imgUrl: ML,
    },
    {
      imgUrl: React,
    },
    {
      imgUrl: DataScience,
    },
  ];
  const projects2 = [
    {
      imgUrl: flutter1,
    },
    {
      imgUrl: flutter2,
    },
    {
      imgUrl: flutter3,
    },
    {
      imgUrl: JS,
    },
    {
      imgUrl: Alibaba,
    },
    {
      imgUrl: Data,
    },
  ];
  const projects3 = [
    {
      imgUrl: backEnd,
    },
    {
      imgUrl: wmk1,
    },
    {
      imgUrl: wmk2,
    },
  ];


  
  return (
    <section className="project" id="projects2">
      <Container>
        <Row>
          <Col size={12}>
            
              
              
                <h2>Certification</h2>
                <p>Sertifikasi yang telah saya peroleh mencerminkan komitmen saya dalam mengembangkan keterampilan dan memperdalam pemahaman di bidang teknologi. Setiap sertifikat ini adalah bukti dari dedikasi saya untuk terus belajar dan berkembang.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProductSertif
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProductSertif
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProductSertif
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
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}