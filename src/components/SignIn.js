import React from "react";
import { Button } from '@mantine/core';
import { Link } from "react-router-dom";
import { TextInput, Checkbox, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useCookies } from "react-cookie";
import { postData } from "../api/postData";
import { getData } from "../api/getData";

export const SignIn = () => {
  const url = 'https://tadanodomain.gq:9090/v1/login'


  const form = useForm({
    initialValues: {
      csrftoken: '',
      name: '',
      password:'',
    },
  });

  // const PHPSESSID = 'sada';
  const [cookies, setCookie] = useCookies(["userdata"]);

  async function postUserdata(values) {
    const tokenObj = await getData(url)
    values.csrftoken = tokenObj.csrftoken
    postData(url, values, setCookie);
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <Link to={`/`}>ホームに戻る</Link>
    
      <form onSubmit={form.onSubmit((values) => postUserdata(values))}>
        <TextInput
          withAsterisk
          label="name"
          placeholder=""
          {...form.getInputProps('name')}
        />
        <TextInput
          withAsterisk
          label="Password"
          placeholder="8 or more characters"
          {...form.getInputProps('password')}
        />

        <Group position="right" mt="md">
          <Button type="submit" component="a" href={'./groups'}>Submit</Button>
        </Group>
      </form>
    </Box>
  );
}