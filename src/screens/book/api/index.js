import axios from "../../../api";
import {
  addSection,
  deleteSection,
  setSections,
  updateSection,
} from "../../../Redux/store/sectionsSlice";

export const getSections = (token) => async (dispatch) => {
  try {
    const response = await axios.get("/section", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success) {
      dispatch(setSections(response.data.payload));
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const addSections = (token, payload) => async (dispatch) => {
  try {
    const response = await axios.post("/section", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success) {
      dispatch(addSection(response.data.payload));
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const updateSections =
  (token, payload, sectionId) => async (dispatch) => {
    try {
      const response = await axios.put(`/section/${sectionId}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        dispatch(updateSection(response.data.payload));
      }
      return response;
    } catch (error) {
      return error;
    }
  };

export const deleteSections = (token, sectionId) => async (dispatch) => {
  try {
    const response = await axios.delete(`/section/${sectionId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success) {
      dispatch(deleteSection(response.data.payload));
    }
    return response;
  } catch (error) {
    return error;
  }
};
