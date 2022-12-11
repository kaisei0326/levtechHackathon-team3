
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
import { Masonry } from './Masonry';
import './style.css';
  
   import { useCookies } from 'react-cookie';
   import { getData } from '../api/getData';
  
  
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

  const AppStyles = createStyles((theme, {}) => ({
    root: {
      textAlign: 'center',
      background: theme.colors.gray[4],
      boxSizing: 'border-box',
      padding: 20,
    },
    item: {
      minWidth: 100,
      height: 120,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all .3s ease-out',
    },
    container: {
      width: '100%',
      position: 'relative',
    },
  }));
  
  export function Photos() {
    const [cookie, setCookie, removeCookie] = useCookies()
    const sessid = cookie.PHPSESSID
  
    let gobj;
    const getGroups = ()=>{
      let request = new XMLHttpRequest();
        request.open('GET', 'https://tadanodomain.gq:9090/v1/groups' + '?phpsessid=' + sessid, false);
        request.send(null);
  
        if (request.status == 200){
          let data = request.responseText;
          gobj = JSON.parse(data);
          console.log(gobj);
      }
    }
  
    getGroups();
  
    const { classes, theme } = useStyles();
    const features = gobj.map((feature) => (
      <Card key={feature.name} shadow="xs" radius="md" className={classes.card} p="xl" component="a" href={'./albams?gID='+feature.guniq}>
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md" >
          {feature.name}
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
        
        <Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
      </Container>
    );
  }

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
      title: 'Snacks',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
      title: 'Tower',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
      title: 'Tree',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
];