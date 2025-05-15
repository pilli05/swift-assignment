import axios from "axios";
import commentRepository from "../repositories/commentRepository";

const commentService = {
  getAllComments: async () => {
    const comments = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    await commentRepository.saveAllComments(comments.data);
    return comments.data;
  },
};

export default commentService;
