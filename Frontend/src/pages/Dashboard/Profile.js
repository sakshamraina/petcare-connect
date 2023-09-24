import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const { userProfile } = useSelector((state) => state.userProfile);
  console.log(userProfile);

  return (
    <div>
      <h1>User Profile : </h1>
      <h4>Email : {userProfile[0].email}</h4>
      <h4>First Name : {userProfile[0].FirstName}</h4>
      <h4>Last Name : {userProfile[0].LastName}</h4>
      <h4>Phone : {userProfile[0].Phone}</h4>
      <h4>Pet : {userProfile[0].pet}</h4>
      <h4>Pet Name : {userProfile[0].name}</h4>
      <h4>Breed : {userProfile[0].breed}</h4>
      <h4>BirthDate : {userProfile[0].birthDay}</h4>
      <h4>Gender : {userProfile[0].Gender}</h4>
      <h4>Neutered : {userProfile[0].neutered}</h4>
      <h4>weight : {userProfile[0].weight}</h4>
      <h4>vet's Name : {userProfile[0].vetname}</h4>
      <h4>vet's Phone No : {userProfile[0].vetsPhoneNo}</h4>
      <h4>vet's Address : {userProfile[0].vetsAddress}</h4>
    </div>
  );
};

export default Profile;
