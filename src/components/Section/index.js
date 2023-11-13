import React, { useMemo, useState } from "react";
import Design from "./design";
import { useSelector } from "react-redux";

const Section = ({ section, setShowAddSectionModal, setParentSectionID }) => {
  const sections = useSelector((state) => state.sections.list);

  const [showUpdateSectionModal, setShowUpdateSectionModal] = useState(false);
  const [showDeleteSectionModal, setShowDeleteSectionModal] = useState(false);

  const subSection = useMemo(
    () => sections.filter((sec) => sec.parent_section_id === section._id),
    [sections, section._id]
  );

  const handleAddSubSection = () => {
    setShowAddSectionModal((prevState) => !prevState);
    setParentSectionID(section._id);
  };

  const handleUpdateSection = () => {
    setShowUpdateSectionModal((prevState) => !prevState);
  };

  const handleDeleteSection = () => {
    setShowDeleteSectionModal((prevState) => !prevState);
  };

  return (
    <Design
      section={section}
      subSection={subSection}
      setShowAddSectionModal={setShowAddSectionModal}
      showUpdateSectionModal={showUpdateSectionModal}
      setShowUpdateSectionModal={setShowUpdateSectionModal}
      showDeleteSectionModal={showDeleteSectionModal}
      setShowDeleteSectionModal={setShowDeleteSectionModal}
      setParentSectionID={setParentSectionID}
      handleAddSubSection={handleAddSubSection}
      handleUpdateSection={handleUpdateSection}
      handleDeleteSection={handleDeleteSection}
    />
  );
};

export default Section;
