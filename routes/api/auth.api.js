import { Router } from "express";
import { createUser, loginUser, reToken } from "../../controllers/auth.js";

const authRouter = Router();

authRouter.post('/new', createUser)
authRouter.post('/', loginUser)
authRouter.get('/renew', reToken)

export default authRouter