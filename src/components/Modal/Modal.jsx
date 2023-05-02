import Image from 'next/image';
import { VscDebugRestart } from 'react-icons/vsc';

function Modal({ showModal, errors, setShowModal, resetGame }) {
  return (
    <div
      className={`fixed z-20 inset-0 overflow-y-auto ${showModal ? 'block' : 'hidden'}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="flex items-center justify-center min-h-screen  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-modyo-blue/90 transition-opacity" aria-hidden="true" />
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex flex-col items-center ">
              <Image src="/images/confetti.svg" alt="¡Felicidades!" width={100} height={100} />
              <h3 className="text-2xl leading-6 font-bold text-gray-600 mt-4" id="modal-title">
                ¡Felicidades!
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Completaste el juego con <span className="font-bold">{errors}</span> errores.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse gap-2 justify-center">
            <button
              type="button"
              className="bg-modyo-blue text-white font-bold py-2 px-2 rounded flex flex-row items-center gap-2"
              onClick={() => setShowModal(false)}>
              Aceptar
            </button>
            <button
              className="bg-modyo-green  text-white font-bold py-2 px-2 rounded flex flex-row items-center gap-2"
              onClick={() => {
                resetGame();
                setShowModal(false);
              }}
              type="button">
              <VscDebugRestart /> Volver a jugar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
