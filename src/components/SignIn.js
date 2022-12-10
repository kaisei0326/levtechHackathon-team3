import { Button } from '@mantine/core';
import { Link } from "react-router-dom";
import { useMutateLogin } from '../api/useMutateLogin';
import { useQueryLogin } from '../api/useQueryLogin';

export const SignIn = () => {
  // const { data, status } = useQueryLogin();
  // console.log(data);
  const { useLogin } = useMutateLogin();
  const formData = {
    csrftoken: '3feb5319afbd26e9cc831e43f4da839718a565ca8f0a4fe5889835347c2051ae',
    name: 'aaa',
    password: 'password'
  }
  // useLogin.mutate(formData);

  return (
    <>
      <Button>Click me!</Button>
      <Link to={`/`}>ホームに戻る</Link>
    </>
  );
}