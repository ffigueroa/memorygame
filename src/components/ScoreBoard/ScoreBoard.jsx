function ScoreBoard({ matchedCards, errors }) {
  return (
    <div className="absolute bg-white text-slate-400 -top-3 right-0 md:-right-2 shadow-md bg-modyo-green rounded-lg px-2 py-1  flex flex-row gap-2 items-center ">
      <p className="flex gap-1 text-sm  font-normal items-center">
        Aciertos: <span className="text-xl text-modyo-green font-bold">{matchedCards / 2}</span>
      </p>
      |
      <p className="flex gap-1 text-sm  font-normal items-center">
        Errores: <span className="text-xl text-red-400 font-bold">{errors}</span>
      </p>
    </div>
  );
}

export default ScoreBoard;
