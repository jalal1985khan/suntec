import {Container,Row, Col,Card ,Image} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Moment from 'react-moment';
import Link from 'next/link';
import configData from "../config.json";

import Header from '../components/Header';
import Banner from '../components/Home-Banner';
import Text from '../components/Home-Text';
import Feature from '../components/Feature-Content';
import Fposts from '../components/Feature-Posts';
import Clogos from '../components/ClientsLogo';
import Banking from '../components/Banking-Opportunities';
import Counts from '../components/Customers-Count';
import Life from '../components/Life-Suntec';
import Testimonials from '../components/Testimonails';
import Solutions from '../components/Industry-Solutions';
import Partners from '../components/Partners';
import Footer from '../components/Footer';


const index = () => {
  const [movies, setMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [page, setPage] = useState(9);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();
  const [error, setError] = useState({});
  const [next, setNext] = useState();
  const [total, setTotal] = useState();
  const [end, setEnd] = useState(false);
  const fetchMovies = async () => {
    setLoading(true);
    let url = "";
    const urlPage = `${page}`;
    url = `${configData.SERVER_URL}press_release?_embed&status=publish&homepage=312`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


useEffect(() => {
    fetchMovies();
  },);

  return (
    <>
  <Header/>
    <Banner/>
    <Text/>
    <Feature/>
    <Fposts/>
    <Clogos/>
    <Banking/>
    <Counts/>
    <Life/>
    <Testimonials/>
<Container>
<h2 className="mt-5">What’s New at SunTec</h2>
<Row>
{

movies.map((post, index) => {
  //console.log(post);
  return (

<Col sm={6} className="p-1" >
<div className="news-out">
 <Row className="news-in">
<Col sm={5}>
<img  src={post['_embedded']['wp:featuredmedia'][0]['source_url']} className="news-img"/>
</Col>
<Col className="middle fs-5 fw-bold" >
<Link href="/" className="text-black text-decoration-none">{post['title']['rendered']}</Link>  
</Col>
</Row> 
</div>
</Col> 
  )


})}

</Row>


</Container>

    <Solutions/>
    <Partners/>
    <Footer/>    
    </>
  )
}

export default index



