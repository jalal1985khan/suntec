import {Container,Row, Col,Image,Breadcrumb} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
function LinksExample() {
  return (
<>
<Header/>
<Container>
<Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
      Simplifying Digital Transformation
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Image
    src="/images/financial_Services_banner.jpeg"
    width="100%"
    height="540"
    background='no-repeat'
    background-size= 'cover'
    className="banner-img"
  />
    
    

<Container className="f_content text-center p-3 mt-4">
<h1>hello</h1>
</Container>
<Footer/>
</>


  );
}

export default LinksExample;