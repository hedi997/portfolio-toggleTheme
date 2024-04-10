import träd from "../public/images/träd.jpeg";
import Image from "next/image";
import radioplayer from "../public/images/Radioplayer.png";

export default function Project() {
  return (
    <div>
      <div className=" bg-white  dark:bg-gray-400 h-[1000px] flex flex-col justify-center items-center mt-6 ">
        <h1 className="text-2xl text-gray-600 mb-10 mr-[1020px]">Projects</h1>
        <div className="flex flex-col justify-between h-[100%] w-[1100px]">
          <a href="@" className="flex card border-b-2 border-gray-200">
            <Image
              src={radioplayer}
              alt="image of radioplayer project"
              height="300"
              width="300"
              className="rounded-lg mb-6"
            />
            <div className="flex flex-col justify-between ml-6">
              <h1 className=" font-bold text-3xl">Radioplayer</h1>
              <div className="flex ">
                <p className="border-2 border-gray-400 rounded-full p-2 w-16 text-gray-600">
                  React
                </p>
                <p className="border-2 border-gray-400 rounded-full p-2 w-20 ml-2 text-gray-600">
                  Tailwind
                </p>
                <p className="border-2 border-gray-400 rounded-full p-2 w-20 ml-2 text-gray-600">
                  API call
                </p>
              </div>

              <p className="mb-6 text-gray-600">
                In this project i have worked eitgjkhccjbsdcj jhqvgdsxhjsvdj
                qwbsdghjsbdssjha qwdbqjhwbdvjhqwvbdjhqw qwbdjhqwbvdjhqwb
                bshjbgaHJX sbvjhVSXBJSHVX SAJVSJHASVXJG JHhkjsdbcjahdbc
                abdjhvbcjhsdvcjsdc dvbjsvcdjhsdcv wjddvcjhwdvcjhcvjwhcv
                dwjhvcjhwvdcjhwcv dvjhvcjwhdvjwhd
              </p>
            </div>
          </a>
          <div className="flex card border-b-2 border-gray-200">
            <Image
              src={träd}
              alt="picture of tree"
              height="300"
              width="300"
              className="rounded-lg mb-6"
            />
            <div className="container flex flex-col justify-between ml-6">
              <h3 className=" font-bold">Project 2</h3>
              <p>About jhsdbjahsdbajsh</p>
              <p>
                <b>Used tech:</b> jhsdbjahsdbajsh
              </p>
            </div>
          </div>
          <div className="flex card border-b-2 border-gray-200">
            <Image
              src={träd}
              alt="picture of tree"
              height="300"
              width="300"
              className="rounded-lg mb-6"
            />
            <div class="container flex flex-col justify-between ml-6">
              <h3 className=" font-bold">Project 3</h3>
              <p>About jhsdbjahsdbajsh</p>
              <p>
                <b>Used tech:</b> jhsdbjahsdbajsh
              </p>
            </div>
          </div>
          <div className="flex card border-b-2 border-gray-200">
            <Image
              src={träd}
              alt="picture of tree"
              height="300"
              width="300"
              className="rounded-lg mb-6"
            />
            <div className="container flex flex-col justify-between ml-6">
              <h3 className=" font-bold">Project 4</h3>
              <p>About jhsdbjahsdbajsh</p>
              <p>
                <b>Used tech:</b> jhsdbjahsdbajsh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// React
// tailwind
// api call
