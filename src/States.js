import { useState } from 'react';

const States = () => {

    // let name = 'mario';

    // const handleClick = () => {
    //     name = 'luigi';
    //     console.log(name);
    // }

    /*Handling in above way doesn't change the value in DOM. This is because the varible is not reactive, .ie., it doesn't get re-rendered in the DOM although its value is changed*/

    let newName = 'luigi';
    let newAge = 30;

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName(newName);
        setAge(newAge);
    }

    return (
        <div style={{
            textAlign: "center"
        }}>
            <p>{ name } is {age} years old</p>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
}
 
export default States;