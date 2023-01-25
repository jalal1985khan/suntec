import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
function LinksExample() {
  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/relationship-based-pricing-management" active>
      Ecosystem Management and Monetization
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/ecosystem_management_and_monetization.jpg")` 
    }}>

<Row>
<Col>
<div className="b-text">
<h1>Ecosystem Management and Monetization</h1>
<p>Embrace the open economy – adopt new business models and increase revenue sources. Become a true value aggregator through collaboration and co-innovation.</p>
<Link href="/" className="r-btn">Read the datasheet</Link>
</div>
</Col> 
<Col></Col> 
</Row>
</Container>
<Container>
<Row className="d-flex flex-row mt-5 mb-5">
<Col sm={6}>
<img className='Product-img' src="/images/xelerate.png" height="350"/>
</Col>
<Col sm={6}>
<h2 className="fs-1">Why SunTec Xelerate?</h2>
<p className="fs-5 product-text">SunTec&apos;s Ecosystem Management and Monetization on SunTec Xelerate platform enables financial services, telecom, travel and insurance organizations to embrace the open economy and use it to their advantage. It helps organizations transform from a utility provider to a value aggregator. Organizations can expand their products and services offering by collaborating with external partner ecosystems, providing innovative solutions, adopting new business models and maximizing revenue by delivering true value to its customers.
</p>
<p className="fs-5 product-text">SunTec&apos;s Ecosystem Management and Monetization achieves this through end-to-end management, monitoring, and monetization capabilities across the partner and the customer value chain. The solution is pre-packaged with powerful features that help organizations to leverage the true potential of the open economy.</p>
</Col>
</Row>    
</Container>
<Container className="wbg-sun text-center d-flex flex-column justify-content-center" style={{height: 10 +'em'}}>
<h2 className="text-white fs-2 mb-4">Discover related resources curated just for you</h2>
<Row>
<Col><Button className="w-btn">Articles</Button></Col>
<Col><Button className="w-btn">White Papers</Button></Col>
<Col><Button className="w-btn">Case Studeis</Button></Col>    
</Row>

</Container>
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Features of SunTec&apos;s Ecosystem Management and Monetization</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>End-to-end Partner Management</Card.Title>
        <Card.Text>
        API based end-to-end partner life cycle management from on-boarding to financial settlement
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_1.png" />
      <Card.Body className="c_body">
        <Card.Title>Multi-business Models Support</Card.Title>
        <Card.Text>
        Support for organizations in different roles – as producers, distributors, co-innovators, aggregators, etc.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Holistic Product Catalog</Card.Title>
        <Card.Text>
        Manage third party products and services as part of the centralized, holistic catalog
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Automated Revenue Settlement</Card.Title>
        <Card.Text>
        Automated and controlled computation and settlement of revenue share across the value chain
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_25.png" />
      <Card.Body className="c_body">
        <Card.Title>Experience Design Capabilities</Card.Title>
        <Card.Text>
        Visualize the entire customer buying experience. Enable product managers to create innovative offers using products from a partner ecosystem
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_22.png" />
      <Card.Body className="c_body">
        <Card.Title>Monitoring Capabilities</Card.Title>
        <Card.Text>
        Track and analyse pattern, volume and frequency of usage. Real-time insights on revenue, cost and profitability across the partner ecosystem
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

</Container>
<Container>
</Container>
<Container className="gra_color pt-3" fluid style={{height:45 + 'em'}}>
<Row>
  <Col className="center"><img className='product-img' src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">&quot;Deliver value to customers with comprehensive partner management capabilities.&quot;</h3>
  <p className="text-white fs-5 product-text">Empower your organization with comprehensive partner management capabilities</p>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>Co-create solutions:</strong> Create an ecosystem for various players, thereby addressing the customer&apos;s lifecycle needs, as well as ensuring seamless revenue management.</li> 
   <li className="text-white fs-5"><strong>Comprehensive partner management in the API economy:</strong> From price tariff and contract management, to revenue sharing computation and settlement, get end-to-end partner management capabilities.</li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Benefits</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4_1.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Build a partner ecosystem to offer complementary products to customers and own the customer value chain
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_2.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Co-innovate for customer-centric offers ensuring customer retention and growth
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_3.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Add new business models for additional sources of revenue
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_4.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Manage external products within your enterprise product catalog
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_5.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Leverage insights to cross-sell innovative offers to customers
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_6.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Monetize APIs which are accessed by third party partners
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
        Customized plans for API monetization based on partner profiling
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col></Col>
<Col></Col>
</Row>

</Container>
<Container className="wbg-gy text-center d-flex flex-column justify-content-center align-items-center" style={{height:10 + 'em'}}>
<h1 className="fs-4">Rounding up the pulse of the industry as we go along.</h1>
<Button className="b-btn">Be up to date now!</Button>
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