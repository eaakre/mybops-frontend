import "./SongCard.css";

function SongCard({ item, index, onCardClick }) {
  return (
    <div className="songcard">
      <a
        href={item.external_urls.spotify}
        target="_blank"
        rel="noreferrer"
        className="songcard__link"
      >
        <div className="songcard__info">
          <img
            src={item.album.images[0].url}
            alt={item.name}
            onClick={() => onCardClick(item)}
            className="songcard__image"
          />
          <div>
            <p className="songcard__title">
              {index}. {item.name}
            </p>
            <p className="songcard__subtitle">{item.artists[0].name}</p>
          </div>
        </div>
        <p className="songcard__album">{item.album.name}</p>
      </a>
    </div>
  );
}

export default SongCard;
