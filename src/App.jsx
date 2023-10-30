import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <div className="App">
      <h1>Recent Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

function Post({ post }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    // Fetch author information using the post's userId
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((response) => response.json())
      .then((data) => {
        setAuthor(data);
      });
  }, [post.userId]);

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="App">
      <div className="post">
        <h3 className="center">{capitalizeWords(post.title)}</h3>
        {author && (
          <p>
            By <a href="hildegard.org">{author.name}</a>
          </p>
        )}
        <p>{post.body}</p>
      </div>


    </div>


  );
}

export default App;
