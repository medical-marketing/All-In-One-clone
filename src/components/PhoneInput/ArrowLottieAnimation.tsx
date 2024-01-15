"use client";
import Lottie from "lottie-react";
import animationData from "./animation.json";

//@ts-ignore
const ArrowLottieAnimation = ({ color }) => {
  //@ts-ignore
  function updateAnimationColor(animationJSON, colorHex) {
    // Convert hex to rgba
    function hexToRgba(hex) {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return [r / 255, g / 255, b / 255, 1];
    }

    const rgbaColor = hexToRgba(colorHex);

    // Update color for each layer
    if (animationJSON.layers) {
      animationJSON.layers.forEach((layer) => {
        if (layer.shapes) {
          layer.shapes.forEach((shape) => {
            if (shape.it) {
              shape.it.forEach((item) => {
                if (item.ty === "st" && item.c) {
                  // Update stroke color
                  item.c.k = rgbaColor;
                }
              });
            }
          });
        }
      });
    }

    return animationJSON;
  }

  const updatedAnimation = updateAnimationColor(animationData, color); // Red color

  return (
    <Lottie
      animationData={updatedAnimation}
      className="flex justify-center items-center"
      loop={true}
    />
  );
};

export default ArrowLottieAnimation;
