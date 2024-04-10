import hedi from "../public/images/hedi.jpeg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" bg-white  dark:bg-gray-400 flex h-[600px] justify-center items-center border-b-4">
      <div className=" flex flex-col justify-center w-[600px] h-96 mr-[200px]">
        <h1 className="text-4xl font-bold">
          Hi, I'm Hedi, junior front end devoloper ready for some challenges
        </h1>
        <p className="text-lg mr-8 mt-24 text-gray-600">
          About Hedi haskjbhasjdbajh dasmbdhjbasdjhbdja
          bdhjsagbdjhbasdhjavdahbdvnabd ansvdbjhasbvdjhasdbnbdfm amf mab
          fjabsfmnabfmna fmafb ajmnsfb masb fbmanf mnabf man fdmnasfdn
        </p>
      </div>
      <div className="mr-30">
        <Image
          src={hedi}
          alt="headshot of Hedi"
          height="300"
          className="rounded-full "
        />
      </div>
    </section>
  );
}

// drop-shadow(0 0 0.75rem crimson);
