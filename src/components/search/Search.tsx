import { useState } from 'react';
import { useGetUserMutation } from '../../services/githubApi';
import { User } from '../user/User';

export const Search = () => {
  const [username, setUsername] = useState('');
  const [getUser, {data: user,  }] = useGetUserMutation()

  const onClickSearch = () => getUser(username)

  return (
    <div>
      <div>
        <input onChange={e => setUsername(e.target.value)}/>
        <button onClick={onClickSearch}>Search</button>
      </div>
      {user && <User avatar_url={user.avatar_url} profile_url={user.html_url} login={user.login} bio={user.bio} />}
    </div>
  )
}