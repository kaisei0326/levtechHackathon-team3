import React from "react";
import { Button } from '@mantine/core';
import { Link } from "react-router-dom";
import { TextInput, Checkbox, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutateLogin } from '../api/useMutateLogin';
import { useQueryLogin } from '../api/useQueryLogin';
import { useCookies } from "react-cookie";

export const SignIn = () => {
  // console.log(data);
  //const { useLogin } = useMutateLogin();
  // useLogin.mutate(formData);
  
  const { data, status } = useQueryLogin();
  const form = useForm({
    initialValues: {
      csrftoken: data,
      username: '',
      password:'',
    },
  });

  const PHPSESSID = 'sada';
  const [cookies, setCookie] = useCookies(["userdata"]);

  function postUserdata(values) {
    //valuesをuseMUtateLoginに送る
    //PHPSESSIDを受け取る
    console.log(values)
    setCookie("PHPSSID", PHPSESSID)
    console.log(PHPSESSID)
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <Link to={`/`}>ホームに戻る</Link>
    
      <form onSubmit={form.onSubmit((values) => postUserdata(values))}>
        <TextInput
          withAsterisk
          label="username"
          placeholder=""
          {...form.getInputProps('username')}
        />
        <TextInput
          withAsterisk
          label="Password"
          placeholder="8 or more characters"
          {...form.getInputProps('password')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}