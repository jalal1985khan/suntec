import {Container,Row, Col} from 'react-bootstrap';
import Image from 'next/image';



var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  };

function LinksExample() {


  return (

<Container className="r_content text-center p-3 mt-4" fluid>
    <p className="fs-4 txt-main">Over 150 Clients in 45+ Countries Rely on SunTec</p>
<OwlCarousel
          // className="owl-theme"
          loop={true}
          autoplay={true}
          margin={10}
          {...options}
        >
          <div class="item bg-review">
            <div className="ts-bg">
            <img src="/images/anu_testimonials.png" className="t_img"/>
            </div>
          <div className="t_bg">
           <p className="fs-4">Aruna Kunnath</p>
           <p className="txt-main">Group Manager - Quality</p>
           <p >Here at SunTec, we have a key role to play, and our voice is heard.”</p>
          </div></div>
          <div class="item bg-review">
            <div className="ts-bg">
            <img src="/images/anu_testimonials.png" className="t_img"/>
            </div>
          <div className="t_bg">
           <p className="fs-4">Aruna Kunnath</p>
           <p className="txt-main">Group Manager - Quality</p>
           <p >Here at SunTec, we have a key role to play, and our voice is heard.”</p>
          </div></div>
          <div class="item bg-review">
            <div className="ts-bg">
            <img src="/images/anu_testimonials.png" className="t_img"/>
            </div>
          <div className="t_bg">
           <p className="fs-4">Aruna Kunnath</p>
           <p className="txt-main">Group Manager - Quality</p>
           <p >Here at SunTec, we have a key role to play, and our voice is heard.”</p>
          </div></div>
        </OwlCarousel>


</Container>

  );
}

export default LinksExample;