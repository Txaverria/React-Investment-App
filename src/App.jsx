import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // Function to handle changes from UserInput
  const handleInputChange = (newInputData) => {
    setInputData(newInputData); // Update the shared state
  };

  return (
    <>
      <Header />
      <UserInput fieldsData={inputData} onInputChange={handleInputChange} />
      <ResultsTable data={inputData} />
    </>
  );
}

export default App;
