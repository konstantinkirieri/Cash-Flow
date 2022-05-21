import { onValue } from "firebase/database";
import { categoryRef } from "../../../services/firebase";

export const SET_CATEGORIES = "CHATS::SET_CHATS";

export const setCategories = (categories: any) => ({
    type: SET_CATEGORIES,
    payload: categories,
  });

export const initCategoriesTracking = () => (dispatch: any) => {
    // onValue(categoryRef, (categoriesSnap) => {
    //   console.log(categoriesSnap);
    //   const newCategories: any[] = [];
  
    //   categoriesSnap.forEach((snapshot) => {
    //     newCategories.push(snapshot.val());
    //   });
    onValue(categoryRef, (catSnap) => { 
        console.log(catSnap) ; 
        let CategoriesList: any[] = [];
        let CopyCatArray: any = catSnap.val;
        Object.keys(CopyCatArray).forEach((id) => {
            CategoriesList.push(CopyCatArray[id]);
            //console.log(CategoriesList);
        })    
      dispatch(setCategories(CategoriesList));
    });
  };

  //     onValue(categoryRef, (snapshot) => {
           
        //         let CopyCatArray = snapshot.val();
        //         Object.keys(CopyCatArray).forEach((id) => {
        //           CategoriesList.push(CopyCatArray[id]);
        //           console.log(CategoriesList);
        //       })    
        //   });
        // }
        //     )