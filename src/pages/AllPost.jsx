import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchedPost = async () => {
      const allPosts = await appwriteService.getAllPost([]);
      if (allPosts) {
        setPosts(allPosts.rows);
      }
    };

    fetchedPost();
  }, []);

  return (
    <div>
      <Container>
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post} />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default AllPost;
