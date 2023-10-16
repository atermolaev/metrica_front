import React from 'react';

interface IProps {
    children: React.ReactNode;
}

const Grid: React.FC<IProps> = ({ children }) => {
    return <div>{children}</div>;
}

export default Grid;