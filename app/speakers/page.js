import PageBanner from "@/components/PageBanner";
import Team from "@/components/Team";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import Link from "next/link";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Speakers"} />
      <section className="speaker-page">
        <div className="container">
          <div className="row">
            {/*Speaker Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/william_yu.png" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content">
                  <h3>
                    <Link href="">Dr. William Yu</Link>
                  </h3>
                  <p>Founder and Chief Executive Officer, WGO</p>
                </div>
              </div>
            </div>
            {/*Speaker Page Single End*/}
            {/*Speaker Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/dennis_wan.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content">
                  <h3>
                    <Link href="">Mr. Dennis Wan</Link>
                  </h3>
                  <p>Head of Capital Markets (APAC), CDP</p>
                </div>
              </div>
            </div>
            {/*Speaker Page Single End*/}
            {/*Speaker Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/guo_peiyuan.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content">
                  <h3>
                    <Link href="">Dr. Guo Peiyuan</Link>
                  </h3>
                  <p>Chairman, SynTao Green Finance</p>
                </div>
              </div>
            </div>
            {/*Speaker Page Single End*/}
            {/*Speaker Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/kin_sang_cheung.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content">
                  <h3>
                    <Link href="">Mr. Cheung Kin Sang</Link>
                  </h3>
                  <p>Chairman, Board of Governors, WGO</p>
                </div>
              </div>
            </div>
            {/*Speaker Page Single End*/}
            {/*Speaker Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/samson_leong.jpeg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content">
                  <h3>
                    <Link href="">Mr. Samson Leong</Link>
                  </h3>
                  <p>Senior Manager, Intertek Hong Kong</p>
                </div>
              </div>
            </div>
            {/*Speaker Page Single End*/}
          </div>
        </div>
      </section>
    </EnvensLayouts>
  );
};
export default page;
