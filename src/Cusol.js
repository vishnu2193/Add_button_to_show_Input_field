import React, { Component } from "react";
import Slider from "react-slick";
import "./Cusol.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class Cusol extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyLoad: true,
      centerMode: true,
      adaptiveHeight: true,
      fade: true,
      arrows: true,
      autoplaySpeed: 3000,
      className: "slides"
    };

    const settings1 = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      //autoplay: true,
      lazyLoad: true,
      centerMode: true,
      adaptiveHeight: true,
      //fade: true,
      //arrows: true,
      autoplaySpeed: 3000,

      className: "slides"
    };

    return (
      <div>
        <h2>Single</h2>
        <Slider {...settings}>
          <div>
            <img
              src="http://static.facegfx.com/2012/beautiful-banner-background-05-hd-pictures_959136987.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/originals/30/d0/94/30d09446755fc2c066dc146f8b05c897.png"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://swall.teahub.io/photos/small/15-156996_background-flex-banner-design.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://c0.wallpaperflare.com/preview/931/255/701/banner-digital-graphics-lion.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/09/35/05562e22f650e30.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
        </Slider>
        <h2>Multiple</h2>

        <Slider {...settings1}>
          <div>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/09/35/05562e22f650e30.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://c0.wallpaperflare.com/preview/931/255/701/banner-digital-graphics-lion.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/09/35/05562e22f650e30.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/originals/30/d0/94/30d09446755fc2c066dc146f8b05c897.png"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/09/35/05562e22f650e30.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="http://static.facegfx.com/2012/beautiful-banner-background-05-hd-pictures_959136987.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/09/35/05562e22f650e30.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://png.pngtree.com/background/20210706/original/pngtree-dynamic-red-background-picture-image_149101.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Cusol;
