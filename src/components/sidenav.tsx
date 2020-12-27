import React from 'react';

type numberProp = {
    count: number
}

type containerProps = {
    onClick: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
    count: number
};


const NavLink = ({ onClick, count }: containerProps) => {
    return (
        <p onClick={onClick}>{ count }</p>
    );
}


const SideNav = ({ onClick, count }: containerProps) => {
    return(
        <div>
            <NavLink 
                onClick={onClick}
                count={1} 
            />
            <NavLink 
                onClick={onClick}
                count={2} 
            />
            <NavLink 
                onClick={onClick}
                count={3} 
            />
            <NavLink 
                onClick={onClick}
                count={4} 
            />
            <NavLink 
                onClick={onClick}
                count={5} 
            />
        </div>
    );
}

export default SideNav;