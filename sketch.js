var input,heading;
function setup(){
  createCanvas (300,200);
  background (178,255,102);

  input=createInput();
  input.position(5,60);

  heading=createElement ('h4','enter any alphabet');
  heading.position(5,20);

  textAlign(CENTER);
  textSize(50);



}
function draw(){
  const value=input.value();
  switch(value){
    case 'a':
      console.log("it is vowel");
      break;

      case 'e':
        console.log("it is vowel");
        break;

        case 'i':
          console.log("it is vowel");
          break;

          case 'o':
            console.log("it is vowel");
            break;

            case 'u':
              console.log("it is vowel");
              break;

              default:
                console.log ("pls enter any other character");


  }
}
