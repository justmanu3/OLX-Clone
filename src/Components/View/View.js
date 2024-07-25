import React,{useEffect,useContext,useState} from 'react';
import './View.css';
import { postContext } from '../../store/postContext';
import { AuthContext, FirebaseContext } from '../../store/Context';

function View() {
 const [userDetails,setUserDetails] = useState()
 const {postDetails} = useContext(postContext)
 const {firebase} = useContext(FirebaseContext)
//  const {userDetails}= useContext(AuthContext)
//1

//  useEffect(()=>{
//   const {userId} = postDetails
//   firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
//     res.forEach(doc => {
//       setUserDetails(doc.data())
//     });
//   })
//  },[postDetails,setUserDetails])


//2

useEffect(() => {
  if (postDetails && postDetails.userId) {
    const { userId } = postDetails;

    firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
      res.forEach(doc => {
        setUserDetails(doc.data());
      });
    });
    console.log('working');
  }
}, [postDetails]);

//3

// useEffect(() => {
//   if (postDetails && postDetails.userId) {
//     const { userId } = postDetails;

//     const fetchUserDetails = async () => {
//       try {
//         const userSnapshot = await firebase.firestore().collection('users').where('id', '==', userId).get();

//         if (!userSnapshot.empty) {
//           const userDetails = userSnapshot.docs[0].data();
//           console.log('User Details:', userDetails);
//           setUserDetails(userDetails);
//         } else {
//           console.log('No user found with the specified ID.');
//         }
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserDetails();
//   }
// }, [postDetails,firebase]);


  console.log('1234',postDetails);
  console.log('userDetails',userDetails);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.URL}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>Tue May 04 2021</span>
        </div>
        
     {userDetails &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>     }
        
      </div>
    </div>
  );
}
export default View;
