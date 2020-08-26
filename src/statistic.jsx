import React, { useState, useEffect } from "react";
import { fireBase } from "./config/config_firebase";

const Statistic = () => {
  const [data, setData] = useState([]);
  const db = fireBase.firestore();

  useEffect(() => {
    db.collection("Scores")
      .orderBy("Score")
      .get()
      .then((snapshot) =>
        snapshot.docs.forEach((el) =>
          setData((prevState) => [...prevState, el.data()])
        )
      );
  }, []);

  return (
    <div className="main__game-container">
      <div>
        <table className="statistic__container">
          <tr className="statistic__title">
            <th>Id</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
          {data.reverse().map((el, i) => {
            return (
              <tr key={i} className="statistic__list">
                <td>{i + 1}</td>
                <td> {el.Name}</td>
                <td>{el.Score}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default Statistic;
