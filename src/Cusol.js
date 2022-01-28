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
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/Allu_Arjun_Pushpa_trailer_Dece_1200x768.jpeg?4dTpH4sGreQi4ImOZVMHCUnZQ0Otc81C&size=770:433"
              alt="Girl in a jacket"
              width="100%"
              height="400"
            />
          </div>
          <div>
            <img
              src="https://chitraseema.org/wp-content/uploads/2021/12/32DF686B-D2E4-4400-9006-5B12F135E6F3.jpeg"
              alt="Girl in a jacket"
              width="100%"
              height="400"
            />
          </div>
          <div>
            <img
              src="https://www.cinejosh.com/reviewsimg/big/shyam-singha-roy-review_b_2412210135.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="400"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/M/MV5BZjY2MWYzYjMtYTQ2OS00MDhlLWFhNjYtOGYxYzNmMzJjMzNmXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="400"
            />
          </div>
          <div>
            <img
              src="https://i.ytimg.com/vi/zfdqIB2vToE/maxresdefault.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="400"
            />
          </div>
          <div>
            <img
              src="https://www.thehansindia.com/content/servlet/RDESController?command=rdm.Picture&sessionId=RDWEB1AIKXTDV89KYQWWHPZVMVAGIZLKGW0FO&app=rdes&partner=hansindia&type=7&uid=2112876nnOY78IW0fUCi2irwMxAmGr8vaxkDY2654688"
              alt="Girl in a jacket"
              width="100%"
              height="400"
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
