import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';

function LinksExample() {
    const [allInsights, setInsights] = useState([]);
    const [heading, setHeading] = useState(false); 
  
    const fetchInsights = async () => {
      let url = "";
      url = `${configData.SERVER_URL}all-insights?tag=333`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.length);
        setInsights(data);
        if(data.length > 0){
          setHeading(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchInsights();
    },[]);
  

  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/personalization" active>
      SunTec Banking-as-a-Service Solution
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/]SunTec-Banking-as-a-Service-Solution.jpg")` 
    }}>

<Row>
<Col>
<div className="square-dark">
<div class="lin-dark"></div>
<div className="square-text-dark ">
<h1 className="fs-1">SunTec Banking-as-a-Service Solution</h1>
<p className="fs-5">Deliver lifecycle experiences through an ecosystem of partners</p>
{/* <Button  className="b-btn">Read our use cases</Button> */}
</div>
<div class="lin-dark"></div>
</div>
</Col> 
<Col>
</Col> 
</Row>
</Container>
<Container className="mt-5 wbg-light p-5">
<p className="fs-5">To meet the challenges of increasing competition, stringent regulations, and other macro-economic factors impacting the sector, banks must transform to put the customer at the very core of everything. At the same time, banks must serve larger customer bases at lower costs to open new revenue streams and increase consumption of banking services through non-banking channels.</p>
<p className="fs-5">As customer-centric strategies rule the roost, the business of banking is moving out of the exclusive realm of banks and into a comprehensive ecosystem designed to meet customer requirements and help banks grow revenues. Technology, of course, is the key driver of such integrated banking ecosystems and plays a critical role in enabling providers, enablers, and distributors of new banking models.</p>
</Container>

<Container className="p-3 pe-banner" fluid style={{ 
      backgroundImage: `url("/images/Negative-Interest-mid-section.jpeg")` 
    }}>

<Row>
<Col>
</Col> 
<Col>
<div className="pe-text">
<h1>Why Banking-as-a-Service?</h1>
<p className="fs-5">Banking-as-a-Service (BaaS) helps bring personalized, customer-centric offerings to market faster. Banks can expand their footprint and connect with new demographics to solve broader lifecycle needs and evolve into the &apos;everyday bank and customer owner&apos; by collaborating with a host of partners. BaaS can enhance customer loyalty and create new revenue streams with a robust ecosystem management and monetization platform. The model allows banks to focus on their strengths and minimize gaps in customer satisfaction for future growth.</p>
<p className="fs-5">As BaaS matures and evolves further, there is a need for robust technology platforms that can integrate digital banking ecosystems and work with:</p>
<ul>
 <li className="fs-5">Providers: who give access to core elements of the banking product and operations stack</li>   
 <li className="fs-5">Enablers: who unify the disparate elements into usable solutions</li>
 <li className="fs-5">Distributors: who take the solution to the customers via proprietary customer channels</li>
</ul>
</div>
</Col> 
</Row>
</Container>
<Container className="wbg-light p-5">
<h2>How Does SunTec Enable Banking-as-a-Service?</h2>
<p className="fs-5">Legacy banking cores cannot scale up to deliver the agility and compute power required to operate BaaS models. An agile middle-layer solution that can sit over the core is the answer for banks intending to deploy BaaS strategies. SunTec Xelerate is an enterprise-wide, agile, scalable and secure digital layer which integrates seamlessly with core systems, consolidating customer and product data for co-innovation. Its API-based infrastructure can handle every level in the growing spectrum of Business Model complexity.</p>
<p className="fs-5">SunTec Xelerate enables banks to explore BaaS models by providing a single unified data store and a single store of value. It breaks down silos to connect disparate systems and deliver real-time insights that facilitate better decision-making. It allows banks to improve bundling strategies as well as facilitates bundling, unbundling, and re-bundling of a full ecosystem of products. With SunTec, banks can deliver a hyper-personalized banking experience with a focus on customer acquisition and interaction. Get the flexibility needed to customize the customer experience by removing silos. Further, as the lines between B2C and B2B banking blur, SunTec Xelerate can help manage multiple aspects of high-impact partner ecosystems seamlessly.</p>
</Container>
<Container className="wbg-gr p-5">
<h2>Key Capabilities</h2>
<p className="fs-5">SunTec Xelerate seamlessly manages foundational factors for BaaS Models:</p>
<Row>
<Col className="">
<p className="fs-4 fw-bold">1. Manage</p>
<ul>
<li className="fs-5">Pre-defined product packages and offers for customers</li>
<li className="fs-5">Price governance across the marketplace using SLAs</li>
<li className="fs-5">End-to-end partner management</li>
<li className="fs-5">Partner contracts, with revenue-sharing computation and settlement</li>
<li className="fs-5">Innovation with disruptive pricing models</li>
</ul>

