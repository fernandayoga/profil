import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import html from "../assets/img/html-1.svg"
import css from '../assets/img/css-3.svg'
import js from "../assets/img/javascript-r.svg"
import react from "../assets/img/react-2.svg"
import laravel from "../assets/img/laravel-2.svg"
import tailwind from "../assets/img/tailwind-css-2.svg"
import bootstrap from "../assets/img/bootstrap-5-1.svg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Skill yang saya kuasai mencerminkan dedikasi saya dalam dunia pemrograman dan pengembangan teknologi. Saya terus belajar dan berkembang untuk menciptakan solusi yang efektif dan bermanfaat.</p>
                        <Carousel responsive={responsive} infinite={true}  className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="Imagee" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Imagee" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Imagee" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Imagee" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={laravel} alt="Imagee" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Imagee" />
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Imagee" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Imagee" />
    </section>
  )
}