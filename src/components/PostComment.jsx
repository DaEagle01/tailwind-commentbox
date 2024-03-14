
const PostComment = () => {
    return (
        <div className="flex gap-2 p-6 bg-white rounded">
            <img src="https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?t=st=1710402269~exp=1710405869~hmac=84f942cbc7d663f55294a6783aa020b8c5f0297452a2046b64ea1fa04a0c268a&w=740" alt="User Avatar" className="w-8 h-8 rounded-full" />
            <textarea
                type="text"
                placeholder="Add a comment..."
                className="flex-grow p-2 mx-2 border border-indigo-50 rounded focus:outline-indigo-300 min-h-[100px] text-gray-500 font-medium semibold resize-none"
            />
            <button
                className="px-6 py-2 h-max text-white bg-primary rounded-lg hover:bg-indigo-900 focus:outline-none font-semibold"
            >
                SEND
            </button>
        </div>
    )
}

export default PostComment