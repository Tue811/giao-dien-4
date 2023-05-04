
import { Footer } from 'antd/es/layout/layout';
import  styled  from 'styled-components';


export const FooterComponent = styled(Footer)`
    padding-top:60px;
    padding-bottom: 50px;
    background-color: #F6F7F9;
    color: #444b57;
    text-align: center;
    img{
        width: 153px;
        /* margin: 20px 0 ; */
    }
`;

export const TitleContentFooter=styled.div`
    color: #171b20;
    font-size: 17px;
    margin: 30px 0;
`;

export const ContentFooter = styled.div`
    ul{
        li{
            list-style: none;
            a{
                color: #444b57;
            }
        }
    }
    p{
        padding: 15px 0;
        color: #6a717c;
       
    }
    span{
            border-bottom: 1px dotted #444b57;
            color: #444b57;
        }
`;

export const PhoneNumber = styled.div`
    font-size: 17px;
    padding-bottom: 20px;

`;

export const FooterBottom=styled.div`
    padding-top: 30px;
    p{
        color: #6a717c;
    }
    span{
        color: #444b57; 
        /* '&:hover'{
            text-decoration: solid;
        } */
    }
`;

