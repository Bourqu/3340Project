import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import { user, setUser } from "../_app.js";
import Head from "next/head";

export default function LoginPage() {
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });

  function handleLoginSubmission(event) {
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/auth/login`,
      data: {
        email: loginForm.email,
        password: loginForm.password,
      },
    })
      .then((response) => {
        if (localStorage.getItem("Atoken")) {
          localStorage.removeItem("Atoken");
          localStorage.removeItem("Admin");
        }
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("User", loginForm.email);
        window.location.replace("/");
      })
      .catch((error) => {
        if (error.response) {
          window.alert(
            "Please enter a valid email and password!\n\nPlease register if you are a new user."
          );
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

    setloginForm({
      email: "",
      password: "",
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setloginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <div style={{ padding: "10% 3%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Head>
          <title>Login</title>
          <meta charset="UTF-8" />
          <meta
            name="keywords"
            content="user, login, information, team, react, nextjs, NeoBay, Auction, Comp3340, 3340"
          />
          <meta name="author" content="The Squad 2022" />
          <meta name="description" content="This is our user login page" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h4" align="center">
            <img src="/neoBay-Logo.png" alt="NeoBay" width="300px" />
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              label="Email"
              type="email"
              name="email"
              value={loginForm.email}
              margin="dense"
              onChange={handleChange}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              placeholder="**********"
              value={loginForm.password}
              margin="dense"
              onChange={handleChange}
            />
            <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
              <Button
                variant="contained"
                onClick={handleLoginSubmission}
                sx={{ mr: 1 }}
                fullWidth
              >
                Login
              </Button>

              <Button
                variant="contained"
                href="/auth/register"
                sx={{ ml: 1 }}
                fullWidth
              >
                Register
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
