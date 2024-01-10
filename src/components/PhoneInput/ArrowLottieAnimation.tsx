"use client";
import Lottie from "lottie-react";
import animationData from "./animation.json";

const ArrowLottieAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      className="flex justify-center items-center"
      loop={true}
    />
  );
};

export default ArrowLottieAnimation;
