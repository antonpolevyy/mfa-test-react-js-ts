import { FC } from 'react';

import { IUserData } from '../../types/User';

import style from './UserProfile.module.css';

interface IUserProfileProps {
  userData: IUserData | undefined;
}

const UserProfile: FC<IUserProfileProps> = ({ userData }) => {
  return (
    <div className={style.container}>
      <h1>User Name & Details</h1>
      {/* {userData && <h2>{JSON.stringify(userData)}</h2>} */}
      {userData && (
        <div className={style.pokemonCardContainer}>
          <div
            className={style.pokemonCard}
            key={userData.id}
            // onClick={() => setSelectPokemon(pokemon)}
          >
            <img
              src={userData.avatarURL}
              aria-label={`Image of pokemon ${userData.name}`}
            />
            <h2>{userData.name}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
