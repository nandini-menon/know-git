import React, { useState } from 'react';
import SideNav from '../components/sidenav';
import Content from '../components/content';


const RootContainer = () => {
    const[count, setCount] = useState(0);

    return (
        <div>
            <SideNav onClick={() => {setCount(count)} } count={count}/>
            <Content count={ count } />
        </div>
    );
}


export default RootContainer;