import React from "react";
import { styles } from "./style";
import { Modal, Box, Typography, Slide, Divider, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Design = ({ showDeleteSectionModal, toggleModal, handleSubmit }) => {
  const { modal, icons, divider, boxForm } = styles;
  return (
    <Modal open={showDeleteSectionModal} onClose={toggleModal} sx={modal}>
      <Slide in={showDeleteSectionModal} timeout={500}>
        <Box
          position="relative"
          min-width="300px"
          borderRadius="xl"
          backgroundColor="#eeeeee"
          shadow="xl"
        >
          <Box
            display="flex"
            alginitems="center"
            justifyContent="space-between"
            p={2}
          >
            <Typography variant="h5">Delete Section</Typography>
            <CloseIcon fontSize="medium" sx={icons} onClick={toggleModal} />
          </Box>
          <Divider sx={divider} />
          <Box component="form" onSubmit={handleSubmit} sx={boxForm} p={2}>
            <Typography variant="h6">
              ARE YOU SURE YOU WANT TO DELETE THIS SECTION?
            </Typography>
            <Divider sx={divider} />
            <Box display="flex" justifyContent="space-between" p={1.5}>
              <Button variant="gradient" color="dark" onClick={toggleModal}>
                close
              </Button>
              <Button type="submit" variant="gradient" color="info">
                Delete Section
              </Button>
            </Box>
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
};

export default Design;
