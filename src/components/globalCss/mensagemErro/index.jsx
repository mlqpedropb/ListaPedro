import React from 'react';
import './MensagemErro.css';

function ErrorMessage({ message, onClose }) {
    const handleOkClick = () => {
      onClose();
      window.location.reload(); // Recarrega a página
    };
  
    return (
      <div className="error-message-overlay">
        <div className="error-message">
          <p>{message}</p>
          <button className="ok-button" onClick={handleOkClick}>OK</button> {/* Botão OK para fechar a caixa de erro e recarregar a página */}
        </div>
      </div>
    );
  }
  
  export default ErrorMessage;