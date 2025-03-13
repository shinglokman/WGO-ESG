import AboutUs from "@/components/AboutUs";
import { EventSchedule3 } from "@/components/EventSchedule";
import { HeroSlider2 } from "@/components/HeroSlider";
import NextEvent from "@/components/NextEvent";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ConferenceInfo from "@/components/ConferenceInfo";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import dynamic from "next/dynamic";
import Link from "next/link";
import Counter from "@/components/Counter";
import PageBanner from "@/components/PageBanner";
import Brand from "@/components/Brand";
const CountDown = dynamic(() => import("@/components/CountDown"), {
  ssr: false,
});
const PortfolioIsotope = dynamic(
  () => import("@/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <EnvensLayouts header={2} footer={2}>
      {/* /.stricky-header */}
      {/*Main Slider Start*/}
      <HeroSlider2 />
      {/*Main Slider End*/}
      {/*About Two Start*/}
      {/*About Two End*/}
      {/*Countdown One Start*/}
      {/*<NextEvent />*/}
      {/*Countdown One End*/}
      {/*Team Two Start*/}
      {/*<Team />*/}
      {/*Team Two End*/}
      {/*Event Two Start*/}
      {/*<EventSchedule3 />*/}
      {/*Event Two End*/}
      {/*Pricing One Start*/}
      {/*<Pricing />*/}
      {/*Pricing One End*/}

      {/*Counter One Start*/}
      <section className="counter-one">
        <div className="counter-one__wrap">
          <div className="container">
            <div className="counter-one__inner">
              <ul className="counter-one__count-list list-unstyled">
                <li className="wow fadeInLeft" data-wow-delay="100ms">
                  <div className="counter-one__single">
                    <div className="counter-one__count count-box">
                      <h3 className="count-text">
                        <Counter end={1500} />+
                      </h3>
                    </div>
                    <p className="counter-one__text"> Global Attendees</p>
                  </div>
                </li>
                <li className="wow fadeInLeft" data-wow-delay="200ms">
                  <div className="counter-one__single counter-one__single-bg-black">
                    <div className="counter-one__count count-box">
                      <h3 className="count-text">
                        <Counter end={10} />+
                      </h3>
                    </div>
                    <p className="counter-one__text">Countries</p>
                  </div>
                </li>
                <li className="wow fadeInLeft" data-wow-delay="300ms">
                  <div className="counter-one__single">
                    <div className="counter-one__count count-box">
                      <h3 className="count-text">
                        <Counter end={40} />+
                      </h3>
                    </div>
                    <p className="counter-one__text">Sponsors and Exhibitors</p>
                  </div>
                </li>
                <li className="wow fadeInLeft" data-wow-delay="400ms">
                  <div className="counter-one__single counter-one__single-bg-black">
                    <div className="counter-one__count count-box">
                      <h3 className="count-text">
                        <Counter end={100} />+
                      </h3>
                    </div>
                    <p className="counter-one__text">Distinguished Speakers</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Counter One End*/}
      <AboutUs />

      <div className="site-footer-two__top">
        <div className="site-footer-two__top-shape-2 float-bob-x">
          <img
            src="assets/images/shapes/site-footer-two-top-shape-2.png"
            alt=""
          />
        </div>
        <div className="site-footer-two__top-shape-3 float-bob-y">
          <img
            src="assets/images/shapes/site-footer-two-top-shape-3.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="site-footer-two__top-inner">
            <div className="site-footer-two__logo" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <div className="site-footer-two__top-icon-content">
                <h5 style={{paddingBottom: '10px'}}>Organiser</h5>
              </div>
              <Link href="">
                <img
                  src="assets/images/logos/Organiser Logo_WGO.png"
                  alt=""
                  height='150px'
                />
              </Link>
            </div> 
            <div className="site-footer-two__logo" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <div className="site-footer-two__top-icon-content">
                <h5 style={{paddingBottom: '10px'}}>Co-Organiser</h5>
              </div>
              <Link href="">
                <img
                  src="assets/images/logos/Co-organiser Logo_FECO.jpg"
                  alt=""
                  height='150px'
                />
              </Link>
            </div> 
            <div className="site-footer-two__logo" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <div className="site-footer-two__top-icon-content">
                <h5 style={{paddingBottom: '10px'}}>Conference Partners</h5>
              </div>
              <Link href="">
                <img
                  src="assets/images/logos/partners.png"
                  alt=""
                  height='150px'
                />
              </Link>
            </div> 
            
          </div>
        </div>
      </div>

      <ConferenceInfo/>

{/* 
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-two__right">
                <div className="section-title text-left">
                  <h2 className="section-title__title">
                  <span>Main Stage: </span>Keynote Speech, Solo Presentation, Panel Discussions
                  </h2>
                </div>
                <p className="about-two__text">
                  Over 10 Keynote Presentations or Panel Discussions each day
                </p>
                
                <div className="about-two__solution-box">
                  <div className="about-two__solution-single">
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p className="about-two__solition-text">
                    Topics include Global Climate Action, Green Finance and Sustainable Business Growth and many more
                    </p>
                  </div>
                  <div className="about-two__solution-single">
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p className="about-two__solition-text">
                    Guest Speakers include industry standard leaders and corporate executives
                    </p>
                  </div>
                </div> 
                <div className="about-two__btn-and-client-info">
                  <div className="about-two__btn-box">
                    <Link href="" className="about-two__btn thm-btn-two">
                      <span className="fas fa-arrow-circle-right" />
                      Full Schedule
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-two__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                  </div>
                  <h2 className="section-title__title">
                    <span>Exhibition Booth Showcase: </span>Global Diversified ESG Innovation and Solutions
                  </h2>
                </div>
                <p className="about-two__text">
                  Covering areas such as climate action, green finance, carbon reduction through technology and social impact, it brings together innovative technologies and practices from around the world to promote the realization of sustainable development goals
                </p>
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                  </div>
                  <h2 className="section-title__title">
                    <span>Theme Pavillion Stages: </span>Focus on core topics, in-depth discussions and exchanges
                  </h2>
                </div>
                <p className="about-two__text">
                  Pavilion topics: Innovation and Technology, Regional ESG Focus, Biodiversity and Natural Capital, Social Impact, Net Zero Solutions                  
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      */}

      {/*Sponsors logos */}
      <Brand className="brand-three brand-five" />


      <img src="assets/images/testimonial/testimonials.png" style={{width: '90%', margin: '0% 5%'}}/>
      {/*
      <TestimonialsSlider/>
      Join Event Start*/}
      <section className="join-event">
        <div className="container">
          <div className="join-event__title-and-btn-box">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <p className="section-title__tagline section-title__tagline--two">
                  <span>//</span> Join Us as an Attendee or a Sponsor
                </p>
              </div>
              <h2 className="section-title__title">
                Why You Should Join <br />
                <span>ESG Xchange 2025</span>
              </h2>
            </div>
            <div className="join-event__btn-box">
              <Link href="/register" className="join-event__btn thm-btn-two">
                <span className="fas fa-arrow-circle-right" />
                Register
              </Link>
            </div>
          </div>
          <p className="join-event__text">
              ESG Xchange 2025 is not just an event — it’s THE MOST ANTICIPATED GLOBAL ESG PLATFORM IN HONG KONG,
bringing together high-level stakeholders from the United Nations, governments, international leaders, and top corporates to drive
transformative action in sustainability. With exclusive opportunities for co-designed speaking sessions and tailored meeting engagements, this event is your gateway to forging impactful
collaborations, staying ahead of global ESG trends, and achieving measurable business outcomes.
          </p>
          <br/>
          <img src="assets/images/resources/why-event.png" style={{width: '90%', margin: '2% 5%'}}/>
        </div>
      </section>
      {/*Join Event End*/}
      
      {/*Testimonial One Start
      <TestimonialsSlider />*/}
      {/*Testimonial One End*/}
      {/*Project One Start
      <PortfolioIsotope />*/}
      <section className="project-one">
        <div
          className="project-one__bg"
        ></div>
        <div className="container">
          <div className="project-one__inner">
            <div className="section-title text-left" style={{padding: '0 10%'}}>

              <h2 className="section-title__title">
              Past Conference <span>Highlights</span>
              </h2>
            </div>
            <iframe style={{width: '80%', height: '700px',margin: '5% 10%', maxWidth: '1500px'}} src="https://www.youtube.com/embed/JYxTbaiHCAo?si=G0_yXqJpfiw31c3u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe style={{width: '80%', height: '700px',margin: '0% 10%', maxWidth: '1500px'}} src="https://www.youtube.com/embed/rZOfyfpP-zA?si=X9PaFtZybqqHWVP-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </section>
      {/*Project One End*/}
    </EnvensLayouts>
  );
};
export default page;
