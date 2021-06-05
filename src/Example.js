function Example() {
  const title = 'Welcome to the new blog';
  var likes = 200;
  const link = "www.google.com";
  return (
    <div className="App">
      <h1>{ title }</h1>                        //Welcome to the new blog as header
      <p>Liked { likes }  times </p>            //Liked 200 times
      <p>{ [1,2,3,4,5] }</p>                    //Array gets joined to the string 12345
      <p>{ Math.random() *20 }</p>              //Simple evaluations can also be done
      <a href={ link }>Google</a>               //no quotes required for href value if {} is used
    </div>
  );
}

export default Example;