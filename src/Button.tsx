import React from 'react';

type ButtonPropsType = {
    title: string
}

const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button>{props.title}</button>
        </div>


    // <button>All</button>
        // <button>Active</button>
        // <button>Completed</button>
)
    ;
};

export default Button;