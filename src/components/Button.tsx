import React from 'react';

type ButtonPropsType = {
    title: string
}

const Button = (props: ButtonPropsType) => {
    return (
        <>
            <button>{props.title}</button>
        </>


    // <button>All</button>
        // <button>Active</button>
        // <button>Completed</button>
)
    ;
};

export default Button;