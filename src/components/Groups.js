import { 
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  Container,
  Box,
} from '@mantine/core';

const mockdata = [
  {
    title: '首里高 3年',
    groupID: 'hoge'
  },
  {
    title: 'グループ2',
    groupID: 'huga'
  },
  {
    title: 'グループ3',
    groupID: 'foo'
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function Groups() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="xs" radius="md" className={classes.card} p="xl" component="a" href={'./albams?gID='+feature.groupID}>
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md" >
        {feature.title}
      </Text>
      
      <Text size="sm" color="dimmed" mt="sm" >
        {feature.description}
      </Text>
    </Card>
  ));
  
  return (
    <Container size="lg" py="xl">
      <Group position="right">
        <Badge variant="filled" size="lg"  component='a' href='./signout'>
          サインアウト
        </Badge>
      </Group>
      
      <Title order={2} className={classes.title} align="center" mt="sm">
        グループ
      </Title>
      
      <Box sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        textAlign: 'left',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          },
        })}
        
        cols={3} spacing="xl" radius="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}
        >
        {features}
      </Box>
    </Container>
  );
}