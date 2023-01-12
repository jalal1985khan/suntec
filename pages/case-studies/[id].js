import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import configData from "../../config.json";
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Share from '../../components/Share';

const post = ({data}) => {
  console.log(data);
  return (
    <div>
<Header/>   
{
data.map((post)=>{
return (
<>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href={post['slug']} active>
      {post['title']['rendered']}
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ backgroundImage: `url(${post['_embedded']['wp:featuredmedia'][0]['source_url']})`}}>
<Row>
<Col sm={6}>
<div className="c-text">
<h1 className="fs-2 text-bolder" dangerouslySetInnerHTML={{__html:post['title']['rendered']}}/>
</div>
</Col> 
<Col >
</Col> 
</Row>
</Container>
<Container fluid key={post.id} className="success_post" style={{ backgroundImage: `url(${post['_embedded']['wp:featuredmedia'][0]['source_url']})`}}>
</Container>
<Share/>
<Container className="mt-5">
<Row>
<Col sm={7}>
<div dangerouslySetInnerHTML={{__html:post['content']['rendered']}} className="fs-5"/>
</Col>  
<Col>


</Col>
</Row>


</Container>




<Footer/>


</>







)



})}


</div>
  )
}

export default post




export async function getServerSideProps(context){
    const {id} = context.params;
    const res = await fetch(`${configData.SERVER_URL}case-studies?_embed&slug=${id}`);
    const data = await res.json();
    return {props:{data}}
    
    
    
}