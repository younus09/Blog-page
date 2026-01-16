import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostForm } from "../components";
import { useParams, useNavigate } from "react-router";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((data) => {
        if (data) {
          setPost(data);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate, setPost]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
