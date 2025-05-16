import { getDatabase } from "../../db/db";
import { IComments, IPosts, IUser } from "../../types/custom";

const userRepository = {
  saveAllUsers: async (user: IUser[]) => {
    const db = await getDatabase();
    const userCollection = db.collection("users");
    userCollection.insertMany(user);
  },

  getUserById: async (userId: string) => {
    const db = await getDatabase();

    const userCollection = db.collection("users");
    const postCollection = db.collection("posts");
    const commentCollection = db.collection("comments");

    const user = await userCollection.findOne({ id: parseInt(userId) });
    const posts = await postCollection
      .find({ userId: parseInt(user?.id) }, { limit: 2 })
      .toArray();

    const postWithComment = await Promise.all(
      posts.map(async (post: any) => {
        const comments = await commentCollection
          .find({ postId: parseInt(post.id) }, { limit: 5 })
          .toArray();
        return {
          ...post,
          comments: comments,
        };
      })
    );

    return {
      ...user,
      posts: postWithComment,
    };
  },

  deleteUserById: async (userId: string) => {
    const db = await getDatabase();
    const userCollection = db.collection("users");

    const user = await userCollection.findOne({ id: parseInt(userId) });
    if (!user) {
      return null;
    }
    await userCollection.deleteOne({ id: parseInt(userId) });
    return user;
  },

  deleteAllUsers: async () => {
    const db = await getDatabase();
    const userCollection = db.collection("users");
    const postCollection = db.collection("posts");
    const commentCollection = db.collection("comments");

    await userCollection.deleteMany({});
    await postCollection.deleteMany({});
    await commentCollection.deleteMany({});
  },
};

export default userRepository;
