import "./Main.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import Card from "../Card/Card";
import SongCard from "../SongCard/SongCard";
import Profile from "../Profile/Profile";
import { spotifyArtists, spotifyTracks } from "../../utils/constants";
import { useState } from "react";

const bands = spotifyArtists.items;
const tracks = spotifyTracks.items;
console.log(tracks[0]);

function Main({ onCardClick, onConfirmModal, activeTab }) {
  const [time, setTime] = useState("short");

  const handleShort = () => {
    setTime("short");
  };

  const handleMedium = () => {
    setTime("medium");
  };

  const handleLong = () => {
    setTime("long");
  };
  return (
    <main className="main">
      {/* <ToggleButton /> */}
      <h1 className="main__title">My {activeTab}</h1>
      {activeTab !== "profile" && (
        <div className="main__toggle">
          <button
            onClick={handleShort}
            className={
              time === "short"
                ? "main__toggle-button active"
                : "main__toggle-button"
            }
          >
            4 Weeks
          </button>
          <button
            onClick={handleMedium}
            className={
              time === "medium"
                ? "main__toggle-button active"
                : "main__toggle-button"
            }
          >
            6 Months
          </button>
          <button
            onClick={handleLong}
            className={
              time === "long"
                ? "main__toggle-button active"
                : "main__toggle-button"
            }
          >
            1 Year
          </button>
        </div>
      )}
      {activeTab === "artists" && (
        <section className="main__wrapper">
          {bands.map((band) => (
            <Card item={band} key={band.id} onCardClick={onCardClick} />
          ))}
        </section>
      )}
      {activeTab === "songs" && (
        <section className="main__wrapper tracks">
          {tracks.map((track) => (
            <SongCard item={track} key={track.id} onCardClick={onCardClick} />
          ))}
        </section>
      )}
      {activeTab === "profile" && (
        <section className="main__wrapper">
          <Profile onConfirmModal={onConfirmModal} />
        </section>
      )}
    </main>
  );
}

export default Main;
