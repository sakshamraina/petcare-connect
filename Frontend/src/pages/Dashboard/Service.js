import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Service = () => {
  const [data, setData] = useState([]);
  const { userProfile } = useSelector((state) => state.userProfile);

  // const url = "https://mernpawtastic.herokuapp.com/getService";
  // fetch(url, {
  //   method: "post",
  //   headers: { "content-type": "application/json" },
  //   body: JSON.stringify({
  //     email: userProfile[0].email
  //   })
  // })
  //   .then((response) => response.json())
  //   .then((services) => {
  //     setData(services);
  //   });

  useEffect(() => {
    const url = "https://mernpawtastic.herokuapp.com/getService";
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: userProfile[0].email
      })
    })
      .then((response) => response.json())
      .then((services) => {
        setData(services);
      });
  }, [userProfile]);

  console.log("dataservice", data);
  //console.log(data);

  return (
    <div>
      <h1>Services</h1>
      {/* {data.user.map((items) => {
        return (
          <div>
            <h1>{items.email}</h1>
            <h1>{items.frequency}</h1>
            <h1>{items.start_Date}</h1>
            {items.days.map((day) => {
              return (
                <div>
                  <h2>{day}</h2>
                </div>
              );
            })}
            {items.Times.map((time) => {
              return (
                <div>
                  <h2>{time}</h2>
                </div>
              );
            })}
          </div>
        );
      })} */}
    </div>
  );
};

export default Service;
