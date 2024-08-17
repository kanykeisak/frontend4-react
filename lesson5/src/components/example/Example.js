import React from 'react';

const Example = ({children, title}) => {
    return (
        <div>
            {title}
            {children}
        </div>
    );
};

export default Example;