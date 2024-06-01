import logo from './logo.svg';
import './App.css';
import Expenses from "./components/Expenses"
import ExpenseForm from "./components/ExpenseForm"

function App() {

  const expenses = [
    { title: 'mazda', amount: 30000, date: new Date(2020, 3, 10) },
    { title: 'honda', amount: 40000, date: new Date(2022, 4, 15) },
    { title: 'bmw', amount: 60000, date: new Date(2023, 5, 27) },
    { title: 'opel', amount: 50000, date: new Date(2024, 6, 30) }
  ]
  return (
    <div>
      <ExpenseForm/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
