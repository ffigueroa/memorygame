import { VscDebugRestart } from 'react-icons/vsc';
import { MdExitToApp } from 'react-icons/md';

function Menu({ resetGame, exitGame }) {
  return (
    <div className="flex flex-row items-center justify-between bg-slate-100 rounded-lg my-2 py-4 px-4">
      <div className="">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          <span className="text-modyo-green font-medium">Memory</span>Game
        </h1>
      </div>

      <div className="flex flex-row gap-2">
        <button
          className=" bg-modyo-green text-white font-bold py-2 px-2 rounded flex flex-row items-center gap-2"
          onClick={resetGame}
          type="button">
          <VscDebugRestart /> <span className="hidden md:block">Reiniciar</span>
        </button>
        <button
          className="border border-modyo-green text-modyo-green font-bold py-2 px-2 rounded flex flex-row items-center gap-2"
          onClick={exitGame}
          type="button">
          <MdExitToApp /> <span className="hidden md:block">Salir</span>
        </button>
      </div>
    </div>
  );
}

export default Menu;
