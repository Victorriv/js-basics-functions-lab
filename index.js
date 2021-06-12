// Code your solution in this file!
function distanceFromHqInBlocks(address){
    let homebase = 42;
   if (address > homebase) {
       return address - homebase;

   } else{
       return homebase - address;
        }

}
function distanceFromHqInFeet(address){
   // distanceFromHqInBlocks(address);
    let walking = 264;
    let total= distanceFromHqInBlocks(address) * walking ;
    return total ; 
}



function distanceTravelledInFeet(hello){
    let total = distanceFromHqinFeet(hello)


}

function calculatesFarePrice(){

}