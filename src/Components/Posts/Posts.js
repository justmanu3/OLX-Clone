import React,{useState,useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import { postContext } from '../../store/postContext';

function Posts() {

  const {firebase} = useContext(FirebaseContext)
  const [products,setProducts] = useState([])
  const {setPostDetails,postDetails} = useContext(postContext)
  const navigate = useNavigate()
    useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPost = snapshot.docs.map((product)=>{
        return {
          ...product.data(),
          id : product.id
        }
      })
setProducts (allPost)  
    })
},[])

console.log('strings',postDetails);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

{ products.map(product=>{

return   <div   className="card" 
            onClick={()=>{
              setPostDetails(product)
              navigate('/view')
           }}>

            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.URL} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
          })
         
}

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">

        { products.slice(0,7).map(product=>{

return   <div   className="card" 
            onClick={()=>{
              setPostDetails(product)
              navigate('/view')
           }}>

            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.URL} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
          })
         
}
          </div>
        </div>
      </div>
  );
}

export default Posts;
