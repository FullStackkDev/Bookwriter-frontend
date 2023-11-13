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
  showAddSectionModal,
  toggleModal,
  handleSubmit,
  sectionData,
  setSectionData,
  errors,
}) => {
  const { modal, icons, divider, boxForm } = styles;
  return (
    <Modal open={showAddSectionModal} onClose={toggleModal} sx={modal}>
      <Slide in={showAddSectionModal} timeout={500}>
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
            <Typography variant="h5">Add Section</Typography>
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
              InputLabelProps={{ shrink: true }}
            />
            <Divider sx={divider} />
            <Box display="flex" justifyContent="space-between" p={1.5}>
              <Button variant="gradient" color="dark" onClick={toggleModal}>
                close
              </Button>
              <Button type="submit" variant="gradient" color="info">
                Add Section
              </Button>
            </Box>
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
};

export default Design;
