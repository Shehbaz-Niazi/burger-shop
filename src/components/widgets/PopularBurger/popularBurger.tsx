"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerImage1 from "../../../../public/images/b1.png";
import BurgerImage2 from "../../../../public/images/b2.png";
import BurgerImage3 from "../../../../public/images/b3.png";
import BurgerImage4 from "../../../../public/images/b4.png";
import BurgerImage5 from "../../../../public/images/b5.png";
import PopularBurgerCardCom from "@/components/shared/PopularBurgerCardCom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const PopularBurger = () => {
  return (
    <div className="mt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Pouplar <span className="text-red-600">Burgers</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          itemClass="item"
          arrows={true}
          showDots={false}
          responsive={responsive}
        >
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <PopularBurgerCardCom
              title="Beef Burger"
              image={BurgerImage1}
              review="6"
              price="$10"
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <PopularBurgerCardCom
              title="Classic Stack"
              image={BurgerImage2}
              review="16"
              price="$21"
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <PopularBurgerCardCom
              title="The Flavor King"
              image={BurgerImage3}
              review="42"
              price="$38"
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <PopularBurgerCardCom
              title="Black Tie Burger"
              image={BurgerImage4}
              review="43"
              price="$32"
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <PopularBurgerCardCom
              title="Veggie Supreme"
              image={BurgerImage5}
              review="66"
              price="$31"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;
