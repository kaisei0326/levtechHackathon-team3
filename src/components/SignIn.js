import { Button } from '@mantine/core';
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <>
      <Button>Click me!</Button>
      <Link to={`/`}>ホームに戻る</Link>
    </>
  );
}