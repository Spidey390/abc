const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://Sathya:Sathya@chagas-disease-predicti.jyopcf1.mongodb.net/chagas_ecg?appName=Chagas-disease-prediction");
const Employee = mongoose.model("Employee", new mongoose.Schema({
    name: String,
    email: String,
    department: String,
    salary: Number
}));
// Get all employees
app.get("/api/employees", async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});
app.post("/api/employees", async (req, res) => {
    const emp = new Employee(req.body);
    await emp.save();
    res.status(201).json(emp);
});
app.get("/api/employees/:id", async (req, res) => {
    const emp = await Employee.findById(req.params.id);
    res.json(emp);
});
app.put("/api/employees/:id", async (req, res) => {
    const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(emp);
});
app.delete("/api/employees/:id", async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted successfully" });
});
app.listen(3000, () => console.log("Server running on port 3000"));