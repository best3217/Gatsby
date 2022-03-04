import React from 'react'
import { Row, Col } from 'reactstrap'
import Widget from './widget'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Select from './select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import etherscanIcon from "../assets/etherscan.png"
import openseaIcon from "../assets/opensea.png"

const Features = () => {
    const contractAddress = '0x5c6ddff88522dfcf9512d0fec1eec8f428871011';
    const options = ["Bored Ape Yacht Club", "Bored Ape Yacht Club A", "Bored Ape Yacht Club B"];

    return (
        <div className="features m-auto">
        <div className="features-header mt-1 d-xl-flex justify-content-between px-4">
          <div className="d-sm-flex align-items-center justify-content-center text-center border-right">
            <div className="h6 text-white mb-0 py-3 pe-3 border-right">{String(contractAddress).substring(0, 12) + "..." + String(contractAddress).substring(38)}</div> 
            <ul className="p-0 px-3 m-0 d-flex justify-content-center gap-2">
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
          <Select 
            options={options}
            fontSize={20}
            indicatorPos='right'
          />
          <Router>
            <ul className="d-flex align-items-center justify-content-center top-bar-nav">
              <li>
                <Link to="/#overview">Overview</Link>
              </li>
              <li>
                <Link to="/#recent-trade">Recent Trades</Link>
              </li>
            </ul>
          </Router>
        </div>
        <div className="features-body px-4">
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
                    title="sales"
                    price={300}
                    state="up"
                    percent={0.5}
                    lastPrice={400}
                    timeSelect={true}
                  />
                </Col>
                <Col md={6}>
                  <Widget 
                    title="listings"
                    price={100}
                    state="up"
                    percent={0.5}
                    lastPrice={400}
                    timeSelect={true}
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
    )
}

export default Features;