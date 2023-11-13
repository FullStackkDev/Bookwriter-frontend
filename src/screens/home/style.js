// styles.js
import bgImage from "../../asset/1.jpg";

export const styles = {
  containerStyles: {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  typographyMain: {
    fontWeight: "bold",
    fontSize: "3rem",
    letterSpacing: "2px",
    marginBottom: "1rem",
  },
  typographyTagLine: {
    fontStyle: "italic",
    fontSize: "1.2rem",
    display: "block",
    margin: "1rem 0",
  },
  typographyQuotes: {
    fontSize: "1.1rem",
  },
  typographyWriterName: {
    fontSize: "1rem",
    display: "block",
    marginTop: "1rem",
  },
  backgroundImageStyles: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    filter: "blur(8px)",
    webkitFilter: "blur(8px)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  badgeStyles: {
    variant: "standard",
    color: "info",
    container: true,
    mb: 2,
  },
  gridStyles: {
    textAlign: "center",
    my: 6,
    mx: "auto",
    px: 0.75,
  },
  bookCard: {
    maxWidth: 300,
    margin: "1rem",
  },
  bookTitleLink: { textDecoration: "none", color: "black", cursor: "pointer" },
  avatar: {
    bgcolor: "red",
  },
  cardHeader: {
    height: "100px",
  },
  cardContent: {
    height: "100px",
    margin: "1rem",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    margin: "2rem 0",
  },
};
