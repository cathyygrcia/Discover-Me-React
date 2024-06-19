export type ArtistProps = {
  name: string;
  id: number;
  images: { url: string }[];
  _embedded: {
    venues: { name: string }[];
  };
  dates: {
    start: { localDate: string };
  };
};
