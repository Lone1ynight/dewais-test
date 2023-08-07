import { FC } from 'react';
import './styles.scss';

export interface UserProps {
  avatar_url: string
  profile_url: string,
  login: string,
  bio: string,
}

export const User: FC<UserProps> = ({avatar_url, login, bio, profile_url, }) => {

  return <div className="user">
    <div className="userInfo">
      <img src={avatar_url} alt="User Avatar" className="avatar"/>
      <div className="userDescription">
        <a href={profile_url} target="_blank" rel="noopener noreferrer" className="name">{login}</a>
        {bio ? <p className="bio">{bio}</p> : <p className="noBio">No bio</p>}
      </div>
    </div>

    <a href={profile_url} target="_blank" rel="noopener noreferrer">Go to account on GitHub!</a>
  </div>
}