import "../../assets/Style/HomeScreen/home.css";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="home-content">
      <HeroSectionComponent />
      <CarouselComponent />
      <TrustedComponent />
    </div>
  );
}

function HeroSectionComponent() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Responsive left-aligned hero with image
          </h1>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src="src\assets\Images\HomeScreen\background image.avif"
            className="d-block mx-lg-auto img-fluid"
            alt="Hero Image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function CarouselComponent() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
            className="d-block w-100"
            style={{ maxHeight: "100vh", maxWidth: "100%", objectFit: "cover" }}
            alt="..."
          />
          <div className="carousel-caption text-dark position-absolute top-50 start-50 translate-middle text-center">
            <h1>First Slide Label</h1>
            <p style={{ maxWidth: "100%", margin: "0 auto" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              explicabo quaerat blanditiis similique at ad, corporis nulla
              fugiat officia aut aperiam facere commodi esse, nesciunt
              consequuntur voluptas minus? Magnam, inventore. Nobis rem
              excepturi dolorum impedit error, est maxime omnis at sit facilis
              eveniet? Animi labore ullam placeat necessitatibus dolores, vitae
              veniam beatae, nobis alias earum explicabo, mollitia voluptatibus!
              Voluptate, minima. Sequi, asperiores dolor iste sint recusandae
              quasi consequuntur inventore eveniet? Sequi, qui voluptatem nobis
              tempora iste saepe exercitationem voluptates sed iusto, veniam
              consequatur dolores provident necessitatibus facilis atque
              laudantium earum.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
            className="d-block w-100"
            style={{ maxHeight: "100vh", maxWidth: "100%", objectFit: "cover" }}
            alt="..."
          />
          <div className="carousel-caption text-dark position-absolute top-50 start-50 translate-middle text-center">
            <h1>Second Slide Label</h1>
            <p style={{ maxWidth: "100%", margin: "0 auto" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              explicabo quaerat blanditiis similique at ad, corporis nulla
              fugiat officia aut aperiam facere commodi esse, nesciunt
              consequuntur voluptas minus? Magnam, inventore. Nobis rem
              excepturi dolorum impedit error, est maxime omnis at sit facilis
              eveniet? Animi labore ullam placeat necessitatibus dolores, vitae
              veniam beatae, nobis alias earum explicabo, mollitia voluptatibus!
              Voluptate, minima. Sequi, asperiores dolor iste sint recusandae
              quasi consequuntur inventore eveniet? Sequi, qui voluptatem nobis
              tempora iste saepe exercitationem voluptates sed iusto, veniam
              consequatur dolores provident necessitatibus facilis atque
              laudantium earum.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
            className="d-block w-100"
            style={{ maxHeight: "100vh", maxWidth: "100%", objectFit: "cover" }}
            alt="..."
          />
          <div className="carousel-caption text-dark position-absolute top-50 start-50 translate-middle text-center">
            <h1>Third Slide Label</h1>
            <p style={{ minWidth: "100%", margin: "0 auto" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              explicabo quaerat blanditiis similique at ad, corporis nulla
              fugiat officia aut aperiam facere commodi esse, nesciunt
              consequuntur voluptas minus? Magnam, inventore. Nobis rem
              excepturi dolorum impedit error, est maxime omnis at sit facilis
              eveniet? Animi labore ullam placeat necessitatibus dolores, vitae
              veniam beatae, nobis alias earum explicabo, mollitia voluptatibus!
              Voluptate, minima. Sequi, asperiores dolor iste sint recusandae
              quasi consequuntur inventore eveniet? Sequi, qui voluptatem nobis
              tempora iste saepe exercitationem voluptates sed iusto, veniam
              consequatur dolores provident necessitatibus facilis atque
              laudantium earum.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function TrustedComponent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div className="trusted-section bg-light py-5 ">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="mb-4">
              We are trusted by customers all over the world
            </h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet nisi nec justo volutpat, sed luctus elit ultrices. Integer
              rutrum libero id nulla posuere tincidunt.
            </p>
            <p>
              Praesent nec arcu in ex pretium sodales. Nam tincidunt, est non
              efficitur euismod, leo nisl consectetur nulla, et euismod enim
              elit vitae nunc.
            </p>
            <div className="trusted-button">
              <Link to="/customer" className="btn btn-primary mx-4" onClick={scrollToTop}>
                Primary
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}