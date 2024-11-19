// app/components/ChatWrapper.js
'use client';
import dynamic from 'next/dynamic';

const ChatInterface = dynamic(() => import('./ChatInterface'), {
  loading: () => null
});

export default function ChatWrapper() {
  return <ChatInterface />;
}