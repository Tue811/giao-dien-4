import React, { useState, useRef } from "react";
import {
  Advantage,
  AdvantageItem,
  Ages,
  Banner,
  BannerBottom,
  BannerTop,
  BenefitItem,
  Benefits,
  Bestsellers,
  Blog,
  BlogItem,
  CarouselBanner1,
  CarouselBanner2,
  Catalog,
  Category,
  CategoryText,
  ColorProduct,
  GroupAges,
  HomePageLayout,
  ImgProduct,
  Instagram,
  Introduce,
  ListBrands,
  ListProducts,
  NameProduct,
  Offer,
  OfferLeft,
  OfferRight,
  PriceProduct,
  Product,
  SliderOffer,
  TitleCatalog,
} from "../styles/homePage";
import { Button, Card, Carousel, Col, Row, Typography } from "antd";
import ButtonComponent from "../components/ButtonComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { addWl, deleteWl, getProduct } from './../store/action';
import { useDispatch } from "react-redux";
import { dataProduct } from './../dataProduct';
import { Link } from 'react-router-dom';
import ProductCart from "../components/Modal/ProductCart";

const HomePage = () => {
  const [product, setProduct] = useState(dataProduct)
  const [openProductModal, setOpenProductModal] = useState(false)
  const [imgProduct, setImgProduct] = useState('');
  const [nameProduct, setNameProduct] = useState('');
  const [priceProduct, setPriceProduct]=useState('')
  const dispatch = useDispatch();
  const contentStyle = {
    height: "600px",
    textAlign: "center",
    background: "#364d79",
  };
  const settings = {
    dots: true,
  };

  interface Props{
    addWl : ()=> void;
    wishlistCount: number;
  }
   const handleAddWl=(item : any)=>{
    // setLike(true)
    dispatch(addWl());
    const index = product.findIndex((index: any)=> index.id===item.id);
    const copyData = [...product]
    copyData[index]={
      ...item,
      like: true
    }
    setProduct(copyData);
   }
   const handleDeleteWl=(item: any)=>{
    dispatch(deleteWl());
    const index = product.findIndex((index: any)=> index.id===item.id);
    const copyData = [...product]
    copyData[index]={
      ...item,
      like: false
    }
    setProduct(copyData);
    // setLike(false)
   }

   const handleProduct=(item)=>{
     setOpenProductModal(true);
     setImgProduct(item.imageMain);
     setNameProduct(item.name);
     setPriceProduct(item.price)

   }

   const handleDetailProduct=(item: any)=>{
        dispatch(getProduct(item))
   }

  return (
    <HomePageLayout className="ant-layout-content">
      <Banner>
        <Row>
          <Col lg={16} sm={24}  style={{ paddingRight: "24px", height: "100%" }}>
            <Carousel autoplay>
              <div>
                <CarouselBanner1 style={contentStyle}>
                  <i
                    style={{
                      fontSize: "43px",
                      fontFamily: " 'Bodoni Moda', serif",
                    }}
                  >
                    Collection
                  </i>
                  <p style={{ fontSize: "55px", fontWeight: "600" }}>
                    Autumn - Winter
                  </p>
                  <p
                    style={{
                      fontSize: "80px",
                      fontWeight: "900",
                      color: "#ebc989",
                    }}
                  >
                    2021
                  </p>
                </CarouselBanner1>
              </div>
              <div>
                <CarouselBanner2 style={contentStyle}>
                  <i
                    style={{
                      fontSize: "43px",
                      fontFamily: " 'Bodoni Moda', serif",
                    }}
                  >
                    What's trending
                  </i>
                  <p
                    style={{
                      fontSize: "80px",
                      fontWeight: "900",
                      color: "#ebc989",
                    }}
                  >
                    {" "}
                    in 2022
                  </p>
                </CarouselBanner2>
              </div>
            </Carousel>
          </Col>
          <Col lg={8} sm={24} style={{ height: "600px" }}>
            <BannerTop>
              <p>Select your </p>
              <span>child’s age</span>
              <GroupAges>
                <Ages>0 - 2</Ages>
                <Ages>2 - 4</Ages>
                <Ages>4 - 6</Ages>
              </GroupAges>
            </BannerTop>
            <BannerBottom>
              <img
                style={{ width: "144px" }}
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-promo-pic1.webp"
                alt=""
              />
              <p>Duvet Cover Set</p>
              <h3>-40% off</h3>
              <a>VIEW COLLECTION</a>
            </BannerBottom>
          </Col>
        </Row>
      </Banner>
      <Category>
        <Row>
          <Col lg={6} md={6} sm={24}>
            <CategoryText>
              Bed Sets
              <br />
              <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </CategoryText>
          </Col>
          <Col lg={6} md={6} sm={24}>
            <CategoryText>
              Sleepwear
              <br />
              <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </CategoryText>
          </Col>
          <Col lg={6} md={6} sm={24}>
            <CategoryText>
              Pyjamas
              <br />
              <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </CategoryText>
          </Col>
          <Col lg={6} md={6} sm={24}>
            <CategoryText>
              Nighties
              <br />
              <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </CategoryText>
          </Col>
          <Col lg={6} md={6} sm={24}>
            <CategoryText>
              Bathrobes
              <br />
              <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </CategoryText>
          </Col>
          <Col lg={6} md={6} sm={24}>
            <CategoryText>
              Classic
              <br />
              <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </CategoryText>
          </Col>
          <Col lg={6} md={6} sm={24}>
            <CategoryText>
              Fancy
              <br />
              <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </CategoryText>
          </Col>
          <Col lg={6} md={6} sm={24}>
            <CategoryText>
              More products
              <br />
              <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </CategoryText>
          </Col>
        </Row>
      </Category>
      <Introduce>
        <img
          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
          alt=""
        />
        <p>
          Welcome in our <span>child's world.</span>
          All our products are made from generations with passion.
        </p>
      </Introduce>
      <Catalog>
        <TitleCatalog>
          Product's
          <br /> Catalog
        </TitleCatalog>
        <ListProducts>
          <Row gutter={20}>
            {product &&
              product.map((item: any)=>(
                <Col lg={6} md={12} sm={12} key={item.id}>
              <div >
              <Product>
                <ImgProduct>
                 <Link to={`/product/${item.id}`} onClick={()=>{handleDetailProduct(item)}}>
                 <img
                    className="img-item-1"
                    src={item.imageMain}
                    alt=""
                  />

                  <img
                    className="img-item-2"
                    src={item.image[1]}
                    alt=""
                  />
                 </Link>

                  <div className="optionProduct">
                    <i className="fa-solid fa-link-simple"></i>
                    {
                      item.like
                      ?
                      <i className="fa-solid fa-heart" onClick={() => handleDeleteWl(item)}></i>
                      :
                      <i className="fa-regular fa-heart" onClick={()=>handleAddWl(item)}></i>
                    }
                    <i className="fa-solid fa-expand" onClick={()=>handleProduct(item)} ></i>
                  </div>
                </ImgProduct>
                <NameProduct>{item.name}</NameProduct>
                <ColorProduct>
                  <i
                    style={{ color: "#3a6380" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#773d49" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#bc2a32" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#eedcd8" }}
                    className="fa-solid fa-circle"
                  ></i>
                </ColorProduct>
                <PriceProduct> ${item.price}</PriceProduct>
              </Product>

              </div>
            </Col>
              ))
            }
            
          </Row>
        </ListProducts>
        <div
          style={{
            textAlign: "center",
            margin:"30px 0 50px"
          }}
        >
          <ButtonComponent text="GO TO SHOP"></ButtonComponent>
          <Button
            style={{
              color: "#626262",
              backgroundColor: "#ececec",
              padding: "18px 40px 18px 40px",
              fontWeight: "600",
              height: "auto",
              fontSize: "15px",
              letterSpacing: "1px",
              marginLeft: "30px",
            }}
          >
            SEE PROMOTIONS
          </Button>
        </div>
      </Catalog>
      <Offer>
        <Row>
          <Col lg={12} md={12} sm={24}>
            <OfferLeft>
              <p> LIMITED OFFER</p>
              <h1>-50%</h1>
              <h4>
                Holiday <br /> Sale
              </h4>
              <div>
                <p>
                  <span>00</span>
                  <br />
                  days
                </p>
                <p>
                  <span>00</span>
                  <br />
                  hours
                </p>
                <p>
                  <span>00</span>
                  <br />
                  minutes
                </p>
              </div>
            </OfferLeft>
          </Col>
          <Col lg={12} md={12} sm={24}>
            <OfferRight>
              <p>USE DISCOUNTS AND PROMOTIONS</p>
              <h4>
                Special <br />
                <span>Offers</span>
              </h4>
              <SliderOffer>
                <Slider
                  {...settings}
                  style={{ width: "70%", margin: "0 auto" }}
                >
                  <div>
                    <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-giftcart.webp" />
                    <p>Gift card with benefit </p>
                    <span>BeFriend</span>
                  </div>
                  <div>
                    <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-bebear.webp" />
                    <p>Win a big</p>
                    <span>BeTeddyBear</span>
                  </div>
                </Slider>
              </SliderOffer>
            </OfferRight>
          </Col>
        </Row>
      </Offer>
      <Benefits>
        <h2>What are benefits of choosing us?</h2>
        <p>
          Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
          rhoncus eu, luctus et interdum.
        </p>
        <Row>
          <Col lg={6} md={6} sm={24}>
            <BenefitItem>
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon1.png"
                alt=""
              />
              <br />
              <b>100% BIO</b>
              <p>Lorem ipsum dolor sit amet enim etiam lorem lectus</p>
            </BenefitItem>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
              alt=""
            />
            <BenefitItem>
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon3.png"
                alt=""
              />
              <br />
              <b>COMFORT FOAM</b>
              <p>Lorem ipsum dolor sit amet enim etiam lorem lectus</p>
            </BenefitItem>
          </Col>
          <Col lg={12} md={12} sm={24}>
            <img
              style={{ width: "100%" }}
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-pic1.webp"
              alt=""
            />
          </Col>
          <Col lg={6} md={6} sm={24}>
            <BenefitItem>
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon2.png"
                alt=""
              />
              <br />
              <b>HIGH SAFETY</b>
              <p>Lorem ipsum dolor sit amet enim etiam lorem lectus</p>
            </BenefitItem>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
              alt=""
            />
            <BenefitItem>
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon4.png"
                alt=""
              />
              <br />
              <b>MOISTURE CONTROL</b>
              <p>Lorem ipsum dolor sit amet enim etiam lorem lectus</p>
            </BenefitItem>
          </Col>
        </Row>
        <ButtonComponent text="SEE ALL FEATURES"></ButtonComponent>
      </Benefits>
      <Blog>
        <Row>
          <Col lg={17} md={17} sm={24}>
            <BlogItem
              style={{
                backgroundImage:
                  "url(https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic1.webp)",
                height: "100%",
                paddingTop: "370px",
              }}
            >
              <span>
                <i className="fa-solid fa-user"></i>
                Muffin Group on
                <i className="fa-regular fa-clock"></i>
                October 11, 2021
              </span>
              <p>Tempor diam pede cursus vitae</p>
            </BlogItem>
          </Col>
          <Col lg={7} md={7} sm={24}>
            <BlogItem
              style={{
                backgroundImage:
                  "url(https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic2.webp)",
                // height: "50%",
                paddingTop: "120px",
              }}
            >
              <span>
                <i className="fa-solid fa-user"></i>
                Muffin Group on
                <i className="fa-regular fa-clock"></i>
                October 11, 2021
              </span>{" "}
              <p style={{ fontSize: "20px" }}>Tempor diam pede cursus vitae</p>
            </BlogItem>
            <BlogItem
              style={{
                backgroundImage:
                  "url(https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic3.webp)",
                // height: "50%",
                paddingTop: "120px",
              }}
            >
              <span>
                <i className="fa-solid fa-user"></i>
                Muffin Group on
                <i className="fa-regular fa-clock"></i>
                October 11, 2021
              </span>
              <p style={{ fontSize: "20px" }}>Tempor diam pede cursus vitae</p>
            </BlogItem>
          </Col>
        </Row>
      </Blog>
      <Bestsellers>
        <h2>Our bestsellers</h2>
        <ListProducts>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Product >
                <ImgProduct>
                  <img
                    className="img-item-2"
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1b.webp"
                    alt=""
                  />

                  <img
                    className="img-item-1"
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1a-768x960.webp"
                    alt=""
                  />

                  <div className="optionProduct">
                    <i className="fa-solid fa-link-simple"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-expand"></i>
                  </div>
                </ImgProduct>
                <NameProduct>Duvet Cover Set Pumpkin Bear</NameProduct>
                <ColorProduct>
                  <i
                    style={{ color: "#3a6380" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#773d49" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#bc2a32" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#eedcd8" }}
                    className="fa-solid fa-circle"
                  ></i>
                </ColorProduct>
                <PriceProduct> $10.00</PriceProduct>
              </Product>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Product href="/product">
                <ImgProduct>
                  <img
                    className="img-item-2"
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1b.webp"
                    alt=""
                  />

                  <img
                    className="img-item-1"
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1a-768x960.webp"
                    alt=""
                  />

                  <div className="optionProduct">
                    <i className="fa-solid fa-link-simple"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-expand"></i>
                  </div>
                </ImgProduct>
                <NameProduct>Duvet Cover Set Pumpkin Bear</NameProduct>
                <ColorProduct>
                  <i
                    style={{ color: "#3a6380" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#773d49" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#bc2a32" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#eedcd8" }}
                    className="fa-solid fa-circle"
                  ></i>
                </ColorProduct>
                <PriceProduct> $10.00</PriceProduct>
              </Product>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Product >
                <ImgProduct>
                  <img
                    className="img-item-2"
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1b.webp"
                    alt=""
                  />

                  <img
                    className="img-item-1"
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1a-768x960.webp"
                    alt=""
                  />

                  <div className="optionProduct">
                    <i className="fa-solid fa-link-simple"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-expand"></i>
                  </div>
                </ImgProduct>
                <NameProduct>Duvet Cover Set Pumpkin Bear</NameProduct>
                <ColorProduct>
                  <i
                    style={{ color: "#3a6380" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#773d49" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#bc2a32" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#eedcd8" }}
                    className="fa-solid fa-circle"
                  ></i>
                </ColorProduct>
                <PriceProduct> $10.00</PriceProduct>
              </Product>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Product >
                <ImgProduct>
                  <img
                    className="img-item-2"
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1b.webp"
                    alt=""
                  />

                  <img
                    className="img-item-1"
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1a-768x960.webp"
                    alt=""
                  />

                  <div className="optionProduct">
                    <i className="fa-solid fa-link-simple"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-expand"></i>
                  </div>
                </ImgProduct>
                <NameProduct>Duvet Cover Set Pumpkin Bear</NameProduct>
                <ColorProduct>
                  <i
                    style={{ color: "#3a6380" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#773d49" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#bc2a32" }}
                    className="fa-solid fa-circle"
                  ></i>
                  <i
                    style={{ color: "#eedcd8" }}
                    className="fa-solid fa-circle"
                  ></i>
                </ColorProduct>
                <PriceProduct> $10.00</PriceProduct>
              </Product>
            </Col>
           
          </Row>
        </ListProducts>
      </Bestsellers>
      <ListBrands>
        <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client5.png" alt="" />
        <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client4.png" alt="" />
        <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client3.png" alt="" />
        <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client2.png" alt="" />
        <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client1.png" alt="" />

      </ListBrands>
      <Instagram>
        <button><i className="fa-brands fa-instagram"></i> INSTAGRAM</button>
      </Instagram>
      <Advantage>
        <AdvantageItem>
          <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon1.png" alt="" />
          <b>FREE SHIPPING</b>
        </AdvantageItem>
        <AdvantageItem>
          <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon2.png" alt="" />
          <b>RETURN POLICY</b>
        </AdvantageItem>
        <AdvantageItem>
          <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon2.png" alt="" />
          <b>PAYMENT SECURE</b>
        </AdvantageItem>
        <AdvantageItem>
          <img src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon4.png" alt="" />
          <b>FREE SUPPORT</b>
        </AdvantageItem>
      </Advantage>
      <ProductCart 
      open={openProductModal} 
      setOpen={setOpenProductModal}
      name={nameProduct}
      price={priceProduct}
      img={imgProduct}

      />
    </HomePageLayout>
    
  );
};

export default HomePage;
