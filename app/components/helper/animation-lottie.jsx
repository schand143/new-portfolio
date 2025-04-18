"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  if (!animationPath) {
    return null; // Do not render if animationPath is not provided
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%', // Use provided width or default to 95%
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;