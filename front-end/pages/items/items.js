/* This is our items page.  Needs to be queried from API endpoint to retrieve list of items up for auction. 
Right now it's attached to an endpoint that just returns basic items, but that obvs needs to be dynamic. */

import React from "react";
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Items() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/items/items`).then((res) =>
      res.json().then((data) => {
        setData(data);
        console.log(data);
      })
    );
  }, []);

  /* below, right now we're just returning all the items in our database.  This needs to be
  clickable... material ui components can be used, basically just better looking and increased functionality.
  */
  return (
    <Container
      sx={{ 
        maxWidth: 600, 
        width: "100%", 
        justifyContent: "center",
        alignItems: "center", 
        margin: "auto",
        border: 1, 
        borderColor: '#1D1B27'
      }}
    >
      <h1><i>NEOBAY CATALOGUE</i></h1>

      {
        typeof data === "undefined" ?  (<p><i>Loading...</i></p>) : (data.map((item, i) => 
          
          <Container>
            <Box 
              sx={{ 
                  maxWidth: 600, 
                  width: "100%", 
                  justifyContent: "center",
                  alignItems: "center", 
                  margin: "auto",
                  border: 1, 
                  borderColor: '#1D1B27'
              }}
            >
              <h2>Photo of Item will go here</h2>

              <Typography variant="h4" align="center">
                  <img src="/neoBay-Logo.png" alt="NeoBay" width="500px"/>
              </Typography>

            </Box>
            
            <h3 key={i}> {item.name} </h3>
            <Button href={`/items/${item.id}`}>
              See Details
            </Button>

          </Container>

        ))
      }

    <ImageList 
      sx={{ 
        maxWidth: 600, 
        height: 'vh',
        alignItems: "center",
        justifyContent: "center",
        margin: 'auto',
        border: 1,
        borderColor: '#1D1B27'

      }}>

      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />

          <ImageListItemBar
            title={item.title}
            subtitle={<span>User: {item.author}</span>}
            position="below"
          />

            <Button href={`/items/${item.id}`}>
              See Details
            </Button>

            <br/><br/>

        </ImageListItem>

      ))}
    </ImageList>


    </Container>

  );

}



const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
