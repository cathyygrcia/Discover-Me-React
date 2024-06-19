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
        setArtists(result._embedded.events);
      } catch (error) {
        console.error(error);
      }
    }
    getRandom(randomDMA);
  }, [randomDMA]);

  function formatDate(inputDate: string) {
    const parts = inputDate.split("-");
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${month}/${day}/${year}`;
  }

  return (
    <>
      <Navbar text="Discover Me" section="" />
      <Searchbar />
      <div className="row">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-info">
            <div className="image-wrapper">
              <Link to="Artist">
                <img
                  src={artist.images[0].url}
                  alt={artist.name}
                  className="img"
                />
              </Link>
            </div>

            <p className="artist-name">{artist.name}</p>
            <p className="artist-name">{artist._embedded.venues[0].name}</p>
            <p className="artist-name">
              {formatDate(artist.dates.start.localDate)}
            </p>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
}
