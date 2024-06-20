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
      <div className="flex justify-center flex-col items-center mt-12">
        <h1 className="text-white font-reggae">{artist.name}</h1>
        <div className="w-2/4 ">
          <img
            src={artist.images[0].url}
            alt={artist.name}
            className="h-full w-full rounded-3xl"
          />
        </div>
        <p>{artist._embedded.venues[0].name}</p>
        <p>{artist.dates.start.localDate}</p>
      </div>
    </>
  );
}
