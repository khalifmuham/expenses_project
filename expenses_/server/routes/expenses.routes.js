const ExpenseController = require("./../controllers/expenses.controller")

module.exports = (app) => {
    app.get("/api/test", ExpenseController.testApi)
    app.get("/api/expenses", ExpenseController.allExpenses)
    app.get("/api/expenses/:id", ExpenseController.oneExpense)
    app.post("/api/expenses", ExpenseController.createExpense)
    app.put("/api/expenses/:id", ExpenseController.updateExpense)
    app.delete("/api/expenses/:id", ExpenseController.deleteExpense)
}
