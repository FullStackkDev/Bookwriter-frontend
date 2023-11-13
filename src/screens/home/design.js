import React from "react";
import Container from "@mui/material/Container";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Pagination,
  Typography,
} from "@mui/material";
import bgImage from "../../asset/1.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import SearchIcon from "@mui/icons-material/Search";

import Footer from "../../components/Footer";
import { styles } from "./style";
import { truncateText } from "../../helper/function";
import { NavLink } from "react-router-dom";

function Design({
  currentPage,
  searchQuery,
  currentCards,
  filteredBooks,
  cardsPerPage,
  handlePageChange,
  handleSearch,
}) {
  const {
    containerStyles,
    typographyMain,
    typographyTagLine,
    typographyQuotes,
    typographyWriterName,
    backgroundImageStyles,
    badgeStyles,
    gridStyles,
    bookCard,
    avatar,
    cardHeader,
    cardContent,
    pagination,
    bookTitleLink,
  } = styles;
  return (
    <>
      <Box sx={containerStyles}>
        <div style={backgroundImageStyles} />
        <Container>
          <Typography
            variant="h1"
            color="primary"
            align="center"
            style={typographyMain}
          >
            Book Writer
          </Typography>
          <Typography variant="h5" color="textSecondary" align="center">
            <span style={typographyTagLine}>Write to Live</span>
            <span style={typographyQuotes}>
              There is no greater agony than bearing an untold story inside you.
            </span>
            <span style={typographyWriterName}>- Maya Angelou</span>
          </Typography>
        </Container>
      </Box>

      <Grid
        container
        item
        xs={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={gridStyles}
      >
        <Badge sx={badgeStyles} badgeContent="Book Writer" container />
        <Typography variant="h4" fontWeight="bold">
          Write with the door closed, rewrite with the door open
        </Typography>
        <Typography variant="body1" color="text">
          - Stephen King
        </Typography>
      </Grid>

      <Container>
        <OutlinedInput
          type="text"
          placeholder="Search books by name"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          fullWidth
          value={searchQuery}
          onChange={handleSearch}
        />
      </Container>

      <Grid
        container
        spacing={4}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {currentCards.map((book, index) => (
          <Grid item key={index}>
            <Card sx={bookCard}>
              <CardHeader
                avatar={
                  <Avatar sx={avatar} aria-label="book">
                    {book.title.charAt(0)}
                  </Avatar>
                }
                sx={cardHeader}
                title={
                  <NavLink to={"/book/123"} style={bookTitleLink}>
                    <Typography>{truncateText(book.title, 5)}</Typography>
                  </NavLink>
                }
                subheader={book.publishedDate}
              />
              <NavLink to={"/book/123"} style={bookTitleLink}>
                <CardMedia
                  component="img"
                  height="194"
                  image={bgImage}
                  alt={book.title}
                />
              </NavLink>
              <CardContent sx={cardContent}>
                <Typography variant="body2" color="text.secondary">
                  {truncateText(book.description, 25)}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(filteredBooks.length / cardsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        style={pagination}
      />

      <Footer />
    </>
  );
}

export default Design;
