import React from 'react';


type containerProps = {
    count: number
};


const Content = ({count}: containerProps) => {
    return(
        <p>{count}</p>
    );
}

export default Content;