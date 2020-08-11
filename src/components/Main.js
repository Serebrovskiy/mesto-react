import React from 'react';
import Card from './Card';
import { api } from '../utils/api';

function Main({onEditAvatar, onEditProfile, onAddCard, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfile().then(res => {
      setUserName(
        res.name
      );
      setUserDescription(
        res.about
      );
      setUserAvatar(
        res.avatar
      );
    }).catch((err) => console.log(err));
  });

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res.map(item => ({
        id: item._id,
        likes: item.likes,
        name: item.name,
        src: item.link
      })));
    }).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" /> 
        </div>
        <div className="profile__name-block">
          <h2 className="profile__name">{userName}</h2>  {/* Жак-Ив Кусто */}
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
