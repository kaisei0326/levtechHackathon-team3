import React from "react";
import { Button } from '@mantine/core';
import { Link } from "react-router-dom";
import { TextInput, Checkbox, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useCookies } from "react-cookie";
import axios from "axios";

export const SignIn = () => {
  const url = 'https://tadanodomain.gq:9090/v1/login'

  const token = async () => {
    const { data } = await axios.get(url);
    return data;
  }

  const form = useForm({
    initialValues: {
      csrftoken: '',
      name: '',
      password:'',
    },
  });
  console.log(token.csrftoken)

  const PHPSESSID = 'sada';
  const [cookies, setCookie] = useCookies(["userdata"]);

  async function postUserdata(values) {
    //valuesをuseMUtateLoginに送る
    //PHPSESSIDを受け取る
    console.log(values)
    setCookie("PHPSSID", PHPSESSID)
    console.log(PHPSESSID)
    const tokenObj = await token()
    values.csrftoken = tokenObj.csrftoken

    axios.post(url, values, {
      withCredentials: true,
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}