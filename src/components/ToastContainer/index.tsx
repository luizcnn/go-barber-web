import React from 'react';

import Toast from './Toast';

import { Container } from './styles';

interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => {
        return <Toast key={message.id} message={message} />;
      })}
    </Container>
  );
};

export default ToastContainer;
