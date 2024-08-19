import React from "react";

export default function Searchbar({ input, setInput, handleSearch }: any) {
  return (
    <>
      <div className="flex justify-center items-center  ">
        <label className=" ">
          <input
            type="text"
            className="bg-black rounded-2xl p-2 text-white outline-none"
            placeholder="Search Genre..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button
          type="button"
          className="rounded-2xl my-4 ml-6 p-3.5 bg-black text-white"
          onClick={handleSearch}
        >
          Search by Genre
        </button>
      </div>
    </>
  );
}
