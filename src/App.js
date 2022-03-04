import React, { useState, useEffect } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, Button } from 'reactstrap'
import Typed from 'react-typed';
import Web3 from "web3"
import Web3Modal from "web3modal"
import Features from "./components/features"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import featuresImg from "./assets/GatsbyFeatures.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

function App() {

  const [account, setAccount] = useState('');
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  }

  useEffect(() => {
    (async () => {
       if(localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER")) await connectPrompt();
    })()
  }, [])

  const providerOptions = {};
  const web3Modal = new Web3Modal({
    network: "mainnet", 
    cacheProvider: true,
    providerOptions // required
  });

  async function connectPrompt() {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const firstAccount = await web3.eth.getAccounts().then(data=>data[0]);
    setAccount(firstAccount);
  }

  return (
    <div className="App">
      <header>
          <Navbar expand="md" light>
              <NavbarBrand href="/">
                  <img src='./logo.jpg' alt="logo" width="45" />
                  <span className="text-white px-2">Gatsby</span>
              </NavbarBrand>
              <NavbarToggler onClick={toggle} className="bg-white" />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto gap-4" navbar>
                  <NavItem>
                    <NavLink href="/#analisys" className="text-white">
                      Analisys
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/#faq" className="text-white">
                      FAQ
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    { account ?
                      <Button outline color="warning" disabled className="connect-btn px-4"><img src="./metamask.svg" width="20" alt="metamask" /><span className="text-uppercase ms-2">Connected</span></Button>
                      :<Button onClick={()=>connectPrompt()} outline color="warning" className="connect-btn px-4"><img src="./metamask.svg" width="20" alt="metamask" /><span className="text-uppercase ms-2">Connect</span></Button>
                    }
                  </NavItem>
                </Nav>
              </Collapse>
          </Navbar>
      </header>

      <div className="text-center text-white py-4">
        <h1 className="mb-2 fw-normal">
          Real Time
          <Typed
              strings={["Data", "Analisys", "Chart"]}
              typeSpeed={200}
              backSpeed={200}
              loop
            />
        </h1>
        <h4 className="mb-2 fw-normal"><FontAwesomeIcon icon={faBars} className="mx-2" />0.1 for 6 months</h4>
        {account? <h5 className="wallet-address">{account}</h5> : <h4 className="mb-0 fw-normal">Sign Up With MetaMask <img src="./metamask.svg" width="35" alt="metamask" />!</h4>}
      </div>

      {
        account ? <Features /> :  
        <div className="features m-auto">
          <img className="features-img w-100" src={featuresImg} alt="GatsbyFeatures-img" />
        </div>
      }

    </div>
  );
}

export default App;