import React, { useEffect, useMemo, useState } from "react";
import Design from "./design";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSections } from "./api";
import { getBooks } from "../books/api";

function Book() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const books = useSelector((state) => state.books.books);
  const sections = useSelector((state) => state.sections.list);
  const token = useSelector((state) => state.auth.token);

  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [parentSectionID, setParentSectionID] = useState(null);

  const filterSections = useMemo(
    () =>
      sections.filter(
        (section) =>
          section.book_id === id && section.parent_section_id === null
      ),
    [sections]
  );

  const book = useMemo(() => books.find((book) => book._id === id), [books]);

  const handleAddMainSection = () => {
    setShowAddSectionModal((prevState) => !prevState);
    setParentSectionID(null);
  };

  useEffect(() => {
    if (!sections.length) {
      dispatch(getSections(token)).then(() => {});
    }
  }, [sections.length, dispatch, token]);

  useEffect(() => {
    if (!books.length) {
      dispatch(getBooks(token)).then(() => {});
    }
  }, [books.length, dispatch, token]);

  return (
    <Design
      filterSections={filterSections}
      handleAddMainSection={handleAddMainSection}
      showAddSectionModal={showAddSectionModal}
      setShowAddSectionModal={setShowAddSectionModal}
      parentSectionID={parentSectionID}
      setParentSectionID={setParentSectionID}
      book={book}
    />
  );
}

export default Book;
