import React from 'react';

const Course = ({title, language}) => {
    return (
        <div>
            <p>title: {title}</p>
            <p>language: {language}</p>
            <div/>
            {/*<span>title: {title}</span>*/}
            {/*<span>language: {language}</span>*/}
        </div>
    );
};

export default Course;