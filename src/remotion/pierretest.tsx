import {
  AbsoluteFill,
  Img,
  Video,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Easing,
  Sequence,

} from "remotion";

import {
  interpolateStyles,
  makeTransform,
  translateY,
} from "@remotion/animation-utils";

import { measureText } from "@remotion/layout-utils";


const Circle = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const scaleValue = interpolate(frame, [0, 15, 20], [1, 0.04, 0], {
    easing: Easing.bezier(0.17, 0.17, 0, 1),
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });



  const positionXValue = interpolate(frame, [0, 6, 20], [50,  700, 0], { // plusieurs clés et value
    easing: Easing.bezier(0.17, 0.17, 0.66, 1),
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const positionYValue = interpolate(frame, [0, 5, 10, 20], [0, -150,  600, 0], { // plusieurs clés et value
    easing: Easing.bezier(0.17, 0.17, 0.66, 1),
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
   
  const raduisCircle = 1600

  return (
    <div
      style={
        {
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: `-${raduisCircle/2}px`,
        marginTop: `-${raduisCircle/2}px`,

        transformOrigin: "center", // a regarder  https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin recherche css first
        width: `${raduisCircle}px`,
        height: `${raduisCircle}px`,
        transform: `scale(${scaleValue}) translateX(${positionXValue}px) translateY(${positionYValue}px)`,
        background: "white",
        borderRadius: 1500,
        backgroundColor: "black",
      }}
    >
    </div>
  );
};

const Txt = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const translateOpacity = interpolate(frame, [15, 20], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const translatePositionY = interpolate(frame, [15, 28,40], [0, -100, 0], {
    easing: Easing.bezier(0.17, 0.17, 0.66, 1),
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const txtW = 500;
  const txtH = 200;

 

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: "50%",
        marginLeft: `-${txtW/2}px`,
        transform: `translateY(${translatePositionY}px)`,
        width: `${txtW}px`,
        opacity: `${translateOpacity}`,
        transformOrigin: "center",
        textAlign: "center",
        padding: "20px",
        flex: 1,
        background: "rgba(0, 0, 0, .5)",
        color: "#ffffff",
        fontFamily: "sans-serif",
        fontWeight: "medium",
        borderRadius: "20px",
      }}
    >
      <span> Votre Texte </span>

    </div>
   
  );
};

const Txt2 = () => {
  const frame = useCurrentFrame();
  
  const myTxt = "votre test";



  const splitText = () => {
    const txtSplit = myTxt.split("").map((char,index) => {
      const translatePositionY = interpolate(frame, [0+index,20+index], [0, 200], {
        easing: Easing.bezier(0.17, 0.17, 0.66, 1),
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      });
      return <span   
        key={index}
        style={{
        color: "red",
        fontFamily: "sans-serif",
        fontWeight: "medium",
        fontSize: "30px",
        position: "absolute",

        transform:`translateX(${translatePositionY}px)`,
  
        }}>{char}</span>
    }
  )
  return <span> {txtSplit }</span>
  }



  return (
    <div style={{
      position: "absolute",
      left: "50%",
      top: "50%",
    }}>
      {splitText()}

    </div>
   
  );
}

const Circle2 = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const scaleValue = interpolate(frame, [0, 16], [1, 0.04], {
    easing: Easing.bezier(0.17, 0.17, 0, 1),
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const positionXValue = interpolate(frame, [0, 20], [150,  0], {
    easing: Easing.bezier(0.17, 0.17, 0.66, 1),
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  

  return (
    <div
      style={{
        position: "absolute",
        left: "0%",
        top: "-45%",
        alignItems: "center",
        justifyContent: "center",
        width: "1360px",
        height: "1360px",
        transform: `scale(${scaleValue}) translateX(${positionXValue}px)`,
        background: "white",
        borderRadius: 1500,
        backgroundColor: "black",
      }}
    >
    </div>
  );
};


export const CompTest = () => {
  return (
    <AbsoluteFill>
      <Sequence><Circle/></Sequence>
      <Sequence><Txt2/></Sequence>

      <Img src={staticFile("shopping_1920_1080.png")} />
      <Txt/>

    </AbsoluteFill>
    
  );
};
