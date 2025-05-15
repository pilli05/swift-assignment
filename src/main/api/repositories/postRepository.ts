import { getDatabase } from "../../db/db";
import { IPosts } from "../../types/custom";

const postRespository = {
  saveAllPosts: async (posts: IPosts[]) => {
    const db = await getDatabase();
    const postCollection = db.collection("posts");
    postCollection.insertMany(posts);
  },
};

export default postRespository;
