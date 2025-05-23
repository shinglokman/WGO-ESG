const Brand = ({ className = "brand-three brand-four" }) => {

  const logos = [
    { src: "assets/images/logos/escap.png", alt: "ESCAP" },
    { src: "assets/images/logos/escap.png", alt: "ESCAP" },
    { src: "assets/images/logos/escap.png", alt: "ESCAP" },
    { src: "assets/images/logos/escap.png", alt: "ESCAP" },
    { src: "assets/images/logos/escap.png", alt: "ESCAP" },
    { src: "assets/images/logos/escap.png", alt: "ESCAP" },
    { src: "assets/images/logos/escap.png", alt: "ESCAP" },
  ];

  return (
    <section className={className}>
      <div className="brand-three__wrap">
        <div
          className="brand-three__shape-bg float-bob-y"
          style={{
            backgroundImage:
              "url(assets/images/shapes/brand-three-shape-bg.png)",
          }}
        />
        <div className="brand-three__shape-1">
          <img src="assets/images/shapes/brand-three-shape-1.png" alt="" />
        </div>
        <div className="brand-three__shape-2">
          <img src="assets/images/shapes/brand-three-shape-2.png" alt="" />
        </div>
        <div className="brand-three__shape-3">
          <img src="assets/images/shapes/brand-three-shape-3.png" alt="" />
        </div>
        <div className="brand-three__shape-4">
          <img src="assets/images/shapes/brand-three-shape-4.png" alt="" />
        </div>
        <div className="container">
          <div className="brand-three__inner">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">
                  <span>//</span> Sponsors <span>//</span>
                </span>
              </div>
              <h2 className="section-title__title">
                Our  Official <span>Sponsors</span>
              </h2>
            </div>

            <ul className="list-unstyled brand-three__list">
              <li>
                <div className="brand-three__img-box">
                  <div className="brand-three__img">
                    <img src="assets/images/logos/1.png" style={{height: '50px'}} alt="" />
                  </div>
                  <div className="brand-three__img-hover">
                    <img src="assets/images/logos/1.png" style={{height: '50px'}} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="brand-three__img-box">
                  <div className="brand-three__img">
                    <img src="assets/images/logos/2.jpg" style={{height: '50px'}} alt="" />
                  </div>
                  <div className="brand-three__img-hover">
                    <img src="assets/images/logos/2.jpg" style={{height: '50px'}} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="brand-three__img-box">
                  <div className="brand-three__img">
                    <img src="assets/images/logos/3.png" style={{height: '50px'}} alt="" />
                  </div>
                  <div className="brand-three__img-hover">
                    <img src="assets/images/logos/3.png" style={{height: '50px'}} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="brand-three__img-box">
                  <div className="brand-three__img">
                    <img src="assets/images/logos/4.jpg" style={{height: '50px'}} alt="" />
                  </div>
                  <div className="brand-three__img-hover">
                    <img src="assets/images/logos/4.jpg" style={{height: '50px'}}alt="" />
                  </div>
                </div>
              </li>
            </ul>
            <ul className="list-unstyled brand-three__list brand-three__list--two">
              <li>
                <div className="brand-three__img-box">
                  <div className="brand-three__img">
                    <img src="assets/images/logos/5.jpg" style={{height: '50px'}} alt="" />
                  </div>
                  <div className="brand-three__img-hover">
                    <img src="assets/images/logos/5.jpg" style={{height: '50px'}}alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="brand-three__img-box">
                  <div className="brand-three__img">
                    <img src="assets/images/logos/6.png" style={{height: '50px'}} alt="" />
                  </div>
                  <div className="brand-three__img-hover">
                    <img src="assets/images/logos/6.png" style={{height: '50px'}}  alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="brand-three__img-box">
                  <div className="brand-three__img">
                    <img src="assets/images/logos/7.png" style={{height: '50px'}} alt="" />
                  </div>
                  <div className="brand-three__img-hover">
                    <img src="assets/images/logos/7.png" style={{height: '50px'}} alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Brand;
