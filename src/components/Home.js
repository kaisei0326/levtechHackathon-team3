import { Button } from '@mantine/core';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Link to={`/signin`}>サインイン</Link>
      <Link to={`/signup`}>サインアップ</Link>
      <Link to={`/albams`}>アルバム(仮置き)</Link>
    </>
  );
}