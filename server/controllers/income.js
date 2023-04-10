const IncomeSchema = require("../models/incomeModel.js");

exports.addIncome = async (req, res) => {
    const { title, amount, category, description,date } = req.body;
    const income = IncomeSchema ({
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
        res.status(200).json({message : 'Income Added'})
    } catch (error) {
         res.status(200).json({message : 'Srever Error'})         
    }
    console.log(income)
}
exports.getIncomes = async (req,res) => {
    try {
        const incomes = await IncomeSchema.find().sort({creeatedAt: -1})
    } catch (error) {
        
    }
}