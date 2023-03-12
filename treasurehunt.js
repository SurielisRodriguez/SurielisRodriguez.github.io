// Treasure hunt
var death = Math.floor(Math.random()* 9 )
var win = Math.floor(Math.random() * 9 )

// if(id === death) {
//     document.getElementById(treasure).disabled = true;
//     return alert ("Game Over!")
// }

if (win===death) {
    death = Math.floor(Math.random()* 9 )   
}

const treasure = (id) => {
  console.log()

  if ( id === win) {
    document.getElementById(win). innerHTML="💉"
    return alert (" You found the cure!. ") 
    } 

  else if (id === death) { 
    document.getElementById(death). innerHTML="🧟‍♂️"
    return alert (" You got infected. " ) 

    } 

    else {
    document.getElementById (id) . innerHTML= "🧱"
  }
 
}