import React from 'react';

interface IProps {
    children: React.ReactElement;
}

const Container: React.FC<IProps> = ({ children }) => {
    return <div>{children}</div>;
}

export default Container;