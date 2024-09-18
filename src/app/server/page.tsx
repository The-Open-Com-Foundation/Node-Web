"use client";

import React, { useState } from 'react';
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { IconHash, IconVolume2 } from "@tabler/icons-react";

const ServerView = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [message, setMessage] = useState('');

  const serverName = "Project Mayhem";
  const channels = [
    { id: 1, name: 'general', type: 'text' },
    { id: 2, name: 'announcements', type: 'text' },
    { id: 3, name: 'voice-chat', type: 'voice' },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(`Sending message to ${selectedChannel.name}: ${message}`);
    setMessage('');
  };

  return (
    <div className="flex h-screen bg-white dark:bg-transparent text-neutral-800 dark:text-neutral-200">
      {/* Channel List */}
      <div className="w-64 border-r border-neutral-200 dark:border-neutral-700 p-4">
        <h2 className="font-bold text-xl mb-4">{serverName}</h2>
        <div className="space-y-2">
          {channels.map((channel) => (
            <button
              key={channel.id}
              className={`w-full text-left p-2 rounded-md flex items-center ${
                selectedChannel && selectedChannel.id === channel.id
                  ? 'bg-neutral-200 dark:bg-neutral-700'
                  : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
              onClick={() => setSelectedChannel(channel)}
            >
              {channel.type === 'text' ? (
                <IconHash className="w-4 h-4 mr-2" />
              ) : (
                <IconVolume2 className="w-4 h-4 mr-2" />
              )}
              {channel.name}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChannel ? (
          <>
            {/* Channel Header */}
            <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
              <h2 className="font-bold text-xl flex items-center">
                {selectedChannel.type === 'text' ? (
                  <IconHash className="w-5 h-5 mr-2" />
                ) : (
                  <IconVolume2 className="w-5 h-5 mr-2" />
                )}
                {selectedChannel.name}
              </h2>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Messages would go here */}
            </div>

            {/* Message Input */}
            {selectedChannel.type === 'text' && (
              <form onSubmit={handleSendMessage} className="p-4 border-t border-neutral-200 dark:border-neutral-700">
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="message">Message</Label>
                  <Input
                    id="message"
                    placeholder={`Message #${selectedChannel.name}`}
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
            )}
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p>Select a channel to start chatting</p>
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

export default ServerView;