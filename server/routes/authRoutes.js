const { register, login } = require("../controllers/authControllers");
const clientController = require('../controllers/clientControllers');
const { checkUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

//auth
router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);

//client
router.post('/clients', clientController.createClient);
router.get('/clients', clientController.getAllClients);
router.get('/clients/:clientId', clientController.getClientById);
router.put('/clients/:clientId', clientController.updateClient);
router.delete('/clients/:clientId', clientController.deleteClient);

module.exports = router;
