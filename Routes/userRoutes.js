const {Router} = require ('express');
const router = Router()
const userController = require('../controllers/UserController.js')

router.post('/postarDados', userController.postarDados)
router.delete('/deletarJogador', userController.deletarJogador)
router.put('/obterDados', userController.obterDados)

module.exports = router 