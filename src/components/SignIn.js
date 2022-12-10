import { Button } from '@mantine/core';
import { Link } from "react-router-dom";
import { useMutateLogin } from '../api/useMutateLogin';
import { useQueryLogin } from '../api/useQueryLogin';

export const SignIn = () => {
  const { data, status } = useQueryLogin();
  const { useLogin } = useMutateLogin();

  return (
    <>
      <Button>Click me!</Button>
      <Link to={`/`}>ホームに戻る</Link>
    </>
  );
}