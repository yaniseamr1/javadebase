let sportsOne: string[] = ["Golf", "Criket", "Tennis", "Swimming"];
/*
for(let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i]);
}
*/
// let's use the simplified for loop
/*
for (let tempSport of sportsOne){
    if(tempSport == "Criket"){
    console.log(tempSport +" << My favorite sports");
}
else{
    console.log(tempSport);
}
}
*/
sportsOne.push("futball"); 
sportsOne.push("handball");
console.log(sportsOne);

