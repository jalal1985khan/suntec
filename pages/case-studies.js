import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

function LinksExample() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [next, setNext] = useState();
    const [total, setTotal] = useState();
    const [end, setEnd] = useState(true);
  
    const fetchMovies = async () => {
      setLoading(true);
      let url = "";
      const urlPage = `${page}`;
      //console.log(urlPage)
      //url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
      //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&status[]=publish&per_page=${urlPage}`;
      url = `https://elementor.ivistasolutions.biz/wp-json/wp/v2/case-studies?_embed&status=publish&per_page=${urlPage}`;
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
  
    const fetchNos = async () => {
      setLoading(true);
      let cat = "";
      cat = `https://elementor.ivistasolutions.biz/wp-json/wp/v2/categories/248 `;
  
      try {
        const response = await fetch(cat);
        const cats = await response.json();
        //console.log(cats.count);
        setNext(cats.count);
        setLoading(false);
  
      } catch (error) {
        console.log(error);
      }
    };
  
  
  
  
    useEffect(() => {
      fetchMovies();
      fetchNos();
    }, [page], [next]);
  
  
    const loadMore = () => {
      setTotal(next)
      //console.log(total)
      const main = next;
  
      if (total == page) {
        setEnd(false);
      }
  
      setPage((oldPage) => {
        return oldPage + 2;
      })
    };

  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/company" active>
      Case Studies
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/Newsroom.jpg")` 
    }}>

<Row>
<Col sm={4}>
<div className="r-text">
<h1 className="fs-1">Case Studies</h1>
<div className="wbg-gr p-2">
<p className="fs-5">Discover how our clients across verticals benefited with SunTec</p>
</div>
</div>
</Col> 
<Col >
</Col> 
</Row>
</Container>
<Container className="mt-5 ">
<h2 className="txt-main">What’s Happening at SunTec</h2>

<Row>
{

movies.map((post, index) => {
  //console.log(post);
  return (

    <Col sm={4} className="p-3" key={post.id}>
      <Card className="story_post" >
        <Image
          src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
          alt={post['title']['rendered']}
          width="100%"
        />
        <Card.Body>
          
          <Card.Title className="fs-3 bogle-medium mb-4" style={{ height: 58 }}>{post['title']['rendered']}</Card.Title>
          
          
          <Link key={index} href={`/case-studies/${post['slug']}`}>
            <Button variant="primary" className="authors_btn fs-5">Know more</Button>
          </Link>
        </Card.Body>
      </Card>

    </Col>
  )


})}

</Row>


</Container>
<section className="section text-center mb-3">
        {loading && <h2 className="loading">Loading...</h2>}
        <div className="loadmodediv">
          {end &&
            <Button variant="primary" className="b-btn fs-5" onClick={loadMore}>
              Load More
            </Button>}
        </div>
      </section>
<Footer/>
</>


  );
}

export default LinksExample;