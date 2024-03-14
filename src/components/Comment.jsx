import { MdDelete } from "react-icons/md";
import { PiPencilSimpleFill } from "react-icons/pi";

const Comment = ({ comment }) => {
    return (
        <div className="bg-white p-6 rounded-lg w-full flex gap-5">

            {/* up vote and down vote buttons */}
            <div className="bg-[#f5f6fa] flex flex-col justify-center items-center gap-2 p-2 rounded-lg h-max">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-3 h-3 text-indigo-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
                <div className="text-primary font-semibold text-base">
                    {comment.likes}
                </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-3 h-3 text-indigo-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                </button>
            </div>

            {/* main comment */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8">
                            <img src={comment.profilePicture} alt="commenters image" className="w-full h-full rounded-full" />
                        </div>
                        <p className="text-gray-600 text-sm font-semibold">
                            {comment.username}
                        </p>
                        {comment.isUser && (
                            <p className="text-xs font-semibold bg-primary text-gray-200 h-5 px-1 pt-[1px] rounded-sm">
                                you
                            </p>
                        )}
                        <p className="text-sm text-gray-500">
                            {comment.time}
                        </p>
                    </div>
                    {comment.isUser ? (
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-[6px]">
                                <div>
                                    <MdDelete className="w-4 h-4 text-red-600 stroke" />
                                </div>
                                <p className="text-base font-semibold text-red-600">
                                    Delete
                                </p>
                            </button>
                            <button className="flex items-center gap-[6px]">
                                <div>
                                    <PiPencilSimpleFill className="w-4 h-4 text-primary" />
                                </div>
                                <p className="text-base font-semibold text-primary">
                                    Edit
                                </p>
                            </button>
                        </div>
                    ) : (
                        <button className="flex items-center gap-[6px]">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.703 21.928" width="15" height="15" className="transform rotate-180 -scale-y-[1]  fill-current text-primary">
                                    <path d="M1.056 21.928c0-6.531 5.661-9.034 10.018-9.375V18.1L22.7 9.044 11.073 0v4.836a10.5 10.5 0 0 0-7.344 3.352C-.618 12.946-.008 21 .076 21.928z" />
                                </svg>
                            </div>
                            <p className="text-base font-semibold text-primary">
                                Reply
                            </p>
                        </button>
                    )}

                </div>
                <p className="text-sm text-gray-500 leading-6">
                    {comment.comment.split(/(@\w+)/g).map((chunk, index) => {
                        if (chunk.startsWith('@')) {
                            return <span key={index} className="font-semibold text-primary">{chunk}</span>;
                        } else {
                            return chunk;
                        }
                    })}
                </p>
            </div>
        </div>
    )
}

export default Comment