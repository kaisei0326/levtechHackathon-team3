import { Button } from '@mantine/core';
import { Link } from "react-router-dom";
import { useMutateLogin } from '../api/useMutateLogin';
import { useQueryLogin } from '../api/useQueryLogin';

export const Home = () => {
  return (
    <>
      <Button>Click me!</Button>
      <Link to={`/signin`}>サインイン</Link>
      <Link to={`/signup`}>サインアップ</Link>
      <Link to={`/albams`}>アルバム(仮置き)</Link>
    </>
  );
}