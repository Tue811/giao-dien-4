import styled from 'styled-components';
import { Form, Input, Col, Drawer, Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';


export const HeaderLayout = styled.div`
    /* top:0 ;
    width: 100% */
    /* background-color: black; */
    .sticky{
        
  position: fixed;
  top: 0;
  width: 100%;

  /* animation: slideDown 0.5s forwards;
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  } */
}

`;

export const HeaderTop=styled.div`
    background-color: #101015;
    color: #bbbbbb;
    padding: 12px 50px;
    a{
        color:#cfb481
    }
    @media (max-width: 768px) {
    display: none;
}
`;

export const HeaderMiddle=styled.div`


    text-align: center;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    img{
        height: 50px;
        margin-top: 30px  ;
        
    }
    @media (max-width: 768px) {
    border-bottom: none;
}
`;


export const HeaderBottom=styled.div`
    padding: 20px;
    /* position: fixed; */
    z-index: 10;
    background-color: white;
    left: 0;
    right: 0;
`;

export const HeaderBottomLeft = styled.div`
    ul{
        display:flex;
        justify-content: end;
        li{
            list-style: none;
            a{
                font-size: 14px;
                color: #2a2b39;
                padding: 20px 15px ;
                margin: 0 5px;
                font-weight: 500;
                &:hover{
                    color: #ebc989;
                    border-bottom: 5px solid #ebc989;

                }
            }
        }
    }

`;

export const HeaderBottomRight=styled.div`
ul{
        display:flex;
        justify-content: end;
        li{
            list-style: none;
            a{
                font-size: 14px;
                color: #2a2b39;
                padding: 20px 0 20px 30px;
                font-weight: 500;
                
            }
        }
    }
`;

export const HeaderPC = styled(Header)`
:where(.css-dev-only-do-not-override-zjzpde).ant-layout-header{
    height: unset !important;
    }
    background-color: white;
    @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 992px) and (min-width: 769px) {
    display: none;
}
@media (min-width: 993px) {
    display: block;
}


`;

export const HeaderTablet = styled(Header)`
:where(.css-dev-only-do-not-override-zjzpde).ant-layout-header{
    height: unset !important;
    }
    background-color: white;
   @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 992px) and (min-width: 769px) {
    display: block;
}
@media (min-width: 993px) {
    display: none;
}
`;

export const HeaderMobile = styled(Header)`
:where(.css-dev-only-do-not-override-zjzpde).ant-layout-header{
    height: unset !important;
    }
    background-color: white;
    .anticon{
        color: white;
        float: right;
    }
.ant-drawer .ant-drawer-header-title{
        justify-content: end;
    }
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 992px) and (min-width: 769px) {
    display: none;
}
@media (min-width: 993px) {
    display: none;
}
`;

export const Navbar =styled(Drawer)`
    /* position: fixed;
    top: 0;
    right: 0; */
    padding-top: 20px;
    /* width: 250px !important; */
    background-color: #232c38 !important;
    /* height: 100%; */
    ul{
        li{
            list-style: none;
            width: 100%;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding: 10px 20px;
            a{
                text-decoration: none;
                color: white;
                font-size: 13px;
                font-weight: 500;
            }
        }
    }
    .ant-drawer .ant-drawer-header-title {
        justify-content: end;
        .ant-drawer .ant-drawer-close {
            color: white;
        }
    }
`;

export const NavTop=styled.ul`
    display: flex;
    li{
        border-bottom: none !important;
        padding: 0 15px !important;
    }
`;

