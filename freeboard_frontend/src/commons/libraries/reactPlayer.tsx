import React from "react";
import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const PlayerWrapper = styled.div`
  /* position: relative; */
  padding: 10%;
  .react-player {
    /* position: absolute; */
    top: 0;
    left: 0;
  }
`;
export default function player() {
  return (
    <PlayerWrapper>
      <ReactPlayer
        className="react-player"
        url={"https://www.youtube.com/watch?v=ux3rHgjEs2Q"}
        width="100px"
        height="50px"
        muted={true}
        playing={true}
        loop={true}
        controls={true}
      />
    </PlayerWrapper>
  );
}
