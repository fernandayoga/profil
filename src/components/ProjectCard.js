import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="imagee"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br/>
            <a href={href}><Button variant="primary">View</Button></a>
        </div>
      </div>
    </Col>
  )
}