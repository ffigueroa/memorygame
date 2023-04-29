import { BsCheckLg } from 'react-icons/bs';

function PlayerInput(props) {
  const { inputValue, handleChange, handleSubmit } = props;

  return (
    <form className="gap-6 " onSubmit={handleSubmit}>
      <label htmlFor="name" className="flex flex-col items-center gap-2">
        Ingresa nombre del jugador
        <div className="flex flex-row gap-2">
          <input
            id="name"
            type="text"
            className="bg-gray-100 rounded w-60 h-10 px-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Ej: Karina"
            value={inputValue}
            onChange={handleChange}
          />
          <button
            className={`flex bg-gray-300 w-10 h-10 rounded items-center justify-center ${
              inputValue ? 'bg-modyo' : ''
            }`}
            type="submit">
            <BsCheckLg className="fill-white" size={20} />{' '}
          </button>
        </div>
      </label>
    </form>
  );
}

export default PlayerInput;
