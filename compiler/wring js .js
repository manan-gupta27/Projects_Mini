var button = document.getElementById("button");
var parent = document.getElementById("parent");

button.onclick=function(){
  fetchAndShowUser();
}

function fetchAndShowUser()
{
  var request = new XMLHttpRequest();

  
  request.open("POST","https://codequotient.com/api/executeCode");
  
  

  request.send( JSON.stringify() );
  

  request.addEventListener("load", function(event)
  {
    const data = JSON.parse(event.target.responseText);


    data.forEach(function(post)
    {
      var container = document.createElement("div");

      

      parent.appendChild(container);
    })
  })
}
