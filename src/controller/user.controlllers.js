import userService from '../services/user.service.js';
import { loginService } from '../services/auth.service.js'

async function createUserController(req, res) {
    const newUser = req.body;


    try {
        const token = await loginService.createUserService(newUser);
        return res.status(201).send({ token }); 
    } catch (e) {
        return res.status(400).send(e.message);
    }
}

async function loginUserController(req, res) {
    const {email, password} = req.body;


    try {
        const token = await authService.loginService(newUser);
        return res.send({ token }); 
    } catch (e) {
        return res.status(400).send(e.message);
    }
}


async function findAllUserController(req, res) {
    try {
        const users = await userService.findAllUsersService();
        return res.send({ users });
    } catch (e) {
        return res.status(404).send(e.message);
    }
}

async function findUseByIdController(req, res) {
    const { id } = req.params;
    try {
        const user = await userService.findUsersByIdService(id);
        return res.send({ user });
    } catch (e) {
        return res.status(404).send(e.message);
    }
}

async function updateUserController(req, res) {
    const { id } = req.params;
    const newUser = req.body;

    try {
        const user = await userService.updateUserService(newUser, id);
        return res.send({ user });
    } catch (e) {
        return res.status(400).send(e.message);
    }
}

async function deleteUserController(req, res) {
    const { id } = req.params;

    try {
        const message = await userService.deleteUserService(id);
        return res.send({ message });
    } catch (e) {
        return res.status(400).send(e.message);
    }
}

export default {
    createUserController,
    findAllUserController,
    findUseByIdController,
    updateUserController,
    deleteUserController,
    loginUserController
};
