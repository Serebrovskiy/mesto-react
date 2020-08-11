import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

function App() {
  const [isEditAvatarPopupOpen, setIsOpenPopupAvatar] = React.useState(false);
  const [isAddPlacePopupOpen, setIsOpenPopupPlace] = React.useState(false);
  const [isEditProfilePopupOpen, setIsOpenPopupProfile] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsOpenPopupAvatar(!isEditAvatarPopupOpen);
  }

  function handleEditPlaceClick() {
    setIsOpenPopupPlace(!isAddPlacePopupOpen);
  }

  function handleEditProfileClick() {
    setIsOpenPopupProfile(!isEditProfilePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsOpenPopupAvatar(false);
    setIsOpenPopupPlace(false);
    setIsOpenPopupProfile(false);
    setSelectedCard(false);
  }

  return (
    <div>
      <main className="page">

        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onAddCard={handleEditPlaceClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="avatar-input"
            type="url"
            name="inputAvatar"
            placeholder="Ссылка на аватар"
            className="popup__input-text popup__input-text_type_avatar"
            required
          />
          <span id="avatar-input-error" className="popup__input-error"></span>
        </ PopupWithForm>

        <PopupWithForm
          name='add_card'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="place-input"
            type="text"
            name="inputCardName"
            placeholder="Название"
            className="popup__input-text popup__input-text_type_place"
            required
          />
          <span id="place-input-error" className="popup__input-error"></span>
          <input
            id="image-input"
            type="url"
            name="inputCardImage"
            placeholder="Ссылка на картинку"
            className="popup__input-text popup__input-text_type_image"
            required
          />
          <span id="image-input-error" className="popup__input-error"></span>
        </ PopupWithForm>

        <PopupWithForm
          name='profile'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="name-input"
            type="text"
            name="inputProfileName"
            placeholder="Имя"
            className="popup__input-text popup__input-text_type_name"
            required
            pattern="^[a-zA-Zа-яА-Я\s-]+$"
          />
          <span id="name-input-error" className="popup__input-error"></span>
          <input
            id="profession-input"
            type="text"
            name="inputProfileProfession"
            placeholder="Профессия"
            className="popup__input-text popup__input-text_type_job"
            required
          />
          <span id="profession-input-error" className="popup__input-error"></span>
        </ PopupWithForm>

        <PopupWithImage
          card={selectedCard}
          onClose={closeAllPopups}
        />

      </main>
    </div>
  );
}

export default App;