</Col>
<Col className="center">
<img src="images/manage-key.png"/>
</Col>
</Row>
<Row className="mt-5">
<Col className="">
<p className="fs-4 fw-bold">2. Monetize</p>
<ul>
<li className="fs-5">Freemium</li>
<li className="fs-5">Pay as you go</li>
<li className="fs-5">Slab / tier-based</li>
<li className="fs-5">Fixed quota</li>
<li className="fs-5">Ecosystem model</li>
<li className="fs-5">Subscription model</li>
<li className="fs-5">Factors of medium, date/time, channel, payload etc.</li>
</ul>
</Col>
<Col className="center">
<img src="images/monetize-key.png"/>
</Col>
</Row>

<Row className="mt-5">
<Col className="">
<p className="fs-4 fw-bold">3. Monitor</p>
<ul>
<li className="fs-5">Customer and partner consumption patterns – volume, value, channel, partner, committed products</li>
<li className="fs-5">On-us and Off-us tracking</li>
<li className="fs-5">Revenue leakage and non-compliance of receivables from third-party providers (TPPs)</li>
<li className="fs-5">End-to-end invoicing and settlement process</li>
</ul>
</Col>
<Col className="center">
<img src="images/monitor-key.png"/>
</Col>
</Row>
</Container>
<Container className="wbg-light p-5">
    <h2>Business Benefits</h2>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-light">
      <Card.Img className="card-icon-left" src="images/bb_iocn_1.png"/>
      <Card.Body>
        <Card.Title>Centralize products and services and <span className="fw-bold">enable relationship banking</span></Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-light">
      <Card.Img className="card-icon-left" src="images/bb_iocn_2.png"/>
      <Card.Body>
        <Card.Title><span className="fw-bold">Drive customer engagement</span> with innovative, personalized need-based offerings, orchestrating end-to-end experiences</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-light">
      <Card.Img className="card-icon-left" src="images/bb_iocn_3.png"/>
      <Card.Body>
        <Card.Title>
Effectively <span className="fw-bold">engage with internal and partner applications</span> without disrupting core systems</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-light">
      <Card.Img className="card-icon-left" src="images/bb_iocn_4.png"/>
      <Card.Body>
        <Card.Title><span className="fw-bold">Respond to the next big thing quickly</span>, without disruption</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>
</Container>

<Container className="wbg-gy p-5 my-5 text-center">
<p className="fs-5 fw-bold">Rounding up the pulse of the industry as we go along.</p>
<Button className="b-btn">Be up to date now!</Button>
</Container>
<Container className="wbg-gy p-5">
<h2>Products That Enable this Solution</h2>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-gy">
      <Card.Img className="card-icon-left" src="images/bb_iocn_3.png"/>
      <Card.Body>
        <Card.Title>
Effectively <span className="fw-bold">engage with internal and partner applications</span> without disrupting core systems</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-gy">
      <Card.Img className="card-icon-left" src="images/bb_iocn_4.png"/>
      <Card.Body>
        <Card.Title><span className="fw-bold">Respond to the next big thing quickly</span>, without disruption</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row> 
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-gy">
      <Card.Img className="card-icon-left" src="images/bb_iocn_3.png"/>
      <Card.Body>
        <Card.Title>
Effectively <span className="fw-bold">engage with internal and partner applications</span> without disrupting core systems</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-gy">
      <Card.Img className="card-icon-left" src="images/bb_iocn_4.png"/>
      <Card.Body>
        <Card.Title><span className="fw-bold">Respond to the next big thing quickly</span>, without disruption</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>   
</Container>


