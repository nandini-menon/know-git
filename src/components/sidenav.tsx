import React from 'react';

type componentProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    count: number
}

type containerProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>
};


const NavLink = ({ setCount, count }: componentProps) => {
    return (
        <button onClick={ () => setCount(count) }>{ count }</button>
    );
}


const SideNav = ({ setCount }: containerProps) => {
    return(
        <div>
            <NavLink 
                setCount={setCount}
                count={1} 
            />
            <NavLink 
                setCount={setCount}
                count={2} 
            />
            <NavLink 
                setCount={setCount}
                count={3} 
            />
            <NavLink 
                setCount={setCount}
                count={4} 
            />
            <NavLink 
                setCount={setCount}
                count={5} 
            />
        </div>
    );
}

export default SideNav;