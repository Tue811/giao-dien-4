import { Carousel } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components"; 

export const ProductPageLayout = styled(Content)`
  background-color: white;
  padding: 0 70px;
  h2 {
    font-size: 55px;
    font-family: "Bodoni Moda", serif;
  }
`;

export const ProductDetail = styled.div`
  background-color: #fcfcfc;
`;

export const Detail = styled.div`
  line-height: 28px;
  p {
    font-size: 20px;
  }
  ul {
    margin-left: 30px;
    li {
      font-size: 16px;
      color: #6a717c;
      padding: 5px;
    }
  }
`;

export const Size = styled.div`
  font-size: 18px;
  color: #cfb481;
  padding: 5px;
  i {
    color: #ebc989;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  color: #ebc989;
  font-size: 40px;
  s {
    font-size: 30px;
    padding-right: 20px;
  }
`;

export const QuantityAndAdd = styled.div`
  display: flex;
  margin: 20px 0;
  button {
    font-size: 16px;
    line-height: 20px;
    padding: 15px 20px;
    color: #ffffff;
    background-color: #8a8c8e;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    margin: 0 10px;
  }
`;

export const Quantity = styled.div`
  color: #6a717c;
  /* background-color: rgba(240,242,246,1); */
  button {
    background-color: #f0f2f6;
    color: #6a717c;
    font-weight: 600;
  }
  input {
    background-color: #f0f2f6;
    font-size: 18px;
  }
  .quantity-picker {
    background-color: #f0f2f6;
  }
`;

export const ListItemImgProduct = styled.div`
  margin-top: 50%;
  img {
    width: 80px;
    margin-left: 50px;

    /* height: 80px; */
    /* padding: 20px; */
  }
`;

export const CarouselProduct = styled(Carousel)`
  img {
    width: 100%;
  }
`;

export const Tags = styled.div``;

export const Information = styled.div``;

export const BtnInfo = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  div {
    font-size: 25px;
    margin: 20px;
    &:hover {
      border-bottom: 5px solid #e5e5e5;
    }
  }
`;

export const Description = styled.div``;

export const InfoText = styled.div`
  font-size: 20px;
  line-height: 28px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  color: #373f4b;
  padding: 50px 0 150px 0;
  @media (max-width: 768px) {
    width: 80%;
    
  }
`;
export const DesAdvantage = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const DesAdvantageItem = styled.div`
  text-align: center;
  margin: 10px 0;
  width: 50%;
  i {
    font-size: 20px;
    padding: 8px;
    margin: 20px 5px;
    border-radius: 50%;
    color: white;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DesBlog = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  .ant-card .ant-card-grid {
    padding: 0;
    border: none;
    box-shadow: unset;
    background-color: #fafafa;
  }
  b {
    margin-top: 20px;
    font-family: "Bodoni Moda", serif;
    font-size: 20px;
  }
  p {
    padding-top: 20px;
    font-size: 17px;
    color: #6a717c;
  }
  div {
    padding-top: 30px;
  }
`;

export const DesPotsBlog = styled.div``;

export const DesPotsBlogItem = styled.div`
  img {
    width: 100%;
  }
  h2 {
    line-height: 65px;
    padding-top: 30px;
  }
  h5 {
    color: #ebc989;
    padding-top: 100px;
  }
  p {
    font-size: 20px;
    padding-bottom: 30px;
    padding-top: 30px;
  }
  ul {
    li {
      list-style: none;
      font-size: 17px;
      color: #737e86;
      margin-bottom: 20px;
      padding: 5px 15px;
      i {
        color: #ebc989;
      }
    }
  }
`;

export const CompareProduct = styled.div`
  width: 100%;
  text-align: center;
  h2 {
    width: 40%;
    margin: 0 auto;
    line-height: 65px;
  }
  p {
    font-size: 20px;
    width: 60%;
    margin: 30px auto 0;
  }
  span {
    font-size: 55px;
    font-family: "Bodoni Moda", serif;
    border-bottom: 8px solid #ebc989;
  }
`;

export const CompareTable = styled.div`
  width: 80%;
  margin: 150px auto 50px;
`;

export const CompareTableItem = styled.div`
  padding: 0 20px;
  img {
    width: 20%;
  }
  h2 {
    font-size: 30px;
    font-weight: 500;
  }
  p {
    padding: 10px 20px;
    color: #6a717c;
    font-size: 17px;
  }
  hr {
    border-color: rgba(0, 0, 0, 0.08);
    margin: 0 20px;
  }
`;

export const Additional = styled.div`
  margin: 0 auto 100px;
  width: 70%;
  h2 {
    font-size: 30px;
    font-weight: 400;
  }
`;

export const AdditionalItem = styled.div`
  font-size: 17px;

  margin: 20px auto;
  display: flex;
  p {
    width: 10%;
    color: #444444;
  }
`;

export const Reviews = styled.div`
  width: 70%;
  margin: 30px auto 100px;
  h2 {
    font-size: 30px;
    font-weight: 400;
  }
  p {
    font-size: 17px;
    color: #444444;
    padding: 10px 0;
  }
  h5 {
    font-size: 21px;
    font-weight: 400;
  }
  span {
    color: #cfb481;
  }
`;

export const Related=styled.div`
    margin-bottom: 50px;
    h2{
        font-size: 30px;
    font-weight: 400;
        padding-bottom: 30px;
    }
`;

export const Back=styled.div`
    width: 100%;
    background-color: #171b20;
    padding: 40px 30px;
    text-align: center;
    font-size: 17px;
    a{
        color: rgba(255,255,255,0.6);
        span{
            color: white;
            text-decoration: underline;
        }
    }
    &:hover{
        background-color: #ebc989;
    }
`
