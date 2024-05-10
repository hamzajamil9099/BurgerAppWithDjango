import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Crud.css';
const CrudComponent = () => {
    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts" 
    });
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  // GET request
  useEffect(() => {
    const fetchPost = async () => {
        let response = await client.get('?_limit=10');
        setPosts(response.data);
     };
     fetchPost();
  }, []);

  // Delete request
  const handleDelete = async (id) => {
    await client.delete(`${id}`);
      setPosts(
         posts.filter((post) => {
            return post.id !== id;
         })
      );
  };

  // Post request
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await client.post('', {
        title: title,
        body: body,
     });
     setPosts((posts) => [response.data, ...posts]);
  };

  return (
    <div className="container">
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter body"
        ></textarea>
        <button type="submit">Add Post</button>
      </form>
      <table className="post-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(post.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default CrudComponent;
