const {Router} = require('express')
const router = Router()
const sequelize = require('../config/database')
const { QueryTypes } = require('sequelize');

// Получение списка задач
router.get('/users', async (req, res) => {
  const users = await sequelize.query("SELECT * FROM `modulodin`", { type: QueryTypes.SELECT });
  res.json(users)
})

// Создание новой задачи
router.post('/', (req, res) => {

})

// Изменение задачи
router.put('/:id', (req, res) => {

})

// Удаление задачи
router.delete('/:id', (req, res) => {

})

module.exports = router