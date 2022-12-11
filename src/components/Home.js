import { Button } from '@mantine/core';
import { Link } from "react-router-dom";
import { SignOut } from './SignOut';

export const Home = () => {
  return (
    <>
      <Link to={`/signin`}>サインイン </Link>
      <Link to={`/signup`}> サインアップ </Link>
      <Link to={`/groups`}> 参加グループ </Link>
    </>
  );
}