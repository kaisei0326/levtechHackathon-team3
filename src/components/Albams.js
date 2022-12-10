import { Grid, Skeleton, Container } from '@mantine/core';
import { AiFillFolder } from "react-icons/ai"
import '../Albams.css';
import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    BackgroundImage,
    Center,
    Box,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons';

  const mockdata = [
    {
      title: '夏合宿',
      description: "32枚の写真",
      icon: IconGauge,
      photo: "https://i2.wp.com/star-be.com/wp-content/uploads/2019/08/DSC_2269.jpg?fit=665%2C443&ssl=1",
    },
    {
      title: '夏休み',
      description:
        '60枚の写真',
      icon: IconUser,
    },
    {
      title: '昨年度のハイライト',
      description:
        '30枚の写真',
      icon: IconCookie,
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
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
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

export function Albams() {
        const { classes, theme } = useStyles();
        const features = mockdata.map((feature) => (
          <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
            <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
            <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
              {feature.title}
            </Text>
            <Text size="sm" color="dimmed" mt="sm">
              {feature.description}
            </Text>
          </Card>
        ));
        return (
          <Container size="lg" py="xl">
            <Group position="right">
              <Badge variant="filled" size="lg">
                サインアウト
              </Badge>
            </Group>
      
            <Title order={2} className={classes.title} align="center" mt="sm">
              グループ1
            </Title>
      
{/*          <Text color="dimmed" className={classes.description} align="center" mt="md">
              Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
              hunger drives it to try biting a Steel-type Pokémon.
            </Text>
*/}   
            <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {features}
            </SimpleGrid>
          </Container>
        );
}