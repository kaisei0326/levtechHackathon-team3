import { Button } from "@mantine/core";
import { useCookies } from "react-cookie";
import { getData } from "../api/getData";

export const SignOut = () => {
  const url = 'https://tadanodomain.gq:9090/v1/logout';
  const [cookies, setCookie, removeCookie] = useCookies();
  const exec = () =>{
    getData(url);
    removeCookie(['PHPSESSID'])
  };

  return (
    <>
      <Button onClick={() => exec()}>
        サインアウト
      </Button>
    </>
  );
};