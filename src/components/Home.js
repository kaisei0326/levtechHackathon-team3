import { Button } from '@mantine/core';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Button>Click me!</Button>
      <Link to={`/signin`}>サインイン</Link>
      <Link to={`/signup`}>サインアップ</Link>
    </>
  );
}