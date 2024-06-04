import {
  AbsoluteFill,
  Video,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const Frame = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const scaleValue = interpolate(frame, [20, durationInFrames - 10], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "calc(50% - 50px)",
        top: "50%",
        width: "100px",
        textAlign: "center",
        padding: "20px 0",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${scaleValue})`,
        background: "rgba(0, 0, 0, .5)",
        color: "#ffffff",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        borderRadius: 20,
      }}
    >
      <span>Frame {frame}</span>
    </div>
  );
};

const Fps = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const translatePosition = interpolate(frame, [0, 30], [-100, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        bottom: "10%",
        width: "100px",
        textAlign: "center",
        padding: "20px 0",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        transform: `translateX(${translatePosition}px)`,
        background: "rgba(0, 0, 0, .5)",
        color: "#ffffff",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        borderRadius: "0 20px 20px 0",
      }}
    >
      <span>FPS {fps}</span>
    </div>
  );
};

export const MyComposition = () => {
  return (
    <AbsoluteFill>
      <Frame />
      <Fps />
      <Video src={staticFile("video.mp4")} />
    </AbsoluteFill>
  );
};
