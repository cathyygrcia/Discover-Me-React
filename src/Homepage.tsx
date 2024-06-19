import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import "./index.css";
import { ArtistProps } from "./types";
import { Link, Outlet } from "react-router-dom";

export default function Homepage() {
  const [artists, setArtists] = useState<ArtistProps[]>([]);

  const dmaArray = [
    "324",
    "222",
    "228",
    "300",
    "264",
    "345",
    "354",
    "368",
    "372",
    "378",
    "380",
    "381",
    "382",
    "383",
    "385",
  ];

  const randomIndex = Math.floor(Math.random() * dmaArray.length);
  const randomDMA = dmaArray[randomIndex];

  useEffect(() => {
    async function getRandom(DMA: string) {
      try {
        const res = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=${DMA}&size=30&apikey=aeMvG0zyzdpO1jAkGyCZeGxxQK4vIfpe`
        );
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const result = await res.json();
        console.log(result);
        setArtists(result._embedded.events);
      } catch (error) {
        console.error(error);
      }
    }
    getRandom(randomDMA);
  }, [randomDMA]);

  function formatDate(inputDate: string) {
    const date = new Date(inputDate);
    return date.toLocaleDateString();
  }

  return (
    <>
      <Navbar text="Discover Me" section="" />
      <Searchbar />
      <div className="flex justify-center items-center flex-wrap">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="flex justify-center basis-1/3 flex-col items-center mb-8 text-center"
          >
            <div className="w-96 h-72">
              <Link to={`/Artist/${artist.id}`} state={{ artist }}>
                <img
                  src={artist.images[0].url}
                  alt={artist.name}
                  className="h-full w-full"
                />
              </Link>
            </div>

            <p className="text-white text-base m-0">{artist.name}</p>
            <p className="text-white text-base m-0">
              {artist._embedded.venues[0].name}
            </p>
            <p className="text-white text-base m-0">
              {formatDate(artist.dates.start.localDate)}
            </p>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
}
