import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import '../History/History.css'
import Navbar from '../Navbar/Navbar'


export default function History() {
  const [incomes, setIncomes] = useState([]);
  const [expenditures, setExpenditures] = useState([]);

  useEffect(() => {
    axios
      .get("https://financetracker-backend-rut1.onrender.com/income/getincome")
      .then((res) => {
        console.log(res.data);
        setIncomes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://financetracker-backend-rut1.onrender.com/expenditure/getexpenditures")
      .then((res) => {
        console.log(res.data);
        setExpenditures(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const Indisplay = (data) => {
    return data.map((income) => {
      return (
        <tr>
          <td className="historydata">{income.incomeText}</td>
          <td className="historydata cost">{income.incomeCost}</td>
          <td className="historydata">{income.incomeDate}</td>
        </tr>
      );
    });
  };
  const Exdisplay = (data) => {
    return data.map((expenditure) => (
      <tr key={expenditure._id}>
        <td className="historydata">{expenditure.ExpenditureText}</td>
        <td className="historydata exp-cost">&#8377;{expenditure.ExpenditureCost}</td>
        <td className="historydata">{expenditure.ExpenditureDate}</td>
      </tr>
    ));
  };

  return (
    <div>
      <Navbar/>
      <h1 className="history">History</h1>
      <table className="historyTable">
        <thead>
          <tr className="historyRow">
            <th className="historyHead">Heading</th>
            <th className="historyHead ">Cost</th>
            <th className="historyHead">Date</th>
          </tr>
        </thead>
        <tbody>{Indisplay(incomes)} {Exdisplay(expenditures)}</tbody>
      </table>
    </div>
  );
}
