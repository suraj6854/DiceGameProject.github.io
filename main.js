
function myFunction(){
rand1=(Math.floor(Math.random()*6)+1);
 
 
 
 const Dice=`dice${rand1}.png`
 
 
 const DiceImage=`images/${Dice}`
 console.log(DiceImage);
 
const image= document.querySelector(".img1")

image.setAttribute("src",DiceImage)


rand2=(Math.floor(Math.random()*6)+1);
 
 
 const Dice2=`dice${rand2}.png`
 
 
 const DiceImage2=`images/${Dice2}`
 console.log(DiceImage2);
 
const image2= document.querySelector(".img2")

image2.setAttribute("src",DiceImage2)

if(Dice2>Dice){
   document.querySelector("h1").innerHTML="Player 2 win"
      
}
else if (Dice2<Dice){
   document.querySelector("h1").innerHTML="Player 1 win"
}
else{
   document.querySelector("h1").innerHTML="Draw"
}
}