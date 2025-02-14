import React, { useState } from "react";
import { FiCopy, FiEdit2, FiSend, FiVolume2 } from "react-icons/fi";
import { BsRobot, BsPerson } from "react-icons/bs";
import QuillEditor from "./QuillEditor";
import { FaArrowAltCircleUp, FaArrowUp } from "react-icons/fa";

const ChatGPTUI = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [message, setMessage] = useState("");


    const handleSendMessage = () => {
        if (message.trim()) {
            // Add user message
            setChatHistory((prev) => [...prev, { role: "user", content: message }]);

            // Simulate bot response after the user's message
            setTimeout(() => {
                setChatHistory((prev) => [
                    ...prev,
                    {   role: "bot", 
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        richText: "<h1> Lorem ipsum dolor sit amet <h1> <br /> <small> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </small>",
                    },
                ]);
            }, 500); // Adding a slight delay for bot response for realism

            setMessage(""); // Clear the input field
        }
    };


    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto">
            {/* Chat history */}
            <div className="flex-1 overflow-y-auto p-4">
                {chatHistory.map((chat, index) => (
                    <div
                        key={index}
                        className={`flex items-start mb-4 ${chat.role === "user" ? "justify-end" : "justify-start"
                            }`}
                    >
                        {chat.role === "bot" && (
                            <div className="mr-2">
                                <BsRobot className="text-gray-500 w-6 h-6" />
                            </div>
                        )}
                        <div
                            className={`${chat.role === "user"
                                ? "bg-blue-500 text-white"
                                : " text-gray-900"
                                } px-4 py-2 rounded-lg max-w-xl`}
                        >
                            {chat.content}
                            {
                                chat.richText &&
                                <div 
                                    className="border mt-5 bg-white rounded max-h-[300px] overflow-auto"
                                    // className="border mt-5 bg-white rounded absolute w-[40%] h-[95%] mx-5 my-5 right-0 top-0 overflow-auto z-50"
                                >
                                    <QuillEditor
                                        value={chat.richText}
                                    />
                                </div>
                            }
                            { chat.role === "bot" &&
                            <div className="flex mt-3 gap-3">
                                <button
                                    onClick={() => handleSpeak(chat.content)}
                                    className="hover:text-blue-500"
                                    title="Read Aloud"
                                >
                                    <FiVolume2 />
                                </button>
                                <button
                                    onClick={() => alert("Edit feature coming soon!")}
                                    className="hover:text-blue-500"
                                    title="Edit"
                                >
                                    <FiEdit2 />
                                </button>
                                <button
                                    onClick={() => handleCopy(chat.content)}
                                    className="hover:text-blue-500"
                                    title="Copy"
                                >
                                    <FiCopy />
                                </button>
                            </div>
                            }
                        </div>

                        {chat.role === "user" && (
                            <div className="ml-2  ">
                                <BsPerson className="text-primary w-10 h-6" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Input area */}
            <div className="p-4">
                <div className="flex flex-col content-start items-center border p-3 rounded-xl">
                    <div className="flex w-full">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 border border-none rounded-lg p-2 mr-2 focus:outline-none"
                            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        />
                        <button
                            onClick={handleSendMessage}
                            className=" text-primary p-2 rounded-lg"
                        >
                            <FaArrowAltCircleUp className="w-5 h-5" />
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    );
};

export default ChatGPTUI;
