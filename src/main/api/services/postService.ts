import axios from "axios";
import postRespository from "../repositories/postRepository";

const postService = {
  getAllPosts: async () => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

    await postRespository.saveAllPosts(posts.data);
    return posts.data;
  },
};

export default postService;
