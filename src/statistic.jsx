import React, { useState, useEffect } from "react";
import { fireBase } from "./config/config_firebase";
import { firestore } from "firebase";

const Statistic = () => {
  // const [data, setData] = useState([]);
  // const newData = firestore.collection("Scores");

  // const documentsCollection = (doc) => {
  //   return { id: doc.id, ...doc.data() };
  // };

  // useEffect(() => {
  //   const subscribe = creatorsReference.onSnapshot((snapshot) => {
  //     const dataFromCollection = snapshot.docs.map(documentsCollection);
  //     setData(dataFromCollection);
  //   });
  //   return () => subscribe;
  // }, []);

  // // useEffect(() => {
  // //   const db = fireBase.firestore();
  // //   const newData = db.collection("Scores").get().then(setData(newData));
  // // }, []);

  return (
    <div className="main__game-container">
      <div>
        <table className="statistic__container">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Statistic;
