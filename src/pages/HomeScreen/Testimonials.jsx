import React from "react";
import "../../assets/Style/HomeScreen/testimonials.css";
import { Header, Footer } from "../../assets/Layout/Navbar";

const Testimonials = () => {
  return (
    <>
      <Header />
      <div>
        <section className="mt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <p className="mb-0">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
                  </p>
                  <h4 className="mt-3">John Doe</h4>
                  <p>CEO, Company Inc.</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <img
                    src="testimonial2.jpg"
                    alt="Customer"
                    className="img-fluid rounded-circle mb-3"
                  />
                  <p className="mb-0">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium."
                  </p>
                  <h4 className="mt-3">Jane Smith</h4>
                  <p>Designer</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <img
                    src="testimonial3.jpg"
                    alt="Customer"
                    className="img-fluid rounded-circle mb-3"
                  />
                  <p className="mb-0">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                  </p>
                  <h4 className="mt-3">David Johnson</h4>
                  <p>Developer</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <img
                    src="testimonial4.jpg"
                    alt="Customer"
                    className="img-fluid rounded-circle mb-3"
                  />
                  <p className="mb-0">
                    "Incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat."
                  </p>
                  <h4 className="mt-3">Emily Brown</h4>
                  <p>Marketing Manager</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <img
                    src="testimonial5.jpg"
                    alt="Customer"
                    className="img-fluid rounded-circle mb-3"
                  />
                  <p className="mb-0">
                    "Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                  <h4 className="mt-3">Michael White</h4>
                  <p>Accountant</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <img
                    src="testimonial6.jpg"
                    alt="Customer"
                    className="img-fluid rounded-circle mb-3"
                  />
                  <p className="mb-0">
                    "Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur."
                  </p>
                  <h4 className="mt-3">Sarah Green</h4>
                  <p>Sales Executive</p>
                </div>
              </div>
            </div>
            {/* Add more rows as needed */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
