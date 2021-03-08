var images = [
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_01.png",
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_02.png",
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_03.png",
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_04.png"
  ];
  var i = 0; 
  function flip() {
  document.getElementById("frontpage").src = 
  images [i];
  i++; 
    
    if (i == 4)
      {
        i=0;
      }
  }
  