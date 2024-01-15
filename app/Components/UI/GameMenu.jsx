import FakeImage from "../gameElements/FakeImage";
import RealImage from "../gameElements/realImage";
import Header from "./Header";

export default function GameMenu({ backToMenu }) {
  return (
    <div className="">
      <Header />
      <h1 className="mt-2 text-2xl font-bold">Find the Real One</h1>

      <div className="flex flex-col items-center justify-center gap-4 p-4">
        {/* <RealImage />
        <FakeImage /> */}
      </div>
      <div className="flex justify-center">
        <button
          onClick={backToMenu}
          className="p-2 px-12 mt-4 text-lg bg-sky-900 hover:bg-sky-700 active:bg-sky-600 text-sky-100 rounded-xl"
        >
          Back
        </button>
      </div>
    </div>
  );
}
