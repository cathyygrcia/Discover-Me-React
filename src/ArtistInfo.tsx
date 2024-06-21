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
          <p>
            <p>Genre: {artist.classifications[0].genre.name}</p>
          </p>
        </div>
        <div className="flex w-5/12 justify-between mt-12">
          <a
            className="w-5/12 p-4 text-center font-reggae text-2xl bg-black text-white"
            href={artist._embedded.attractions[0].externalLinks.facebook[0].url}
            target="_blank"
          >
            Facebook
          </a>
          <a
            className="w-5/12 p-4 text-center font-reggae text-2xl bg-black text-white"
            href={
              artist._embedded.attractions[0].externalLinks.instagram[0].url
            }
            target="_blank"
          >
            Instagram
          </a>
        </div>
        <div className="flex w-5/12 justify-between mt-12">
          <a
            className="w-5/12 p-4 text-center font-reggae text-2xl bg-black text-white"
            href={artist._embedded.attractions[0].externalLinks.youtube[0].url}
            target="_blank"
          >
            Youtube
          </a>
          <a
            className="w-5/12 p-4 text-center font-reggae text-2xl bg-black text-white"
            href={artist._embedded.attractions[0].externalLinks.spotify[0].url}
            target="_blank"
          >
            Spotify
          </a>
        </div>
      </div>
    </>
  );
}
