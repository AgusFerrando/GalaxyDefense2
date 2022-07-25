import { Router } from 'express'
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/users')
import checkOrigin from '../middleware/origin.js'
import checkAuth from '../middleware/auth.js'
import checkRoleAuth from '../middleware/roleAuth.js'
//import { validateCreate } from '../validators/users.js'

const router = Router()

router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

router.get('/:id', checkOrigin, getItem)

//TODO: Donde recibimos data
router.post('/', checkOrigin, validateCreate, createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


export default router