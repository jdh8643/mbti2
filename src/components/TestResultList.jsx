import React from "react";
import TestResultItem from "./TestResultItem";

const TestResultList = ({ result ,setResult }) => {
  console.log(result);
  return (
    <ul className="space-y-4">
      {result
      .sort((a,b)=>new Date(b.createdAt) - Date(a.createdAt))
      .map((item) => {
        return <TestResultItem key={item.id} result={item} setResult={setResult}/>;
      })}
    </ul>
  );
};

export default TestResultList;
