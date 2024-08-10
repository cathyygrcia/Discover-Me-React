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
        <h1 className="text-white font-reggae text-3xl mb-10">{artist.name}</h1>
        <div className="w-5/12 ">
          <img
            src={artist.images[0].url}
            alt={artist.name}
            className="h-full w-full rounded-3xl"
          />
          <div className="text-white text-center text-3xl mt-8">
            <p className="font-reggae">
              Genre: {artist.classifications[0].genre.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
