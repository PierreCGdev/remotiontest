import { Player } from "@remotion/player";

import { MyComposition } from "../../remotion/Composition";

const VideoPlayer: React.FC = () => {
  return (
    <Player
      component={MyComposition}
      durationInFrames={60}
      fps={30}
      controls
      compositionWidth={1280}
      compositionHeight={720}
    />
  );
};

export default VideoPlayer;
