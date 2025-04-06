import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import Link from "next/link";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Partners"} />


      {/* Main Organiser */}
      <section className="join-event" id='organiser'>
        <div className="container">
          <div className="join-event__title-and-btn-box">
            <div className="section-title text-left">

              <h2 className="section-title__title">
                Organiser: <br/>
                <span><Link href='https://thewgo.org/website/eng/ '>World Green Organisation</Link></span>
              </h2>
            </div>
            <div className="join-event__btn-box">
            <Link href='https://thewgo.org/website/eng/ '><img src="assets/images/logos/Organiser Logo_WGO.png" style={{width: '400px'}}/></Link>
            </div>
          </div>
          <p className="join-event__text" style={{textAlign: 'justify'}}>
          The World Green Organisation (WGO) is an independent non-governmental organisation concerned with environmental conservation and environmentally related livelihood and economic affairs. It provides a holistic approach to a fully integrated three-pronged solution that combines social, environmental and economic aspects for a low carbon society.
          </p><br/><p className="join-event__text" style={{textAlign: 'justify'}}>
          Through science-based policy research and community projects, the WGO aims to enhance the quality of the environment, promote a greener economy, and improve people’s livelihoods. In particular, it will focus on the social concerns of underprivileged groups and on the creation of a green economy, to help realise its vision of sustainable development.
          </p><br/><p className="join-event__text" style={{textAlign: 'justify'}}>
          The WGO has created a network of world-renowned experts in environmental protection, poverty alleviation and economic development. Our partnership enables us to promote green community and sustainable economic development together by transforming people’s lifestyles and business best practices in developed and developing countries. With active participation and contribution to United Nations Economic and Social Commission for Asia and the Pacific (UNESCAP) as ESBN (Sustainable Business Network) task force members, World Green Organisation is honored to partner with the United Nations to organise the ESG for Climate Actions International Conference in Hong Kong.
          </p>
          <br/>
        </div>
      </section>

      {/* Co Organiser 
      <section className="join-event" id='co-organiser'>
        <div className="container">
          <div className="join-event__title-and-btn-box">
            <div className="join-event__btn-box">
            <Link href='https://thewgo.org/website/eng/ '><img src="assets/images/logos/Co-organiser Logo_FECO.jpg" style={{width: '200px'}}/></Link>
            </div>
            <div className="section-title text-left" style={{paddingLeft: '5%'}}>

              <h2 className="section-title__title">
                Co-Organiser: <br/>
                <span><Link href='https://www.fecomee.org.cn/'> Foreign Economic Cooperation Office (FECO), <br/>Ministry of Ecology and Environment (MEE)</Link></span>
                </h2><br/>
              <p className="join-event__text" style={{textAlign: 'justify'}}>
              The Foreign Economic Cooperation Office (FECO) operates under China’s Ministry of Ecology and Environment (MEE), focusing on promoting international cooperation in environmental protection and sustainable development. 
              </p><br/><p className="join-event__text" style={{textAlign: 'justify'}}>
              FECO is instrumental in implementing global environmental treaties, fostering international collaboration on ecological issues, and supporting China’s commitment to climate change and biodiversity goals.
              </p>
            </div>
          </div>
          <br/>
        </div>
      </section>
      */}


    {/* Conference Partners */}
    <section className="join-event" id='conference-partner' style={{padding: '0'}}>
        <div className="container">
          <div className="join-event__title-and-btn-box">
            <div className="section-title text-left">
              <h2 className="section-title__title">
                Conference Partner
              </h2>
              </div>
            </div>
          <br/>
          <section className="gallery-two">
            <div className="gallery-two__bottom">
              <div className="container">
                <div className="row masonary-layout">
                  {/*Project Three Single Start*/}
                  <div
                    className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
                  >
                    <div className="gallery-two__single">
                      <div className="gallery-two__img">
                        <img src="assets/images/logos/hkex.png" alt="" />
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
                        <img src="assets/images/logos/cyberport.png" alt="" />
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
                        <img src="assets/images/logos/escap.png" alt="" />
                      </div>
                    </div>
                  </div>
                  {/*Project Three Single End*/}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Strategic Partners */}
    <section className="join-event" id='strategic-partner' style={{padding: '0'}}>
        <div className="container">
          <div className="join-event__title-and-btn-box">
            <div className="section-title text-left">
              <h2 className="section-title__title">
                Strategic Partner
              </h2>
              </div>
            </div>
          <br/>
          <section className="gallery-two">
            <div className="gallery-two__bottom">
              <div className="container">
                <div className="row masonary-layout">
                  {/*Project Three Single Start*/}
                  <div
                    className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
                  >
                    <div className="gallery-two__single">
                      <div className="gallery-two__img">
                        <img src="assets/images/logos/ipshk.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  {/*Project Three Single End*/}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Supporting Organisations */}
    <section className="join-event" id='supporting-organisations' style={{padding: '0'}}>
        <div className="container">
          <div className="join-event__title-and-btn-box">
            <div className="section-title text-left">
              <h2 className="section-title__title">
                Supporting Organisations
              </h2>
              </div>
            </div>
          <br/>
          <section className="gallery-two">
            <div className="gallery-two__bottom">
              <div className="container">
                <div className="row masonary-layout">
                  {/*Project Three Single Start*/}
                  <div
                    className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
                  >
                    <div className="gallery-two__single">
                      <div className="gallery-two__img">
                        <img src="assets/images/logos/unep.png" alt="" />
                      </div>
                    </div>
                  </div>
                  {/*Project Three Single End*/}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

    </EnvensLayouts>
  );
};
export default page;
