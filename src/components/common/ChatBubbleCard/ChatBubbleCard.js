import React from 'react';
import './ChatBubbleCard.scss';

function ChatBubbleCard({ content, author }) {
  return (
    <div className='chat__card flex-column align-items-center justify-content-center'>
      <div className='chat__card__bubble'>{content}</div>
      <h3 className='chat__card__attr'>{author}</h3>
    </div>
  );
}

export default ChatBubbleCard;
