import React from "react";
import { Composition } from "remotion";

import { Poppin, poppinSchema } from "./Poppin";

import { grunge, grungeSchema } from "./grunge";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={"Demo2"}
        component={Poppin}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
        schema={poppinSchema}
        defaultProps={{
          text: "Mon texte animé",
          fontSize: "150px",
          color1: "#000000",
          color2: "#ffffff",
          color3: "#ff0000",
        }}
      />
      <Composition
        id={"Demo3"}
        component={grunge}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
        schema={grungeSchema}
        defaultProps={{
          text: "Mon texte",
          fontSize: "150px",
          color1: "#e19948",
        }}
      />
    </>
  );
};
