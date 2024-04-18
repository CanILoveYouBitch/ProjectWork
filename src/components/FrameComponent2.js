import { useMemo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({ link550WATT200xjpg, save65, propAlignSelf }) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="link-550watt-200xjpg-parent" style={frameDivStyle}>
      <img
        className="link-550watt-200xjpg"
        loading="lazy"
        alt=""
        src={link550WATT200xjpg}
      />
      <div className="spanproduct-label2">
        <div className="save-65">{save65}</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
