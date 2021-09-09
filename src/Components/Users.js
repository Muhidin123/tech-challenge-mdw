import React, { useState } from "react";

import styles from "../Styles/Users.module.scss";

const one = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];

const two = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];

export default function Users() {
  //State for the list obj
  const [obj, setObj] = useState([]);

  //Function to merge two list objs
  const merge = (obj1, obj2) => {
    return [...new Set([...obj1, ...obj2])];
  };

  //Function to set the obj state with merged objs
  const clicked = () => {
    if (obj.length === 0) setObj(merge(one, two));
    else alert("List already merged");
  };

  return (
    <div className={styles.puzzle}>
      <h1 className={styles.heading}>Heading One</h1>
      <hr className={styles.underline}></hr>

      <p>
        Remove the duplicates in 2 Javascript objects and output the list of
        distinct names in an unordered list when{" "}
        <button onClick={clicked} className='text_button'>
          this link
        </button>{" "}
        is clicked. If the operation has been completed already notify the user
        that this has already been done.
      </p>

      {/* Unordered list of merged items */}
      <ul>
        {obj.map((elem, i) => {
          return <li key={i}>{elem}</li>;
        })}
      </ul>
    </div>
  );
}
