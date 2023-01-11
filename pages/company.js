import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
function LinksExample({ name, ...props }) {

  const [show, setShow] = useState(false);

  const user1Close = () => setShow(false);
  const user1Show = () => setShow(true);





  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/company" active>
      Company
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/company_banner.jpeg")` 
    }}>

<Row>
<Col>
<div className="b-text">
<h1>About</h1>
<p>We are the world’s No. 1 pricing and billing company that creates value for enterprises through its Cloud-based products. Our award-winning products and solutions enable organizations like yours to adopt a customer first strategy, exponentially increase revenue and customer base, and deliver exceptional customer experience.</p>
</div>
</Col> 
<Col>

</Col> 
</Row>
</Container>
<Container className="mt-5">
<Row>
<Col className="right">
<img src="/images/suntec_30_year.png" style={{height: 20+'em'}}/>
</Col>    
<Col className="f-end">
<span className="years">Years of</span>
<h3 className="years-i">Innovation</h3>
</Col>
<Col className="company-bg text-center p-5">
<p className="company-h">Our Vision</p>
<p className="company-i">At SunTec, Our vision is to enable every value exchange in the digitally driven world</p>
</Col>    
</Row>
</Container>
<Container className="mt-5">
<p className="fs-5">At SunTec, we help our clients increase the lifetime value of their customer relationships through effective revenue management and real-time customer experience orchestration with cloud-native, cloud-agnostic products. Our low-risk digital transformation approach enables clients to own the customer experience by enhancing their value-based engagement with end customers.</p>
<p className="fs-5">Established in 1990, SunTec is today the World’s #1 Relationship-based Pricing and Billing company that enables organizations to be digitally empathetic and help future-proof their customer relationship with products built on its award-winning, cloud-native and micro-services based platform SunTec Xelerate. SunTec Xelerate platform and products help organizations own the customer experience by setting up a system-of-engagement with enhanced product management capabilities, enterprise pricing, revenue management, and partner ecosystem management.</p>
<p className="fs-5">With 130+ clients in 45+ countries, SunTec is a trusted partner of leading organizations across Banking, Financial Services, Insurance, Telecom, and Travel industries. Headquartered in India, SunTec has offices in Australia, Canada, Germany, Singapore, UAE, UK and USA to cater to the global customer base.</p>
</Container>
<Container className="mt-5">
<Row>
<Col className="middle"><p className="fs-2">Leadership Team</p></Col>
<Col className="company-l middle">
<p className="fs-5">Exceptional technology skills. In depth market understanding. Years of domain experience. And above all, high commitment. Meet the people driving the SunTec dream of enabling all value transactions in the world.</p>
</Col>
</Row>
</Container>
<Container className="mt-5">
<Row>
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="https://www.suntecgroup.com/wp-content/uploads/2022/06/Nanda-Kumar-02.png" />
      <Card.Body className="f-end">
        <Card.Title>Nanda Kumar</Card.Title>
        <Card.Text>
        Founder & CEO
        </Card.Text>
        <Button variant="primary" onClick={user1Show} className="me-2">
        Read more
      </Button>
      </Card.Body>
    </Card>

    <Offcanvas show={show} onHide={user1Close} {...props}>
        <Offcanvas.Header closeButton>
      
        <Offcanvas.Title>Nanda Kumar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="border-0">
      <Card.Img variant="top" src="https://www.suntecgroup.com/wp-content/uploads/2022/06/Nanda-Kumar-02.png" />
      <Card.Body>
        <Card.Title>Nanda Kumar</Card.Title>
        <Card.Text>
        Founder & CEO
        </Card.Text>
      </Card.Body>
    </Card>
        A technology evangelist with over 30 years in the industry, Nanda Kumar (NK) has shaped the wave of customer-centric software platforms and solutions for pricing and billing, particularly in transaction-intensive verticals. He pioneered the concept of relationship-based pricing – an idea industry analysts and thought leaders now acknowledge as the key to balanced pricing dynamics. NK has made SunTec one of the global leaders in revenue management and business assurance space in the financial and telecom industries. Under the guidance of NK, SunTec has forayed into areas such as offer management, loyalty and relationship based pricing. Under his leadership, the company has won several awards and is considered as a leader in enterprise products. He has delivered numerous talks across global forums such as SIBOS, 3G Mobile Forum, Indian Banking Summit, Gartner Summits etc. He is also a widely read writer who has written for many technology oriented newsletters and blogs. NK holds a master’s degree in management and physics.
        </Offcanvas.Body>
        
      </Offcanvas>
</Col>
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="https://www.suntecgroup.com/wp-content/uploads/2022/06/Nanda-Kumar-02.png" />
      <Card.Body className="f-end">
        <Card.Title>G Vijayaraghavan</Card.Title>
        <Card.Text>
        Member – Board of Directors
        </Card.Text>
      </Card.Body>
    </Card>
</Col>  
</Row>

<Row className="mt-4">
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="https://www.suntecgroup.com/wp-content/uploads/2022/06/Nanda-Kumar-02.png" />
      <Card.Body className="f-end">
        <Card.Title>Amit Dua</Card.Title>
        <Card.Text>
        President, SunTec Business Solutions
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="https://www.suntecgroup.com/wp-content/uploads/2022/06/Nanda-Kumar-02.png" />
      <Card.Body className="f-end">
        <Card.Title>Sathish Chandran R</Card.Title>
        <Card.Text>
        President and Global Head – Demand Fulfillment Group
        </Card.Text>
      </Card.Body>
    </Card>
