import React from "react";
import Design from "./design";
import { deleteSections } from "../../../../screens/book/api";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../../../helper/tosat";

const DeleteSectionModal = ({
  showDeleteSectionModal,
  setShowDeleteSectionModal,
  section,
}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const toggleModal = () =>
    setShowDeleteSectionModal((prevState) => !prevState);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(deleteSections(token, section._id))
      .then((response) => {
        if (response.data.success) {
          showToast(
            response.data.message,
            response.data.success ? "success" : "error"
          );
          setShowDeleteSectionModal((prevState) => !prevState);
        } else {
          showToast(
            response.data.message,
            response.data.success ? "success" : "error"
          );
        }
      })
      .catch((error) => {
        showToast(
          "Unable to Delete Section, Internal Server Error, please try again!",
          "error"
        );
        console.log(error);
      });
  };

  return (
    <Design
      showDeleteSectionModal={showDeleteSectionModal}
      toggleModal={toggleModal}
      handleSubmit={handleSubmit}
    />
  );
};

export default DeleteSectionModal;
