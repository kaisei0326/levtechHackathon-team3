import { Button } from '@mantine/core';
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      <Button>Sign Up</Button>
      <Link to={`/`}>ホームに戻る</Link>
    </>
  );
}