import { useState, useEffect } from "react";

export default function RealImage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImageData() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setImageUrl(data.url);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    }

    fetchImageData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading image: {error}</p>;

  return (
    <div className="flex flex-col">
      <h1>his</h1>
      {imageUrl && <img src={imageUrl} alt="Real Image from NASA" />}
    </div>
  );
}
