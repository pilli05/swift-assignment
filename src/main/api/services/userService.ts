import axios from "axios";
import userRepository from "../repositories/userRepository";

const userService = {
  getAllUsers: async () => {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");

    await userRepository.saveAllUsers(users.data);
    return users.data;
  },
};

export default userService;
