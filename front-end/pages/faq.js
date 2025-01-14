/**
 * FAQ page for NeoBay based on documentation criteria
 */

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import Head from "next/head";

function Faq() {
  return (
    // added some padding around whole page
    <div style={{ padding: "3%", height: "100%" }}>
      {/* Meta Tags */}
      <Head>
        <title>FAQ</title>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="faq, Frequently Asked Questions, tutorial, react, nextjs, NeoBay, Auction, Comp3340, 3340"
        />
        <meta name="author" content="The Squad 2022" />
        <meta
          name="description"
          content="This is the FAQ page for answering some common questions and functionality of our site"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* title as Typography type */}
      <Typography
        color="black"
        variant="h4"
        sx={{ pb: 1.5 }}
        style={{ fontWeight: "bold" }}
      >
        Frequently Asked Questions
      </Typography>
      {/* Divider to seperate content */}
      <Divider dark sx={{ borderBottomWidth: "2px", bgcolor: "grey" }} />
      <Typography sx={{ pb: 3, pt: 1.5 }}>
        Some common questions about the functionality of our website.
      </Typography>
      {/* First Accordion */}
      <Accordion>
        {/* summary provides visible questions */}
        <AccordionSummary
          // used icon for expansion
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#1D1B27",
          }}
        >
          <Typography color="white">Q1: What is an auction site?</Typography>
        </AccordionSummary>
        {/* AccordionDetails are the content or "answers" */}
        <AccordionDetails
          sx={{
            backgroundColor: "#F3F3F3",
          }}
        >
          <Typography>
            {" "}
            Customer are able to post and purchase items. This will be an
            auction style website where users can participate in a bidding
            process to buy and sell items.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Second Accordion */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#1D1B27",
          }}
        >
          <Typography color="white">
            Q2: How do you purchase a product?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F3F3F3",
          }}
        >
          <Typography>
            {" "}
            You can purchase a product by having the winning bid on an item.
            Products are sold to customers with the highest bid. It is important
            to note that typically some auctions start with a minimum bid.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Third Accordion */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#1D1B27",
          }}
        >
          <Typography color="white">Q3: How do you add items?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F3F3F3",
          }}
        >
          <Typography>
            {" "}
            You can add items by creating an ad via your account and acessing
            the 'create an item' page located in the items page.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Fourth Accordion */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#1D1B27",
          }}
        >
          <Typography color="white">
            Q4: How do you access Admin side?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F3F3F3",
          }}
        >
          <Typography>
            {" "}
            Admin can access the 'Admin Login' page by adding the path
            '/auth/admin' to homepage link. Admin will be prompted to login.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Fifth Accordion */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#1D1B27",
          }}
        >
          <Typography color="white">
            Q5: Where is all the account and items information stored?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F3F3F3",
          }}
        >
          <Typography>
            {" "}
            Account and items information is stored in our SQLite database in a
            database.db file located in our backend directory. Our database
            contains an admins table to store all admin username and passwords,
            a bids table for bids, an items table to store all information on
            products up for bid and their picture saved as a text file, and a
            users table to store all customer information.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Faq;
