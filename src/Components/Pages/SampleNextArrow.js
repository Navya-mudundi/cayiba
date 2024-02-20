import React from "react";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        // display: "block",
        // background: "green",
        // width: "2vw",
        // height: "2vw",
        // background: "#333",
        borderRadius: "50%",
         display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      Next
    </div>
  );
};

export default SampleNextArrow;
