import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="about-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-two__left">
              <div
                className="about-two__img"
                style={{
                  backgroundImage:
                    "url(assets/images/resources/poster.jpg)",
                }}
              />
            </div>
          </div>
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
            <div className="about-two__right">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <p className="section-title__tagline section-title__tagline--two">
                    <span>//</span> 2025 Theme:
                  </p>
                </div>
                <h2 className="section-title__title">
                Accelerating Climate Action: <span> Innovation, Integration, and Impact </span> 
                </h2>
              </div>
              {/* 
              <p className="about-two__text">
                There are many variations of passages of Lorem Ipsum availa
                <br />
                ble, but the majority have suffered alteration in some form, by
                injected
                <br /> humour, or randomised words.
              </p>
              
              <div className="about-two__solution-box">
                <div className="about-two__solution-single">
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p className="about-two__solition-text">
                    Solution for small &amp;
                    <br /> large businesses
                  </p>
                </div>
                <div className="about-two__solution-single">
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p className="about-two__solition-text">
                    Solution for small &amp;
                    <br /> large businesses
                  </p>
                </div>
              </div> */}

              <ul className="about-two__points list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p>Promote Global Sustainable Development Cooperation</p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p>Empower Enterprises in Achieving Green Transformation</p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p>Advance Green Finance and Low-Carbon Development</p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p>Foster Technological Innovation and Decarbonization Practices</p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p>Enhance Regional and International Collaboration</p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p>Create Opportunities for Industry Innovation and Exchange</p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p>Elevate Global Brand Influence of Enterprises</p>
                </li>
              </ul>
              <div className="about-two__btn-and-client-info">
                <div className="about-two__btn-box">
                  <Link href="" className="about-two__btn thm-btn-two">
                    <span className="fas fa-arrow-circle-right" />
                    About the Organiser
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
