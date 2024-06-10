import {
  AbsoluteFill,
  Img,
  Video,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Easing,

} from "remotion";

import {
  interpolateStyles,
  makeTransform,
  translateY,
} from "@remotion/animation-utils";


const Circle = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  
  const animatedStyles = interpolateStyles(
    15,
    [0, 30, 60],
    [
      {transform: makeTransform([translateY(-50)]) },
      {transform: makeTransform([translateY(0)]) },
      {transform: makeTransform([translateY(50)]) },
    ]
    ,
    
  );


  return (
    <div
      style={{
        ...animatedStyles,
       border: "",
       color : "white",
       top : "50%"
    }
  }
    > <span> Hello </span>
    </div>
  );
};


export const brouillon = () => {
  return (
    <AbsoluteFill>
      <Circle />
      <Img src={staticFile("shopping_1920_1080.png")} />
    </AbsoluteFill>
    
  );
};
