import { ArrowRightOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import Card from "antd/es/card/Card";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";



export const HomePageLayout = styled(Content)`
  background-color: white;
  padding: 0 70px;
  h2{

  font-size: 55px;
  font-family: "Bodoni Moda", serif;

}

@media (max-width: 768px) {
  font-size: 41px;
}
`;

export const Banner = styled.div`
  height: 100%;
`;

export const CarouselBanner1 = styled.div`
  background-image: url(https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-slider-pic1.webp) !important;
  background-size: 100% 100% !important;
  padding-top: 25%;
  p,
  i {
    font-family: "Bodoni Moda", serif;
  }
`;

export const CarouselBanner2 = styled.div`
  background-image: url(https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-slider-pic2.webp) !important;
  background-size: 100% 100% !important;
  padding-top: 25%;import { Category, ArrowRight, Advantage } from './homePage';

  p,
  i {
    font-family: "Bodoni Moda", serif;
  }
`;

export const BannerTop = styled.div`
  height: 290px;
  margin-bottom: 20px;
  background-color: #eef2f3;
  padding: 40px 5%;
  text-align: center;
  p,
  span {
    font-size: 30px;
    font-family: "Bodoni Moda", serif;
  }

  span {
    border-bottom: 8px solid #ebc989;
    padding-bottom: -10px;
  }
`;

export const GroupAges = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const Ages = styled.div`
  margin: 0 10px;
  padding: 15px 10px 10px 10px;
  font-size: 15px;
  font-weight: 600;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);

  &:hover {
    border-bottom: 3px solid #171b20;
    border-top: 3px solid #171b20;
    padding: 12px 10px 10px 10px;
  }
`;

export const BannerBottom = styled.div`
  height: 290px;
  background-image: url(https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-promo-bg1.webp);
  background-size: 100% 100%;
  padding: 20px 5%;
  text-align: center;
  p,
  h3 {
    font-family: "Bodoni Moda", serif;
    font-size: 30px;
  }
  h3 {
    margin-bottom: 20px;
  }
  a {
    color: #171b20;
    padding: 12px 10px 10px;
    font-weight: 700;
    margin: 15px 25px 15px 25px;
    font-size: 15px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);

    &:hover {
      border-bottom: 3px solid #171b20;
      border-top: 3px solid #171b20;
      padding: 12px 10px 10px 10px;
    }
  }
`;

export const Category = styled.div`
  font-family: "Bodoni Moda", serif;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const CategoryText = styled.div`
  font-family: "Bodoni Moda", serif;
  height: 80px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.4);
  i {
    display: none;
  }
  &:hover {
    color: #171b20;
    i {
      display: block;
    }
  }
`;

export const Introduce = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 0 25%;
  p {
    margin: 40px 0;
    font-family: "Bodoni Moda", serif;
  }
  span {
    font-family: "Bodoni Moda", serif;
    border-bottom: 8px solid #ebc989;
  }
  @media (max-width: 768px) {
    padding: 0 10% ;
    font-size: 23px;
  }
`;

export const Catalog = styled.div``;

export const TitleCatalog = styled.h2`
  font-family: "Bodoni Moda", serif;
  font-size: 55px;
  text-align: center;
  padding: 50px 0 100px 0;
  @media (max-width: 768px) {
    font-size: 41px !important;
  }
`;

export const ListProducts = styled.div`
`;

export const Product = styled.div`
  padding: 0 10px;
  text-align: center;
  border-radius: 0;
  border: none;
  margin-bottom: 60px;
  /* gap: 10px; */
  /* margin-right: 30px; */
`;

export const ImgProduct = styled.div`
  position: relative;
  height: 300px;
  
  img {
    width: 100%;
    height: 300px;
  }
  .img-item-2 {
    display: none;
  }

  .optionProduct {
    display: none;
    position: absolute;
    background-color: white;
    color: #171b20;
    width: 100%;
    bottom: 0;
    height: 50px;
    /* display: flex; */
    justify-content: space-between;
    padding: 10px 0;
    i {
      font-size: 20px;
      padding: 0 20px;
      &:hover{
        color: rgb(235, 201, 137)  ;
      }
    }
  }
  &:hover {
    .img-item-1 {
      display: none;
    }
    .img-item-2 {
      display: block;
    }
    .optionProduct {
      display: block;

    }
  }
`;

export const NameProduct = styled(Typography)`
  margin-top: 20px;
  font-size: 20px;
`;

