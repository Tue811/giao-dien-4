import { Button, Card, Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import ReactImageZoom from "react-image-zoom";
import { QuantityPicker } from "react-qty-picker";
import { Advantage, AdvantageItem, ColorProduct, ImgProduct, ListProducts, NameProduct, PriceProduct, Product } from "../styles/homePage";
import {
  Additional,
  AdditionalItem,
  Back,
  BtnInfo,
  CarouselProduct,
  CompareProduct,
  CompareTable,
  CompareTableItem,
  DesAdvantage,
  DesAdvantageItem,
  DesBlog,
  DesPotsBlog,
  DesPotsBlogItem,
  Description,
  Detail,
  InfoText,
  Information,
  ListItemImgProduct,
  Price,
  ProductDetail,
  ProductPageLayout,
  Quantity,
  QuantityAndAdd,
  Related,
  Reviews,
  Size,
} from "../styles/product";
import { DownOutlined } from "@ant-design/icons";
import { dataProduct } from './../dataProduct';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import reducer from './../store/reducer';

// const contentStyle: React.CSSProperties = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };
const ProductPage = () => {

  const {id} = useParams()

  const product = dataProduct.find((item : any) => item.id == id)

  const darta = [
    {
      min: 1,
    },
  ];

  const imgCrousel = [
    {
      id: 1,
      url: product?.image[0],
    },
    {
      id: 2,
      url: product?.image[1],
    },
    {
      id: 3,
      url: product?.image[2],
    },
  ];

  const ref: any = useRef();
  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1a.webp",
    zoomPosition: "original",
  };

  const gridStyle: React.CSSProperties = {
    textAlign: "center",
    width: "50%",
  };


  return (
    <ProductPageLayout>
      <ProductDetail>
        <Row>
          <Col lg={12} md={12} sm={24}>
            <h2>Duvet Cover Set Be Brave</h2>
            <Detail>
              <p>
                Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.
              </p>
              <ul>
                <li>
                  Maecenas malesuada 5 elit lectus felis, malesuada ultricies.
                </li>
                <li>
               Curabitur et ligula. Ut molestie a, ultricies porta urna.
                </li>
                <li>
                Vestibulum commodo volutpat a, convallis ac, laoreet enim.
                </li>
                <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
              </ul>
              <p
                style={{
                  fontSize: "16px",
                  color: "#6a717c",
                  paddingTop:"5px"
                }}
              >
                Composition: Main material: 95% Cotton, 5% Polyester
              </p>
            </Detail>
            <Size>
              <i className="fa-sharp fa-solid fa-ruler-combined"></i> Sizes char
            </Size>
            <Price>
              <s>${product?.price}</s>
              <p>${product?.priceSale}</p>
            </Price>
            <ColorProduct>
            <b style={{color:"#6a717c", fontSize:17, paddingRight:"20px"}}>Color</b>
              <i
                style={{ color: "#3a6380", fontSize: "24px" }}
                className="fa-solid fa-circle"
              ></i>
              <i
                style={{ color: "#773d49", fontSize: "24px" }}
                className="fa-solid fa-circle"
              ></i>
              <i
                style={{ color: "#bc2a32", fontSize: "24px" }}
                className="fa-solid fa-circle"
              ></i>
              <i
                style={{ color: "#eedcd8", fontSize: "24px" }}
                className="fa-solid fa-circle"
              ></i>
            </ColorProduct>
            <QuantityAndAdd>
              <Quantity>
                {darta.map((data, index: number) => (
                  <QuantityPicker
                    key={index}
                    min={data.min}
                    style={{ backgroundColor: "#f0f2f6" }}
                  />
                ))}
              </Quantity>

              <button style={{ width: 300 }}>Add to cart</button>
            </QuantityAndAdd>
            <div
              style={{
                display: "flex",
                fontSize: "16px",
                justifyContent: "space-betweens",
                margin: "15px 0",
              }}
            >
              <div
                style={{
                  padding: "15px 20px 15px 10px",
                  width: "calc(100% / 3)",
                }}
              >
                <p style={{ color: "#6a717c" }}>Tags:</p>
                <span
                  style={{
                    backgroundColor: " rgba(0,0,0,.02)",
                    padding: "3px",
                    margin: "5px",
                  }}
                >
                  Duvet cover{" "}
                </span>
                <span
                  style={{
                    backgroundColor: " rgba(0,0,0,.02)",
                    padding: "3px",
                    margin: "5px",
                  }}
                >
                  kids{" "}
                </span>
                <span
                  style={{
                    backgroundColor: " rgba(0,0,0,.02)",
                    padding: "3px",
                    margin: "5px",
                  }}
                >
                  Recyclable{" "}
                </span>
              </div>
              <div
                style={{
                  padding: "15px 30px 15px 30px",
                  borderLeft: "1px solid rgba(0,0,0,0.08)",
                  borderRight: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <p style={{ color: "#6a717c" }}>Category:</p>
                <span style={{ color: "#cfb481" }}>Bed sets</span>
              </div>
              <div style={{ padding: "15px 20px 15px 10px" }}>
                <p style={{ color: "#6a717c" }}>SKU:</p>
                <span>BE-8727U2</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6}>
            <ListItemImgProduct>
              {imgCrousel.map((item: any, index: any) => {
                return (
                  <img
                    key={item.id}
                    src={item.url}
                    alt=""
                    onClick={() => {
                      ref.current.goTo(index);
                    }}
                    // style={{width : 200, height: 200}}
                  />
                );
              })}
            </ListItemImgProduct>
          </Col>
          <Col lg={9} md={9} sm={18}>
            <CarouselProduct dots={false} slickGoTo={3} ref={ref}>
              {imgCrousel.map((item: any, index: number) => {
                return (
                  <div key={item.id}>
                    <ReactImageZoom
                      img={item.url}
                      alt=""
                      zoomPosition="original"
                      zoomWidth={400}
                      // width={526}
                      height={526}
                    />
                  </div>
                );
              })}
            </CarouselProduct>
          </Col>
        </Row>
        <DownOutlined />
      </ProductDetail>

      {/* <ReactImageZoom
      img={"https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1a.webp"}
      zoomPosition="original"
      width="400"
      scale="default"
      zoomWidth="default"
      zoomLensStyle="default"
      zoomStyle="default"
      offset="default"
      /> */}
      {/* <ReactImageZoom {...props} /> */}

      <Information>
        <BtnInfo>
          <div>Description</div>
          <div>Additional information</div>
          <div>Reviews</div>
        </BtnInfo>
        <Description>
          <InfoText>
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse
            pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
            malesuada ultricies. Curabitur et.
          </InfoText>
          <DesAdvantage>
            <DesAdvantageItem>
              <b>ENVIRONMENTALLY FRIENDLY</b>
              <div>
                <i
                  style={{ backgroundColor: "#ebc989" }}
                  className="fa-regular fa-gear"
                ></i>
                <i
                  style={{ backgroundColor: "#ebc989" }}
                  className="fa-regular fa-gear"
                ></i>
                <i
                  style={{ backgroundColor: "#ebc989" }}
                  className="fa-regular fa-gear"
                ></i>
                <i
                  style={{ backgroundColor: "#ebc989" }}
                  className="fa-regular fa-gear"
                ></i>
              </div>
            </DesAdvantageItem>
            <DesAdvantageItem>
              <b>WARMNESS</b>
              <div>
                <i
                  style={{ backgroundColor: "#558d97" }}
                  className="fa-sharp fa-solid fa-fire-flame-simple"
                ></i>
                <i
                  style={{ backgroundColor: "#558d97" }}
                  className="fa-sharp fa-solid fa-fire-flame-simple"
                ></i>
                <i
                  style={{ backgroundColor: "#558d97" }}
                  className="fa-sharp fa-solid fa-fire-flame-simple"
                ></i>
                <i
                  style={{ backgroundColor: "#e5e5e5" }}
                  className="fa-sharp fa-solid fa-fire-flame-simple"
                ></i>
              </div>
            </DesAdvantageItem>
            <DesAdvantageItem>
              <b>WASHING</b>
              <div>
                <i
                  style={{ backgroundColor: "#b5aca0" }}
                  className="fa-solid fa-hands"
                ></i>
                <i
                  style={{ backgroundColor: "#b5aca0" }}
                  className="fa-solid fa-hands"
                ></i>
                <i
                  style={{ backgroundColor: "#b5aca0" }}
                  className="fa-solid fa-hands"
                ></i>
                <i
                  style={{ backgroundColor: "#e5e5e5" }}
                  className="fa-solid fa-hands"
                ></i>
              </div>
            </DesAdvantageItem>
            <DesAdvantageItem>
              <b>DURABILITY</b>
              <div>
                <i
                  style={{ backgroundColor: "#59616d" }}
                  className="fa-regular fa-gem"
                ></i>
                <i
                  style={{ backgroundColor: "#59616d" }}
                  className="fa-regular fa-gem"
                ></i>
                <i
                  style={{ backgroundColor: "#e5e5e5" }}
                  className="fa-regular fa-gem"
                ></i>
                <i
                  style={{ backgroundColor: "#e5e5e5" }}
                  className="fa-regular fa-gem"
                ></i>
              </div>
            </DesAdvantageItem>
          </DesAdvantage>
          <DesBlog>
            <Row>
              <Col lg={12} md={12} sm={24}>
                <Card style={{ marginRight: "20px", height: "100%" }}>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic2.webp"
                      alt=""
                    />
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    <div>
                      <b>Pellentesque sed eu</b>
                      <p>
                        Aenean quis lectus nec magna. In mauris sed molestie
                        tincidunt. Nullam a nunc. Nulla facilisi. Morbi pede.
                      </p>
                    </div>
                  </Card.Grid>
                </Card>
              </Col>
              <Col lg={12} md={12} sm={24}>
                <Card style={{ marginLeft: "20px" }}>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic1.webp"
                      alt=""
                    />
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    <div>
                      <b>Nam pellentesque leo</b>
                      <p>
                        Nulla nec massa molestie vitae, cursus eu, tempus arcu.
                        Duis neque vel metus. Aliquam adipiscing wisi diam
                        bibendum pede porta laoreet.
                      </p>
                    </div>
                  </Card.Grid>
                </Card>
              </Col>
            </Row>
          </DesBlog>
          <InfoText>
            Ultricies porta urna. Vestibulum commodo volutpat a, convallis ac,
            laoreet enim. Phasellus lorem ipsum fermentum in, dolor.
            <br />
            <br />
            Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
            rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac
            ipsum. Integer aliquam purus. Quisque lorem tortor
          </InfoText>
          <DesPotsBlog>
            <Row>
              <Col lg={12} md={12} sm={24}>
                <DesPotsBlogItem style={{ marginRight: "10px" }}>
                  <img
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-productdetails-pic1.webp"
                    alt=""
                  />
                  <h5>BIBENDUM NETUS</h5>
                  <h2>Vestibulum bibendum nulla torquent semper</h2>
                  <p>
                    Tristique nisi rutrum porta magna pharetra aenean proin
                    rutrum nostra eu curabitur consequat dolor molestie auctor
                    porta et lacus porta fusce vulputate non dui quis.
                  </p>
                </DesPotsBlogItem>
              </Col>
              <Col lg={12} md={12} sm={24}>
                <DesPotsBlogItem style={{ marginLeft: "10px" }}>
                  <h5>PHASELLUS TORTOR</h5>
                  <h2>Ultricies porta urna laoreet enim</h2>
                  <p>
                    Inceptos aliquam lectus nullam eget mi sapien luctus
                    praesent habitant porttitor tempor proin tempor gravida
                    massa at lectus nam praesent sociosqu aenean quis.
                  </p>
                  <ul>
                    <li>
                      <i className="fa-sharp fa-solid fa-star"></i> Suspendisse
                      a pellentesque.
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-star"></i> Suspendisse
                      a pellentesque.
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-star"></i> Suspendisse
                      a pellentesque.
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-star"></i> Suspendisse
                      a pellentesque.
                    </li>
                  </ul>
                  <img
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-productdetails-pic2.webp"
                    alt=""
                  />
                </DesPotsBlogItem>
              </Col>
            </Row>
          </DesPotsBlog>
          <CompareProduct>
            <h2>
              <span>Compare</span> our products{" "}
            </h2>
            <p>
              Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
              rhoncus eu, luctus et interdum.
            </p>
            <CompareTable>
              <Row>
                <Col lg={8} md={8} sm={24}>
                  <CompareTableItem>
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-num1.png"
                      alt=""
                    />
                    <h2>Variant 1</h2>
                    <p>
                      Vitae adipiscing turpis. Aenean ligulamolestie id vivide.
                    </p>
                    <p>10</p>
                    <hr />
                    <p>Lorem lipsum</p>
                    <hr />
                    <p>
                      <i className="fa-light fa-circle"></i>
                    </p>
                    <hr />
                    <p>Morbi accumsan</p>
                    <hr />
                    <p>
                      <i className="fa-light fa-circle"></i>
                    </p>
                  </CompareTableItem>
                </Col>
                <Col lg={8} md={8} sm={24}>
                  <CompareTableItem>
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-num2.png"
                      alt=""
                    />
                    <h2>Variant 2</h2>
                    <p>
                      Vitae adipiscing turpis. Aenean ligulamolestie id vivide.
                    </p>
                    <p>10</p>
                    <hr />
                    <p>Lorem lipsum</p>
                    <hr />
                    <p>
                      <i className="fa-light fa-circle"></i>
                    </p>
                    <hr />
                    <p>Morbi accumsan</p>
                    <hr />
                    <p>
                      <i className="fa-light fa-circle"></i>
                    </p>
                  </CompareTableItem>
                </Col>
                <Col lg={8} md={8} sm={24}>
                  <CompareTableItem>
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-num3.png"
                      alt=""
                    />
                    <h2>Variant 3</h2>
                    <p>
                      Vitae adipiscing turpis. Aenean ligulamolestie id vivide.
                    </p>
                    <p>10</p>
                    <hr />
                    <p>Lorem lipsum</p>
                    <hr />
                    <p>
                      <i className="fa-light fa-circle"></i>
                    </p>
                    <hr />
                    <p>Morbi accumsan</p>
                    <hr />
                    <p>
                      <i className="fa-light fa-circle"></i>
                    </p>
                  </CompareTableItem>
                </Col>
              </Row>
            </CompareTable>
          </CompareProduct>
        </Description>
        <img
          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
          alt=""
          style={{marginLeft:"40%", width:"150px", marginBottom:"50px"}}
        />
        <Additional>
          <h2>Additional information</h2>
          <AdditionalItem>
            <p>Color</p>
            <div style={{width:"90%", display:"flex"}}>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)",
        marginTop: "12px",width:"70%"}}> </div>
            <i style={{paddingLeft:"20px", color:"#6a717c"}} >Blue, Brown, Red, Yellow</i>
            </div>
            
          </AdditionalItem>
        </Additional>
        <img
          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
          alt=""
          style={{marginLeft:"40%", width:"150px", marginBottom:"50px"}}
        />
         <Reviews>
      <h2>Reviews</h2>
      <p>There are no reviews yet.</p>
      <h5>Be the first to review “Duvet Cover Set Pumpkin Bear”</h5>
      <p>You must be <span> logged in</span> to post a review.</p>
      </Reviews>
      <img
          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
          alt=""
          style={{marginLeft:"40%", width:"150px", marginBottom:"50px"}}
        /> 
        <Related>
          <h2>Related products</h2>
          <ListProducts>
            <Row>
              <Col lg={6} md={12} sm={12}>
              <Product>
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
              <Product>
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
              <Product>
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
        </Related>
        <Back>
          <a href="">Not for you? <span>- Back to product list</span></a>
        </Back>
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
      </Information>
     
         
    </ProductPageLayout>
  );
};

export default ProductPage;
