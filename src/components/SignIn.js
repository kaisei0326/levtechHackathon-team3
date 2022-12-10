import React from "react";
import { Button } from '@mantine/core';
import { Link } from "react-router-dom";
import { TextInput, Checkbox, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useCookies } from 'react-cookie';

export const SignIn = () => {
  const form = useForm({
    initialValues: {
      token: '',
      username: '',
      password:'',
    },
  });

  const token = 'token';

  const  [cookies , setCookie] = useCookies (['id']);

  function Change(ID) {
    setCookie ('ID', ID, {pass:'/'});
  }

  const takeToken = () => {
    form.token = token;
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <Link to={`/`}>ホームに戻る</Link>
    
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
          <Button type="submit"
          onClick={takeToken}
          >Submit</Button>
        </Group>

      </form>
    
    {cookies.id}
    </Box>
  );
}