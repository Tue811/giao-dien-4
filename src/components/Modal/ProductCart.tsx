import { Col, Modal, Row, Select } from "antd";
import React, { useState } from "react";
import { Price, Quantity, QuantityAndAdd, Size } from "../../styles/product";
import { ColorProduct, NameProduct } from "../../styles/homePage";
import { QuantityPicker } from "react-qty-picker";
import { ModalProduct } from "../../styles/productCartStyle";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/action";

const ProductCart = ({ open, setOpen, name, img, price }) => {
  const dispatch=useDispatch()
  const darta = [
    {
      min: 1,
    },
  ];

  const handleAddToCart=(item : any)=>{
    dispatch(addToCart(item))
    setOpen(false)
  }
  return open ? (
    <>
      <ModalProduct
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        // heigh={100}
      >
        <Row>
          <Col span={12}>
            <img
              style={{ width: "100%" }}
              src={img}
              alt=""
            />
          </Col>
          <Col span={12} style={{padding: "0 30px 0 30px", overflow:"auto", height:"595px"}}>
            <NameProduct style={{fontSize:30}}>{name}</NameProduct>
            <Price>$ {price}</Price>
            <p>
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
              non felis eleifend justo vel bibendum sapien.
            </p>
            <p style={{color:"#6a717c"}}>
              Maecenas malesuada 5 elit lectus felis, malesuada ultricies.
              <br />
              Curabitur et ligula. Ut molestie a, ultricies porta urna.
              <br />
              Vestibulum commodo volutpat a, convallis ac, laoreet enim.
              <br />
              Phasellus fermentum in, dolor. Pellentesque facilisis.
              <br />
              Composition: Main material: 95% Cotton, 5% Polyester
            </p>
            <Size>
              {" "}
              <i className="fa-sharp fa-solid fa-ruler-combined"></i> Sizes char
            </Size>
            <b>Height</b>

            <p>
            <span
                  style={{
                    border: " 1px solid rgba(0,0,0,.1)",
                    borderRadius:"5px",
                    padding: "5px 10px",
                    margin: "5px",
                  }}
                >
                 50
                </span>
                <span
                  style={{
                    border: " 1px solid rgba(0,0,0,.1)",
                    borderRadius:"5px",
                    padding: "5px 10px",
                    margin: "5px",
                  }}
                >
                 54
                </span>
                <span
                  style={{
                    border: " 1px solid rgba(0,0,0,.1)",
                    borderRadius:"5px",
                    padding: "5px 10px",
                    margin: "5px",
                  }}
                >
                 58
                </span>
                <span
                  style={{
                    border: " 1px solid rgba(0,0,0,.1)",
                    borderRadius:"5px",
                    padding: "5px 10px",
                    margin: "5px",
                  }}
                >
                 62
                </span>
                <span
                  style={{
                    border: " 1px solid rgba(0,0,0,.1)",
                    borderRadius:"5px",
                    padding: "5px 10px",
                    margin: "5px",
                  }}
                >
                 68
                </span>
                <span
                  style={{
                    border: " 1px solid rgba(0,0,0,.1)",
                    borderRadius:"5px",
                    padding: "5px 10px",
                    margin: "5px",
                  }}
                >
                 74
                </span>
                <span
                  style={{
                    border: " 1px solid rgba(0,0,0,.1)",
                    borderRadius:"5px",
                    padding: "5px 10px",
                    margin: "5px",
                  }}
                >
                 82
                </span>
              </p>
            <b>Age</b>
            <Select
              defaultValue="1"
              style={{ width: 120 , marginTop:"20px" , marginLeft:"20px"}}
            //   onChange={handleChange}
              options={[
                { value: "1", label: "0 - 2 years" },
                { value: "2", label: "2 - 4 years" },
               
              ]}
            />
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

              <button style={{ width: 178 }} onClick={()=>{handleAddToCart()}}>Add to cart</button>
            </QuantityAndAdd>
            <div
              style={{
                // display: "flex",
                fontSize: "16px",
                // justifyContent: "space-betweens",
                margin: "15px 0",
              }}
            >
              <div
                style={{
                  padding: "15px 20px 15px 10px",
                  // width: "calc(100% / 3)",
                  display:"flex",
                  alignItems:"center"
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
                  padding: "15px 30px 15px 10px ",
                  display:"flex",
                  alignItems:"center"
                  // borderLeft: "1px solid rgba(0,0,0,0.08)",
                  // borderRight: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <p style={{ color: "#6a717c" }}>Category:</p>
                <span style={{ color: "#cfb481" }}>Bed sets</span>
              </div>
              <div style={{ padding: "15px 20px 15px 10px",display:"flex",
                  alignItems:"center" }}>
                <p style={{ color: "#6a717c" }}>SKU:</p>
                <span>BE-8727U2</span>
              </div>
            </div>
          </Col>
        </Row>
      </ModalProduct>
    </>
  ) : (
    ""
  );
};

export default ProductCart;
