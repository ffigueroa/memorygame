function ScoreBoard({ matchedCards, errors }) {
  return (
    <div className="absolute -top-3 -right-2 shadow-md bg-white rounded-lg p-2  flex flex-row gap-4">
      <p className="text-md text-slate-600 font-normal">
        Aciertos: <span className="text-xl text-modyo-green font-bold">{matchedCards / 2}</span>
      </p>

      <p className="text-md text-slate-600 font-normal">
        Errores: <span className="text-xl text-red-400 font-bold">{errors}</span>
      </p>
    </div>
  );
}

export default ScoreBoard;
