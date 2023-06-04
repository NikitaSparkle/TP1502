
//2 пара

let message: string = "TheQuick. BrownForJumpedOver. in TheLazyDogThe. Quick. JumpedOver. TheLazy. Dog. TheLazyDogThe. Quick. JumpedOver. TheLazy. Dog. TheLazyDogThe. Quick. JumpedOver. TheLazy. Dog. TheLazyDogThe. Quick. JumpedOver. TheLazy. Dog. TheLazyDogThe. Quick. JumpedOver. TheLazy. Dog";
console.log(message.length);
//2
console.log(message.substr(0,50));
//3
let reverseString: string = "";
for (let char of message) {   reverseString = char + reverseString;
}
console.log("Revers " + reverseString);

let splits :string [];
splits=message.split('');
var next=1;

//4
for (let i = 0; i < splits.length; i++) {
   if(splits[i]=='.'){next++;}
}
console.log("Количество точек",next);
var longstnext=0;
//5
function findLongestWord(str) {

     var strSplit = str.split(' ');
     var longestWord = 0;
for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
    longestWord = strSplit[i].length;
    longstnext=i;
     }
  }
  console.log("Длинное слово",strSplit[longstnext]);
    return longestWord;
}
findLongestWord(message);
//6
console.log(message.substr(0,message.length/2));
 //7
 
 var mes2new = "";
 var strSplit = message.split(' ');
 for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i] == "in"){
        continue;
     }
     mes2new+=strSplit[i]
  }
  console.log(mes2new);

  //8

  var mes3new = "";
  var strSplit3 = message.split('');
  for(var i = 0; i < strSplit3.length; i++){
     if(strSplit3[i] == "i"){
        mes3new+="m";
      }
      else{
      mes3new+=strSplit3[i]
      }
   }
   console.log(mes3new);
   //9
console.log(message.replace(message.split('.')[1]+'.', ''))
   //10
    function LongestWord(str) {
        let strSplit = str.split(' ');
        let longestWord = '';
        for(let i = 0; i < strSplit.length; i++){
            if(strSplit[i].length > longestWord.length){
                longestWord = strSplit[i];
            }
        }
        return longestWord;
    }
   function ShortestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = '';
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length < longestWord.length){
            longestWord = strSplit[i];
        }
    }
    return longestWord;
}
console.log(message.replace(LongestWord(message), ShortestWord(message)))
//11
console.log(message.replace(/\./g, '.\n\t'))*/
