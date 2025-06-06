import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  Easing,
  Sequence,
} from "remotion";

import { Dimensions, measureText } from "@remotion/layout-utils";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const grungeSchema = z.object({
  text: z.string(),
  fontSize: z.string(), // ou z.number() si tu préfères
  color1: zColor(),
});

export type GrungeProps = z.infer<typeof grungeSchema>;

export const grunge: React.FC<GrungeProps> = ({ text, fontSize, color1 }) => {
  // const text = "CHIFFRE"; //souci espace
  const fontFamily = "Arial";
  const fontWeight = "500";
  // const fontSize = "200px";
  // const color1 = "#70F886";
  const blend = "saturation";

  const Circle = () => {
    const frame = useCurrentFrame();
    const translateScale = interpolate(frame, [0, 15], [1, 1.5], {
      easing: Easing.bezier(0.33, 0.0, 0.45, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });
    const translateScale2 = interpolate(frame, [0, 15], [1, 1.25], {
      easing: Easing.bezier(0.33, 0.0, 0.45, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });
    const translateOpactity = interpolate(frame, [10, 15], [1, 0], {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",

            transformOrigin: "center",
            left: "0%",
            top: "0%",
            maskImage: `url(${staticFile("circle.png")})`,
            maskSize: "100%",
            maskRepeat: "no-repeat",
            maskMode: "luminance",
            transform: `scale(${translateScale}) `,
            backgroundColor: `${color1}`,
            opacity: `${translateOpactity}`,
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",

            transformOrigin: "center",
            left: "-5%",
            top: "-5%",
            maskImage: `url(${staticFile("circle.png")})`,
            maskSize: "100%",
            maskRepeat: "no-repeat",
            maskMode: "luminance",
            transform: `scale(${translateScale2}) `,
            backgroundColor: `${color1}`,
            opacity: `${translateOpactity}`,
            mixBlendMode: `${blend}`,
          }}
        ></div>
      </div>
    );
  };

  const Txt1 = () => {
    const frame = useCurrentFrame();

    const translateTracking = interpolate(frame, [0, 15], [150, 0], {
      easing: Easing.bezier(0.33, 0.0, 0.45, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const translateScale = interpolate(frame, [0, 15], [1.5, 1], {
      easing: Easing.bezier(0.33, 0.0, 0.45, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const translateDsiplacement = interpolate(frame, [0, 15], [100, 0], {
      easing: Easing.bezier(0.33, 0.0, 0.45, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const letterSpacing = `${translateTracking}px`;

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

    const endSize = () => {
      const letterSpacing = "0px";
      return measureText({
        text,
        fontFamily,
        fontWeight,
        fontSize,
        letterSpacing,
      });
    };

    return (
      <div>
        <svg viewBox="0 0 1280 720">
          <filter
            id="myFilter"
            fill="none"
            filterUnits="userSpaceOnUse"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feImage
              href={staticFile("number_displacement.png")}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="MAP_RESULT"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="MAP_RESULT"
              scale={translateDsiplacement}
              xChannelSelector="R"
              yChannelSelector="A"
              result="DISPLACED_TEXT_RESULT"
            />

            <feMerge>
              {/* <feMergeNode in="MAP_RESULT"></feMergeNode>  */}
              <feMergeNode in2="DISPLACED_TEXT_RESULT"></feMergeNode>
            </feMerge>
          </filter>
        </svg>
        <div
          style={{
            width: "100%",
            height: "100%",

            position: "absolute",
            filter: "url(#myFilter)",
            transformOrigin: "center",
            left: "0%",
            top: "0%",

            zIndex: 5,
          }}
        >
          <div
            style={{
              position: "absolute",
              transformOrigin: "center",
              left: "50%",
              top: "50%",
              marginLeft: `-${txtSize.width / 2}px`,
              marginTop: `-${txtSize.height / 2}px`,
            }}
          >
            <span
              style={{
                color: `${color1}`,
                textAlign: "center",
                display: "inline-block",
                letterSpacing: `${translateTracking}px`,
                fontFamily: `${fontFamily}`,
                fontWeight: `${fontWeight}`,
                fontSize: `${fontSize}`,
                transform: `scale(${translateScale}) `,
              }}
            >
              {text}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const Txt2 = () => {
    const frame = useCurrentFrame();

    const translateTracking = interpolate(frame, [0, 17], [125, 0], {
      easing: Easing.bezier(0.33, 0.0, 0.45, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const translateScale = interpolate(frame, [0, 17], [1.25, 1], {
      easing: Easing.bezier(0.33, 0.0, 0.45, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const translateDsiplacement = interpolate(frame, [0, 19], [-150, 0], {
      easing: Easing.bezier(0.33, 0.0, 0.45, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const letterSpacing = `${translateTracking}px`;

    const txtSize = measureText({
      text,
      fontFamily,
      fontWeight,
      fontSize,
      letterSpacing,
    });

    return (
      <div style={{}}>
        <svg viewBox="0 0 1280 360">
          <filter
            id="myFilter2"
            fill="none"
            filterUnits="userSpaceOnUse"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feImage
              href={staticFile("number_displacement.png")}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="MAP_RESULT"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="MAP_RESULT"
              scale={translateDsiplacement}
              xChannelSelector="R"
              yChannelSelector="A"
              result="DISPLACED_TEXT_RESULT"
            />

            <feMerge>
              {/* <feMergeNode in="MAP_RESULT"></feMergeNode> */}
              <feMergeNode in2="DISPLACED_TEXT_RESULT"></feMergeNode>
            </feMerge>
          </filter>
        </svg>
        <div
          style={{
            width: "100%",
            height: "100%",

            position: "absolute",

            transformOrigin: "center",
            left: "0%",
            top: "0%",
            zIndex: 4,
            mixBlendMode: `${blend}`,
          }}
        >
          <div
            style={{
              position: "absolute",
              transformOrigin: "center",
              filter: "url(#myFilter2)",
              left: "50%",
              top: "50%",
              marginLeft: `-${txtSize.width / 2}px`,
              marginTop: `-${txtSize.height / 2}px`,
            }}
          >
            <span
              style={{
                color: `${color1}`,
                textAlign: "center",
                display: "inline-block",
                letterSpacing: `${translateTracking}px`,
                fontFamily: `${fontFamily}`,
                fontWeight: `${fontWeight}`,
                fontSize: `${fontSize}`,
                transform: `scale(${translateScale}) `,
              }}
            >
              {text}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const Txt3 = () => {
    const frame = useCurrentFrame();

    const translateTracking = interpolate(frame, [0, 17], [125, 0], {
      easing: Easing.bezier(0.33, 0.0, 0.45, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const translateScale = interpolate(frame, [0, 17], [1.25, 1], {
      easing: Easing.bezier(0.33, 0.0, 0.45, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const translateDsiplacement = interpolate(frame, [0, 19], [90, 0], {
      easing: Easing.bezier(0.33, 0.0, 0.45, 1.0),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });

    const letterSpacing = `${translateTracking}px`;

    const txtSize = measureText({
      text,
      fontFamily,
      fontWeight,
      fontSize,
      letterSpacing,
    });

    return (
      <div style={{}}>
        <svg viewBox="0 0 1280 360">
          <filter
            id="myFilter3"
            fill="none"
            filterUnits="userSpaceOnUse"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feImage
              href={staticFile("number_displacement.png")}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="MAP_RESULT"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="MAP_RESULT"
              scale={translateDsiplacement}
              xChannelSelector="R"
              yChannelSelector="A"
              result="DISPLACED_TEXT_RESULT"
            />

            <feMerge>
              {/* <feMergeNode in="MAP_RESULT"></feMergeNode> */}
              <feMergeNode in2="DISPLACED_TEXT_RESULT"></feMergeNode>
            </feMerge>
          </filter>
        </svg>
        <div
          style={{
            width: "100%",
            height: "100%",

            position: "absolute",

            transformOrigin: "center",
            left: "0%",
            top: "0%",
            zIndex: 4,
            mixBlendMode: `${blend}`,
          }}
        >
          <div
            style={{
              position: "absolute",
              transformOrigin: "center",
              filter: "url(#myFilter3)",
              left: "50%",
              top: "50%",
              marginLeft: `-${txtSize.width / 2}px`,
              marginTop: `-${txtSize.height / 2}px`,
            }}
          >
            <span
              style={{
                color: `${color1}`,
                textAlign: "center",
                display: "inline-block",
                letterSpacing: `${translateTracking}px`,
                fontFamily: `${fontFamily}`,
                fontWeight: `${fontWeight}`,
                fontSize: `${fontSize}`,
                transform: `scale(${translateScale}) `,
              }}
            >
              {text}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AbsoluteFill>
      <Sequence>
        <Txt1 />
      </Sequence>
      <Txt2 />
      <Txt3 />

      <Sequence>
        <Circle />

        <Img src={staticFile("shopping_1920_1080.png")} />
      </Sequence>
    </AbsoluteFill>
  );
};
