import CurrentDate from "./CurrentDate";

export default function MainMenu({ startGame }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-2 text-center">
      <div className="w-24 h-24 ">
        <i className="p-2 text-6xl text-white bg-blue-400 fa-regular fa-check-to-slot rounded-2xl"></i>
      </div>
      <h1 className="text-4xl font-bold font">TrueTest</h1>
      <h2 className="text-xl ">
        A Wordle-inspired fact-checking guessing game.
      </h2>
      <button
        onClick={startGame}
        className="p-2 px-12 text-lg bg-sky-900 hover:bg-sky-700 active:bg-sky-600 text-sky-100 rounded-xl"
      >
        Play
      </button>
      <CurrentDate />
      <p>
        Created by{" "}
        <a
          className="underline underline-offset-4 hover:text-sky-600"
          href="https://trevorthewebdeveloper.com/"
        >
          Trevor Brown
        </a>
      </p>
    </div>
  );
}
