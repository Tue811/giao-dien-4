import React from "react";
import {
  ContentFooter,
  FooterBottom,
  FooterComponent,
  PhoneNumber,
  TitleContentFooter,
} from "../styles/footerStyles";
import { Col, Row } from "antd";
import ButtonComponent from "./ButtonComponent";
import { MobileOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <FooterComponent className="ant-layout-footer">
      <Row>
        <Col lg={6} md={6} sm={24} style={{padding:"30px 20px 30px 0"}}>
          <img
            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop.png"
            alt=""
          />
          <p style={{ marginBottom: "20px" }}>
            In the BeFriends Club you can take advantage of attractive offers
          </p>
          <ButtonComponent text="JOIN NOW"></ButtonComponent><br/>
          <img
            style={{ marginTop: "30px" }}
            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-pic1.png"
          ></img>
        </Col>
        <Col lg={6} md={6} sm={24}>
          <TitleContentFooter>Useful links</TitleContentFooter>
          <ContentFooter>
            <ul>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Help & About us</a>
              </li>
              <li>
                <a href="">Shipping & Returns</a>
              </li>
              <li>
                <a href="">Refund Policy</a>
              </li>
            </ul>
          </ContentFooter>
          <TitleContentFooter>Delivery</TitleContentFooter>
          <ContentFooter>
            <ul>
              <li>
                <a href="">How it Works</a>
              </li>
              <li>
                <a href="">Free Delivery</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </ContentFooter>
        </Col>
        <Col lg={6} md={6} sm={24}>
          <TitleContentFooter>Customer service</TitleContentFooter>
          <ContentFooter>
            <ul>
              <li>
                <a href="">Orders</a>
              </li>
              <li>
                <a href="">Downloads</a>
              </li>
              <li>
                <a href="">Addresses</a>
              </li>
              <li>
                <a href="">Account details</a>
              </li>
              <li>
                <a href="">OLost password</a>
              </li>
            </ul>
          </ContentFooter>
        </Col>
        <Col lg={6} md={6} sm={24}>
          <TitleContentFooter>Need help?</TitleContentFooter>
          <PhoneNumber>
            <MobileOutlined />
            +61 (0) 383 766 284
          </PhoneNumber>
          <PhoneNumber>
            <MobileOutlined />
            +61 (0) 383 766 284
          </PhoneNumber>
          <ContentFooter>
            <p>Opening hours:</p>
            <p><span>Monday - Friday: </span> 8am - 5pm </p>
            <p><span>Saturday - Sunday: </span>9am - 4pm</p>
          </ContentFooter>
        </Col>
      </Row>
      <hr/>
      <FooterBottom>
        <p>
        © 2023 Betheme by <span>Muffin group</span> | All Rights Reserved | Powered by <span>WordPress</span> 
        </p>
      </FooterBottom>
    </FooterComponent>
  );
};

export default Footer;