export const ColorProduct = styled(Typography)`
  i {
    font-size: 16px;
    margin: 10px 5px;
  }
`;

export const PriceProduct = styled(Typography)`
  font-size: 18px;
  color: #ebc989;
  strike {
    font-size: 13px;
  }
`;

export const Offer = styled.div``;

export const OfferLeft = styled.div`
  background-image: url(https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-home-pic1.webp);
  padding: 240px 20px 40px;
  background-size: cover ;
  background-position: center center;
  p{
    font-weight: 600;
    text-align: center;
  }
  h1{
    font-size: 119px;
    color: #ebc989;
    font-family: "Bodoni Moda", serif;
    text-align: center;
    margin-top: -10px;
  }
  h4{
    font-family: "Bodoni Moda", serif;
    font-size: 55px;
    text-align: center;
    margin-top: -69px;
    line-height: 60px;
  }
  div{
    margin-top: 50px;
    margin-bottom: 60px;
    padding: 20px 30px;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    p{
      font-size: 30px;
      font-family: "Bodoni Moda", serif;
      span{
        /* font-family: "Bodoni Moda", serif;  */
        color: #ebc989;
      }
    }
  }
`;

export const OfferRight = styled.div`

height: 100%;
  padding: 150px 20px 40px;
    background-color: #eaf0f7;
    p{
    font-weight: 600;
    text-align: center;
  }
  h4{
    margin-top: 20px;
    font-family: "Bodoni Moda", serif;
    font-size: 55px;
    text-align: center;
    line-height: 70px;
    span{
      font-family: "Bodoni Moda", serif;
      color: #94afc1;
    }
  }
`;

export const SliderOffer = styled.div`
    margin: 50px;
    text-align: center;
    img{
      width: 60%;
      margin: 0 auto;
      padding-bottom: 20px;
    }
    p{
      color: #6a717c;
      font-size: 17px;
      font-weight: normal;
    }
    span{
      color: #6a717c;
      margin-top: -20px;
      font-size: 14px;
      font-family: 'Dancing Script', cursive;
    }
   
    .slick-next:before, .slick-prev:before{
      color: silver;
    }
`;

export const Benefits = styled.div`
padding-top: 110px;
padding-bottom: 70px;
  text-align: center;
  h2{
    padding: 0 200px;
    /* font-size: 55px; */
    font-family: "Bodoni Moda", serif;

  }
  p{
    font-size: 20px;
    color: #373f4b;
    padding: 30px 300px;
  }
  @media (max-width: 768px) {
    h2{
      padding: 0 50px ;
      font-size: 41px;
    }
    p{
      padding: 0 50px;
      font-size: 15px;
    }
  }
`;

export const BenefitItem = styled.div`
padding: 0 5%;
text-align: center;
  img{
    width: 25%;
    padding: 40px 0 20px;
  }

  p{
    padding: 20px 0 40px;
    font-size: 16px;
  }
`;

export const Blog= styled.div`

`;

export const BlogItem= styled.div`
  background-size: cover;

  background-position: center center;
  padding-bottom: 0;
  padding: 70px 25px 30px;
  height: max-content;
  span{
    color:rgba(255,255,255,.7);
    font-size: 17px;
  }

  p{
    color: white;
    font-family: "Bodoni Moda", serif;
    font-size: 30px;
  }
`;

export const Bestsellers = styled.div`
  h2{
    text-align: center;
    padding: 70px ;
  }
`;

export const ListBrands=styled.div`
  img{
    width: 20%;
    padding: 30px;
    &:hover{
      background-color: #f2f2f2;
    }
  }
  @media (max-width: 768px) {
    img{
      width: 50%;
    }
  }
`;

export const Instagram = styled.div`
  background-image: url(https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-instagram.webp);
  height: 100%;
  padding: 70px 0;
  background-repeat: no-repeat;
  text-align: center;
  button{
    background-color: #ebc989;
    color: #ffffff;
    padding: 18px 40px 18px 40px;
    border-radius: 5px;
    font-size: 15px;
    line-height: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    border: none;
    /* margin-top: 25%; */
  }
`;

export const Advantage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  flex-wrap: wrap;
`;

export const AdvantageItem = styled.div`

  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  b{
    padding-left: 30px;
  }
  img{
    width: 20%;
    
  }
  @media (max-width: 768px) {
    font-size: 13px;
    width: 100%;
    flex-direction: column;
    padding: 20px 0;
    img{
      width: 10%;
    }
  }
`