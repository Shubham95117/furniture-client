import React from "react";
import { Container, Row } from "react-bootstrap";
import aboutImg from "../../assets/about.webp";
const AboutPage = () => {
  return (
    <Container>
      <Row>
        <img src={aboutImg} alt="about-banner" />
      </Row>
      <Row>
        <Row>
          <h2
            className="d-flex align-items-center justify-content-center my-4"
            style={{ fontSize: "26px", color: "#4d4d4d" }}
          >
            ABOUT US
          </h2>
        </Row>
        <Row>
          <p>
            Nilkamal has eternally been a part of Indian home’s interiors
            knowingly or unknowingly taking space in the form of may be a simple
            plastic chair in your living room or an entire furniture set in your
            bedrooms, making it India’s favourite furniture brand. As a Company,
            Nilkamal upholds the quality factor of its products at the highest
            pedestal. This has resulted in Nilkamal being an undisputed leader
            in moulded plastic market. The Company has extended this expertise
            for Nilkamal’s range of Ready Furniture too, to add both emotion and
            charm to your sheen interiors. With a strong network of
            approximately 30,000 dealers spread across the country, the Company
            aims to bring quality and budget friendly furniture to the deepest
            regions in India. With a host of solutions aimed at enhancing lives
            of customers, Nilkamal has adapted to the changing furniture trends
            in the Indian market and reinvented itself time and again. Marking
            an entry into the E-commerce arena, Nilkamalfurniture.com is
            designed to be your one stop-shop for quality, trendy and
            budget-friendly furniture range.
          </p>
        </Row>
      </Row>
    </Container>
  );
};

export default AboutPage;
