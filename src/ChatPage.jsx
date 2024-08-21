import sendIcon from './assets/images/send-icon.svg';
import copyIcon from './assets/images/copy-icon.svg';
import senderPic from './assets/images/sender-icon.svg';
import receiverPic from './assets/images/gpt-icon.svg';
import deleteIcon from './assets/images/delete-icon.svg';

import React from 'react';

const ChatPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left panel */}
      <div className="hidden md:flex md:w-1/6 bg-white border-r border-gray-300 flex-col">
        {/* Logo */}
        <div className="flex items-center p-4">
          <div className="w-10 h-10 bg-blue-800 rounded-full mr-2"></div>
          <span className="text-black text-lg font-semibold">Logo</span>
        </div>
        
        {/* Chat histories (dummy content) */}
        <div className="flex-grow overflow-y-auto">
          {/* Add chat histories here */}
        </div>
        
        {/* Clear Conversations button */}
        <div className="p-4 border-t border-gray-300">
          <button className="w-full bg-white text-black rounded-lg px-4 py-2 flex items-center">
            <img src={deleteIcon} className="w-4 h-4 mr-2" />
            Clear Conversations
          </button>
        </div>
      </div>

      {/* Mobile Logo */}
      <div className="md:hidden flex items-center p-4 border-b border-gray-300 bg-white">
        <div className="w-10 h-10 bg-blue-800 rounded-full mr-2"></div>
        <span className="text-black text-lg font-semibold">Logo</span>
      </div>

      {/* Main chat area */}
      <div className="flex flex-col w-full md:w-3/4 h-full">
        {/* Chat messages */}
        <div className="flex-grow overflow-y-auto p-4">
          {/* Sender message */}
          <div className="flex justify-start mb-4">
            <div className="flex items-center">
              <div className="w-6 h-14 mr-4">
                <img src={senderPic} alt="Sender" className="w-6 h-6" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md relative">
                <span className="text-gray-800">
                  <strong>•••</strong>
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </span>
                <img src={copyIcon} alt="Copy" className="w-6 h-6 absolute top-2 right-2 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Receiver message */}
          <div className="flex justify-end mb-4">
            <div className="flex items-center">
              <div className="w-10 h-20 rounded-full mr-4">
                <img src={receiverPic} alt="Receiver" className="w-6 h-6" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md relative">
                <span className="text-gray-800">
                  <strong>•••</strong>
                  <br />
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  <br />
                  <a href="https://www.w3.org/Provider/Style/dummy.html" className="text-blue-600 underline">https://www.w3.org/Provider/Style/dummy.html</a>
                </span>
                <img src={copyIcon} alt="Copy" className="w-6 h-6 absolute top-2 right-2 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Input section */}
        <div className="p-4 md:p-8 flex items-center border-gray-300">
          <input
            type="text"
            placeholder="Ask A Question"
            className="flex-grow border rounded-lg p-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-gray-100 p-2 rounded-full">
            <img src={sendIcon} alt="Send" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
