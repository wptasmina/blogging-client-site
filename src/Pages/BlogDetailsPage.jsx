import { FaCommentDots, FaPenToSquare } from 'react-icons/fa6'
import profile from '/profile.jpg'
import { NavLink, useLoaderData } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

export default function BlogDetailsPage() {
  const { user } = useContext(AuthContext);
  const blog = useLoaderData()

  const {_id, userImage, userName, email, title, imageUrl,longDesc} = blog

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

// Fetch comments on mount
useEffect(() => {
  fetch(`http://localhost:5000/comments/${_id}`)
    .then((res) => res.json())
    .then(setComments)
    .catch((error) => console.error('Failed to fetch comments:', error));
}, [_id]);

// Handle new comment submission
const handleCommentSubmit = async (e) => {
  e.preventDefault();

  if (!newComment.trim()) {
    toast.error('Comment cannot be empty');
    return;
  }

  const commentData = {
    blogId: _id,
    userName: user?.name || 'Anonymous User',
    userImage: user?.profilePic || '/profile.jpg', 
    text: newComment,
  };

  try {
    const response = await fetch('http://localhost:5000/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commentData),
    });

    if (!response.ok) throw new Error('Failed to add comment');

    const addedComment = await response.json();
    setComments((prevComments) => [...prevComments, addedComment]);
    setNewComment('');
    toast.success('Comment added successfully!');
  } catch (error) {
    toast.error('Failed to add comment');
  }
};

  return (
    <>
   <div className=' bg-white md:w-11/12 mx-auto '>
   <div className="card bg-gradient-to-r from-indigo-50 md:w-2/3 mx-auto md:p-6 py-6 px-4 my-8 shadow">
   {/* Blog Header */}
    <div className="card-body flex-row justify-between items-center gap-4 p-0 mb-4">
{/* profile img, name & img  */}
      <div className='flex flex-row items-center gap-2'>
        <img src={userImage} className='w-12 h-12 object-cover rounded-full shadow border border-blue-300 p-1' alt="author image" />

        <div>
          <h2 className="text-md font-bold text-blue-500">{userName}</h2>
          <p className="text-xs font-bold text-gray-500">Email: {email}</p>
        </div>
      </div>
    <div>
      <NavLink to={`/updateBlog/${_id}`} >
        <FaPenToSquare className="text-2xl text-blue-500 shadow cursor-pointer" />
      </NavLink>
    </div>
  </div>

  {/* profile title & img  */}
  <h2 className="text-3xl font-extrabold text-gray-800 mb-5">{title}</h2>
    <img className='rounded-xl'
      src={imageUrl} alt="image" />

    {/* Description Box  */}
      <div className='mt-6'>
        <p className='text-lg text-gray-600 font-bold'>{longDesc}</p>
      </div>

    {/* Comment input Box  */}
      {/* <div className='flex mt-6 gap-2 items-center'>
      <img src={profile} className='hidden sm:block w-14 h-14 object-cover rounded-full shadow border border-blue-200 p-1' alt="author image" />
      <div className="join border border-blue-100 w-full">
        <input className="input w-full join-item focus:outline-none border-none" placeholder="Add to comment" required />
        <button onSubmit={handleCommentSubmit} className="btn join-item bg-blue-400 text-md text-white hover:text-black font-medium rounded-r-md focus:border-blue-300" >Comment</button>
      </div>
      </div> */}



       {/* Add Comment Form */}
       <div className="mt-6">
          <form onSubmit={handleCommentSubmit} className="flex gap-2 items-center">
            <img
              src={user?.profilePic || '/profile.jpg'}
              className="hidden sm:block w-14 h-14 object-cover rounded-full shadow border border-blue-200 p-1"
              alt="user"
            />
            <div className="join border border-blue-100 w-full">
              <input
                className="input w-full join-item focus:outline-none border-none"
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn join-item bg-blue-400 text-md text-white hover:text-black font-medium rounded-r-md focus:border-blue-300"
              >
                Comment
              </button>
            </div>
          </form>
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">Comments</h3>
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment) => (
              <div key={comment._id} className="flex items-start gap-2 mt-4">
                <img
                  src={comment.userImage || '/profile.jpg'}
                  className="w-10 h-10 rounded-full border shadow"
                  alt={comment.userName}
                />
                <div>
                  <p className="text-sm font-bold">{comment.userName || 'Unknown User'}</p>
                  <p className="text-sm text-gray-600">{comment.text || 'No content available'}</p>
                </div>
              </div>
            ))
          )}
        </div>

    {/* Comment Text Box  */}
      {/* <div className='flex justify-items-center items-center text-lg gap-1 mt-6 '>
        <FaCommentDots className="text-2xl pt-1" />
        <p className='text-md text-black font-bold'>commemts (2) </p>
      </div> */}
  </div>
   </div>
    </>
  )
}




// import React, { useState, useEffect, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthProvider/AuthProvider';

// export default function BlogDetailsPage() {
//   const { _id } = useParams();
//   const navigate = useNavigate();
//   // const { user } = useContext(AuthContext);

//   const [blog, setBlog] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   // const [error, setError] = useState('');

//   useEffect(() => {
//     fetch(`http://localhost:5000/details/${id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch blog details');
//         return res.json();
//       })
//       .then(setBlog)
//       .catch((err) => setError(err.message));

//     fetch(`http://localhost:5000/comments/${id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch comments');
//         return res.json();
//       })
//       .then(setComments)
//       .catch((err) => console.error(err));
//   }, [id]);

//   const handleCommentSubmit = () => {
//     if (!newComment.trim()) {
//       return alert('Comment cannot be empty');
//     }

//     const commentData = {
//       blogId: id,
//       userName: user?.name || 'Anonymous',
//       userProfilePic: user?.profilePic || '',
//       text: newComment,
//     };

//     fetch('http://localhost:5000/comments', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(commentData),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to post comment');
//         return res.json();
//       })
//       .then((newComment) => {
//         setComments((prevComments) => [...prevComments, newComment]);
//         setNewComment('');
//       })
//       .catch((err) => console.error(err));
//   };

//   if (error) return <div>Error: {error}</div>;
//   if (!blog) return <div>Loading...</div>;

//   const isOwner = blog.email === user?.email;

//   return (
//     <div>
//       <h1>{blog.title}</h1>
//       <p>{blog.body}</p>

//       {!isOwner ? (
//         <div>
//           <textarea
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Add a comment"
//           />
//           <button onClick={handleCommentSubmit}>Submit</button>
//         </div>
//       ) : (
//         <p>Cannot comment on your own blog</p>
//       )}

//       <div>
//         <h2>Comments</h2>
//         {comments.map((comment) => (
//           <div key={comment._id}>
//             <img src={comment.userProfilePic} alt={comment.userName} />
//             <p>{comment.userName}</p>
//             <p>{comment.text}</p>
//           </div>
//         ))}
//       </div>

//       {isOwner && (
//         <button onClick={() => navigate(`/updateBloge/${_id}`)}>Update</button>
//       )}
//     </div>
//   );
// }


