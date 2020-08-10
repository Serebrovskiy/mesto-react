import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, children}) {
    
    return (
        <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
          <div className="popup__grid">
            <button type="button" className="popup__close-icon" onClick={onClose}></button>
            <form className={`popup__container popup__container_${name}`} name={`form_${name}`} >     {/* добавлен нижний слеш в name  novalidate */}
              <h3 className="popup__title">{title}</h3>
              {children}
              <button className="popup__button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
    );
}

export default PopupWithForm;