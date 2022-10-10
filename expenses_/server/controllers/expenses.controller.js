const Expense = require("./../models/expenses.model")
//tests that our backend and front are connected
module.exports.testApi = (req, res) => {
    res.json({ status: "ok" })
}

// Get all Expenses
module.exports.allExpenses = (req, res) => {
    Expense.find()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(400).json(err))
}

// Get One Expense
module.exports.oneExpense = (req, res) => {
    Expense.findOne({_id:req.params.id})
        .then(oneExpense=>res.json(oneExpense))
        .catch(err=>res.status(400).json(err))
}
// Create a Expense
module.exports.createExpense = (req, res) => {
    Expense.create(req.body)
        .then(newExpense=>res.json(newExpense))
        .catch(err=>res.status(400).json(err))
}
// Update or edit a Expense
module.exports.updateExpense = (req, res) => {
    Expense.findOneAndUpdate({_id:req.params.id},req.body, {new:true, runValidators:true})
        .then(response=>res.json(response))
        .catch(err=>res.status(400).json(err))
}
// Delete a Expense
module.exports.deleteExpense = (req, res) => {
    Expense.deleteOne({_id:req.params.id})
        .then(response=>res.json(response))
        .catch(err=>res.status(400).json(err))
}