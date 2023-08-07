import { useState } from 'react';
import { useGetUserMutation } from '../../services/githubApi';
import { Loader } from '../loader/Loader';
import { User } from '../user/User';
import './styles.scss'

export const Search = () => {
  const [username, setUsername] = useState('');
  const [getUser, {data: user, isLoading, isError, error}] = useGetUserMutation();

  const onClickSearch = () => getUser(username);

  return (
    <div className="searchWrapper">
      <div className="search">
        <input onChange={e => setUsername(e.target.value)} placeholder="Enter username.."/>
        <button onClick={onClickSearch}>Search</button>
      </div>
      {isError && error && 'data' in error && <h3>{JSON.stringify(error.data)}</h3>}
      {!isLoading ? user && <User avatar_url={user.avatar_url} profile_url={user.html_url} login={user.login} bio={user.bio}/> : <Loader />}
    </div>
  )
}