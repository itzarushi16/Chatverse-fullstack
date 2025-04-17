/*import React, { useEffect, useRef } from 'react'
import { useChatStore } from '../store/useChatStore'
import ChatHeader from "./ChatHeader"
import MessageInput from "./MessageInput"
import { formatMessageTime } from '../lib/utils'
import MessageSkeleton from './skeletons/MessageSkeleton'
import { useAuthStore } from '../store/useAuthStore'

const ChatContainer = () => {
  const {messages,getMessages,isMessagesLoading,selectedUser,
    subscribeToMessages,unsubscribeFromMessages

  }=useChatStore()
 const {authUser }=useAuthStore();
 const messageEndRef=useRef(null);

  useEffect(()=>{
    getMessages(selectedUser._id);

    subscribeToMessages();

    return()=>unsubscribeFromMessages();
  },[selectedUser._id,getMessages,subscribeToMessages,unsubscribeFromMessages])

   useEffect(()=>{
    if(messageEndRef.current && messages){
    messageEndRef.current.scrollIntoView({behavior:"smooth"});
    }
   },[messages])

if(isMessagesLoading) {
return  (
<div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
)}
  return (
    <div className="flex-1 flex flex-col overflow-auto">
    <ChatHeader />

   <div className="flex-1 overflow-y-auto p-4 space-y-4">
   {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}

            ref={messageEndRef}
          >
            <div className=" chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
              {formatMessageTime(message.createdAt)}
              </time>
            </div>
            <div className="chat-bubble flex flex-col">
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        ))}

   </div>
   
    <MessageInput /> 
      
    </div>
  )
}



export default ChatContainer
*/

//
/*
import React, { useEffect, useRef } from 'react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import MessageBubble from './MessageBubble';
import MessageSkeleton from './skeletons/MessageSkeleton';

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message._id}
            message={{
              ...message,
              isSender: message.senderId === authUser._id,
              senderProfilePic:
                message.senderId === authUser._id
                  ? authUser.profilePic || '/avatar.png'
                  : selectedUser.profilePic || '/avatar.png',
            }}
            ref={messageEndRef}
          />
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
*/

import React, { useEffect, useRef } from 'react';
import { useChatStore } from '../store/useChatStore';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import { formatMessageTime } from '../lib/utils';
import MessageSkeleton from './skeletons/MessageSkeleton';
import { useAuthStore } from '../store/useAuthStore';

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  // Fetch messages & setup subscription on mount or user change
  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages(); // Cleanup on unmount
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Show loading state while messages are being fetched
  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === authUser._id ? 'chat-end' : 'chat-start'}`}
            ref={index === messages.length - 1 ? messageEndRef : null}
          >
            {/* Avatar */}
            <div className="chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || '/avatar.png'
                      : selectedUser.profilePic || '/avatar.png'
                  }
                  alt="profile pic"
                />
              </div>
            </div>

            {/* Message content */}
            <div className="chat-bubble">{message.text}</div>

            {/* Timestamp */}
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {formatMessageTime(message.createdAt)}
              </time>
            </div>
          </div>
        ))}
      </div>

      {/* Input box */}
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
