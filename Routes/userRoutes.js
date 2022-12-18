const {Router} = require ('express');
const router = Router()
const userController = require('../controllers/UserController.js')

router.get('/postarDadosJogador', userController.postarDadosJogador)
router.get('/obterDadosJogador', userController.obterDadosJogador)
router.get('/deletarJogador', userController.deletarJogador)
router.get('/pesquisarClube', userController.pesquisarClube)

module.exports = router 