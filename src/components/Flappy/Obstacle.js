import React from "react";

const Obstacle = ({ topHeight, bottomHeight, left }) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: left,
          width: "60px",
          height: topHeight,
          backgroundColor: "green",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: left,
          width: "60px",
          height: bottomHeight,
          backgroundColor: "green",
        }}
      ></div>
    </>
  );
};

export default Obstacle;
