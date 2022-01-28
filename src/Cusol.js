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
              src="https://1.bp.blogspot.com/-KeqrDg1T5Yc/YIlOcLTbunI/AAAAAAAAFg8/WMAbOswhdbE5Ee9YbrbKootpvFiDiAhmwCLcBGAsYHQ/s739/images%2B-%2B2021-04-28T172947.263.webp"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://1.bp.blogspot.com/-VUKIpLqQb3Q/YLWq6LlZOeI/AAAAAAAANio/6WfAMRtt5tMQHPmuiTOFOrW9Rp_Q6gizwCLcBGAsYHQ/w1200-h630-p-k-no-nu/Nandamuri%2BBalakrishna%252C%2BBoyapati%2BSrinu%252C%2Bsimha%252C%2Blejend%252C%2Bakhanda%252C%2B%2523BB3%252C039.JPG"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://www.deccanherald.com/sites/dh/files/articleimages/2021/12/09/rrr-1059047-1639036505.png"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://data1.ibtimes.co.in/en/full/711876/maharshi.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://www.filmibeat.com/ph-big/2020/02/uppena_158140102800.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://wallpapercave.com/wp/wp8399794.png"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://www.filmibeat.com/ph-big/2021/01/acharya_16119320897.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://assets.thehansindia.com/h-upload/2022/01/04/1139768-bangarraju-new-poster-sep16-16x.webp"
              alt="Girl in a jacket"
              width="100%"
              height="200"
            />
          </div>
          <div>
            <img
              src="https://www.cinejosh.com/reviewsimg/big/shyam-singha-roy-review_b_2412210135.jpg"
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