</Col>  
</Row>

<Row className="mt-4">
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="https://www.suntecgroup.com/wp-content/uploads/2022/06/Nanda-Kumar-02.png" />
      <Card.Body className="f-end">
        <Card.Title>Michael Yesudas</Card.Title>
        <Card.Text>
        Chief Technology Officer
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="https://www.suntecgroup.com/wp-content/uploads/2022/06/Nanda-Kumar-02.png" />
      <Card.Body className="f-end">
        <Card.Title>Suresh Rao</Card.Title>
        <Card.Text>
        Chief Finance Officer
        </Card.Text>
      </Card.Body>
    </Card>
</Col>  
</Row>
<Row className="mt-4">
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="https://www.suntecgroup.com/wp-content/uploads/2022/06/Nanda-Kumar-02.png" />
      <Card.Body className="f-end">
        <Card.Title>Pramod Perumparambil</Card.Title>
        <Card.Text>
        Chief Strategy and Transformation Officer
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card  className="d-flex flex-row">
      <Card.Img className="company-img" src="https://www.suntecgroup.com/wp-content/uploads/2022/06/Nanda-Kumar-02.png" />
      <Card.Body className="f-end">
        <Card.Title>Peter Yorke</Card.Title>
        <Card.Text>
        Senior Vice President – Marketing
        </Card.Text>
        
      </Card.Body>
    </Card>
</Col>  
</Row>



</Container>




<Container>
<Row className="d-flex flex-row mt-5 mb-5">
<Col sm={6}>
<img src="/images/xelerate.png" height="350"/>
</Col>
<Col sm={6}>
<h2 className="fs-1">Why SunTec Xelerate?</h2>
<p className="fs-5">SunTec&apos;s cloud-based Indirect Tax Management on SunTec Xelerate platform is uniquely designed as a digital innovation middle layer. It can easily integrate with the bank’s existing technology landscape. It is an out-of-the-box solution designed to de-clutter core systems, extract the indirect taxation logic and ensure smooth journey towards indirect tax (GST and VAT ) compliance. It comes equipped with pre-set rules and definitions that can be easily parameterized. SunTec’s Indirect Tax Management system on the cloud is a fully configurable framework that ensures the shortest turnaround to accommodate frequent regulatory changes.
</p>
</Col>
</Row>    
</Container>


<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Features of SunTec&apos;s Tax Management</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Centralized Management</Card.Title>
        <Card.Text>
        Simplifies processes and eliminates complexity by centralizing management
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_1.png" />
      <Card.Body className="c_body">
        <Card.Title>End-to-end Management</Card.Title>
        <Card.Text>
        Support for the end-to-end process including input tax, output tax, returns management
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Highly Flexible Framework</Card.Title>
        <Card.Text>
        Flexible and configurable allowing maintenance and easy management of frequent regulatory changes
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Automated Data Generation</Card.Title>
        <Card.Text>
        Automated end-to-end process with minimal manual intervention
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:20+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_25.png" />
      <Card.Body className="c_body">
        <Card.Title>Correction and Refund Management</Card.Title>
        <Card.Text>
        Optimized management of refund and corrections
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
</Col>
</Row>
<Container className="text-center mt-5"><Button className="b-btn">Learn more about our GCC VAT Solution</Button></Container>

</Container>
<Container>
</Container>
<Container className="gra_color pt-3" fluid style={{height:45 + 'em'}}>
<Row>
  <Col className="center"><img src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">&quot;Businesses need a centralized platform to manage tax segregation, accounting, invoicing and exemptions to achieve compliance.&quot;</h3>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>An out-of-the-box compliance management product:</strong> Compliance management made easy with over 200 indirect tax features pre-packaged.</li> 
   <li className="text-white fs-5"><strong>De-clutter core systems:</strong> Count on a comprehensive tax solution that seamlessly integrates with core systems to ensure a smooth regulatory compliance journey.</li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Benefits</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4_12.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Eliminate complexity by centralized management of tax determination rules across diverse business systems
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_13.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Centralize and standardize through an enterprise-level capability across all geographies and entities
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_14.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Be ahead of the volatile regulatory framework with the hyper-agile framework that enables smooth transition
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_7.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Manage high volumes through high scalability and real-time processing capabilities
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_15.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce cost of tax determination and reporting with automated processing and reconciliation facilities
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_16.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Mitigate risk through end-to-end traceability and rules driven control with auditability
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
</Container>
<Container className="wbg-gy text-center d-flex flex-column justify-content-center align-items-center" style={{height:10 + 'em'}}>
<h1 className="fs-4">Be up to speed in a changing market with SunTec Xelerate by your side.</h1>
<Button className="b-btn">Accelerate with SunTec Xelerate!</Button>
</Container>
<Container className="mb-5 mt-5 text-center">
<h2>Our Latest Insights</h2>

<Container>
  <Row>
    <Col>
<Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
<Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
<Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>

</Container>



</Container>


<Footer/>
</>


  );
}

export default LinksExample;