import React from 'react';
import { Button } from 'antd';
import { styled } from 'styled-components';

interface Props {
    text: string;
}

const ButtonComponent = (props: Props) => {
    const buttonstyle = {  
        color: "white",  
        backgroundColor: "#171b20",  
        padding: "18px 40px 18px 40px", 
        fontWeight:"600",
        height:"auto",
        fontSize:"15px",
        letterSpacing: "1px",
        
      };  
    return (
        <>
        <Button style={buttonstyle} >
            {props.text}
        </Button>
        </>
    );
};

export default ButtonComponent;