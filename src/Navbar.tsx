type Props = {
  text: string;
};
export default function Navbar({ text }: Props) {
  return (
    <>
      <nav className="bg-black">
        <p className="text-white text-5xl p-6 font-reggae">{text}</p>
      </nav>
    </>
  );
}
