import React, { useState } from "react";
import Design from "./design";
import { useParams } from "react-router-dom";
import { addSections } from "../../../../screens/book/api";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../../../helper/tosat";
import { validationRules } from "./validator/rules";
import { validateForm } from "../../../../utils/utils";

const AddSectionModal = ({
  showAddSectionModal,
  setShowAddSectionModal,
  parentSectionID,
}) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const [sectionData, setSectionData] = useState({
    title: "",
    content: "",
  });
  const [errors, setErrors] = useState({});

  const toggleModal = () => setShowAddSectionModal((prevState) => !prevState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(sectionData, validationRules);

    if (Object.keys(validationErrors).length === 0) {
      let payload = {};
      if (parentSectionID === null) {
        payload = { ...sectionData, book_id: id, parent_section_id: null };
      } else {
        payload = {
          ...sectionData,
          book_id: id,
          parent_section_id: parentSectionID,
        };
      }
      dispatch(addSections(token, payload))
        .then((response) => {
          if (response.data.success) {
            showToast(
              response.data.message,
              response.data.success ? "success" : "error"
            );
            setShowAddSectionModal((prevState) => !prevState);
          } else {
            setErrors(response.data.message.error);
          }
        })
        .catch((error) => {
          showToast(
            "Unable to Add Section, Internal Server Error, please try again!",
            "error"
          );
          console.log(error);
        });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Design
      showAddSectionModal={showAddSectionModal}
      toggleModal={toggleModal}
      handleSubmit={handleSubmit}
      sectionData={sectionData}
      setSectionData={setSectionData}
      errors={errors}
    />
  );
};

export default AddSectionModal;
