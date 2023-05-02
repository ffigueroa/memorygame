export default function PlayerName({ player, handleChangePlayer }) {
  return (
    <div className="text-center">
      <h2 className="text-xl md:text-3xl font-medium text-slate-600">
        ¿<span className="font-black text-modyo-green">{player.name}</span> estás listo para jugar?
      </h2>
      <p
        type="button"
        className="text-sm underline text-slate-300 cursor-pointer"
        onClick={handleChangePlayer}
        aria-hidden="true">
        Cambiar Nombre
      </p>
    </div>
  );
}
