"use client";


const LogoLayout = ({logos, className = "gallery-two" }) => {
  return (
    <section className="gallery-two" >
      <div className="gallery-two__bottom">
        <div className="container">
          <div className="row masonary-layout">
            {/*Project Three Single Start*/}
            <div
              className="col-xl-2 col-lg-3 col-md-3 col-sm-6"
            >
              <div className="gallery-two__single">
                <div className="gallery-two__img">
                  <img src="assets/images/sponsors/crystal.jpeg" alt="" />
                </div>
              </div>
            </div>
            {/*Project Three Single End*/}
            {/*Project Three Single Start*/}
            <div
              className="col-xl-2 col-lg-3 col-md-3 col-sm-6"
            >
              <div className="gallery-two__single">
                <div className="gallery-two__img">
                  <img src="assets/images/gallery/gallery-2-1.jpg" alt="" />
                </div>
              </div>
            </div>
            {/*Project Three Single End*/}
          </div>
        </div>
      </div>
    </section>
  );
};
export default LogoLayout;
