import React, { useState, useEffect, useContext } from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';

function View() {
  const [userDetails, setUserDetails] = useState({});
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const { userId } = postDetails;
    console.log(userId);
    firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
      console.log('Firestore Query Result:', res);
      res.forEach(doc => {
        const userDetailsData = doc.data();
        console.log('User Details:', userDetailsData);
        setUserDetails(userDetailsData);
      });
    });
  }, [postDetails, firebase]);
  
  console.log(userDetails);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>

        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
