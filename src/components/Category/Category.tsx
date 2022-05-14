import React from "react";
import { Category } from "../../model";
import { useNavigate } from "react-router-dom"
import "./category.scss";
//import { ref } from "firebase/database";
//import * as firebase from "firebase/app";
//import { db } from "../../services/firebase";
//import { firebaseConfig } from "../../services/firebase";


export const categoriesList: Category[] = [
    {
        id: 1,
        typeId: 2,
        img: "../images/Icons/house.png",
        name: "House"
    },
    {
        id: 2,
        typeId: 2,
        img: "../images/Icons/food.png",
        name: "Food"
    },
    {
        id: 3,
        typeId: 2,
        img: "../images/Icons/sport.png",
        name: "Sport"
    },
    {
        id: 4,
        typeId: 2,
        img: "../images/Icons/health.png",
        name: "Health"
    },
    {
        id: 5,
        typeId: 2,
        img: "../images/Icons/car.png",
        name: "Car"
    },
    {
        id: 6,
        typeId: 2,
        img: "../images/Icons/cloth.png",
        name: "Cloth"
    },
    {
        id: 7,
        typeId: 2,
        img: "../images/Icons/lunch.png",
        name: "Lunch"
    },
    {
        id: 8,
        typeId: 1,
        img: "../images/Icons/salary.png",
        name: "Salary"
    },
    {
        id: 9,
        typeId: 1,
        img: "../images/Icons/other_inc.png",
        name: "Other income"
    },
]
 const Categories: React.FC<{cats: Category[]}> = ({cats}) => {
    const navigate = useNavigate();

    // const [catArray, setCatArray] = useState([]);
    // useEffect(() => {
    //     onValue(ref(db), (snapshot) => {
    //         setCatArray([]);
    //         const data = snapshot.val();
    //         if(data !== null) {
    //             Object.values(data).map((todo) => {
    //                 setCatArray((oldArray: any) => [...oldArray, todo]);
    //             })
    //         }
    //     })
    // }, []);
//-----------------------------------------------------
    // let CopyCatArray = {};
    //         let CategoriesList: any = [];
    //         firebase.database().ref('CategoriesList/').on('value', function(snapshot: any){
        
    //             CopyCatArray = snapshot.val();
    //             CategoriesList = Object.keys(CopyCatArray);
    //             console.log(CategoriesList);
// });
//-------------------------------------------------------
// function getSynchronizedArray(firebaseRef: any) {
//     let list: any = [];
//     syncChanges(list, firebaseRef);
//     return list;
//   }
  
//   function syncChanges(list: any, ref: any) {
//     ref.on('CategoriesList/', function _add(snap: any, prevChild: any) {
//       var data = snap.val();
//       data.$id = snap.key(); // assumes data is always an object
//       var pos = positionAfter(list, prevChild);
//       list.splice(pos, 0, data);
//     });
//   }
//     function positionFor(list: any, key: any) {
//         for(var i = 0, len = list.length; i < len; i++) {
//           if( list[i].$id === key ) {
//             return i;
//           }
//         }
//         return -1;
//       }

//       function positionAfter(list: any, prevChild: any) {
//         if( prevChild === null ) {
//           return 0;
//         }
//         else {
//           var i = positionFor(list, prevChild);
//           if( i === -1 ) {
//             return list.length;
//           }
//           else {
//             return i+1;
//           }
//         }
//       }
//       let ref = db;
//       let list = getSynchronizedArray(ref);
//-------------------------------------------------

// import { getDatabase, ref, onValue } from "firebase/database";

// const db = getDatabase();
// const dbRef = ref(db, 'CategoriesList/');

// onValue(dbRef, (snapshot) => {
//   snapshot.forEach((childSnapshot) => {
//     const childKey = childSnapshot.key;
//     const childData = childSnapshot.val();
//     // ...
//   });
// }, {
//   onlyOnce: true
// });

    return (
        <div className="cat-block">
            {/* { CategoriesList } */}
                {cats.map((item) => (
                    
                    <div className="cat-item" key={item.id}>
                        <div className="cat-icon">
                            <img src={item.img} alt="" />
                        </div>
                        <p className="cat-name">{item.name}</p>
                    </div> 
                ))
                }
                <div className="cat-item">
                    <div className="cat-icon">
                        <img className="cat-icon" src="../images/Icons/all_cat.png" alt=""
                        onClick={() => {
                            navigate("/allCategories")
                             }}/>
                    </div>
                    <p className="cat-name">All Categories</p>
                </div>
            </div>
    );
};

export default Categories;