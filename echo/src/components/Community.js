import React, { useState, useEffect } from 'react'; 
import './Community.css'; 
import { FaImages, FaTags, FaUpload , FaComment} from 'react-icons/fa'; 
 
function Community() { 
  const [postsData, setPostsData] = useState([
    { username: 'user1', content: 'This is the first post!', liked: false, likes: 0 },
    { username: 'user2', content: 'Another post here.', liked: false, likes: 0 },
  ]);  
  const [searchTerm, setSearchTerm] = useState(''); 
  const [newPostContent, setNewPostContent] = useState(''); 
  const [topContributors, setTopContributors] = useState([]);

  useEffect(() => { 
    // Display existing posts 
    displayPosts(); 
  }, [searchTerm, postsData]); // Run only once on component mount 

  // Display existing posts or filtered posts based on search term 
  function displayPosts() {
    return postsData.map((post, index) => (
      <div key={index} className="post">
        <strong>{post.username}:</strong> {post.content}
        <div className="post-actions">
          <button
            onClick={() => handleLike(index)}
            className={post.liked ? 'liked' : ''}
          >
            ❤️ {post.likes}
          </button>
        </div>
      </div>
    ));
  }

  const handleLike = (index) => {
    // Handle liking a post
    // For simplicity, let's toggle the like status
    const updatedPosts = [...postsData];
    updatedPosts[index].liked = !updatedPosts[index].liked;
    updatedPosts[index].likes = updatedPosts[index].liked
      ? updatedPosts[index].likes + 1
      : updatedPosts[index].likes - 1;
    setPostsData(updatedPosts);
  };

  // Handle new post submission 
  const handlePostSubmit = (event) => { 
    event.preventDefault(); 
    setPostsData([...postsData, { username: 'user', content: newPostContent }]); 
    setNewPostContent(''); 
  }; 

  // Handle search term change 
  const handleSearchChange = (event) => { 
    setSearchTerm(event.target.value); 
  }; 

  // Handle new post content change 
  const handleNewPostContentChange = (event) => { 
    setNewPostContent(event.target.value); 
  }; 

  return ( 
    <div className="community-container"> 
      <div className="left-content"> 
        <header> 
          <h1>Your Community</h1> 
        </header> 
        <section id="search-bar"> 
          <div className="search-container"> 
            <span role="img" aria-label="search-icon"> 
              🔍 
            </span> 
            <input 
              type="text" 
              placeholder="Type to search..." 
              value={searchTerm} 
              onChange={handleSearchChange} 
            /> 
          </div> 
        </section> 
        <section id="new-post" className="new-post-section"> 
          <h2>Create Post</h2> 
          <form onSubmit={handlePostSubmit}> 
            <div className="form-group"> 
              <input type="text" id="username" className="form-control" placeholder="Enter your name..." required /> 
            </div> 
            <div className="form-group"> 
              <div className="textarea-container"> 
                <FaComment className="icon" /> 
                <textarea id="content" rows="4" placeholder="  What biotic change have you made for our environment today?" className="form-control-content" required></textarea> 
              </div> 
            </div> 
            <button type="button" className="btn btn-primary"> 
              <FaImages /> Gallery 
            </button> 
            <button type="button" className="btn btn-secondary"> 
              <FaTags /> Tag 
            </button> 
            <button type="submit" className="btn btn-success"> 
              <FaUpload /> Publish 
            </button> 
          </form> 
        </section> 
        <section id="posts"> 
          {displayPosts()} 
        </section> 
      </div> 

      {/* Right side content - Top Contributors */}
      <div className="right-content"> 
        <section id="top-contributors" className="top-contributors-container"> 
          <input 
            type="text" 
            placeholder="Top Contributors" 
            value={topContributors} 
            readOnly 
          /> 
        </section> 
        <section className="top-contributors-section"> 
          <h2>Top Contributors</h2> 
          <ul className="top-contributors-list"> 
            {topContributors.map((contributor, index) => ( 
              <li key={index}>{contributor}</li> 
            ))} 
          </ul> 
        </section> 
      </div> 
    </div> 
  ); 
} 
 
export default Community;
