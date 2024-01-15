import { useState, useEffect } from "react";
import Header from "./Header";

export default function GameMenu({ backToMenu }) {
  const [realImage, setRealImage] = useState(null);
  const [fakeImage, setFakeImage] = useState(null);
  const [images, setImages] = useState([]);

  // Placeholder images or paths can be added here
  const realImagePlaceholder = "/path-to-real-image-placeholder.png";
  const fakeImagePlaceholder = "/path-to-fake-image-placeholder.png";

  // Fetch the NASA photo of the day
  useEffect(() => {
    async function fetchNasaImage() {
      const apiKey = "YOUR_NASA_API_KEY"; // Replace with your NASA API key
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await response.json();

      // Set the real image, and for now, we'll just duplicate it as a fake image
      // Later on, you should replace this with a call to generate a fake image
      setRealImage(data.url);
      setFakeImage(data.url); // Placeholder for fake image

      // Randomize the order of the images
      setImages(
        Math.random() < 0.5
          ? [data.url, fakeImagePlaceholder]
          : [fakeImagePlaceholder, data.url]
      );
    }

    fetchNasaImage().catch(console.error); // Log any errors to the console
  }, []);

  return (
    <div className="min-h-screen p-2">
      <Header />
      <h1 className="mt-2 text-2xl font-bold">Find the Real One</h1>

      <div className="flex flex-col items-center justify-center gap-4 p-4">
        {images.map((imgSrc, index) => (
          <div key={index}>
            <img
              src={imgSrc || realImagePlaceholder} // Use the placeholder if imgSrc is not available
              alt={index === 0 ? "Real Image" : "Fake Image"} // Assuming the first image is the real one
              className="w-20 h-20 p-2 border-2 border-black image-style-class"
            />
            <button className="p-2 px-12 text-lg bg-sky-900 hover:bg-sky-700 active:bg-sky-600 text-sky-100 rounded-xl">
              Pick
            </button>
          </div>
        ))}

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
