import React, { createContext, useContext, useState, FC } from 'react';

interface ToastContextType {
  showToast: boolean;
  showToastMessage: (message: string) => void;
  toastMessage: string;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
      throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
  };

  export const ToastProvider: FC = ({ children }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
  
    const showToastMessage = (message: string) => {
      setToastMessage(message);
      setShowToast(true);
  
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    };
  
    return (
      <ToastContext.Provider value={{ showToast, showToastMessage, toastMessage }}>
        {children}
      </ToastContext.Provider>
    );
  };