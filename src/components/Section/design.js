import React from "react";
import { Box, Button, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Section from ".";
import { styles } from "./style.js";
import UpdateSectionModal from "../Modal/SectionModal/UpdateSectionModal/index.js";
import DeleteSectionModal from "../Modal/SectionModal/DeleteSectionModal/index.js";

const Design = ({
  section,
  subSection,
  setShowAddSectionModal,
  showUpdateSectionModal,
  setShowUpdateSectionModal,
  showDeleteSectionModal,
  setShowDeleteSectionModal,
  setParentSectionID,
  handleAddSubSection,
  handleUpdateSection,
  handleDeleteSection,
}) => {
  const { sectionContainer, introContainer, title, buttonsStyling } = styles;

  return (
    <>
      <Box sx={sectionContainer}>
        <Box sx={introContainer}>
          <Typography sx={title}>{section.title}</Typography>
          <Box>
            <Button
              variant={"text"}
              size="small"
              sx={buttonsStyling}
              endIcon={<AddIcon />}
              onClick={handleAddSubSection}
            >
              Add
            </Button>
            <Button
              color="secondary"
              variant={"text"}
              size="small"
              sx={buttonsStyling}
              endIcon={<EditIcon />}
              onClick={handleUpdateSection}
            >
              Edit
            </Button>
            <Button
              variant={"text"}
              size="small"
              color="error"
              sx={buttonsStyling}
              endIcon={<DeleteForeverIcon />}
              onClick={handleDeleteSection}
            >
              Delete
            </Button>
          </Box>
        </Box>
        <Typography m={0}>{section.content}</Typography>

        {subSection.length !== 0 &&
          subSection?.map((childSection) => (
            <Section
              key={childSection._id}
              section={childSection}
              setShowAddSectionModal={setShowAddSectionModal}
              setParentSectionID={setParentSectionID}
            />
          ))}
      </Box>
      {showUpdateSectionModal && (
        <UpdateSectionModal
          showUpdateSectionModal={showUpdateSectionModal}
          setShowUpdateSectionModal={setShowUpdateSectionModal}
          section={section}
        />
      )}
      {showDeleteSectionModal && (
        <DeleteSectionModal
          showDeleteSectionModal={showDeleteSectionModal}
          setShowDeleteSectionModal={setShowDeleteSectionModal}
          section={section}
        />
      )}
    </>
  );
};

export default Design;
