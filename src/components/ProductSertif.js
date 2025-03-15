import { Col } from "react-bootstrap";

export const ProductSertif = ({ imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx2">
        <img src={imgUrl} alt="imagee" />
      </div>
    </Col>
  )
}