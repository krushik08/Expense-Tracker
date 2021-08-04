import Card from "../Display/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() == props.selectedYear;
  });

  console.log(props);
  return (
    <Card className="expenses">
      <ExpensesFilter setSelectedYear={props.setSelectedYear} />
      <ExpensesChart expenses={filteredExpenses} />

      {props.items.length >= 1 ? (
        props.items.map((element) => {
          return (
            <ExpenseItem
              title={element.itemName}
              description={element.description}
              amount={element.amount}
              date={element.date}
            />
          );
        })
      ) : (
        <p
          style={{
            color: "white",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            backgroundColor: "#06224A",
          }}
        >
          No Expenses!!
        </p>
      )}
    </Card>
  );
};

export default Expenses;
