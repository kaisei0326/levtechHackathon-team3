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
import { useCookies } from 'react-cookie';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../api/getData';

let gobj

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



export function Albams() {
  const { classes, theme } = useStyles();
  const [cookie, setCookie, removeCookie] = useCookies()
  const guniq = '1d688ac0f65f9bdfb55d8625bdc010b24186bb60fce6c56409d66208c033775b';

  // URLからguniqを取得する
  // const [searchParams, setSearchParams] = useSearchParams();
  // const guniq = searchParams.get(gID);
  
  const sessid = cookie.PHPSESSID
  const urlAlbams = 'https://tadanodomain.gq:9090/v1/albams?guniq=' + guniq + '&phpsessid=' + sessid;


  // アルバム一覧の取得
  let request = new XMLHttpRequest();
    request.open('GET', urlAlbams, false);
    request.send(null);

  // let aList;

    if (request.status == 200){
      let data = request.responseText;
      // console.log(data);
      gobj = JSON.parse(data);
      // console.log(gobj);
    }
  // console.
  let aList = gobj
  console.log(aList)

  // アルバムの画像一覧取得
  const photos = aList.map((albam) => {
    const url = 'https://tadanodomain.gq:9090/v1/albams?auniq=' + albam.auniq + '&phpsessid=' + sessid;

    // let auniq = albam.auniq;
    // let albamName = albam.name;

    request.open('GET', url, false);
    request.send(null);

    if (request.status == 200){
      let data = request.responseText;
      // console.log(data);
      gobj = JSON.parse(data);
      // console.log(gobj);
    }
    return gobj;
  })

  console.log(photos)

  const albamList = aList.map((albam) => {
    return (
    <Card key={aList.name} shadow="xl" radius="md" className={classes.card} p="xl" component="a" href={'./photos?t='+aList.name}>
      <Card.Section>
        <Image
          src = "https://tadanodomain.gq:9090/imgs/dcfab9c84166cb704d7be7e310154664fe3c913e2e6d1c5ed106fd3e52839cfe.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {albam.name}
      </Text>
    </Card>
    );
  })

  console.log(albamList)


 

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

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {albamList}
      </SimpleGrid>
    </Container>
  );
}