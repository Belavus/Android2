import "./Expenses.css"
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
    return (
        <div>
            {props.items.map((item, index) => (
                <ExpenseItem
                    key={index}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}>
                </ExpenseItem>
            ))}
        </div>
    )
}

export default Expenses