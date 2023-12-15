import React, { useState, useEffect } from 'react';
import './Community.css';

function Community() {
  const [postsData, setPostsData] = useState([
    { username: 'user1', content: 'This is the first post!' },
    { username: 'user2', content: 'Another post here.' }
  ]);

  useEffect(() => {
    // Display existing posts
    displayPosts();
  }, []); // Run only once on component mount

  // Display existing posts
  function displayPosts() {
    return postsData.map((post, index) => (
      <div key={index} className="post">
        <strong>{post.username}:</strong> {post.content}
      </div>
    ));
  }

  // Handle new post submission
  const handlePostSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const content = event.target.content.value;
    setPostsData([...postsData, { username, content }]);
    event.target.reset();
  };

  return (
    <div>
      <header>
        <h1>Your Community</h1>
      </header>
      <section id="posts">
        {displayPosts()}
      </section>
      <section id="new-post">
        <h2>New Post</h2>
        <form onSubmit={handlePostSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required />
          <label htmlFor="content">Post Content:</label>
          <textarea id="content" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Community;
