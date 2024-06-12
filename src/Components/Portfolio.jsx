/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Portfolio Web-Site",
    description:
      "Portfolio site created using React. This site is a great way to showcase your work and experience.",
    url: "https://randula-live.vercel.app/",
  },
  {
    title: "Procurement Item Management Application - Web Application & Mobile Application",
    description:
      "SHMOFY is a Web + Mobile Application to handle the procurement items and orders for the construction industry.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Sales Optimization Application-Web Application Application",
    description:
      "Price Q Web Application is built for the Clothing Industry to calculate the MSRP for the clothing items by reading the attributes of the clothing items ",
    url: "https://github.com/Team-Tetra-Weeknd-People/SPM_Sales_Optimization_Application",
  },
  {
    title: "Material Inspection Mobile Application for Apperal Industry",
    description:
      "Material Inspection Application is a mobile application built to track the Quality Attributes of the Apparel Items",
    url: "https://github.com/Team-Tetra-Weeknd-People/UEE-Clothing-React-Native-App",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
