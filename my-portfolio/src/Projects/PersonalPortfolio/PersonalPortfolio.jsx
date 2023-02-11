import React from "react";
import "./PersonalPortfolio.css";
import proj1Img from "../../imgPF/portfolio.gif";
import { Link, Outlet } from "react-router-dom";

const PersonalPortfolio = () => {
  return (
    <>
      <div className="whitespace"></div>
      {/* <!---------------where hero section starts-------------> */}
      <div className="container">
        <div className="hero-content" id="portfolio">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 className="wow fadeInUp" data-wow-delay="1s">
                Personal Portfolio
              </h1>
              <br />
              <br />

              <div className="row">
                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.2s">
                    role :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.3s">
                    User Experience Engineer
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.4s">
                    started :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.5s">
                    11 Feb 2022
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.6s">
                    completed :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.7s">
                    13 Feb 2022
                  </h6>
                </div>
              </div>
              <br />
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                While sick with COVID, I decided to build my personal portfolio
                2 days after revisiting my TikTok idea in Figma. I wanted to
                showcase my other projects, yet put my front-end skills to the
                test and build my portfolio from scratch. I had already learned
                HTML, CSS, JavaScript a month prior, but I used several
                frameworks and libraries like jQuery & Bootstrap that I had to
                learn. I also needed to learn how to make it responsive. This
                was an interesting challenge, but I fortunately completed the
                task. In 1.5 days, I had mostly all the website completed and up
                and running. However, I did add in a couple of finishing touches
                a couple of days after that. The result is shown below but can
                be seen by navigating throughout this site.
              </p>
              <p className="wow fadeInUp" data-wow-delay="2s">
                Note: I will still be adding to the site as I am developing more
                projects/websites.
              </p>
              <p className="wow fadeInUp" data-wow-delay="2.2s">
                Update (Dec. 2022): I've recently updated the site to encompass
                React.js & Webpack.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where hero section ends--------------->

        <!---------------where project image starts------------> */}
      <div className="project-img">
        <div className="container">
          <br />
          <br />
          <div className="row" id="portfolio">
            <div className="col">
              <img
                src={proj1Img}
                alt="website portfolio"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              {/* <!--<div className="images images1 wow fadeInUp" data-wow-delay=onloadedmetadata="0.8s"></div>--> */}
              <h2>Portfolio Front Page in Action</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where project image ends--------------> */}
      <br />
      <br />
      {/* <!---------------where project nav starts--------------> */}
      <div className="project-nav" id="arrows">
        <div className="container">
          <div className="row">
            <Link
              className="col-lg-6 no-underline prev"
              to="/projects/blog-site"
            >
              <p id="prev">
                <ion-icon name="arrow-back"></ion-icon>
                previous
              </p>
            </Link>

            <Link
              className="col-lg-6 no-underline next"
              to="/projects/tiktok-redesign"
            >
              <p id="next">
                next
                <ion-icon name="arrow-forward"></ion-icon>
              </p>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
      {/* <!---------------where project nav end-----------------> */}
      <div className="whitespace"></div>
    </>
  );
};

export default PersonalPortfolio;
