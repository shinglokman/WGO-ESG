"use client";
import { envensUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
const Header = ({ header }) => {
  useEffect(() => {
    envensUtility.stickyHeader();
  }, []);

  switch (header) {
    case 1:
      return <Header2 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header2 />;

    default:
      return <Header2 />;
  }
};
export default Header;

const Menus = () => {
  return (
    <ul className="main-menu__list">
      <li>
        <Link href="/">Home </Link>
      </li>
      <li className="dropdown">
        <Link href="/exhibitors-and-sponsors">Exhibitors and Sponsors</Link>
        <ul>
          <li>
            <Link href="/exhibitors-and-sponsors">Why Sponsor and Exhibit</Link>
          </li>
          <li>
            <Link href="/exhibitors-and-sponsors#2025">2025 Sponsors and Exhibitors</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/partners">Partners</Link>
        <ul>
          <li>
            <Link href="/partners#organiser">Organiser</Link>
          </li>
          {/* 
          <li>
            <Link href="/partners#co-organiser">Co-organiser</Link>
          </li>
          */}
          <li>
            <Link href="/partners#conference-partner">Conference Partner</Link>
          </li>
          <li>
            <Link href="/partners#strategic-partner">Strategic Partner</Link>
          </li>
          <li>
            <Link href="/partners#supporting-organisations">Supporting Organisations</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/summit">Summit   </Link>
      </li>
      <li>
        <Link href="/speakers">Speakers   </Link>
      </li>
      {/*<li className="dropdown">
        <Link href="/summit">Summit</Link>
        <ul>
          <li>
            <Link href="/">2025 Summit</Link>
          </li>
          <li>
            <Link href="/">Global Climate Leadership Main Stage</Link>
          </li>
          <li>
            <Link href="/">The Innovation Stage</Link>
          </li>
          <li>
            <Link href="/">Green Finance &amp; Carbon Neutrality Stage</Link>
          </li>
          <li>
            <Link href="/">ESG Leadership &amp; Governance Stage</Link>
          </li>
        </ul>
      </li>
      
      <li>
        <Link href="/">Tech Ventures </Link>
      </li>*/}
      <li className="dropdown">
        <Link href="/">Past Editions</Link>
        <ul>
          <li>
            <Link href="https://2024.esgxchangehk.com/">2024</Link>
          </li>
          <li>
            <Link href="https://thewgo.org/site-wgo/unf/">2023</Link>
          </li>
        </ul>
      </li>
      <li >
        <div className="about-two__btn-box">
          <Link href="/register" className="about-two__btn thm-btn-two" style={{fontSize: '16px'}}>
            <span className="fas " />
            Register
          </Link>
        </div>
      </li>
    </ul>
  );
};

const Social = () => {
  return (
    <div className="main-menu__social">
      <a href="https://www.facebook.com/worldgreenorganisation/">
        <span className="fab fa-facebook-f" />
      </a>
      <a href="https://www.instagram.com/worldgreenorganisation/">
        <span className="fab fa-instagram" />
      </a>
      <a href="https://www.linkedin.com/company/world-green-organisation">
        <span className="fab fa-linkedin-in" />
      </a>
    </div>
  );
};

const MobileMenu = ({ mobileToggle, setMobileToggle }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <div className={`mobile-nav__wrapper ${mobileToggle ? "expanded" : ""}`}>
      <div
        className="mobile-nav__overlay mobile-nav__toggler"
        onClick={() => setMobileToggle(false)}
      />
      {/* /.mobile-nav__overlay */}
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close mobile-nav__toggler"
          onClick={() => setMobileToggle(false)}
        >
          <i className="fa fa-times" />
        </span>
        <div className="logo-box">
          <Link href="/" aria-label="logo image">
            <img src="assets/images/resources/header.png" style={{width: '100%'}} alt />
          </Link>
          <Social/>
        </div>
        {/* /.logo-box */}
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            <li className="current">
              <Link href="/">
                Home{" "}
              </Link>
            </li>
            <li className="dropdown">
              <a href="#">
                Exhibitors and Sponsors
                <button
                  aria-label="dropdown toggler"
                  onClick={() => activeMenuSet("Exhibitors")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </a>
              <ul style={activeLi("Exhibitors")}>
                <li>
                  <Link href="/">Why Sponsor and Exhibit</Link>
                </li>
                <li>
                  <Link href="/">2025 Sponsors and Exhibitors</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                Partners
                <button
                  aria-label="dropdown toggler"
                  onClick={() => activeMenuSet("Partners")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </a>
              <ul style={activeLi("Partners")}>
                <li>
                  <Link href="/">Organiser</Link>
                </li>
                {/* 
                <li>
                  <Link href="/">Co-organiser</Link>
                </li>
                */}
                <li>
                  <Link href="/">Conference Partner</Link>
                </li>
                <li>
                  <Link href="/">Strategic Partner</Link>
                </li>
                <li>
                  <Link href="/">Supporting Organisations</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                Summit
                <button
                  aria-label="dropdown toggler"
                  onClick={() => activeMenuSet("Summit")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </a>
              <ul style={activeLi("Summit")}>
                <li>
                  <Link href="/">2025 Summit</Link>
                </li>
                <li>
                  <Link href="/">Global Climate Leadership Main Stage</Link>
                </li>
                <li>
                  <Link href="/">The Innovation Stage</Link>
                </li>
                <li>
                  <Link href="/">Green Finance &amp; Carbon Neutrality Stage</Link>
                </li>
                <li>
                  <Link href="/">ESG Leadership &amp; Governance Stage</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                Past Editions
                <button
                  aria-label="dropdown toggler"
                  onClick={() => activeMenuSet("Editions")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </a>
              <ul style={activeLi("Editions")}>
                <li>
                  <Link href="/">2024</Link>
                </li>
                <li>
                  <Link href="/">2023</Link>
                </li>
              </ul>
            </li>
            <li className="current">
              <Link href="/">
                Tech Ventures{" "}
              </Link>
            </li>
            <li>
              <div className="about-two__btn-box">
                <Link href="/register" className="about-two__btn thm-btn-two">
                  <span className="fas " />
                  Register
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/* /.mobile-nav__container */}
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope" />
            <a href="mailto:nickauyong@wgo.org">nickauyong@thewgo.org</a>
          </li>
          <li>
            <i className="fa fa-phone-alt" />
            <a href="tel:+85260815461">+852 6081 5461</a>
          </li>
        </ul>
        {/* /.mobile-nav__contact */}
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="#" className="fab fa-twitter" />
            <a href="#" className="fab fa-facebook-square" />
            <a href="#" className="fab fa-pinterest-p" />
            <a href="#" className="fab fa-instagram" />
          </div>
          {/* /.mobile-nav__social */}
        </div>
        {/* /.mobile-nav__top */}
      </div>
      {/* /.mobile-nav__content */}
    </div>
  );
};

const Header1 = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <Fragment>
      <header className="main-header">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/">
                    <img src="assets/images/resources/logo-1.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__main-menu-box">
                  <a
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={() => setMobileToggle(true)}
                  >
                    <i className="fa fa-bars" />
                  </a>
                  <Menus />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content" />
      </div>
      <MobileMenu
        mobileToggle={mobileToggle}
        setMobileToggle={setMobileToggle}
      />
    </Fragment>
  );
};

const Header2 = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <Fragment>
      <header className="main-header main-header-two">
        <nav className="main-menu main-menu-two">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                    <img src="assets/images/resources/header.png" alt="" width='80%' />
                </div>
                <Social/>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__main-menu-box">
                  <a
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={() => setMobileToggle(true)}
                  >
                    <i className="fa fa-bars" />
                  </a>
                  <Menus />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu main-menu-two">
        <div className="sticky-header__content" />
      </div>
      <MobileMenu
        mobileToggle={mobileToggle}
        setMobileToggle={setMobileToggle}
      />
    </Fragment>
  );
};

