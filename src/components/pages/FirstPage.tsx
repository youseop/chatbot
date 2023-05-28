import React from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();

  const onClickEnrollBtn = () => {
    navigate("/chatbot");
  };

  return (
    <>
      <h1>Enter into Student Info System </h1>
      <button onClick={onClickEnrollBtn}>Enroll Now!</button>
    </>
  );
};

export default FirstPage;
