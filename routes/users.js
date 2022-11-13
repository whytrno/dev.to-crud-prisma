import express from 'express'
import { create, deleteUser, getAllData, update } from '../controllers/userController.js'
let router = express.Router()

router.get('/', getAllData)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', deleteUser)

export default router