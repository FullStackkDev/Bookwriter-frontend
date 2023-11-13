import React from "react";
import { styles } from "./style";
import {
  Modal,
  Box,
  Typography,
  Slide,
  Divider,
  Button,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { handleChange } from "../../../../helper/function";

const Design = ({
  showUpdateSectionModal,
  toggleModal,
  handleSubmit,
  sectionData,
  setSectionData,
  errors,
}) => {
  const { modal, icons, divider, boxForm } = styles;
  return (
    <Modal open={showUpdateSectionModal} onClose={toggleModal} sx={modal}>
      <Slide in={showUpdateSectionModal} timeout={500}>
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
            <Typography variant="h5">Update Section</Typography>
            <CloseIcon fontSize="medium" sx={icons} onClick={toggleModal} />
          </Box>
          <Divider sx={divider} />
          <Box component="form" onSubmit={handleSubmit} sx={boxForm} p={2}>
            <TextField
              multiline
              margin="normal"
              fullWidth
              id="title"
              label="Title"
              name="title"
              onChange={(e) => {
                handleChange(e, sectionData, setSectionData);
              }}
              autoFocus
              error={errors.title ? true : false}
              helperText={errors.title}
              value={sectionData.title}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              multiline
              margin="normal"
              fullWidth
              name="content"
              label="Content"
              id="content"
              onChange={(e) => {
                handleChange(e, sectionData, setSectionData);
              }}
              error={errors.content ? true : false}
              helperText={errors.content}
              value={sectionData.content}
              InputLabelProps={{ shrink: true }}
            />
            <Divider sx={divider} />
            <Box display="flex" justifyContent="space-between" p={1.5}>
              <Button variant="gradient" color="dark" onClick={toggleModal}>
                close
              </Button>
              <Button type="submit" variant="gradient" color="info">
                Update Section
              </Button>
            </Box>
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
};

export default Design;
