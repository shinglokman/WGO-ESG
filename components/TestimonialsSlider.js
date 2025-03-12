"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialsSlider = () => {
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
            <div className="section-title__tagline-box">
              <p className="section-title__tagline section-title__tagline--two">
                <span>//</span> Testimonials
              </p>
            </div>
            <h2 className="section-title__title">
              Previous 
              <span>Testimonials</span>
            </h2>
          </div>
        </div>
        <div className="testimonial-one__bottom">
          <Swiper
            {...sliderProps.testimonial1}
            className="thm-swiper__slider swiper-container"
          >
            <div className="swiper-wrapper" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
              {/*Testimonial One Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-one__single" style={{width: '150%', marginLeft: '0%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                  <p className="testimonial-one__text">
                    "ESG Xchange drives impactful collaborations, advancing sustainability and green finance leadership in Asia and beyond."
                  </p>
                  <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/resources/Picture 1.png"
                        alt=""
                      />
                    </div>
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-content">
                      <h3>
                        <Link href="/testimonials">Mr Cheung Wing-Hing, GBS, JP</Link>
                      </h3>
                      <p>Deputy Chief Secretary for Administration</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Testimonial One Single End*/}
              {/*Testimonial One Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-one__single" style={{width: '150%', marginLeft: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                  <p className="testimonial-one__text">
                    "ESG Xchange empowers global partnerships, fostering green transformation and cementing Hong Kong's sustainable finance leadership."
                  </p>
                  <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/resources/Picture 2.png"
                        alt=""
                      />
                    </div>
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-content">
                      <h3>
                        <Link href="/testimonials">Mr Chan Ho-Lim, Joseph, JP</Link>
                      </h3>
                      <p>Under Secretary for Financial Services and the Treasury</p>
                    </div>
                  </div>
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
export default TestimonialsSlider;

export const TestimonialSlider2 = () => {
  return (
    <section className="testimonial-two">
      <div
        className="testimonial-two__bg"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/testimonial-two-bg.jpg)",
        }}
      />
      <div className="container">
        <div className="testimonial-two__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                <span>//</span> About The Event
              </span>
            </div>
            <h2 className="section-title__title">
              What Our Client's <br /> <span>Feedback</span>
            </h2>
          </div>
          <div className="testimonial-two__nav">
            <div
              className="swiper-button-next1"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <i className="icon-arrow" />
            </div>
            <div
              className="swiper-button-prev1"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <i className="icon-right-arrows" />
            </div>
          </div>
        </div>
        <div className="testimonial-two__bottom">
          <Swiper
            {...sliderProps.testimonial1}
            className="thm-swiper__slider swiper-container"
          >
            <div className="swiper-wrapper">
              {/*Testimonial Two Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-two__single">
                  <div className="testimonial-two__client-info">
                    <div className="testimonial-two__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-two-client-1-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-two__client-content">
                      <p className="testimonial-two__client-name">
                        <Link href="/testimonials">Ramitas Tim</Link>
                      </p>
                      <span className="testimonial-two__client-sub-title">
                        Founder
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-two__content">
                    <div className="testimonial-two__icon">
                      <span className="icon-conversation" />
                    </div>
                    <p className="testimonial-two__text">
                      A testimonial event is typically organized to the showcase
                      and celebrate positive in a feedback experiences, or
                      success stories from customer clients, or participants.
                      These events often feature testimonials presentations.{" "}
                    </p>
                    <div className="testimonial-two__rating-box">
                      <div className="testimonial-two__rating">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                      </div>
                      <p className="testimonial-two__rating-text">
                        5 Out of 5.0
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Testimonial Two Single End*/}
              {/*Testimonial Two Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-two__single">
                  <div className="testimonial-two__client-info">
                    <div className="testimonial-two__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-two-client-1-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-two__client-content">
                      <p className="testimonial-two__client-name">
                        <Link href="/testimonials">Tim David</Link>
                      </p>
                      <span className="testimonial-two__client-sub-title">
                        Founder
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-two__content">
                    <div className="testimonial-two__icon">
                      <span className="icon-conversation" />
                    </div>
                    <p className="testimonial-two__text">
                      A testimonial event is typically organized to the showcase
                      and celebrate positive in a feedback experiences, or
                      success stories from customer clients, or participants.
                      These events often feature testimonials presentations.{" "}
                    </p>
                    <div className="testimonial-two__rating-box">
                      <div className="testimonial-two__rating">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                      </div>
                      <p className="testimonial-two__rating-text">
                        5 Out of 5.0
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Testimonial Two Single End*/}
              {/*Testimonial Two Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-two__single">
                  <div className="testimonial-two__client-info">
                    <div className="testimonial-two__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-two-client-1-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-two__client-content">
                      <p className="testimonial-two__client-name">
                        <Link href="/testimonials">Jessica Brown</Link>
                      </p>
                      <span className="testimonial-two__client-sub-title">
                        Founder
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-two__content">
                    <div className="testimonial-two__icon">
                      <span className="icon-conversation" />
                    </div>
                    <p className="testimonial-two__text">
                      A testimonial event is typically organized to the showcase
                      and celebrate positive in a feedback experiences, or
                      success stories from customer clients, or participants.
                      These events often feature testimonials presentations.{" "}
                    </p>
                    <div className="testimonial-two__rating-box">
                      <div className="testimonial-two__rating">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                      </div>
                      <p className="testimonial-two__rating-text">
                        5 Out of 5.0
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Testimonial Two Single End*/}
              {/*Testimonial Two Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-two__single">
                  <div className="testimonial-two__client-info">
                    <div className="testimonial-two__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-two-client-1-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-two__client-content">
                      <p className="testimonial-two__client-name">
                        <Link href="/testimonials">Ramitas Tim</Link>
                      </p>
                      <span className="testimonial-two__client-sub-title">
                        Founder
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-two__content">
                    <div className="testimonial-two__icon">
                      <span className="icon-conversation" />
                    </div>
                    <p className="testimonial-two__text">
                      A testimonial event is typically organized to the showcase
                      and celebrate positive in a feedback experiences, or
                      success stories from customer clients, or participants.
                      These events often feature testimonials presentations.{" "}
                    </p>
                    <div className="testimonial-two__rating-box">
                      <div className="testimonial-two__rating">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                      </div>
                      <p className="testimonial-two__rating-text">
                        5 Out of 5.0
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Testimonial Two Single End*/}
              {/*Testimonial Two Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-two__single">
                  <div className="testimonial-two__client-info">
                    <div className="testimonial-two__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-two-client-1-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-two__client-content">
                      <p className="testimonial-two__client-name">
                        <Link href="/testimonials">Tim David</Link>
                      </p>
                      <span className="testimonial-two__client-sub-title">
                        Founder
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-two__content">
                    <div className="testimonial-two__icon">
                      <span className="icon-conversation" />
                    </div>
                    <p className="testimonial-two__text">
                      A testimonial event is typically organized to the showcase
                      and celebrate positive in a feedback experiences, or
                      success stories from customer clients, or participants.
                      These events often feature testimonials presentations.{" "}
                    </p>
                    <div className="testimonial-two__rating-box">
                      <div className="testimonial-two__rating">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                      </div>
                      <p className="testimonial-two__rating-text">
                        5 Out of 5.0
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Testimonial Two Single End*/}
              {/*Testimonial Two Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-two__single">
                  <div className="testimonial-two__client-info">
                    <div className="testimonial-two__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-two-client-1-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-two__client-content">
                      <p className="testimonial-two__client-name">
                        <Link href="/testimonials">Jessica Brown</Link>
                      </p>
                      <span className="testimonial-two__client-sub-title">
                        Founder
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-two__content">
                    <div className="testimonial-two__icon">
                      <span className="icon-conversation" />
                    </div>
                    <p className="testimonial-two__text">
                      A testimonial event is typically organized to the showcase
                      and celebrate positive in a feedback experiences, or
                      success stories from customer clients, or participants.
                      These events often feature testimonials presentations.{" "}
                    </p>
                    <div className="testimonial-two__rating-box">
                      <div className="testimonial-two__rating">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                      </div>
                      <p className="testimonial-two__rating-text">
                        5 Out of 5.0
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Testimonial Two Single End*/}
            </div>
            {/* If we need navigation buttons */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
