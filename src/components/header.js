import React from 'react'
import { Navbar, NavbarBrand, Button } from 'reactstrap'

const Header = () => {
    return (
        <div>
            <Navbar expand="md" light>
                <NavbarBrand href="/">
                    <img src='./logo.jpg' alt="logo" width="45" />
                    <span className="text-white px-2">Gatsby</span>
                </NavbarBrand>
                <Button outline color="warning" className="connect-btn px-4"><img src="./metamask.svg" width="20" alt="metamask" /><span className="text-uppercase ms-2">Connect</span></Button>
            </Navbar>
        </div>
    )
}

export default Header;