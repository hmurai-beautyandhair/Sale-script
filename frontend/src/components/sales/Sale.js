import React, { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";
export default function  Sale() {

return(
<div style={{paddingTop: "15em"}}>
<Container>
  <Row>
 
    <Col xs={6} md={4} className='container-image'>
    <Link style={{ textDecoration: "none" }} to="/draft">
      <Image style={{width: "210px", height: "180px"}}src={require("../../images/draft_order2.png")} thumbnail />
      </Link>
    </Col>
    <Col xs={6} md={4} className='container-image'>
    <Link style={{ textDecoration: "none" }} to="/draft">
      <Image style={{width: "210px", height: "180px"}}src={require("../../images/schedule_sale2.png")} thumbnail />
      </Link>
    </Col>
    <Col xs={6} md={4} className='container-image'>
      <Image style={{width: "210px", height: "180px"}}src={require("../../images/schedule_sale1 copy.png")} thumbnail />
     
    </Col>
    <Col xs={6} md={4} className='container-image'>
      <Image style={{width: "200px", height: "200px"}}src={require("../../images/card1.png")} thumbnail />
      <p className='centered'>TEXT</p>
    </Col>
    <Col xs={6} md={4} className='container-image'>
      <Image style={{width: "200px", height: "200px"}}src={require("../../images/card1.png")} thumbnail />
      <p className='centered'>TEXT</p>
    </Col>
    <Col xs={6} md={4} className='container-image'>
      <Image style={{width: "200px", height: "200px"}}src={require("../../images/card1.png")} thumbnail />
      <p className='centered'>TEXT</p>
    </Col>
    <Col xs={6} md={4} className='container-image'>
      <Image style={{width: "200px", height: "200px"}}src={require("../../images/card1.png")} thumbnail />
      <p className='centered'>TEXT</p>
    </Col>
  </Row>
</Container>
</div>

)

}