import React from "react";
import { Composition } from "remotion";

import { MyComposition } from "./Composition";

import { CompTest } from "./pierretest";

import { grunge } from "./grunge";


export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={"Demo"}
        component={MyComposition}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
            <Composition
        id={"Demo2"}
        component={CompTest}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
                  <Composition
        id={"Demo3"}
        component={grunge}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
