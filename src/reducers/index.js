import { combineReducers } from "redux";

// Reducer
const selectImageReducer = (selectedImage = null, action) => {
  if (action.type === "SELECTED_IMAGE") {
    return action.payload;
  }

  return selectedImage;
};
const fetchImagesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_IMAGES":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  selectedImage: selectImageReducer,
  images: fetchImagesReducer,
});
