import React from 'react'

const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    );
};

const Part = ({part}) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
};

const Content = ({parts}) => {
    return (
        <div>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </div>
    );
};

const Total = ({parts}) => {
    return (
        <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    );
};

const App = () => {
    const course = {
        name: 'Mean Stack Web Development',
        parts: [
            {
            name: 'Mearn Stack Web Development',
            exercises: 25
            },
            {
            name: 'Python Full Stack Web Development',
            exercises: 18
            },
            {
            name: 'Java Full Stack Web Development',
            exercises: 14
            }
        ]
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};



export default App