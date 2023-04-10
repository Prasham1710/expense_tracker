const ExpenseSchema = require("../models/incomeModel.js");

exports.addExpense = async (req, res) => {
    const { title, amount, category, description,date } = req.body;
    const income = ExpenseSchema ({
        title,
        amount,
        category,
        description,
        date
    })
    try {
        //vallidators
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({message: "all fields are required"})
        }
        if (amount <=0 || !amount === 'number') {
            return res.status(200).json({message: "Amount must  be a positive no."})
        }
        await income.save()
        res.status(200).json({message : 'Expense Added'})
    } catch (error) {
         res.status(200).json({message : 'Srever Error'})         
    }
    console.log(income)
}
exports.getExpense = async (req,res) => {
    try {
        const incomes = await ExpenseSchema.find().sort({creeatedAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message : 'Srever Error'})
    }
}

exports.deleteExpense = async (req,res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id) 
        .then((income) => {
            res.status(200).json({message: 'Expense Deleted'})     
        })
        .catch((error) => {
            res.status(500).json({message: 'Server Error'})
        })
}