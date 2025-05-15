import { getDatabase } from "../../db/db";

const loadRepository = {
  loadData: async () => {
    const db = getDatabase();

    const userCollection = db.collection("users");
    const postCollection = db.collection("posts");
    const commentCollection = db.collection("comments");
    const users = await userCollection.find({}, { limit: 10 }).toArray();

    const userWithPostAndComments = await Promise.all(
      users.map(async (user: any) => {
        const totalPostsForEachUser = await postCollection
          .find({ userId: parseInt(user.id) }, { limit: 10 })
          .toArray();
        const totalCommentsForEachPost = await Promise.all(
          totalPostsForEachUser.map(async (post: any) => {
            const comments = await commentCollection
              .find({ postId: parseInt(post.id) }, { limit: 10 })
              .toArray();
            return {
              ...post,
              comments: comments,
            };
          })
        );
        return {
          ...user,
          posts: totalCommentsForEachPost,
        };
      })
    );
    return userWithPostAndComments;
  },
};

export default loadRepository;
