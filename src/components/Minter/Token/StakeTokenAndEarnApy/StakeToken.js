import React from "react";
import Slider from "react-slick";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import arrow_left from '../../../../images/Icons/arrow_left.svg'

import { bitcoin } from "../../../../images/images";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./StakeToken.module.css";

const StakeToken = () => {
  const tokens = [
    {
      image: bitcoin,
      title: "<b>Stake</b> TOKENS AND <p>Earn APY</p>",
      tagline: "IN hinox staking Platform",
      text: "+ access to Incubator Projects on Hinox",
    },
    // {
    //   image: bitcoin,
    //   title: "<b>Stake</b> tokens and <p>EarnAPY</p>",
    //   tagline: "IN hinox staking Platform",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    // },
    // {
    //   image: bitcoin,
    //   title: "<b>Stake</b> tokens and <p>EarnAPY</p>",
    //   tagline: "IN hinox staking Platform",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    // },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className={`${styles.mySlide} `}>
      <div className={styles.arrow_left}>
        <img src={arrow_left} alt="Arrow_left" />
      </div>
      {" "}
      <Slider {...settings}>
        {tokens.map((el, i) => (
          <div className={styles.cardContainer} key={i}>
            <div className={styles.card}>
              <div className={styles.textContainer}>
                <h5
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: el.title }}
                ></h5>
                <p className={styles.tagline}>IN hinox staking Platform</p>
                <p className={styles.text}>{el.text}</p>
              </div>
              <img src={el.image} alt="#" className={styles.image} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StakeToken;

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`${styles.button} ${styles.swiperButtonPrev} `}
      onClick={onClick}
    >
      <HiOutlineArrowLeft />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`${styles.button} ${styles.swiperButtonNext} `}
      onClick={onClick}
    >
      <HiOutlineArrowRight style={{ marginTop: "2px" }} />
    </button>
  );
};
