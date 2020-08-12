import React from 'react';
import Card from './Card';
import { api } from './api.js';

function Main({ onEditAvatar, onEditProfile, onAddCard, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then((res) => {
        setUserName(res[0].name);
        setUserDescription(res[0].about);
        setUserAvatar(res[0].avatar);
        setCards(res[1].map(item => ({
          id: item._id,
          likes: item.likes,
          name: item.name,
          src: item.link
        })));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </div>
        <div className="profile__name-block">
          <h2 className="profile__name">{userName}</h2>
          <button type="button" className="profile__edit" onClick={onEditProfile}></button>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button type="button" className="profile__button" onClick={onAddCard}></button>
      </section>
      <section className="cards">
        {
          cards.map(elem =>
            <Card
              card={elem}
              key={elem.id}
              onCardClick={onCardClick}
            />)
        }
      </section>
    </ >
  );
}

export default Main;
