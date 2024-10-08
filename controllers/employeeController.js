const Employee = require('../models/Employee');


const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        console.error('Erro ao listar funcionários:', error);
        res.status(500).json({ message: 'Erro ao listar funcionários', error });
    }
};


const createEmployee = async (req, res) => {
    try {
        const { name, age, position } = req.body;
        if (!name || !age || !position) {
            return res.status(400).json({ message: 'Nome, idade e cargo são obrigatórios.' });
        }
        const newEmployee = await Employee.create({ name, age, position });
        res.status(201).json(newEmployee);
    } catch (error) {
        console.error('Erro ao criar funcionário:', error);
        res.status(500).json({ message: 'Erro ao criar funcionário', error });
    }
};


module.exports = {
    getAllEmployees,
    createEmployee,
};