const Header3 = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <Fragment>
      <header className="main-header-three">
        <div className="main-header-three__top">
          <div className="main-header-three__top-inner">
            <ul className="list-unstyled main-header-three__contact-list">
              <li>
                <div className="icon">
                  <i className="icon-email" />
                </div>
                <div className="text">
                  <p>
                    <a href="mailto:needhelp@company.com">
                      needhelp@company.com
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-pin" />
                </div>
                <div className="text">
                  <p>80 Broklyn Golden Street UK</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-phone-call" />
                </div>
                <div className="text">
                  <p>
                    <a href="tel:0012346823705">+00 (1234) 682 3705</a>
                  </p>
                </div>
              </li>
            </ul>
            <div className="main-header-three__social-and-top-menu">
              <div className="main-header-three__social">
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
                <a href="#">
                  <i className="fas fa-wifi" />
                </a>
              </div>
              <div className="main-header-three__top-menu">
                <ul className="main-header-three__top-menu-list list-unstyled">
                  <li>
                    <Link href="/faq">Our Faqs</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/register">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-three__wrapper-inner">
              <div className="main-menu-three__left">
                <div className="main-menu-three__logo">
                  <Link href="/">
                    <img src="assets/images/resources/logo-3.png" alt="" />
                  </Link>
                </div>
                <div className="main-menu-three__main-menu-box">
                  <a
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={() => setMobileToggle(true)}
                  >
                    <i className="fa fa-bars" />
                  </a>
                  <Menus />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu main-menu-three">
        <div className="sticky-header__content" />
        {/* /.sticky-header__content */}
      </div>
      <MobileMenu
        mobileToggle={mobileToggle}
        setMobileToggle={setMobileToggle}
      />
    </Fragment>
  );
};
