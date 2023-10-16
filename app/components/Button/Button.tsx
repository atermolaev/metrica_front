import React from 'react';

interface IProps {
    children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children }) => {
    return <button>{children}</button>;
}

export default Button;