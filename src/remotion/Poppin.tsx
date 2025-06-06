import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Easing,
  Sequence,
} from "remotion";
import { measureText } from "@remotion/layout-utils";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

// Le schéma des props pour Remotion Studio
export const poppinSchema = z.object({
  text: z.string(),
  fontSize: z.string(), // ou z.number() si tu préfères
  color1: zColor(),
  color2: zColor(),
  color3: zColor(),
});

export type PoppinProps = z.infer<typeof poppinSchema>;

export const Poppin: React.FC<PoppinProps> = ({
  text,
  fontSize,
  color1,
  color2,
  color3,
}) => {
  //   const text = "Votre texte";
  const fontFamily = "Arial";
  const fontWeight = "700";
  //   const fontSize = "150px";
  const letterSpacing = "0px";

  const txtSize = measureText({
    text,
    fontFamily,
    fontWeight,
    fontSize,
    letterSpacing,
  });

  const spaceSize = () => {
    const text = " ";
    return measureText({
      text,
      fontFamily,
      fontWeight,
      fontSize,
      letterSpacing,
    });
  };

  //   const color1 = "black";
  //   const color2 = "white";
  //   const color3 = "red";

  const Circle = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const scaleValue = interpolate(frame, [0, 15, 20], [1, 0.04, 0], {
      easing: Easing.bezier(0.17, 0.17, 0.0, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const positionXValue = interpolate(frame, [0, 5, 19], [50, 1200, 0], {
      // plusieurs clés et value
      easing: Easing.bezier(0.17, 0.17, 0.66, 1),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });
    const positionYValue = interpolate(
      frame,
      [0, 5, 10, 19],
      [0, -150, 1200, 0],
      {
        // plusieurs clés et value
        easing: Easing.bezier(0.17, 0.17, 0.66, 1),
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      }
    );

    const raduisCircle = 1600;

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transformOrigin: "center",
          marginLeft: `-${raduisCircle / 2}px`,
          marginTop: `-${raduisCircle / 2}px`,

          // a regarder  https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin recherche css first
          width: `${raduisCircle}px`,
          height: `${raduisCircle}px`,
          transform: `scale(${scaleValue}) translateX(${positionXValue}px) translateY(${positionYValue}px)`,
          borderRadius: 1500,
          backgroundColor: `${color1}`,
          zIndex: 5,
        }}
      ></div>
    );
  };

  const Circle2 = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const scaleValue = interpolate(frame, [1, 16, 21], [1, 0.04, 0], {
      easing: Easing.bezier(0.17, 0.17, 0.0, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const positionXValue = interpolate(
      frame,
      [1, 5, 15, 20],
      [300, 400, -800, 0],
      {
        // plusieurs clés et value
        easing: Easing.bezier(0.17, 0.17, 0.7, 1.0),
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      }
    );
    const positionYValue = interpolate(frame, [1, 7, 20], [-50, -1200, -0], {
      // plusieurs clés et value
      easing: Easing.bezier(0.17, 0.17, 0.7, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const raduisCircle = 1600;

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transformOrigin: "center",
          marginLeft: `-${raduisCircle / 2}px`,
          marginTop: `-${raduisCircle / 2}px`,

          // a regarder  https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin recherche css first
          width: `${raduisCircle}px`,
          height: `${raduisCircle}px`,
          transform: `scale(${scaleValue}) translateX(${positionXValue}px) translateY(${positionYValue}px)`,
          borderRadius: 1500,
          backgroundColor: `${color2}`,
          zIndex: 4,
        }}
      ></div>
    );
  };

  const refdelay = () => {
    const frame = useCurrentFrame();
    const myTxt = "votre test";

    const splitText = () => {
      const txtSplit = myTxt.split("").map((char, index) => {
        const duration = 30; // frames
        const textLength = myTxt.split("").length * (duration / 4);
        const delay = (index ?? 0) * (duration / textLength); // no delay for the first frame
        const start = 0 + (index + delay); // start at frame 0 + delay by index

        const translatePositionY = interpolate(
          frame,
          [start, duration <= start ? start + 1 : duration],
          [0, 1],
          {
            easing: Easing.bezier(0.17, 0.17, 0.66, 1),
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          }
        );

        return (
          <span
            key={index}
            style={{
              color: "red",
              textAlign: "center",
              display: "inline-block",
              fontFamily: "sans-serif",
              fontWeight: "medium",
              fontSize: "50px",
              transform: `scale(${translatePositionY})`,
            }}
          >
            {char}
          </span>
        );
      });

      return txtSplit;
    };

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: "rgba(0, 0, 0, .8)",
          padding: "5px 20px",
        }}
      >
        {splitText()}
      </div>
    );
  };

  const Txt3 = () => {
    const frame = useCurrentFrame();

    const splitText = () => {
      const txtSplit = text.split("").map((char, index) => {
        const duration = 30; // frames
        const textLength = text.split("").length * (duration / 4);
        const delay = index + 2; // no delay for the first frame
        const start = 0 + delay; // start at frame 0 + delay by index
        const mid = 8 + delay;
        const end = 16 + delay;
        const translatePositionY = interpolate(
          frame,
          [start, mid],
          [100, -74],
          {
            easing: Easing.bezier(0.19, 0, 0, 0.95),
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          }
        );
        const translatePositionY2 = interpolate(
          frame,
          [mid, end],
          [translatePositionY, 0],
          {
            easing: Easing.bezier(0.3, 0, 0, 1),
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          }
        );

        const translateOpactity = interpolate(frame, [start, end], [0, 1], {
          easing: Easing.bezier(0.3, 0, 0, 1),
          extrapolateRight: "clamp",
          extrapolateLeft: "clamp",
        });

        const translateTracking = interpolate(frame, [start, end], [20, 0], {
          easing: Easing.bezier(0.17, 0.17, 0.67, 1),
          extrapolateRight: "clamp",
          extrapolateLeft: "clamp",
        });

        const translateRotate = interpolate(frame, [start, end], [-18, 0], {
          easing: Easing.bezier(0.17, 0.17, 0.67, 1),
          extrapolateRight: "clamp",
          extrapolateLeft: "clamp",
        });

        return (
          <span
            key={index}
            style={{
              color: `${color3}`,
              textAlign: "center",
              display: "inline-block",
              opacity: `${translateOpactity}`,
              letterSpacing: `${translateTracking}px`,
              fontFamily: `${fontFamily}`,
              fontWeight: `${fontWeight}`,
              fontSize: `${fontSize}`,
              //    opacity: `${translateOpacity}`,
              transform: `translatey(${translatePositionY2}px) rotate(${translateRotate}deg)`,
              marginLeft: char.trim().length === 0 ? spaceSize().width : 0,
            }}
          >
            {char}
          </span>
        );
      });

      return txtSplit;
    };

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          marginLeft: `-${txtSize.width / 2}px`,
          marginTop: `-${txtSize.height / 2}px`,
          zIndex: "2",
        }}
      >
        {splitText()}
      </div>
    );
  };

  const Border2 = () => {
    const marge = 150;
    const raduisCircle = 1600;
    const frame = useCurrentFrame();

    const positionYValue = interpolate(frame, [25, 39], [117, 0], {
      easing: Easing.bezier(0.17, 0.17, 0.67, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const positionXValue = interpolate(frame, [30, 41], [-63, 0], {
      easing: Easing.bezier(0.17, 0.17, 0.67, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const positionXValue2 = interpolate(
      frame,
      [36, 56],
      [(txtSize.width + marge) / 2, 0],
      {
        easing: Easing.bezier(0.33, 0.0, 0.0, 1.0),
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      }
    );

    const scaleValueY = interpolate(
      frame,
      [25, 36],
      [0, txtSize.height + marge],
      {
        easing: Easing.bezier(0.17, 0.17, 0.0, 1),
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      }
    );

    const scaleValueX = interpolate(
      frame,
      [36, 56],
      [(txtSize.width + marge) * 0.1, txtSize.width + marge],
      {
        easing: Easing.bezier(0.33, 0.0, 0.0, 1.0),
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      }
    );

    const Rotate = interpolate(frame, [25, 41], [-90, 0], {
      easing: Easing.bezier(0.17, 0.17, 0.0, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transformOrigin: "center",
          height: `${scaleValueY}px`,
          width: `${scaleValueX}px`,
          marginLeft: `-${txtSize.width / 2 + marge / 2}px`,
          marginTop: `-${txtSize.height / 2 + marge / 2}px`,
          borderRadius: marge,
          transform: `translateY(${positionYValue}px) translateX(${
            positionXValue + positionXValue2
          }px) rotate(${Rotate}deg)`,
          backgroundColor: `${color1}`,
        }}
      ></div>
    );
  };

  const ShapeSquare1 = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
    const Fstart = 17;
    const Fend = 38;
    const rotateCenter = 200;

    const positionXValue = interpolate(frame, [Fstart, Fend], [0, 700], {
      // plusieurs clés et value
      easing: Easing.bezier(0.1, 0.0, 0.0, 0.79),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const scaleValue = interpolate(frame, [Fstart, Fend], [0.5, 1], {
      easing: Easing.bezier(0.1, 0.0, 0.0, -0.24),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const Rotate = interpolate(frame, [Fstart, Fend], [0, 180], {
      easing: Easing.bezier(0.0, 0.0, 0.61, 0.82),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const Opacity = interpolate(frame, [20, 24, 28, 33], [0, 1, 1, 0], {
      // plusieurs clés et value
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const raduisCircle = 70;

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transformOrigin: "center",
          transform: `Rotate(${rotateCenter}deg)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transformOrigin: "center",
            marginLeft: `-${raduisCircle / 2}px`,
            marginTop: `-${raduisCircle / 2}px`,
            opacity: `${Opacity}`,

            // a regarder  https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin recherche css first
            width: `${raduisCircle}px`,
            height: `${raduisCircle}px`,
            transform: `scale(${scaleValue}) translateX(${positionXValue}px) Rotate(${Rotate}deg)`,
            outline: `8px solid ${color1}`,
            zIndex: 5,
          }}
        ></div>
      </div>
    );
  };

  const ShapeRound1 = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
    const delayMarge = 7;
    const Fstart = 17 + delayMarge;
    const Fend = 38 + delayMarge;
    const rotateCenter = 220;
    const raduisCircle = 50;

    const positionXValue = interpolate(frame, [Fstart, Fend], [0, 700], {
      // plusieurs clés et value
      easing: Easing.bezier(0.1, 0.0, 0.0, 0.79),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const scaleValue = interpolate(frame, [Fstart, Fend], [0.5, 1], {
      easing: Easing.bezier(0.1, 0.0, 0.0, -0.24),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const Rotate = interpolate(frame, [Fstart, Fend], [0, 180], {
      easing: Easing.bezier(0.0, 0.0, 0.61, 0.82),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const Opacity = interpolate(
      frame,
      [20 + delayMarge, 24 + delayMarge, 28 + delayMarge, 33 + delayMarge],
      [0, 1, 1, 0],
      {
        // plusieurs clés et value
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      }
    );

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transformOrigin: "center",
          transform: `Rotate(${rotateCenter}deg)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transformOrigin: "center",
            marginLeft: `-${raduisCircle / 2}px`,
            marginTop: `-${raduisCircle / 2}px`,
            opacity: `${Opacity}`,

            // a regarder  https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin recherche css first
            width: `${raduisCircle}px`,
            height: `${raduisCircle}px`,
            transform: `scale(${scaleValue}) translateX(${positionXValue}px) Rotate(${Rotate}deg)`,
            outline: `8px solid ${color2}`,
            borderRadius: 1500,
            zIndex: 5,
          }}
        ></div>
      </div>
    );
  };

  const ShapeRound2 = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
    const delayMarge = 5;
    const Fstart = 17 + delayMarge;
    const Fend = 38 + delayMarge;
    const rotateCenter = -10;
    const raduisCircle = 25;

    const positionXValue = interpolate(frame, [Fstart, Fend], [0, 700], {
      // plusieurs clés et value
      easing: Easing.bezier(0.1, 0.0, 0.0, 0.79),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const scaleValue = interpolate(frame, [Fstart, Fend], [0.5, 1], {
      easing: Easing.bezier(0.1, 0.0, 0.0, -0.24),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const Rotate = interpolate(frame, [Fstart, Fend], [0, 180], {
      easing: Easing.bezier(0.0, 0.0, 0.61, 0.82),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const Opacity = interpolate(
      frame,
      [20 + delayMarge, 24 + delayMarge, 28 + delayMarge, 33 + delayMarge],
      [0, 1, 1, 0],
      {
        // plusieurs clés et value
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      }
    );

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transformOrigin: "center",
          transform: `Rotate(${rotateCenter}deg)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transformOrigin: "center",
            marginLeft: `-${raduisCircle / 2}px`,
            marginTop: `-${raduisCircle / 2}px`,
            opacity: `${Opacity}`,

            // a regarder  https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin recherche css first
            width: `${raduisCircle}px`,
            height: `${raduisCircle}px`,
            transform: `scale(${scaleValue}) translateX(${positionXValue}px) Rotate(${Rotate}deg)`,
            outline: `8px solid ${color2}`,
            borderRadius: 1500,
            zIndex: 5,
          }}
        ></div>
      </div>
    );
  };

  const ShapeRound3 = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
    const delayMarge = 9;
    const Fstart = 17 + delayMarge;
    const Fend = 38 + delayMarge;
    const rotateCenter = -30;
    const raduisCircle = 25;

    const positionXValue = interpolate(frame, [Fstart, Fend], [0, 700], {
      // plusieurs clés et value
      easing: Easing.bezier(0.1, 0.0, 0.0, 0.79),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const scaleValue = interpolate(frame, [Fstart, Fend], [0.5, 1], {
      easing: Easing.bezier(0.1, 0.0, 0.0, -0.24),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const Rotate = interpolate(frame, [Fstart, Fend], [0, 180], {
      easing: Easing.bezier(0.0, 0.0, 0.61, 0.82),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const Opacity = interpolate(
      frame,
      [20 + delayMarge, 24 + delayMarge, 28 + delayMarge, 33 + delayMarge],
      [0, 1, 1, 0],
      {
        // plusieurs clés et value
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      }
    );

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transformOrigin: "center",
          transform: `Rotate(${rotateCenter}deg)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transformOrigin: "center",
            marginLeft: `-${raduisCircle / 2}px`,
            marginTop: `-${raduisCircle / 2}px`,
            opacity: `${Opacity}`,

            // a regarder  https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin recherche css first
            width: `${raduisCircle}px`,
            height: `${raduisCircle}px`,
            transform: `scale(${scaleValue}) translateX(${positionXValue}px) Rotate(${Rotate}deg)`,
            outline: `8px solid ${color3}`,
            backgroundColor: `${color3}`,
            borderRadius: 1500,
            zIndex: 5,
          }}
        ></div>
      </div>
    );
  };

  return (
    <AbsoluteFill>
      <Sequence>
        <Circle />
      </Sequence>
      <Sequence>
        <Circle2 />
      </Sequence>
      <Sequence>
        <Txt3 />
      </Sequence>
      <Sequence>
        <Border2 />
      </Sequence>
      <Sequence>
        <ShapeSquare1 />
        <ShapeRound1 />
        <ShapeRound2 />
        <ShapeRound3 />
      </Sequence>

      <Img src={staticFile("shopping_1920_1080.png")} />
      {/* <Txt /> */}
    </AbsoluteFill>
  );
};
