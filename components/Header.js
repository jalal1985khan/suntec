import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <>


<div className="wbg-menu">
   <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
         <img src="/images/suntec-logo.png"/>
         
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
                     <div className="col-sm-8">
                     <h2 className="fs-5">Products Overview</h2>
                     <p>Accelerate innovation and customer centricity with SunTec.</p>
                     <hr className="border"/>
                       <div className="row">
                        <div className="col-sm-6">
                        <ul className="nav-ul">
                        <li className="mb-4">
      <h6>Enterprise Product Management</h6>
      <small>Establish customer choice at the heart of your enterprise and enable right selling.</small>
      </li>
      <li className="mb-4">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small>
      </li>
      <li className="mb-4">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small>
      </li>
      <li className="mb-4">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small>
      </li>
   </ul>

                        </div>
                        <div className="col-sm-6">

      <ul className="nav-ul">
      <li className="mb-4">
      <h6>Enterprise Product Management</h6>
      <small className="m_text">Establish customer choice at the heart of your enterprise and enable right selling.</small>
      </li>
      <li className="mb-4">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small>
      </li>
      <li className="mb-4">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small>
      </li>
      <li className="mb-4">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small>
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


               <li className="nav-item dropdown ktm-mega-menu">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Industries</a>
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
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small>
      </li>
   </ul>

                        </div>
                        <div className="col-sm-6">

      <ul className="nav-ul">
      <li className="mb-4">
      <h6>Enterprise Product Management</h6>
      <small className="m_text">Establish customer choice at the heart of your enterprise and enable right selling.</small>
      </li>
      <li className="mb-4">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small>
      </li>
      <li className="mb-4">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small>
      </li>
      <li className="mb-4">
      <h6>Deal Management</h6>
      <small>Automate end-to-end deal management and provide flexibility to create customer specific deals.</small>
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



               
               
               <li className="nav-item dropdown ktm-mega-menu">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Mega Menu  </a>
                  
                  <div className="dropdown-menu mega-menu p-3">
                     <span>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     </span>
                  </div>
               </li>
               
               
               <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Treeview menu  </a>
                  <ul className="dropdown-menu">
                     <li><a className="dropdown-item" href="#"> Dropdown item 1 </a></li>
                     <li>
                        <a className="dropdown-item" href="#"> Dropdown item 2 <strong className="float-end">»</strong>  </a>
                        
                        
                        <ul className="submenu dropdown-menu">
                           <li><a className="dropdown-item" href="#">Submenu item 1</a></li>
                           <li>
                              <a className="dropdown-item" href="#">Submenu item 3 <strong className="float-end">»</strong> </a>
                              
                              
                              <ul className="submenu dropdown-menu">
                                 <li><a className="dropdown-item" href="#">Multi level 1</a></li>
                                 <li><a className="dropdown-item" href="#">Multi level 2</a></li>
                              </ul>
                           </li>
                           <li><a className="dropdown-item" href="#">Submenu item 4</a></li>
                        </ul>
                     </li>
                  </ul>
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