import { Button } from "@mantine/core";
import { getData } from "../api/getData";

export const SignOut = () => {
  const url = 'https://tadanodomain.gq:9090/v1/logout'
  const exec = () =>{
    getData(url);
  };

  return (
    <>
      <Button onClick={() => exec()}>
        サインアウト
      </Button>
    </>
  );
};