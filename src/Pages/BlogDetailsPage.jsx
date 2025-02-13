import { FaPenToSquare } from 'react-icons/fa6';
import { NavLink, useLoaderData } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthProvider/AuthProvider';

export default function BlogDetailsPage() {
  const { user } = useContext(AuthContext);
  const blog = useLoaderData();

  const { _id, userImage, userName, email, title, imageUrl, shortDesc, longDesc } = blog;

  // Check if the current user is the blog owner
  const isOwner = user?.email === email;

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Fetch comments on mount
  useEffect(() => {
    fetch(`https://blogging-server-alpha.vercel.app/comments/${_id}`)
      .then((res) => res.json())
      .then(setComments)
      .catch((error) => console.error('Failed to fetch comments:', error));
  }, [_id]);

  // Handle new comment submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (isOwner) {
      toast.error('You cannot comment on your own blog!');
      return;
    }

    if (!newComment.trim()) {
      toast.error('Comment cannot be empty');
      return;
    }

    const commentData = {
      blogId: _id,
      userName: user?.displayName,
      userImage: user?.photoURL,
      text: newComment,
    };

    try {
      const response = await fetch('https://blogging-server-alpha.vercel.app/comments', {
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
    <div className="bg-white md:w-11/12 mx-auto">
      <div className="card bg-gradient-to-r from-indigo-50 md:w-2/3 mx-auto md:p-10 py-6 px-4 my-8 shadow">
        
        {/* Blog Header */}
        <div className="card-body flex-row justify-between items-center gap-4 p-0 mb-4">
          {/* Profile image, name & email */}
          <div className="flex flex-row items-center gap-2">
            <img
              src={userImage || 'https://via.placeholder.com/150'}
              className="w-12 h-12 object-cover rounded-full shadow border border-[#003f6fbb] p-1"
              alt="Author"
            />
            <div>
              <h2 className="text-sm font-bold text-[#003f6fbb]">Athor: {userName}</h2>
              <p className="text-xs font-bold text-gray-500">{email}</p>
            </div>
          </div>
          
          {/* Edit button only for the blog owner */}
          {isOwner && (
            <NavLink to={`/updateBlog/${_id}`}>
              <FaPenToSquare className="text-2xl text-[#003f6fbb] shadow cursor-pointer" />
            </NavLink>
          )}
        </div>

        {/* Blog Title and Image */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-5">{title}</h2>
        <img className="rounded-xl h-40 object-cover bg-no-repeat" src={imageUrl} alt="Blog" />

        {/* Description Box */}
        <div className="mt-6">
          <p className="text-lg text-gray-600 font-bold">{shortDesc}</p>
        </div>
        <div className="mt-6">
          <p className="text-lg text-gray-600 font-bold">{longDesc}</p>
        </div>

        {/* Add Comment Form - Blog owner cannot comment */}
        {!isOwner && (
          <div className="mt-6">
            <form onSubmit={handleCommentSubmit} className="flex gap-2 items-center">
              <div className="join border border-purple-300 w-full">
                <input
                  className="input w-full join-item focus:outline-none border-none"
                  placeholder="Add a comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 via-purple-600
               to-[#313030] join-item px-6 text-md text-white hover:text-black font-medium rounded-r-md"
                >
                  Comment
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Comments Section */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">Comments</h3>
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment) => (
              <div key={comment._id} className="flex items-start gap-2 mt-4">
                <img
                  src={comment.userImage}
                  className="w-10 h-10 rounded-full border shadow"
                  alt="Commenter Avatar"
                />
                <div>
                  <p className="text-sm font-bold">{comment.userName}</p>
                  <p className="text-sm text-gray-600">{comment.text}</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
