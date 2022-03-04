import React, { useState } from 'react'
import Header from './components/header'
import TypeAnimation from 'react-type-animation'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Row, Col } from 'reactstrap'
import Widget from './components/widget'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import etherscanIcon from "./assets/etherscan.png"
import openseaIcon from "./assets/opensea.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

 //custom select
 const DropDownContainer = styled("div")`
 margin: 0 auto;
 position: relative;
 
 @media (max-width: 1180px) {
   width: 19rem;
 }
 
 @media (max-width: 576px) {
   width: 17rem;
 }
`;

const DropDownHeader = styled("div")`
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  color: white;

  svg {
    position: absolute;
    right: 16px;
    top: 15px;
  }

  @media (max-width: 576px) { 
    font-size: 1.1rem;

    svg {
      top: 10px;
    }
  }
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  left: 5px;
  width: 100%;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #23304e;
  border: 2px solid #001321;
  color: #ffffff;
  font-size: 1.3rem;

  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
`;


function App() {
  const contractAddress = '0x5c6ddff88522dfcf9512d0fec1eec8f428871011';
  const options = ["Bored Ape Yacht Club", "Bored Ape Yacht Club A", "Bored Ape Yacht Club B"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Header />

      <div className="text-center text-white pb-4">
        <div style={{height:50}}>
          <TypeAnimation
            cursor={false}
            sequence={['Real Time Data', 2500, '']}
            wrapper="h1"
            repeat={Infinity}
            className="mb-0"
          />
        </div>
        <h4 className="mb-2 fw-normal"><FontAwesomeIcon icon={faBars} className="mx-2" />0.1 for 6 months</h4>
        <h4 className="mb-0 fw-normal">Sign Up With MetaMask <img src="./metamask.svg" width="35" alt="metamask" />!</h4>
      </div>

      <div className="project m-auto p-2 p-sm-4">
        <div className="project-header d-xl-flex justify-content-between">
          <div className="d-flex align-items-center justify-content-center">
            <span className="h6 text-white mb-0">{String(contractAddress).substring(0, 12) + "..." + String(contractAddress).substring(38)}</span> 
            <ul className="social-links p-0 px-3 m-0 d-flex gap-2">
              <li>
                <a href="https://etherscan.io" target="_blank" rel="noreferrer"><img src={etherscanIcon} alt="etherscan" width="30" /></a>
              </li>
              <li>
                <a href="https://opensea.io" target="_blank" rel="noreferrer"><img src={openseaIcon} alt="etherscan" width="30" /></a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="text-white" style={{fontSize:28}} /></a>
              </li>
            </ul>
          </div>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>
              {selectedOption || "Bored Ape Yacht Club"}
              <FontAwesomeIcon icon={faAngleDown} />
            </DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  {options.map(option => (
                  <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                  </ListItem>
                ))}
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
          <Router>
            <ul className="d-flex align-items-center justify-content-center gap-3 top-bar-nav">
              <li>
                <Link to="/#overview">OverView</Link>
              </li>
              <li>
                <Link to="/#recent-trade">Recent Trades</Link>
              </li>
            </ul>
          </Router>
        </div>
        <div className="project-body">
          <Row className="py-4">
            <Col md={6}><h6 className="text-white text-center fw-light">Deployed: 3y 2m 109d ago</h6></Col>
            <Col md={6}><h6 className="text-white text-center fw-light">Circulation: 10,000 units</h6></Col>
          </Row>
          <Row>
            <Col lg={6}><h1 className="text-white text-center mt-5">Trade chart here!</h1></Col>
            <Col lg={6}>
              <Row>
                <Col md={6}>
                  <Widget 
                    title="Volume"
                    price={345}
                    unit="eth"
                    state="up"
                    percent={2.8}
                    lastPrice={270}
                  />
                </Col>
                <Col md={6}>
                  <Widget 
                    title="Unique Holders"
                    price={402}
                    state="up"
                    percent={0.5}
                    lastPrice={400}
                  />
                </Col>
                <Col md={6}>
                  <Widget 
                    title="V 5 minute sales"
                    price={300}
                    state="up"
                    percent={0.5}
                    lastPrice={400}
                  />
                </Col>
                <Col md={6}>
                  <Widget 
                    title="V 5 minute listings"
                    price={100}
                    state="up"
                    percent={0.5}
                    lastPrice={400}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={6}> <h1 className="text-white text-center mt-5">Chart here!</h1> </Col>
            <Col lg={6}>
              <Row>
                <Col md={6}>
                  <Widget 
                    title="Max price"
                    price={13.5}
                    unit="eth"
                    state="down"
                    percent={11}
                    lastPrice={15}
                  />
                </Col>
                <Col md={6}>
                  <Widget 
                    title="Average price"
                    price={.2352}
                    state="down"
                    unit="eth"
                    percent={18}
                    lastPrice={0.2765}
                  />
                </Col>
                <Col md={6}>
                  <Widget 
                    title="Min price"
                    price={0.04}
                    state="up"
                    percent={264}
                    lastPrice={0.11}
                  />
                </Col>
                <Col md={6}>
                  <Widget 
                    title="Gas fee"
                    price={25}
                    unit="gwei"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

        </div>
      </div>
    </div>
  );
}

export default App;