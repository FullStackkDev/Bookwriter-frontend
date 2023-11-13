// Footer/design.js
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { styles } from "./style";

function Design() {
  const { boxContainer, instagramLink } = styles;
  return (
    <Box component="footer" sx={boxContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are here to help you at any time all over the world so don't
              hesitate to reach us at any moment.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Office no 1203, 12th Floor Al Hafeez Executive, 30-C3 Gulberg III,
              Lahore
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: sales@shayansolutions.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 408 786 5702
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={instagramLink}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Book Writer
            </Link>
            {` ${new Date().getFullYear()} .`}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Design;
