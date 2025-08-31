
export default function Favourite({onShow}) {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src="./assets/heart.svg" alt="" />
      <span onClick={onShow} className="text-white">Favourite Locations</span>
    </div>
  );
}
