import "./Main.css";
import Card from "../Card/Card";
import SongCard from "../SongCard/SongCard";

function Main({
  onCardClick,
  onCardLike,
  topTracks,
  topArtists,
  activeTab,
  handleTime,
  time,
}) {
  // When connected to Spotify API, change call for songs/artists based on "time"
  const handleShort = () => {
    handleTime("short");
  };

  const handleMedium = () => {
    handleTime("medium");
  };

  const handleLong = () => {
    handleTime("long");
  };

  return (
    <main className="main">
      <h1 className="main__title">My top {activeTab}</h1>
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
            Last 4 Weeks
          </button>
          <button
            onClick={handleMedium}
            className={
              time === "medium"
                ? "main__toggle-button active"
                : "main__toggle-button"
            }
          >
            Last 6 Months
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
          {topArtists.map((band, index) => (
            <Card
              item={band}
              key={band.id}
              index={index + 1}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
            />
          ))}
        </section>
      )}
      {activeTab === "tracks" && (
        <section className="main__wrapper tracks">
          {topTracks.map((track, index) => (
            <SongCard
              item={track}
              key={track.id}
              index={index + 1}
              onCardClick={onCardClick}
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default Main;
