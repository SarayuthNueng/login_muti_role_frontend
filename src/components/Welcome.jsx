// component welcome page
import React from 'react';
import {useSelector} from "react-redux";

const Welcome = () => {
  const {user} = useSelector((state) => state.auth); // value user from react-redux
  return (
    <div>
      <h1 className='title'>dashboard</h1>
      <h2 className='subtitle'>Welcome Back <strong>{user && user.name}</strong></h2>
    </div>
  );
}

export default Welcome;



