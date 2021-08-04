import React, { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Expenses from "./components/Expense/Expenses";
import Modal from "./components/Modal/Modal";

function App() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [value, setValue] = useState([]);
  const [mainDataList, setMainDataList] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  // Save Data
  const getData = (data) => {
    setValue([...value, data]);
    setMainDataList([...mainDataList, data]);
  };

  // filterByYear
  useEffect(() => {
    const filteredData = mainDataList.filter((e) => {
      return e.date.getFullYear() == selectedYear;
    });
    setValue(filteredData);
  }, [selectedYear]);

  return (
    <div>
      <Button show={show} setShow={setShow} close={closeModalHandler} />
      <Modal show={show} close={closeModalHandler} getData={getData} />
      <Expenses
        items={value}
        setSelectedYear={setSelectedYear}
        selectedYear={selectedYear}
      />
    </div>
  );
}

export default App;
