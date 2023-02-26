import React from "react";

interface Props {
  onClose: () => void;
}

export const AlertModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Cidade não encontrada</h2>
        <p className="text-gray-600 mb-4">
          Desculpe, não foi possível encontrar informações para a cidade que
          você pesquisou.
        </p>
        <button
          onClick={onClose}
          className="bg-gray-800 text-white py-2 px-4 rounded-lg"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
