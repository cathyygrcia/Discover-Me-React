import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export function ArtistInfo() {
  const location = useLocation();
  const { artist } = location.state || {};

  if (!artist) {
    return <p>No artist data available.</p>;
  }

  return (
    <>
      <Navbar text="Discover Me" section="Artist Info" />
      <div className="artist-info">
        <h1>{artist.name}</h1>
        <img src={artist.images[0].url} alt={artist.name} />
        <p>{artist._embedded.venues[0].name}</p>
        <p>{artist.dates.start.localDate}</p>
      </div>
    </>
  );
}
