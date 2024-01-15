export default function GameMenu({ backToMenu }) {
  return (
    <div className="min-h-screen">
      <div>hi</div>
      <button
        onClick={backToMenu}
        className="p-2 px-12 text-lg bg-sky-900 hover:bg-sky-700 active:bg-sky-600 text-sky-100 rounded-xl"
      >
        Back
      </button>
    </div>
  );
}
