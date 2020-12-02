import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => {
  return <Loader type="ThreeDots" color="#00BFFF" height={200} width={200} />;
};

export default Spinner;
