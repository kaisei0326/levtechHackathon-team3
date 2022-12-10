import { Button } from '@mantine/core';
import { Link } from "react-router-dom";
import { TextInput, Checkbox, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

export const SignUp = () => {
  const form = useForm({
    initialValues: {
      username: '',
      password:'',
    },
    /*validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },*/
  });

  //axios.defaults.baseURL = "http://tadanodomain.gq:9090";

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
          <Button
          type="submit"
          //onClick={(event) => event.handleClick()}
          >Submit</Button>
        </Group>
      </form>
    </Box>
  );
}