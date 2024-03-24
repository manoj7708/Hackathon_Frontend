import "../Style/Layout/header.css";

const Header = () => {
  return (
    <div className="container-fluid bg-dark text-light">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4  border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none text-light"
          >
            Your Company Name
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Features
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle px-2"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul
              className="dropdown-menu dropdown-width text-center"
              aria-labelledby="navbarDropdown"
            >
              <div className="row">
                <div className="col border-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 3
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 4
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 5
                    </a>
                  </li>
                </div>
                <div className="col">
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 6
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 7
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 8
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 9
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Service 10
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Customers
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Pricing
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a leading provider of IT products and services, dedicated
              to delivering high-quality solutions to our customers.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              123 Street Name
              <br />
              City, State, ZIP
              <br />
              Phone: 123-456-7890
              <br />
              Email: info@example.com
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer, Header };
