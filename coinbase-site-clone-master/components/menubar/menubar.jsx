import React from 'react'
import Logo from '../logo/logo'
import Menuactions from '../menu-actions/menuactions';
import MenuitemList from '../menuitem-list/menuitemlist';


const Menubar = () => {
    return (
        <nav className="menubar">
            <Logo />
            <MenuitemList />
            <Menuactions />

            <style jsx>
                {`
                .menubar{
                    max-width: 1180px;
                    margin: 0px auto;
                    display: flex;
                    align-items: stretch;
                    // padding: 10px 20px 15px;
                    box-sizing: content-box;
                    // justify-content: space-between;
                }
                `}
            </style>
        </nav>
    )
}

export default Menubar
