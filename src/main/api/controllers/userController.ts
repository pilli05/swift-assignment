import userRepository from "../repositories/userRepository";
import userService from "../services/userService";

const userController = {
  getAllUsers: async (req: any, res: any) => {
    try {
      const users = await userService.getAllUsers();

      res.status(200).send({
        message: "Users fetched successfully",
        data: users,
      });
    } catch (error) {
      res.status(500).send({
        message: "Internal server error",
        error: error,
      });
    }
  },

  getUserById: async (req: any, res: any) => {
    const userId = req.params.userId;

    try {
      const user = await userRepository.getUserById(userId);
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      } else {
        res.status(200).send({
          message: "User fetched successfully",
          data: user,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Internal server error",
        error: error,
      });
    }
  },

  deleteUserById: async (req: any, res: any) => {
    const userId = req.params.userId;
    try {
      const user = await userRepository.getUserById(userId);
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      } else {
        await userRepository.deleteUserById(userId);
        res.status(200).send({
          message: "User deleted successfully",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Internal server error",
        error: error,
      });
    }
  },
};

export default userController;
