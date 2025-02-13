import React, { useState } from "react";
import { FiCopy, FiEdit2, FiSend, FiVolume2 } from "react-icons/fi";
import { BsRobot, BsPerson } from "react-icons/bs";

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
                    { role: "bot", content: "The issue of messages being added twice in your ChatGPTUI component occurs because you're appending both the user's message and the bot's response in one go, and the user's message is being added twice.!" },
                ]);
            }, 500); // Adding a slight delay for bot response for realism

            setMessage(""); // Clear the input field
        }
    };


    return (
        <div className="flex flex-col h-screen max-w-4xl mx-auto">
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
                            {chat.type === "rich-text"}
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
                <div className="flex items-center">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                    >
                        <FiSend className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatGPTUI;
