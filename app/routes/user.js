import { Router } from 'express'
import { getItem, getItems, createItem, updateItem, deleteItem } from '../controlles/users.js'
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