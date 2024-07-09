import React, { useState } from "react";
import "./Income.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useEffect } from "react";

const Income = (props) => {
  const [incomeText, setIncomeText] = useState("");
  const [incomeCost, setIncomeCost] = useState("");
  const [incomeDate, setIncomeDate] = useState("");
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/income/getincome")
      .then((res) => {
        console.log(res.data);
        setIncomes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddIncome = () => {
    let inpObj = { incomeText, incomeCost, incomeDate };
    const Url = "http://localhost:4000/income/addincome";
    axios
      .post(Url, inpObj)
      .then((res) => {
        if (res.status === 200) {
          alert("Income added");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((error) => {
        console.log(error);
      });

    if (incomeText && incomeCost && incomeDate) {
      const newIncome = {
        id: Date.now(),
        text: incomeText,
        cost: parseFloat(incomeCost),
        date: incomeDate,
      };

      setIncomes([...incomes, newIncome]);
      setIncomeText("");
      setIncomeCost("");
      setIncomeDate("");
    } else {
      alert("Please fill out all fields.");
    }
  };
  const handleDeleteIncome = (id) => {
    axios
      .delete("http://localhost:4000/income/deleteincome/" + id)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert("user deleted successfully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const calculateTotalIncome = () => {
    let totalIncome =0;
    incomes.forEach(income => {
      totalIncome = totalIncome+ income.incomeCost
    })
    return totalIncome
  };

  const display = (data) => {
    return data.map((income) => {
      return (
        <tr>
          <td className="Inc-td">{income.incomeText}</td>
          <td className="Inc-td cost">&#8377; {income.incomeCost}</td>
          <td className="Inc-td">{income.incomeDate}</td>
          <td className="Inc-td">
            <button
              onClick={() => handleDeleteIncome(income._id)}
              className="Exp-button"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="Income lenght">
        <div className="div">
          <div className="class">
            <h1 className="cat-heading">Income</h1>
          </div>
          <h3>Total Income : &#8377;{calculateTotalIncome()}</h3>
          <h3>Total savings : &#8377;{props.calculateTotalSavings()}</h3>
          <div className="inc-details" >
            <div className="Income-inputs">
              <input
                className="Ex-Txtinput"
                type="text"
                placeholder="Income Title"
                value={incomeText}
                onChange={(e) => setIncomeText(e.target.value)}
              />
              <input
                type="number"
                placeholder="Cost"
                value={incomeCost}
                onChange={(e) => setIncomeCost(e.target.value)}
              />
              <input
                type="date"
                placeholder="Date"
                value={incomeDate}
                onChange={(e) => setIncomeDate(e.target.value)}
              />
              <button onClick={handleAddIncome}>Add Income</button>
            </div>
            <table className="Inc-table">
              <thead>
                <tr className="Inc-tr">
                  <th className="Inc-th">Income</th>
                  <th className="Inc-th">&#8377;Cost</th>
                  <th className="Inc-th">Date</th>
                  <th className="Inc-th">Action</th>
                </tr>
              </thead>
              <tbody>{display(incomes)}</tbody>
            </table>
          </div>
        </div>
        <div className="Income-image"></div>
      </div>
    </>
  );
};

export default Income;
