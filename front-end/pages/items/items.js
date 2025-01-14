/* This is our items page.  Needs to be queried from API endpoint to retrieve list of items up for auction. 
Right now it's attached to an endpoint that just returns basic items, but that obvs needs to be dynamic. */

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import convertToImage from "../../src/utils/base64";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function Items() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/items/items`).then((res) =>
      res.json().then((data) => {
        setData(data);
      })
    );
  }, []);

  function directToItem() {
    localStorage.getItem("token")
      ? window.location.replace("../items/createItem")
      : window.alert("Please log in to post an item");
  }

  /*const [categories, setCategory] = React.useState("");
  const handleChange = (event, SelectChangeEvent) => {
    const category = document.getElementById("categorySelect").value;
    Items(category=category);
  };*/

  return (
    // contained in div for optional styling
    <div style={{ padding: "3%" }}>
      <Box>
        {/* used for responsive layout as grids adapts to screen size and orientation */}
        <Grid container justifyContent="space-between">
          <Typography color="black" variant="h4" style={{ fontWeight: "bold" }}>
            NeoBay Catalogue
          </Typography>
          <Button variant="outlined" onClick={directToItem}>
            Create an Item
          </Button>
        </Grid>
        {/* divider */}
        <Divider
          sx={{ bgcolor: "grey", mb: 5, mt: 2, borderBottomWidth: "2px" }}
        />
      </Box>

      {/* items */}
      <Grid
        container
        sx={{
          // center item stuff
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Grid container justifyContent="center" textAlign="center">
          <Box sx={{ minWidth: 200 }} textAlign="center">
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Category
              </InputLabel>

              <NativeSelect
                defaultValue={1}
                //onChange={handleChange}
                inputProps={{
                  name: "ItemCategory",
                  id: "categorySelect",
                }}
              >
                <option value={1}>All</option>
                <option value={2}>Sports</option>
                <option value={3}>Technology</option>
                <option value={4}>Music</option>
                <option value={5}>Fitness</option>
                <option value={6}>Automobile</option>
                <option value={7}>Other</option>
              </NativeSelect>
            </FormControl>
          </Box>

          <Divider
            sx={{ bgcolor: "grey", mb: 5, mt: 2, borderBottomWidth: "2px" }}
          />
        </Grid>
        {/* items from database */}
        {data.map((item, i) => (
          // create an item in grid
          <Grid item key={i}>
            <Box
              sx={{
                width: 300,
                height: 330,
                m: 1,
                backgroundColor: "#F7F7F7",
                "&:hover": {
                  backgroundColor: "#BABABA",
                  opacity: [0.9, 0.8, 0.9],
                },
                borderRadius: 1,
              }}
              textAlign="center"
            >
              <Box
                sx={{
                  width: 300,
                  height: 200,
                  borderRadius: 1,
                }}
                maxwidth="lg"
                component="img"
                // show image
                src={convertToImage(item.image_file)}
                alt={item.title}
                loading="lazy"
              ></Box>
              <Typography key={i} variant="h6" align="center">
                {/* item name */}
                {item.name}
              </Typography>
              <Typography variant="subtitle2" align="center">
                {/* author */}
                {item.author}
              </Typography>
              <Typography variant="body2" align="center">
                Current bid:{" $" + item.currHighestBid}
              </Typography>

              {/* button that allows you to view individual item on another page */}
              <Button
                sx={{ mt: 1 }}
                variant="contained"
                align="center"
                href={`/items/${item.id}`}
                size="small"
              >
                See Details
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
