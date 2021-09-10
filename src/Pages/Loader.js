import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default class Loading extends React.Component {
  //other logic
  render() {
    return (
      <div className='content-spinner'>
        <Loader type='ThreeDots' color='#debf79' height={80} width={80} />
      </div>
    );
  }
}
