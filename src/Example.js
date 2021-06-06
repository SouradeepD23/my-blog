function Example() {
  const title = 'Welcome to the new blog';
  var likes = 200;
  const link = "www.google.com";
  return (
    <div className="App">
      //Welcome to the new blog as header
      <h1 style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>{ title }</h1>
      //Liked 200 times                      
      <p style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>Liked { likes }  times </p> 
      //Array gets joined to the string 12345           
      <p style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>{ [1,2,3,4,5] }</p>
      //Simple evaluations can also be done                    
      <p style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>{ Math.random() *20 }</p>
      //no quotes required for href value if {} is used
      <a href={ link } style={{
                    color: "white",
                    backgroundColor: "#000",
                    borderRadius: '8px'
                }}>Google</a>
      //we can add inline styling to JSX by using style attribute which will have a value inside {}. The first {} is because of dynamic values in JSX and 2nd {} because the style values are passed as an object. 
    </div>
  );
}

export default Example;