import { getDatabase } from "../../db/db";
import { IComments } from "../../types/custom";

const commentRepository = {
  saveAllComments: async (comments: IComments[]) => {
    const db = await getDatabase();
    const commentCollection = db.collection("comments");
    commentCollection.insertMany(comments);
  },
};

export default commentRepository;
