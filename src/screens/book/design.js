import React from "react";
import Section from "../../components/Section";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./style.js";
import AddSectionModal from "../../components/Modal/SectionModal/AddSectionModal/index.js";
import { getFullDate } from "../../helper/function.js";

const Design = ({
  filterSections,
  handleAddMainSection,
  showAddSectionModal,
  setShowAddSectionModal,
  parentSectionID,
  setParentSectionID,
  book,
}) => {
  const {
    mainContainer,
    mainContainerBook,
    bookTitle,
    bookAuthorDate,
    bookDescription,
    AddSectionButtonContainer,
  } = styles;
  return (
    <>
      {!book && (
        <Typography variant="h6" sx={bookTitle}>
          NO BOOK FOUND.
        </Typography>
      )}
      {book && (
        <>
          <Box sx={mainContainer}>
            <Box sx={mainContainerBook}>
              <Typography variant="h4" sx={bookTitle}>
                {book?.title ?? ""}
              </Typography>

              <Typography variant="h6" sx={bookAuthorDate}>
                {getFullDate(book?.createdAt, "LL")}
              </Typography>
              <Typography sx={bookDescription}>
                {book?.description ?? ""}
              </Typography>
            </Box>

            <Box sx={AddSectionButtonContainer}>
              <Button variant={"contained"} onClick={handleAddMainSection}>
                Add Section
              </Button>
            </Box>
            {filterSections?.map((section) => (
              <Section
                key={section._id}
                section={section}
                setShowAddSectionModal={setShowAddSectionModal}
                setParentSectionID={setParentSectionID}
              />
            ))}
            {filterSections.length === 0 && (
              <Typography variant="h6" sx={bookTitle}>
                NO SECTION FOUND PLEASE ADD SECTION
              </Typography>
            )}
          </Box>

          {showAddSectionModal && (
            <AddSectionModal
              showAddSectionModal={showAddSectionModal}
              setShowAddSectionModal={setShowAddSectionModal}
              parentSectionID={parentSectionID}
            />
          )}
        </>
      )}
    </>
  );
};

export default Design;
