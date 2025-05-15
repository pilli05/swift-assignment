import postService from "../services/postService";

const postController = {
  getAllPosts: async (req: any, res: any) => {
    try {
      const posts = await postService.getAllPosts();

      res.status(200).send({
        message: "Posts fetched successfully",
        data: posts,
      });
    } catch (error) {
      res.status(500).send({
        message: "Internal server error",
        error: error,
      });
    }
  },
};

export default postController;
