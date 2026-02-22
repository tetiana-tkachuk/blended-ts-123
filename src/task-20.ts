import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return response.data;
};

const logThreePosts = async (): Promise<void> => {
  const posts = await fetchPosts();

  posts.forEach((post, index) => {
    if (index <= 2) {
      console.log(`Title: ${post.title}\nText: ${post.body}`);
    }
  });
};

logThreePosts();
