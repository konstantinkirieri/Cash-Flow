// import { set } from "firebase/database";
// import { getCategoryRefById } from "../../../services/firebase";
// import { categoryRef } from "../../../services/firebase";
// import { onValue } from "firebase/database";
// import { useCallback } from "react";

// export const ADD_CATEGORY = "CATEGORIES::ADD_CATEGORY";
// export const DELETE_CATEGORY = "CATEGORIES::DELETE_CATEGORY";
// export const SET_CATEGORIES = "CATEGORIES::SET_CATEGORIES";

// export const addItem = (newCategory: any) => ({
//   type: ADD_CATEGORY,
//   payload: newCategory,
// });
// export const deleteItem = (id: number | string) => ({
//     type: DELETE_CATEGORY,
//     payload: {
//       categoryId: id,
//     },
//   });

//   export const addCategoryWithFb = (newCategory: any) => (dispatch: any) => {
//     set(getCategoryRefById(newCategory.id), { empty: true });
//     set(getCategoryRefById(newCategory.id), newCategory);
//   };

//   export const setCategories = (categories: any) => ({
//     type: SET_CATEGORIES,
//     payload: categories,
//   });
  
//   export const initCategoriesTracking = () => (dispatch: any) => {
//     // onValue(categoryRef, (catSnap: any) => {
//     //   console.log(catSnap);
//     //   const newCategories: any[] = [];
//     //   catSnap.forEach((snapshot: any) => {
//     //     newCategories.push(snapshot.val());
//     //   });
//     onValue(categoryRef, (snapshot) => {
//                 const CategoriesList: any = [];
//                 let CopyCatArray = snapshot.val();
//                 Object.keys(CopyCatArray).forEach(() => {
//                   CategoriesList.push(CopyCatArray);
//                   console.log(CategoriesList);
//               });   
//           })
//     }
import { API } from "../../GetFetch/GetFetch";

export const REQUEST_CATEGORIES_LOADING = "CATEGORIES::REQUEST_LOADING";
export const REQUEST_CATEGORIES_FAILURE = "CATEGORIES::REQUEST_FAILURE";
export const REQUEST_CATEGORIES_SUCCESS = "CATEGORIES::REQUEST_SUCCESS";

export const getCategoriesLoading = () => ({
  type: REQUEST_CATEGORIES_LOADING,
});
export const getCategoriesSuccess = (categories: any) => ({
  type: REQUEST_CATEGORIES_SUCCESS,
  payload: categories,
});
export const getCategoriesFailure = (err: any) => ({
  type: REQUEST_CATEGORIES_FAILURE,
  payload: err,
});

export const getCategories = () => async (dispatch: any) => {
  dispatch(getCategoriesLoading());

  try {
    const response = await fetch(API);
    console.log(response);

    if (!response.ok) {
      throw new Error("not ok");
    }

    const result = await response.json();

    dispatch(getCategoriesSuccess(result));

  } catch (err: any) {
    console.warn(err);
    dispatch(getCategoriesFailure(err));
  }
};