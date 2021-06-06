const EventHandling = () => {

    const handleClick = () => {
        console.log("Hello");
    }

    //the event object can also be passed to the handler as a first arguement
    // const handleClick = (e) => {    
    //     console.log("Hello");
    //     console.log(e);
    // }

    // const handleClickAgain = (name) => {
    //     console.log("Hello " + name);
    // }

    //since we dont get the event object as a first arguement for this handler, we pass the e as parameter to the anonymous function which then passes it to the handler
    const handleClickAgain = (name, e) => {
        console.log("Hello " + name);
        console.log(e.target);
    }

    return (
        <div style={{
            textAlign: "center"
        }}>
            <button onClick={handleClick}>Click me!</button>
            
            {/* we write 'handleClick' because we just need to pass a reference to the function. If we write 'handleClick()' then the function gets invoked directly without event, .i.e, button click */}

            {/* to pass a parameter to the handler we need to wrap it in an anonymous function */}

            <button onClick={(e) => handleClickAgain('Mario', e)}>Click me again!</button>
        </div>
        
    );
}
 
export default EventHandling;