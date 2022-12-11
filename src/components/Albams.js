import { Grid, Skeleton, Container } from '@mantine/core';
import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Image,
  } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../api/getData';

  const mockdata = [
    {
      title: '夏合宿',
      description: "32枚の写真",
      photo: 'https://i2.wp.com/star-be.com/wp-content/uploads/2019/08/DSC_2269.jpg?fit=665%2C443&ssl=1',
    },
    {
      title: '夏休み',
      description:'60枚の写真',
      photo: 'https://www.his-j.com/season/summer/__renew/images/mv_sp.jpg'
    },
    {
      title: '昨年度のハイライト',
      description:'30枚の写真',
      photo: 'https://www.fujiya-peko.co.jp/cake/images/img_delux_short_181015.jpg'
    },
  ];
  
  const useStyles = createStyles((theme) => ({
		photo: {
			marginTop: 0,
			marginLeft: 0,
			marginRight: 0,
		},

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



export async function Albams() {
  const { classes, theme } = useStyles();
  const guniq = '1';

  // URLからguniqを取得する
  // const [searchParams, setSearchParams] = useSearchParams();
  // const guniq = searchParams.get(guniq);

  const url = 'https://tadanodomain.gq:9090/v1/albams?guniq=' + guniq;
  const { data } = await getData(url);
  const albamList = data.map((albam) => {
    <Card key={albam.title} shadow="xl" radius="md" className={classes.card} p="xl" component="a" href={'./photos?t='+albam.name}>
      <Card.Section>
        <Image
          src = {albam.photo}
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {albam.name}
      </Text>
      {/* <Text size="sm" color="dimmed" mt="sm">
        {albam.description}
      </Text> */}
    </Card>
  })

  console.log(data);
  // dataをmockdataと入れ替える

  const newAlbam = () => {

  }

  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="xl" radius="md" className={classes.card} p="xl" component="a" href={'./photos?t='+feature.title}>
      <Card.Section>
        <Image
          src = {feature.photo}
          height={160}
          alt="Norway"
        />
      </Card.Section>
{/*           <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} /> */}
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
        首里高 3年
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