<Container className="wbg-gy" fluid>
<Container className="py-5">
<h2>How Can Our Personalization Solution Help Banks?</h2>
<p className="fs-5">Powered by SunTec Xelerate, our solutions empower banks to dynamically tailor their offerings based on the customer journey and overall relationship, to solve each customer’s unique needs. With these solutions, banks will be able to go beyond their own market offerings and tap into the broader ecosystem to serve, satisfy and grow their customer base.</p>
<Row className=" mt-5">
<Col className=" text-center">
<img src="/images/innovation_icon_1.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Scale and Innovate</h4>
<p className="fs-5">Adopt a scalable approach towards hyper-personalization, with innovative offers, pricing models and loyalty programs</p>
</Col>
<Col className=" text-center">
<img src="/images/data_icon_2.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Create Context</h4>
<p className="fs-5">Design and launch hyper-personalized offers, dynamically. Bundle products and extend benefits based on customer profile and behavior to deliver the most contextual offers</p>
</Col>
<Col className=" text-center">
<img src="/images/shakehand_icon_3.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Stay Relevant</h4>
<p className="fs-5">Provide a wider choice for customers by offering partner products and services as standalone or bundled offerings</p>
</Col>
<Col className=" text-center">
<img src="/images/revenue_icon_4.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Offer Control</h4>
<p className="fs-5">Utilize our API banking capabilities to introduce self-serve and empower customers with control and transparency</p>
</Col>
</Row>
<Row className="mt-5">
<Col className=" text-center">
<img src="/images/automate_solutions_icon_5.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Automate Solutions​</h4>
<p className="fs-5">Achieve rapid product adoption with automatic enrollment and solution recommendations to the right customer segments</p>
</Col>
<Col className=" text-center">
<img src="/images/speed_up_icon_6.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Speed Up and Save</h4>
<p className="fs-5">Easy integration and interoperability mean accelerated time to market and reduced costs of creating and launching new offerings</p>
</Col>
<Col className="text-center">
<img src="/images/configure_icon_7.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Configure Easily</h4>
<p className="fs-5">Use easy-to-use, drag-and-drop capabilities to rapidly create hyper-personalized offerings and reduce time to market, product complexity and costs significantly</p>
</Col>
<Col className="text-center">
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
</Container>
<hr/>
<Container className="mb-5">

<h1 className="fs-2 mt-5 mb-5">Key Capabilities and Benefits</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Centralized Offerings Repository</Card.Title>
        <Card.Text>
        Empower product, pricing and partner managers to break out of siloed systems and processes, and easily design and launch bundles and offers
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Relationship-based Banking</Card.Title>
        <Card.Text>
        Develop a single view of customers to create personalized, contextual offerings based on customer journey insights, to influence customer behavior and drive growth
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Customer Enablement</Card.Title>
        <Card.Text>
        Offer transparency and control by sharing profile, behavior and consumption information and recommending appropriate offers, while ensuring easy enrolment, de-enrolment and switching
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Ecosystem Management</Card.Title>
        <Card.Text>
        Broaden customer choice by integrating partner products and services into the bank&apos;s offer portfolio
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Analysis and Insights</Card.Title>
        <Card.Text>
        Evaluate and compare customer behavior, usage and profitability trends, by bundle, offer, sub-segment, region and unit, among others, to inform decisions
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Augmentation of Core Capabilities</Card.Title>
        <Card.Text>
        Avoid expensive and risky rip-and-replace projects and augment existing core capabilities by extracting and consolidating necessary data in a centralized, agile, cloud-based middle-layer solution
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
</Container>

<Container className="wbg-gy">
    <h2>SunTec Products That Enable Personalization</h2>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-gy">
      <Card.Img className="card-icon-left" src="images/icon_21.png"/>
      <Card.Body>
        <Card.Title>Enterprise Product Management</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-gy">
      <Card.Img className="card-icon-left" src="images/icon_22.png"/>
      <Card.Body>
        <Card.Title>Ecosystem Management and Monetization</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-gy">
      <Card.Img className="card-icon-left" src="images/icon_21.png"/>
      <Card.Body>
        <Card.Title>Dynamic Offer Management</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-gy">
      <Card.Img className="card-icon-left" src="images/icon_22.png"/>
      <Card.Body>
        <Card.Title>Relationship-based Pricing Management</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height wbg-gy">
      <Card.Img className="card-icon-left" src="images/icon_21.png"/>
      <Card.Body>
        <Card.Title>Benefits and Loyalty Management</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6} >
<Card className="d-flex flex-row c-height wbg-gy">
      <Card.Img className="card-icon-left" src="images/icon_22.png"/>
      <Card.Body>
        <Card.Title>Enterprise Billing and Statements Management</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>

</Container>
<Container className="mb-5 mt-5 text-center">
{heading && <h2>Our Latest Insights</h2>}
<Container>
  <Row>
  {

allInsights.map((post) => {
  //console.log(post);

  const Type =  post['type'];
  const Pslug =  post['slug'];
  let Links;
  if(Type =='page'){
    Links = Pslug;
  }
  else{
    Links = Type + '/'+ Pslug;
  }
return (
<Col key={post['id']} sm={4}>
<Link 
href={Links}
className="pr-text text-decoration-none">
<Card>
      <Card.Img variant="top" src={post['featured_img_src']}/>
      <Card.Body className="text-start" style={{height: 6 +'em'}}>
        <Card.Title>{post['title']}</Card.Title>
      </Card.Body>
      <Card.Body  className="text-start">
        <Card.Link >Read More</Card.Link>
      </Card.Body>
    </Card>
</Link> 
    </Col>
  )
})}
</Row>
</Container>
</Container>


<Footer/>
</>


  );
}

export default LinksExample;