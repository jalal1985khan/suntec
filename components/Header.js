import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";

function NavScrollExample() {
  return (
    <>


<div className="wbg-menu">
   <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
         <Link href="/"><img src="/images/suntec-logo.png"/></Link>
         
         <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" 
            aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         
         
         <div className="collapse navbar-collapse justify-content-center lh-lg" id="main_nav">
            <ul className="navbar-nav p-3 p-md-0">
               <li className="nav-item dropdown ktm-mega-menu">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Products</a>
                  <div className="dropdown-menu mega-menu p-3">
                     <div className="row">
                     <div className="col-sm-8"><Link href="/" className="text-decoration-none text-black">
                     <h2 className="fs-5">Products Overview</h2>
                     <p>Accelerate innovation and customer centricity with SunTec.</p></Link>
                     <hr className="border"/>
                       <div className="row">
                        <div className="col-sm-6">
                        <ul className="nav-ul">
                        <li className="mb-4">
                        <Link href="/" className="text-decoration-none text-black">                           
      <h6>Enterprise Product Management</h6>
      <small>Establish customer choice at the heart of your enterprise and enable right selling.</small></Link>
      </li>
      <li className="mb-4">
      <Link href="/" className="text-decoration-none text-black">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small></Link>
      </li>
      <li className="mb-4">
      <Link href="/" className="text-decoration-none text-black">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small></Link>
      </li>
      <li className="mb-4">
      <Link href="/" className="text-decoration-none text-black">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small></Link>
      </li>
   </ul>

                        </div>
                        <div className="col-sm-6">

      <ul className="nav-ul">
      <li className="mb-4">
      <Link href="/" className="text-decoration-none text-black">
      <h6>Enterprise Product Management</h6>
      <small className="m_text">Establish customer choice at the heart of your enterprise and enable right selling.</small></Link>
      </li>
      <li className="mb-4">
      <Link href="/" className="text-decoration-none text-black">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small></Link>
      </li>
      <li className="mb-4">
      <Link href="/" className="text-decoration-none text-black">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small></Link>
      </li>
      <li className="mb-4">
      <Link href="/" className="text-decoration-none text-black">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small></Link>
      </li>
   </ul>
                        </div>
                        
                        </div> 

                     </div>
                     <div className="col-sm-4">
                        <p className="fs-5 menu-line">Discover how pricing plays a crucial role when formulating strategies to deliver superior customer experience.</p>
                        <a href="" className="b-btn text-white text-decoration-none ">Get the PoV</a>
                        <img src="/images/product_menu_1.jpeg" className="mt-4"/>
                     </div>
                     </div>
                     
                     
                  </div>
               </li>



{/* Industries */}
               <li className="nav-item dropdown ktm-mega-menu">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Industries</a>
                  <div className="dropdown-menu mega-menu p-3">
                     <div className="row">
                        <div className="col-sm-8">
                           <h2 className="fs-5">Industries Overview</h2>
                           <p>Count on our vertical focused, award-winning products and solutions.</p>
                           <hr className="border"/>
                        <div className="row">
                        <div className="col-sm-6">
                           <ul className="nav-ul">
                              <li className="mb-4">
                                 <h6>Financial Services</h6>
                                 <small>Get the agility and scalability to digitally transform your offerings and reap benefits of product innovation and real-time analytics.</small>
                              </li>
                              <li className="mb-4">
                                 <h6>Travel</h6>
                                 <small>Take your business to the next level and create multiple monetization opportunities on a single platform.</small>
                              </li>
                           </ul>
                        </div>

                        <div className="col-sm-6">
                           <ul className="nav-ul">
                              <li className="mb-4">
                                 <h6>Telecom</h6>
                                 <small className="m_text">Enhance your customer experience management capabilities with the right level of process automation, analytics and product innovation.</small>
                              </li>
                              <li className="mb-4">
                                 <h6>Insurance</h6>
                                 <small>Identify and mitigate revenue leakages, rationalize products, connect with external partner ecosystems and present contextual offers.</small>
                              </li>
                           </ul>
                        </div>
                        
                        </div> 

                     </div>
                     <div className="col-sm-4">
                        <p className="fs-5 menu-line">Discover how pricing plays a crucial role when formulating strategies to deliver superior customer experience.</p>
                        <a href="" className="b-btn text-white text-decoration-none ">Get the PoV</a>
                        <img src="/images/product_menu_1.jpeg" className="mt-4"/>
                     </div>
                     </div>
                  </div>
               </li>
               {/* End Industries */}




               {/* Solutions */}
               <li className="nav-item dropdown ktm-mega-menu">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Solutions</a>
                  <div className="dropdown-menu mega-menu p-3">
                     <div className="row">
                        <div className="col-sm-8">
                        <h2 className="fs-5">Solutions Overview</h2>
                        <p>Build relationships, enhance efficiency, and ensure compliance.</p>
                        <hr className="border"/>
                        <div className="row">
                              <div className="col-sm-6">
                                 <ul className="nav-ul">
                                    <li className="mb-4">
                                       <h6>Personalization</h6>
                                       <small>Tailor your offer to each customer&apos;s specific needs.</small>
                                    </li>
                                    <li className="mb-4">
                                       <h6>Product Rationalization</h6>
                                       <small>Reduce complexity, enable agility, and offer a spectrum of choices to your customers.</small>
                                    </li>
                                    <li className="mb-4">
                                       <h6>Negative Interest Management</h6>
                                       <small>Acquire the capabilities required to rapidly roll out negative interests and evolve with the policy.</small>
                                    </li>
                                    <li className="mb-4">
                                       <h6>e-Invoicing</h6>
                                       <small>Increase transactional efficiency and ensure complete digital invoicing while also staying compliant.</small>
                                    </li>
                                    <li className="mb-4">
                                       <h6>Account Analysis Solution</h6>
                                       <small>Deliver accurate and transparent account analysis statements</small>
                                    </li>
                                 </ul>
                              </div>
                              <div className="col-sm-6">
                                 <ul className="nav-ul">
                                    <li className="mb-4">
                                       <h6>Banking-as-a-Service</h6>
                                       <small className="m_text">Deliver lifecycle experiences through the ecosystem and not with mere products and services.</small>
                                    </li>
                                    <li className="mb-4">
                                       <h6>VAT</h6>
                                       <small>Comply with Value Added Tax (VAT) in the GCC.</small>
                                    </li>
                                    <li className="mb-4">
                                       <h6>Invoicing Solution for Swedish Banks</h6>
                                       <small>Meet your invoicing needs seamlessly and automate end-to-end billing process.</small>
                                    </li>
                                    <li className="mb-4">
                                       <h6>Credit Card Solution</h6>
                                       <small>Personalize your credit cards program to attract and retain customers.</small>
                                    </li>
                                 </ul>
                              </div>
                           </div> 
                        </div>
                        <div className="col-sm-4">
                           <p className="fs-5 menu-line">Discover how pricing plays a crucial role when formulating strategies to deliver superior customer experience.</p>
                           <a href="" className="b-btn text-white text-decoration-none ">Get the PoV</a>
                           <img src="/images/product_menu_1.jpeg" className="mt-4"/>
                        </div>
                     </div>
                  </div>
               </li>
               {/* End Solutions */}


               {/* Platforms */}
               <li className="nav-item dropdown ktm-mega-menu">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Platforms</a>
                  <div className="dropdown-menu mega-menu p-3">
                     <div className="row">
                        <div className="col-sm-8">
                           <h2 className="fs-5">Platforms Overview</h2>
                           <p>Built for customer-centricity, efficiency, and security.</p>
                           <hr className="border"/>
                              <div className="row">
                                 <div className="col-sm-6">
                                    <ul className="nav-ul">
                                       <li className="mb-4">
                                          <h6>Xelerate</h6>
                                          <small>Increase customer lifetime value and manage revenue effectively.</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>SaaS</h6>
                                          <small>Re-invent your business and deliver exceptional customer experience.</small>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="col-sm-6">
                                    <ul className="nav-ul">
                                       <li className="mb-4">
                                          <h6>Cloud</h6>
                                          <small className="m_text">Capitalize on flexibility, improve time to market, and ensure enhanced security.</small>
                                       </li>
                                    </ul>
                                 </div>
                            </div> 
                        </div>
                        <div className="col-sm-4">
                           <p className="fs-5 menu-line">Discover how pricing plays a crucial role when formulating strategies to deliver superior customer experience.</p>
                           <a href="" className="b-btn text-white text-decoration-none ">Get the PoV</a>
                           <img src="/images/product_menu_1.jpeg" className="mt-4"/>
                        </div>
                     </div>
                  </div>
               </li>
               {/* End Platforms */}



               {/* Insights */}
               <li className="nav-item dropdown ktm-mega-menu">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Insights</a>
                  <div className="dropdown-menu mega-menu p-3">
                     <div className="row">
                        <div className="col-sm-8">
                           <h2 className="fs-5">All Resources</h2>
                           <p>Read up on the latest market developments and expert insights.</p>
                           <hr className="border"/>
                              <div className="row">
                                 <div className="col-sm-6">
                                    <ul className="nav-ul">
                                       <li className="mb-4">
                                          <h6>Articles</h6>
                                          <small>Know the multiple facets of key industry topics through our articles.</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>Data Sheets</h6>
                                          <small>We have a lot to say, unravel our product offerings!</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>eBooks</h6>
                                          <small>Get a comprehensive look into the top industry trends.</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>Point of View</h6>
                                          <small>Here’s our take on the industry’s pivotal topics!</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>Videos</h6>
                                          <small>Watch our videos to know how our products and solutions are helping organizations adopt a customer-first strategy.</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>Whitepapers</h6>
                                          <small>Get the newest thought leadership content from our experts.</small>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="col-sm-6">
                                    <ul className="nav-ul">
                                       <li className="mb-4">
                                          <h6>Blogs</h6>
                                          <small className="m_text">Explore our latest blogs.</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>Case Studies</h6>
                                          <small>Discover how our clients across verticals benefited with SunTec.</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>Podcasts</h6>
                                          <small>Listen to our latest podcast episodes on banking, telecom and more.</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>Reports</h6>
                                          <small>Get insights on topics that are transforming enterprises.</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>Webinars</h6>
                                          <small>Get the most valuable insights from industry pioneers and optimize your business.</small>
                                       </li>
                                    </ul>
                                 </div>
                              </div> 
                        </div>
                        <div className="col-sm-4">
                           <p className="fs-5 menu-line">Discover how pricing plays a crucial role when formulating strategies to deliver superior customer experience.</p>
                           <a href="" className="b-btn text-white text-decoration-none ">Get the PoV</a>
                           <img src="/images/product_menu_1.jpeg" className="mt-4"/>
                        </div>
                     </div>
                  </div>
               </li>
               {/* End Insights */}


               {/* About */}
               <li className="nav-item dropdown ktm-mega-menu">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">About</a>
                  <div className="dropdown-menu mega-menu p-3">
                     <div className="row">
                        <div className="col-sm-8">
                           <h2 className="fs-5">Company</h2>
                           <p>SunTec offers a portfolio of award-winning industry-agnostic products and solutions that empower organizations like yours to orchestrate seamless customer experiences, deliver exponential value, and much more!</p>
                           <hr className="border"/>
                              <div className="row">
                                 <div className="col-sm-6">
                                    <ul className="nav-ul">
                                       <li className="mb-4">
                                       <h6>Contact Us</h6>
                                       <small>We’d love to hear from you!</small>
                                       </li>
                                       <li className="mb-4">
                                       <h6>CSR at SunTec</h6>
                                       <small>Know more about our CSR initiatives as we work towards a better tomorrow.</small>
                                       </li>
                                       <li className="mb-4">
                                       <h6>News Room</h6>
                                       <small>Explore our latest media coverage and press releases.</small>
                                       </li>
                                       <li className="mb-4">
                                       <h6>Partner</h6>
                                       <small>Join us to unlock the true potential of our products and solutions for an unparalleled and engaging proposition.</small>
                                       </li>
                                    </ul>

                                 </div>
                                 <div className="col-sm-6">
                                    <ul className="nav-ul">
                                       <li className="mb-4">
                                          <h6>Career</h6>
                                          <small className="m_text">Become a part of a global community of passionate professionals! Come, join us and find the job you love.</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>Events</h6>
                                          <small>Know more about the top industry events we host and are a part of!</small>
                                       </li>
                                       <li className="mb-4">
                                          <h6>HR Initiative</h6>
                                          <small>Get a glimpse of the people who drive our growth!</small>
                                       </li>
                                    </ul>
                                 </div>
                              </div> 
                        </div>
                        <div className="col-sm-4">
                           <p className="fs-5 menu-line">Discover how pricing plays a crucial role when formulating strategies to deliver superior customer experience.</p>
                           <a href="" className="b-btn text-white text-decoration-none ">Get the PoV</a>
                           <img src="/images/product_menu_1.jpeg" className="mt-4"/>
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </nav>
   </div>
</div>



</>

  );
}

export default NavScrollExample;
