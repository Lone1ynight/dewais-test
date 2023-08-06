import { FC } from 'react';

export interface UserProps {
  avatar_url: string
  profile_url: string,
  login: string,
  bio: string
}

export const User: FC<UserProps> = ({avatar_url, login, bio, profile_url}) => {
  return <div>
    <img src={avatar_url} alt="User Avatar" />
    <h2>{login}</h2>
    <p>{bio}</p>
    <a href={profile_url} target="_blank" rel="noopener noreferrer">
      GitHub Profile
    </a>
  </div>
}