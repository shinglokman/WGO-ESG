"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const ConferenceInfo = () => {
  return (
    <section className="testimonial-one">
      <div className="testimonial-one__shape-1 img-bounce">
        <img src="assets/images/shapes/testimonial-one-shape-1.png" alt="" />
      </div>
      <div className="testimonial-one__shape-2 float-bob-x">
        <img src="assets/images/shapes/testimonial-one-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="testimonial-one__top">
          <div className="section-title text-left">

            <h2 className="section-title__title">
              Summit
              <span> Format</span>
            </h2>
          </div>
        </div>
        <div className="testimonial-one__bottom">
          <Swiper
            {...sliderProps.testimonial1}
            className="thm-swiper__slider swiper-container"
          >
            <div className="swiper-wrapper">
              {/*Testimonial One Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-one__single" style={{paddingBottom: '30px', height: '680px'}}>
                    <div className="testimonial-one__client-info">
                            <h2 className="section-title__title" style={{color: '#fff', fontSize: 'large', textAlign: 'center'}}>
                            <span style={{color: '#fff', fontSize: 'x-large'}}>Main Stage: </span> <br/>Keynote Speech, Solo Presentation, Panel Discussions
                            </h2>
                    </div>
                    <p className="testimonial-one__text">
                    Over 10 Keynote Presentations or Panel Discussions each day
                    </p>
                    <div className="about-two__solution-single" style={{margin: '5%'}}>
                        <div className="icon">
                        <span className="icon-check-1" />
                        </div>
                        <p className="about-two__solition-text">
                        Topics include Global Climate Action, Green Finance and Sustainable Business Growth and many more
                        </p>
                    </div>
                    <div className="about-two__solution-single" style={{margin: '5%'}}>
                        <div className="icon">
                        <span className="icon-check-1" />
                        </div>
                        <p className="about-two__solition-text">
                        Guest Speakers include industry standard leaders and corporate executives
                        </p>
                  </div>
                </div>
              </SwiperSlide>
              {/*Testimonial One Single End*/}
              {/*Testimonial One Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-one__single" style={{paddingBottom: '30px', height: '680px'}}>
                    <div className="testimonial-one__client-info">
                            <h2 className="section-title__title" style={{color: '#fff', fontSize: 'large', textAlign: 'center'}}>
                            <span style={{color: '#fff', fontSize: 'x-large'}}>Exhibition Booths:</span> <br/>Global Diversified ESG Innovation and Solutions
                            </h2>
                    </div>
                    <p className="testimonial-one__text">
                    Bringing together innovative technologies and practices from around the world to promote the realization of sustainable development goals
                    </p>
                    <ul className="about-two__points list-unstyled">
                        <li>
                        <div className="icon">
                            <span className="icon-check-1" />
                        </div>
                        <p>Climate Action</p>
                        </li>
                        <li>
                        <div className="icon">
                            <span className="icon-check-1" />
                        </div>
                        <p>Green Finance</p>
                        </li>
                        <li>
                        <div className="icon">
                            <span className="icon-check-1" />
                        </div>
                        <p>Carbon Reduction through Technology</p>
                        </li>
                        <li>
                        <div className="icon">
                            <span className="icon-check-1" />
                        </div>
                        <p>Social Impact</p>
                        </li>
                    </ul>
                </div>
              </SwiperSlide>
              {/*Testimonial One Single End*/}
              {/*Testimonial One Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-one__single" style={{paddingBottom: '30px', height: '680px'}}>
                    <div className="testimonial-one__client-info">
                            <h2 className="section-title__title" style={{color: '#fff', fontSize: 'large', textAlign: 'center', marginLeft: '0', marginRight: '0'}}>
                            <span style={{color: '#fff', fontSize: 'x-large'}}>Theme Pavillion Stages:</span> <br/>Focus on core topics, in-depth discussions and exchanges
                            </h2>
                    </div>
                    <p className="testimonial-one__text">
                    Pavilion topics including: 
                    </p>
                    <ul className="about-two__points list-unstyled">
                        <li>
                        <div className="icon">
                            <span className="icon-check-1" />
                        </div>
                        <p>Innovation and Technology</p>
                        </li>
                        <li>
                        <div className="icon">
                            <span className="icon-check-1" />
                        </div>
                        <p>Regional ESG Focus</p>
                        </li>
                        <li>
                        <div className="icon">
                            <span className="icon-check-1" />
                        </div>
                        <p>Biodiversity and Natural Capital</p>
                        </li>
                        <li>
                        <div className="icon">
                            <span className="icon-check-1" />
                        </div>
                        <p>Social Impact</p>
                        </li>
                        <li>
                        <div className="icon">
                            <span className="icon-check-1" />
                        </div>
                        <p>Net Zero Solutions</p>
                        </li>
                    </ul>
                </div>
              </SwiperSlide>
              {/*Testimonial One Single End*/}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default ConferenceInfo;