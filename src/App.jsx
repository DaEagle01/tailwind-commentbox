import Comment from "./components/Comment"
import PostComment from "./components/PostComment";
import { comments } from "./constants/comments"

function App() {

  const renderComments = (comments, depth = 0) => {
    return comments?.map(comment => (
      <div key={comment.id} className="flex flex-col gap-4">
        <Comment comment={comment} />
        {comment?.replies?.length > 0 && (
          <div className="flex">
            <div className="flex-shrink-0 bg-gray-200 w-[3px] mx-9 rounded-full"></div>
            <div className="flex flex-col gap-4">
              {renderComments(comment?.replies, depth + 1)}
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="bg-[#f5f6fa] min-h-screen flex justify-center items-center py-14 font-sans antialiased">
      <div className="flex flex-col gap-4 max-w-2xl">
        {renderComments(comments)}
        <PostComment />
      </div>
    </div>
  )
}

export default App
