"use client";

import React, { useState } from 'react';
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans, IconUsers } from "@tabler/icons-react";

const DMView = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  const chats = [
    { id: 1, name: 'Tyler Durden', type: 'dm', status: 'online' },
    { id: 2, name: 'Marla Singer', type: 'dm', status: 'offline' },
    { id: 3, name: 'Robert Paulson', type: 'dm', status: 'idle' },
    { id: 4, name: 'Fight Club', type: 'group', members: ['Tyler Durden', 'Marla Singer', 'Robert Paulson'] },
    { id: 5, name: 'Project Mayhem', type: 'group', members: ['Tyler Durden', 'Angel Face', 'The Mechanic'] },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(`Sending message to ${selectedChat.name}: ${message}`);
    setMessage('');
  };

  return (
    <div className="flex h-screen bg-white dark:bg-transparent text-neutral-800 dark:text-neutral-200">
      {/* Chats List */}
      <div className="w-64 border-r border-neutral-200 dark:border-neutral-700 p-4">
        <h2 className="font-bold text-xl mb-4">Direct Messages</h2>
        <div className="space-y-2">
          {chats.map((chat) => (
            <button
              key={chat.id}
              className={`w-full text-left p-2 rounded-md flex items-center ${
                selectedChat && selectedChat.id === chat.id
                  ? 'bg-neutral-200 dark:bg-neutral-700'
                  : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              {chat.type === 'group' ? (
                <IconUsers className="w-4 h-4 mr-2" />
              ) : (
                <span className={`mr-2 inline-block w-2 h-2 rounded-full ${
                  chat.status === 'online' ? 'bg-green-500' :
                  chat.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'
                }`}></span>
              )}
              {chat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
              <h2 className="font-bold text-xl flex items-center">
                {selectedChat.type === 'group' && <IconUsers className="w-5 h-5 mr-2" />}
                {selectedChat.name}
              </h2>
              {selectedChat.type === 'group' && (
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {selectedChat.members.join(', ')}
                </p>
              )}
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Messages would go here */}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-neutral-200 dark:border-neutral-700">
              <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  placeholder={`Message ${selectedChat.name}`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </LabelInputContainer>
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Send Message
                <BottomGradient />
              </button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};

export default DMView;