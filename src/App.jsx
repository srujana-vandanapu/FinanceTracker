import Expenditure from "./components/Expenditure/Expenditure";
import Income from "./components/Income/Income";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import History from "./components/History/History";
import Signup from "./components/Sign-UP/Signup";
import Login from "./components/Login/Login";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenditures, setExpenditures] = useState([]);

  useEffect(() => {
    axios
      .get("https://financetracker-backend-rut1.onrender.com/income/getincome")
      .then((res) => {
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
        setExpenditures(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const calculateTotalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.incomeCost;
    });
    return totalIncome;
  };

  const calculateTotalExpenditure = () => {
    let totalExpenditure = 0;
    expenditures.forEach((expenditure) => {
      totalExpenditure = totalExpenditure + expenditure.ExpenditureCost;
    });
    return totalExpenditure;
  };

  const calculateTotalSavings = () => {
    let totalSavings = 0;
    totalSavings = calculateTotalIncome() - calculateTotalExpenditure();
    return totalSavings;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <Home
              calculateTotalIncome={calculateTotalIncome}
              calculateTotalExpenditure={calculateTotalExpenditure}
              calculateTotalSavings={calculateTotalSavings}
            />
          }
        />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/expenditure" element={<Expenditure calculateTotalSavings={calculateTotalSavings} />}></Route>
        <Route path="/income" element={<Income calculateTotalSavings={calculateTotalSavings}  />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
