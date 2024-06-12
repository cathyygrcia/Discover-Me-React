import { FaRegHeart } from "react-icons/fa";

type Props = {
  text: string;
  section: string;
};
export default function Navbar({ text, section }: Props) {
  return (
    <>
      <nav className="bg-black flex ">
        <div className="flex basis-1/3 justify-center">
          <p className="text-white lg:text-5xl p-6 font-reggae text-xl md:text-3xl">
            {text}
          </p>
        </div>
        <div className="flex justify-center basis-1/3 items-center">
          <p className="text-white font-reggae text-3xl ">{section}</p>
        </div>
        <div className="flex justify-center basis-1/3 items-center">
          <p className="text-white font-reggae lg:text-3xl lg:block hidden">
            Favorites
          </p>
          <FaRegHeart className="text-white lg:text-4xl ml-4 sm:text-3xl text-2xl" />
        </div>
      </nav>
    </>
  );
}
