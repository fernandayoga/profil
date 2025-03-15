import { Container, Row, Col } from "react-bootstrap";
import headerImage from "../assets/img/photo.png";
import { useState, useEffect, useCallback } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  // Perbaikan dependency useCallback
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi I'm Fernanda Yoga Kurniawan`}
              <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Saya adalah mahasiswa di Universitas 17 Agustus 1945 Surabaya,
              jurusan Sistem dan Teknologi Informasi, dengan minat yang mendalam
              dalam dunia pemrograman, khususnya di bidang front-end
              development. Saya berambisi untuk menjadi seorang programmer
              profesional yang tidak hanya mahir secara teknis, tetapi juga
              mampu menciptakan solusi inovatif yang bermanfaat bagi banyak
              orang. Dengan semangat belajar yang tinggi, saya terus mengasah
              keterampilan dan mengikuti perkembangan teknologi untuk mewujudkan
              tujuan tersebut.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="banner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
