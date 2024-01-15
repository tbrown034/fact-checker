import { useState } from "react";
import Header from "./Header";

export default function GameMenu({ backToMenu }) {
  const [realImage, setRealImage] = useState(null);
  const [fakeImage, setFakeImage] = useState(null);

  // Placeholder images or paths can be added here
  const realImagePlaceholder = "/path-to-real-image-placeholder.png";
  const fakeImagePlaceholder = "/path-to-fake-image-placeholder.png";

  return (
    <div className="min-h-screen p-2">
      <Header />
      <h1 className="mt-2 text-2xl font-bold">Find the Real One</h1>

      <div className="flex flex-col items-center justify-center gap-4 p-4">
        {/* Render RealImage if it's not null, otherwise show placeholder */}
        <img
          src={realImage || realImagePlaceholder}
          alt="Real Image"
          className="w-20 h-20 p-2 border-2 border-black image-style-class"
        />
        <button className="p-2 px-12 text-lg bg-sky-900 hover:bg-sky-700 active:bg-sky-600 text-sky-100 rounded-xl">
          Pick
        </button>
        {/* Render FakeImage if it's not null, otherwise show placeholder */}
        <img
          src={fakeImage || fakeImagePlaceholder}
          alt="Fake Image"
          className="w-20 h-20 p-2 border-2 border-black image-style-class"
        />
        <button className="p-2 px-12 text-lg bg-sky-900 hover:bg-sky-700 active:bg-sky-600 text-sky-100 rounded-xl">
          Pick
        </button>

        <button
          onClick={backToMenu}
          className="p-2 px-12 text-lg bg-sky-900 hover:bg-sky-700 active:bg-sky-600 text-sky-100 rounded-xl"
        >
          Back
        </button>
      </div>
    </div>
  );
}
