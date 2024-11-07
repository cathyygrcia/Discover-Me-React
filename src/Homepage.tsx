import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import "./index.css";
import { ArtistProps } from "./types";
import { Link, Outlet } from "react-router-dom";

export default function Homepage() {
  const [artists, setArtists] = useState<ArtistProps[]>([]);
  const [input, setInput] = useState("");

  // Fetch artists for the default genre ("reggae") when the component mounts
  useEffect(() => {
    async function fetchDefaultArtists() {
      try {
        const res = await fetch(
          `https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=reggae&size=30&apikey=aeMvG0zyzdpO1jAkGyCZeGxxQK4vIfpe`
        );
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const result = await res.json();
        console.log(result);
        setArtists(result._embedded?.attractions || []);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDefaultArtists();
  }, []); // Empty dependency array to run only on mount

  async function handleSearch() {
    try {
      const res = await fetch(
        `https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=${input}&size=30&apikey=aeMvG0zyzdpO1jAkGyCZeGxxQK4vIfpe`
      );
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const result = await res.json();
      console.log(result);
      setArtists(result._embedded?.attractions || []);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Navbar text="Discover Me" section="" />
      <Searchbar
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />

      <div className="flex justify-center items-center flex-wrap ">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="flex justify-center basis-1/2 lg:basis-1/3 flex-col items-center mb-8 text-center"
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
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
}
