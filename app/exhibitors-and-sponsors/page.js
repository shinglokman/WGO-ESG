import Brand from "@/components/Brand";
import LogoLayout from "@/components/LogoLayout";
import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import Link from "next/link";

const temp = ['assets/images/sponsors/intertek.jpeg','assets/images/sponsors/crystal.jpeg','assets/images/sponsors/hkrita.jpeg', 'assets/images/sponsors/tuvrheinland.jpeg']

const page = () => {
  return (
    <EnvensLayouts>
      {
      // <Brand className="brand-three brand-five" />
      }
      <PageBanner pageName={"Exhibitors & Sponsors"} />


      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-two__right">
                <div className="section-title text-left">
                  <h1 className="section-title__title" style={{fontSize: '350%'}}>
                  Why <span> Sponsor </span> ESG Xchange 2025?
                  </h1>
                </div><br/>
                <h3 style={{fontWeight: '400'}}>
                ESG Xchange 2025 is the most anticipated global ESG summit in Hong Kong, uniting world leaders, regulators, and innovators to accelerate meaningful climate and sustainability action.
                </h3><br/><br/>
                <ul className="about-two__points list-unstyled" style={{fontSize: '18px', width: '70%'}}>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p><b>Unparalleled Reach and Influence:</b> 3,000+ high-level participants including senior government officials, UN representatives, global business leaders, and C-suite executives </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>Exclusive platform to build reputation, influence policy, and align with global ESG expectations</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>Access to Global ESG Frameworks &amp; Standards</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>Powerful Networking &amp; Diplomatic Engagement</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>Cutting-Edge Innovation &amp; Tech Showcase</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>ESG Tech Ventures Exhibition: AI, PropTech, Climate Analytics, Carbon Accounting</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>Workshops to explore digital ESG solutions and tools for future sustainability</p>
                  </li>
                </ul>
                <div className="about-two__btn-and-client-info">
                  <div className="about-two__btn-box">
                    <Link href="mailto:nickauyong@wgo.org" className="about-two__btn thm-btn-two">
                      <span className="fas fa-arrow-circle-right" />
                      Sponsorship Inquiry
                    </Link>
                  </div>
                </div><br/><br/><br/>
                <div className="section-title text-left" style={{backgroundColor: 'var(--envens-base)', padding: '3%'}}>
                  <h1 className="section-title__title" style={{fontSize: '200%', lineHeight: '150%', color: 'white', textAlign: 'center'}}><b>
                  Position your brand at the forefront of ESG innovation, policy, and impact — <br/> Sponsor ESG Xchange 2025 to lead the future of sustainability.
                  </b></h1>
                </div> <br/><br/>
                <div className="section-title text-left" id="2025">
                  <h1 className="section-title__title" style={{fontSize: '350%'}}>
                   <span> 2025 </span> Exhibitors and Sponsors
                  </h1>
                </div><br/>
                


                <section className="gallery-two" >
                  <div className="gallery-two__bottom">
                    <div className="container">
                      <div className="row masonary-layout">
                        {/*Project Three Single Start*/}
                        <div
                          className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
                        >
                          <div className="gallery-two__single">
                            <div className="gallery-two__img">
                              <img src="assets/images/sponsors/intertek.jpeg" alt="" />
                            </div>
                          </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div
                          className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
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
                          className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
                        >
                          <div className="gallery-two__single">
                            <div className="gallery-two__img">
                              <img src="assets/images/sponsors/hkrita.jpeg" alt="" />
                            </div>
                          </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div
                          className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
                        >
                          <div className="gallery-two__single">
                            <div className="gallery-two__img">
                              <img src="assets/images/sponsors/tuvrheinland.jpeg" alt="" />
                            </div>
                          </div>
                        </div>
                        {/*Project Three Single End*/}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EnvensLayouts>
  );
};
export default page;
