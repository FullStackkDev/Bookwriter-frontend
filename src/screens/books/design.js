import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  Pagination,
  OutlinedInput,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import Footer from "../../components/Footer";
import { styles } from "./style";
import {
  countPages,
  getFirstCharacter,
  getFullDate,
  truncateText,
} from "../../helper/function";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

const Design = ({
  user,
  currentPage,
  booksWritten,
  booksCollab,
  activeTab,
  handleTabType,
  handleSearch,
  searchQuery,
  currentCards,
  filteredBooks,
  cardsPerPage,
  handlePageChange,
  bookloading,
  userloading,
}) => {
  const {
    avatar,
    bookCard,
    cardHeader,
    cardContent,
    pagination,
    tabsContainer,
    filterContainerMain,
    bookTitleLink,
  } = styles;

  return (
    <>
      <Container>
        <Grid container justifyContent="center" py={6}>
          <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              {!userloading ? (
                <>
                  <Box display="flex" alignItems="center">
                    <Avatar sx={avatar} aria-label="book">
                      {getFirstCharacter(user?.first_name)}
                      {getFirstCharacter(user?.last_name)}
                    </Avatar>
                    <Typography
                      variant="h3"
                      ml={2}
                    >{`${user.first_name} ${user.last_name}`}</Typography>
                  </Box>
                </>
              ) : (
                <Container>
                  <Grid container justifyContent="center" py={6}>
                    <CircularProgress />
                  </Grid>
                </Container>
              )}
              <Button variant="outlined" color="info" size="small">
                Write a book
              </Button>
            </Box>
            <Grid container spacing={3} mb={3}>
              <Grid item>
                <Typography component="span" variant="body2" color="text">
                  {`${booksWritten} Books`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="span" variant="body2" color="text">
                  {`${booksCollab} Collaborator`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" xs={12} lg={4} mx="auto">
          <Tabs value={activeTab} onChange={handleTabType} sx={tabsContainer}>
            <Tab label="My books" value="My books" />
            <Tab label="Coloaded books" value="Coloaded books" />
          </Tabs>
        </Grid>
      </Container>

      <Container sx={filterContainerMain}>
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

      {!bookloading ? (
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
                      {getFirstCharacter(book?.title)}
                    </Avatar>
                  }
                  sx={cardHeader}
                  title={
                    <NavLink to={`/book/${book._id}`} style={bookTitleLink}>
                      <Typography>{truncateText(book.title, 5)}</Typography>
                    </NavLink>
                  }
                  subheader={getFullDate(book.createdAt, "LL")}
                />
                <NavLink to={`/book/${book._id}`} style={bookTitleLink}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={book.image}
                    alt={book.title}
                  />
                </NavLink>
                <CardContent sx={cardContent}>
                  <Typography variant="body2" color="text.secondary">
                    {truncateText(book.description, 25)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Container>
          <Grid container justifyContent="center" py={6}>
            <CircularProgress />
          </Grid>
        </Container>
      )}

      <Pagination
        count={countPages(filteredBooks.length, cardsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        style={pagination}
      />

      <Footer />
    </>
  );
};

export default Design;
