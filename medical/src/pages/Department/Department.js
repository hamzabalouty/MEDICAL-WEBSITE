import React, { useEffect } from "react";
import "./Department.css";
import DepartmentHeader from "./DepartmentHeader";
import DepartmentStory from "./DepartmentStory";
import DepartmentName from "./DepartmentName";

const Department = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DepartmentHeader />
      <DepartmentStory />
      <DepartmentName />
    </>
  );
};

export default Department;
