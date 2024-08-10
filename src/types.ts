export type ArtistProps = {
  name: string;
  id: string;
  images: { url: string; ratio: string }[];
  _embedded: {
    venues: { name: string }[];
  };
  dates: {
    start: { localDate: string };
  };
};
