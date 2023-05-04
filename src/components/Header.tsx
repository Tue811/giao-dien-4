import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "antd";
import {
  HeaderBottom,
  HeaderBottomLeft,
  HeaderBottomRight,
  HeaderLayout,
  HeaderMiddle,
  HeaderMobile,
  HeaderPC,
  HeaderTablet,
  HeaderTop,
  NavTop,
  Navbar,
} from "../styles/headerStyle";
import { Avatar, Badge } from "antd";
import {
  UserOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { rootReducer } from "./../store/redux/rootReducer";
import { Link } from "react-router-dom";
import reducer from './../store/reducer';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);


  const wlCount = useSelector((state) => state.reducer.wishlistCount);
  const cartCount = useSelector((state)=> state.reducer.cartCount)

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const headerRef = useRef();

  useEffect(() => {
    const header = headerRef.current;

    const handleScroll = () => {
      if (window.pageYOffset > header.offsetTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <HeaderLayout>
      <HeaderTop>
        Autumn Sales starts on November:<a>Sneak a peek now</a>
      </HeaderTop>
      <HeaderPC className="Container">
        <HeaderMiddle>
          <a href="/">
            <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/retina-babyshop.png" />
          </a>
        </HeaderMiddle>
        <HeaderBottom
          className={sticky ? "header sticky" : "header"}
          ref={headerRef}
        >
          <Row>
            <Col span={18}>
              <HeaderBottomLeft>
                <ul>
                  <li>
                    <a href="">HOME</a>
                  </li>
                  <li>
                    <a href="">OUR PRODUCTS</a>
                  </li>
                  <li>
                    <a href="">ABOUT US</a>
                  </li>
                  <li>
                    <a href="">BLOG</a>
                  </li>
                  <li>
                    <a href="">CLIENT CENTER</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                </ul>
              </HeaderBottomLeft>
            </Col>
            <Col span={6}>
              <HeaderBottomRight>
                <ul>
                  <li>
                    <a href="">
                      <UserOutlined style={{ fontSize: "18px" }} />
                    </a>
                  </li>
                  <li>
                    <Link to="#">
                      <Badge
                        count={wlCount}
                        offset={[10, 10]}
                        size="small"
                        style={{
                          fontSize: "10px",
                          backgroundColor: "#ebc989",
                        }}
                      >
                        <HeartOutlined style={{ fontSize: "18px" }} />
                      </Badge>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <Badge
                        count={cartCount}
                        offset={[10, 10]}
                        size="small"
                        style={{
                          fontSize: "10px",
                          backgroundColor: "#ebc989",
                        }}
                      >
                        <ShoppingCartOutlined style={{ fontSize: "18px" }} />
                      </Badge>
                    </a>
                  </li>
                  <li>
                    <a href="">$0.00</a>
                  </li>
                  <li>
                    <a href="">
                      <SearchOutlined style={{ fontSize: "18px" }} />
                    </a>
                  </li>
                </ul>
              </HeaderBottomRight>
            </Col>
          </Row>
        </HeaderBottom>
      </HeaderPC>
      <HeaderTablet>
        <HeaderMiddle>
          <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/retina-babyshop.png" />
        </HeaderMiddle>
        <HeaderBottom>
          <Row>
            <Col span={18}>
              <HeaderBottomLeft>
                <i
                  className="fa-solid fa-bars"
                  style={{ fontSize: "20px" }}
                  onClick={showDrawer}
                ></i>
              </HeaderBottomLeft>
            </Col>
            <Col span={6}>
              <HeaderBottomRight>
                <ul>
                  <li>
                    <a href="">
                      <UserOutlined style={{ fontSize: "18px" }} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Badge
                        count={5}
                        offset={[10, 10]}
                        size="small"
                        style={{
                          fontSize: "10px",
                          backgroundColor: "#ebc989",
                        }}
                      >
                        <HeartOutlined style={{ fontSize: "18px" }} />
                      </Badge>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Badge
                        count={5}
                        offset={[10, 10]}
                        size="small"
                        style={{
                          fontSize: "10px",
                          backgroundColor: "#ebc989",
                        }}
                      >
                        <ShoppingCartOutlined style={{ fontSize: "18px" }} />
                      </Badge>
                    </a>
                  </li>
                  <li>
                    <a href="">$0.00</a>
                  </li>
                  <li>
                    <a href="">
                      <SearchOutlined style={{ fontSize: "18px" }} />
                    </a>
                  </li>
                </ul>
              </HeaderBottomRight>
            </Col>
          </Row>
        </HeaderBottom>
        <Navbar placement="right" onClose={onClose} open={open}>
          {/* <CloseOutlined style={{
            color:"white",
            fontSize:"18px",
            textAlign:"end",
            width:"100%",
            padding:"20px"
          }}/> */}
          <ul>
            <li>
              <NavTop>
                <li>
                  <UserOutlined style={{ fontSize: "18px", color: "white" }} />
                </li>
                <li>
                  <a href="#">
                    <Badge
                      count={5}
                      offset={[10, 10]}
                      size="small"
                      style={{
                        fontSize: "10px",
                        backgroundColor: "rgba(0,0,0,0)",
                      }}
                    >
                      <HeartOutlined
                        style={{ fontSize: "18px", color: "white" }}
                      />
                    </Badge>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Badge
                      count={5}
                      offset={[10, 10]}
                      size="small"
                      style={{
                        fontSize: "10px",
                        backgroundColor: "rgba(0,0,0,0)",
                        border: "none",
                      }}
                    >
                      <ShoppingCartOutlined
                        style={{ fontSize: "18px", color: "white" }}
                      />
                    </Badge>
                  </a>
                </li>
                <li>
                  <a href="">$0.00</a>
                </li>
                <li>
                  <a href="">
                    <SearchOutlined style={{ fontSize: "18px" }} />
                  </a>
                </li>
              </NavTop>
            </li>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">OUR PRODUCTS</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">CLIENT CENTER</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </Navbar>
      </HeaderTablet>
      <HeaderMobile>
        <HeaderBottom>
          <Row align="middle">
            <Col span={20}>
              <HeaderMiddle>
                <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/retina-babyshop.png" />
              </HeaderMiddle>
            </Col>
            <Col span={4}>
              <HeaderBottomLeft>
                <i
                  className="fa-solid fa-bars"
                  style={{ fontSize: "26px" }}
                  onClick={showDrawer}
                ></i>
              </HeaderBottomLeft>
            </Col>
          </Row>
        </HeaderBottom>
        <Navbar placement="right" onClose={onClose} open={open}>
          {/* <CloseOutlined style={{
            color:"white",
            fontSize:"18px",
            textAlign:"end",
            width:"100%",
            padding:"20px"
          }}/> */}
          <ul>
            <li>
              <NavTop>
                <li>
                  <UserOutlined style={{ fontSize: "18px", color: "white" }} />
                </li>
                <li>
                  <a href="#">
                    <Badge
                      count={5}
                      offset={[10, 10]}
                      size="small"
                      style={{
                        fontSize: "10px",
                        backgroundColor: "rgba(0,0,0,0)",
                      }}
                    >
                      <HeartOutlined
                        style={{ fontSize: "18px", color: "white" }}
                      />
                    </Badge>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Badge
                      count={5}
                      offset={[10, 10]}
                      size="small"
                      style={{
                        fontSize: "10px",
                        backgroundColor: "rgba(0,0,0,0)",
                        border: "none",
                      }}
                    >
                      <ShoppingCartOutlined
                        style={{ fontSize: "18px", color: "white" }}
                      />
                    </Badge>
                  </a>
                </li>
                <li>
                  <a href="">$0.00</a>
                </li>
                <li>
                  <a href="">
                    <SearchOutlined style={{ fontSize: "18px" }} />
                  </a>
                </li>
              </NavTop>
            </li>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">OUR PRODUCTS</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">CLIENT CENTER</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </Navbar>
      </HeaderMobile>
    </HeaderLayout>
  );
};

export default Header;
