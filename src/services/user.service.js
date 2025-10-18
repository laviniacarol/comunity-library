import { id } from "zod/v4/locales";
import userRepository from "../repositories/user.repositories.js";
import bcrypt from 'bcrypt';
import userRepositories from "../repositories/user.repositories.js";




async function createUserService(newUser){
    const foundUser = await userRepository.findUserByEmailRepository(newUser.email)
    if(foundUser) throw new Error("user already exists")
    
    
    const passHash = await bcrypt.hash(newUser.password, 10)
    const user = await userRepository.createUserRepository({
        ...newUser, 
           password: passHash
});
if (!user) throw new Error ('Error creating User');
    return user;
}

async function findAllUsersService() {
    const users = await userRepository.findAllUsersRepository()
    return users;
}

async function findUsersByIdService() {
    const user = await userRepository.findUserByIdlRepository(id)
    if (!user) throw new Error("User not found");
    return user 
}

async function updateUserService(newUser, userId) {
    const user = await userRepositories.findUserByIdlRepository(userId);
    if (!user) throw new Error ("User not found");
    if(newUser.password) {
        newUser.password = await bcrypt.hash(newUser.password, 10)
    }
    const userUpdated = userRepository.updateUserRepository(userId, newUser)
    return userUpdated
}

async function  deleteUserService(userId) {
    const user = await userRepository.findByIdUserRepository(userId);
    if (!user) throw new Error("User not found");
    const {message} = await userRepositories.deleteUserRepository(userId);
    return message;
}

export default {
    createUserService,   
    findAllUsersService,
    findUsersByIdService,
    updateUserService,
    deleteUserService
}