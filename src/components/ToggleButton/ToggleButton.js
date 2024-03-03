import "./ToggleButton.css";
import { useState } from "react";

function ToggleButton() {
  const [toggleState, setToggleState] = useState("artists");

  const handleArtistToggle = () => {
    setToggleState("artists");
  };

  const handleTrackToggle = () => {
    setToggleState("tracks");
  };
  return (
    <div className="toggle">
      <button
        className={
          toggleState === "artists"
            ? "toggle__option toggle__active"
            : "toggle__option"
        }
        onClick={handleArtistToggle}
      >
        Artists
      </button>
      <button
        className={
          toggleState === "tracks"
            ? "toggle__option toggle__active"
            : "toggle__option"
        }
        onClick={handleTrackToggle}
      >
        Tracks
      </button>
    </div>
  );
}

export default ToggleButton;
