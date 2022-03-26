import React from 'react';
import {FilterValueType} from "../App";

type ButtonPropsType = {
    title: string
    changeFilter: ()=>void
}

const Button = (props: ButtonPropsType) => {
    return (

            <button>{props.title}</button>

)
    ;
};

export default Button;