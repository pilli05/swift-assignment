import commentService from "../services/commentService";

const commentController = {
  getAllComments: async (req: any, res: any) => {
    try {
      const comments = await commentService.getAllComments();
      res.status(200).send({
        message: "Comments fetched successfully",
        data: comments,
      });
    } catch (error) {
      res.status(500).send({
        message: "Internal server error",
        error: error,
      });
    }
  },
};

export default commentController;
