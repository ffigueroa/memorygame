import { MdPerson } from 'react-icons/md';

export default function PlayerInfo({ player }) {
  return (
    <div className="absolute bg-white text-slate-400 -top-3 left-0 md:-left-2 shadow-md bg-modyo-green rounded-lg px-2 py-1  flex flex-row gap-2 items-center ">
      <div className="flex flex-row items-center justify-center bg-white rounded p-1 gap-1">
        <MdPerson />
        <p className="text-sm font-normal">
          <span className="hidden md:inline">Está jugando </span>
          <span className="font-medium text-modyo-green leading-none">{player.name}</span>
        </p>
      </div>
    </div>
  );
}
