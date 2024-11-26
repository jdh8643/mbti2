import React from "react";
import TestResultItem from "./TestResultItem";

const TestResultList = ({ result }) => {
  console.log(result);
  return (
    <ul className="space-y-4">
      {result.map((item) => {
        return <TestResultItem key={item.id} result={item} />;
      })}
    </ul>
  );
};

export default TestResultList;
