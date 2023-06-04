import internal from "stream";
// 1 пара
/*let  a:number=5;
let  b:string ="Alex";

console.log(a+b);
let  s:string="5";
let  c:string="2";
console.log(s+c);
const array: number[] = Array(10)
.fill(undefined)
.map(() => 50 * Math.random());
for (let i = 0; i < 10; i++) {
    console.log(array[i]);
  }
  let result = array.reduce(function(sum, elem) {
	return sum + elem;
}, 0);
console.log("Summ:",result);

let result2 = array.reduce(function(sum, elem) {
	if (elem%2==0) {
		return sum + elem;
	} else {
		return sum;
	}
});
console.log("Summ chet:",result2);

function arraySum(array){
    var sum2 = 0;
    for(var i = 0; i < array.length; i++){
        if (i%2==0) {
        sum2 += array[i];
        }
        }
   console.log("Четные:",sum2); 
}
arraySum(array);

function arraySum2(array){
    var sum3 = 0;
    for(var i = 0; i < array.length; i++){
        if (i%2!=0) {
        sum3 += array[i];
        }
        }
   console.log("Не четные:",sum3); 
}
arraySum2(array);

function getMaxOfArray(array) {
    return Math.max.apply(null, array);
  }
  function getMinOfArray(array) {
    return Math.min.apply(null, array);
  }
  var steckmax = 0;
  var steckmin = 0;
  var summmaxmin = 0;
  for (let i = 0; i < 10; i++) {
    if(array[i]==getMaxOfArray(array))
    {
        steckmax=i;
    }
    if(array[i]==getMinOfArray(array))
    {
        steckmin=i;
    }
}
if(steckmax+1==steckmin||steckmin+1==steckmax)
{
    console.log("Summ or max and min:",0); 
}
else{
    if(steckmax>steckmin)
    for (let i = steckmin+1; i < steckmax; i++) {
        summmaxmin+= array[i];
    }
    else{
        for (let i = steckmax+1; i < steckmin; i++) {
            summmaxmin+= array[i];
        }
    }
    console.log("Summ or max and min:",summmaxmin); 
    console.log("min index:",steckmin,"max index",steckmax); 
}*/
//2 пара
/*
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
// 3 пара

/*abstract class Shape {
  abstract getArea(): number;
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  getArea(): number {
    return this.side*2;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius*2;
  }
}

class Triangle extends Shape {
  constructor(private base: number, private height: number) {
    super();
  }

  getArea(): number {
    return 0.5 * this.base * this.height;
  }
}

const square = new Square(5);
console.log(square.getArea()); 

const circle = new Circle(3);
console.log(circle.getArea());

const triangle = new Triangle(4, 6);
console.log(triangle.getArea()); */

//-----
//
/*
   class Nogka{
    public Dina: number;
    public Visota: number;

    constructor(dina:number,visota:number){
        this.Dina = dina;
        this.Visota = visota;
    }
    setDina(dina: number): void{
        this.Dina = dina;
    }
    getDina(): number{
        return this.Dina;
    }
    retInfo(): string{
        return `Диаметр ножки: ${this.Dina}\t ввысота ножки: ${this.Dina}`;
    }
  } 
   class Kapeluyx{
    public Diametr: number;
    public Visota: number;
    public Okras: string;

    constructor(diametr:number,visota:number,okras:string){
        this.Diametr = diametr;
        this.Visota = visota;
        this.Okras = okras;
    }
    setDina(diametr: number): void{
        this.Diametr = diametr;
    }
    getDina(): number{
        return this.Diametr;
    }
    retInfo(): string{
        return `Диаметр шляпки: ${this.Diametr}\t Высота шляпки: ${this.Visota}\t Окрас шляпки: ${this.Okras}`;
    }
  }

  abstract class Grib {
    private Nogka:Nogka;
    private Kapeluyx:Kapeluyx;
    public Nmae: string;
    public Ranktoxic: number;
    private Gribnucha:  number;
    private AreaObit:string;

    constructor(nogka:Nogka,kapeluyx:Kapeluyx,nmae:string,ranktoxic:number, gribnucha: number,areaObit:string){
        this.Nogka= nogka;
        this.Kapeluyx= kapeluyx;
        this.Nmae = nmae;
        this.Ranktoxic = ranktoxic;
        this.Gribnucha = gribnucha;
        this.AreaObit = areaObit;
    }

    getKapeluyx(): number{
        return this.Kapeluyx.Diametr;
    }


    setNmae(nmae: string): void{
        this.Nmae = nmae;
    }
    getNmae(): string{
        return this.Nmae;
    }
    setRanktoxic(ranktoxic: number): void{
        this.Ranktoxic = ranktoxic;
    }
    getRanktoxic(): number{
        return this.Ranktoxic;
    }
    setGribnucha(gribnucha: number): void{
        this.Gribnucha = gribnucha;
    }
    getGribnucha(): number{
        return this.Gribnucha;
    }
    setAreaObit(areaObit: string): void{
        this.AreaObit = areaObit;
    }
    getAreaObit(): string{
        return this.AreaObit;
    }
    retInfo(): string{
        return ` \tНазвание: ${this.Nmae}  \t : ${this.Nogka.retInfo()}\t : ${this.Kapeluyx.retInfo()} \tДлина грибницы: ${this.Gribnucha}\tровень токсичности: ${this.Ranktoxic}\tОбласть обитания: ${this.AreaObit}`;
    }
  }

class Mexamor extends Grib{
    constructor(nogka:Nogka,kapeluyx:Kapeluyx,nmae:string,ranktoxic:number, gribnucha: number,areaObit:string){
        super(nogka,kapeluyx,nmae,ranktoxic, gribnucha,areaObit);
    }

    retInfo(): string{
        return super.retInfo();
    }
}
class CirShpanka extends Grib{
    constructor(nogka:Nogka,kapeluyx:Kapeluyx,nmae:string,ranktoxic:number, gribnucha: number,areaObit:string){
        super(nogka,kapeluyx,nmae,ranktoxic, gribnucha,areaObit);
    }

    retInfo(): string{
        return super.retInfo();
    }
}
class Lisichka extends Grib{
    constructor(nogka:Nogka,kapeluyx:Kapeluyx,nmae:string,ranktoxic:number, gribnucha: number,areaObit:string){
        super(nogka,kapeluyx,nmae,ranktoxic, gribnucha,areaObit);
    }

    retInfo(): string{
        return super.retInfo();
    }
}

const mexamor = new Mexamor(new Nogka(11,15),new Kapeluyx(11,15,"Red"),"Мухаморчик Жорчик",11,22,"Весь Мир");
console.log(mexamor.retInfo());


const cirShpanka = new CirShpanka(new Nogka(11,15),new Kapeluyx(11,15,"MultiOrkras"),"Шпанка Акаянка",11,22,"Авганистан");
console.log(cirShpanka.retInfo());

const lisichka = new Lisichka(new Nogka(11,15),new Kapeluyx(11,15,"White"),"Лисички жарят Птички",11,22,"Джони они на деревья");
console.log(lisichka.retInfo());

let grib:Grib[]=[];
grib.push(new Mexamor(new Nogka(11,15),new Kapeluyx(11,15,"Red"),"Мухаморчик Жорчик",11,22,"Весь Мир"));
grib.push(new CirShpanka(new Nogka(11,15),new Kapeluyx(41,15,"MultiOrkras"),"Шпанка Акаянка",11,22,"Авганистан"));
grib.push(new Lisichka(new Nogka(11,15),new Kapeluyx(13,15,"White"),"Лисички жарят Птички",11,22,"Джони они на деревья"));
grib.push(new Mexamor(new Nogka(11,15),new Kapeluyx(51,15,"Red"),"Мухаморчик Жорчик",11,22,"Весь Мир"));
grib.push(new CirShpanka(new Nogka(11,15),new Kapeluyx(111,15,"MultiOrkras"),"Шпанка Акаянка",11,22,"Авганистан"));
grib.push(new Lisichka(new Nogka(11,15),new Kapeluyx(14,15,"White"),"Лисички жарят Птички",11,22,"Джони они на деревья"));
grib.push(new Mexamor(new Nogka(11,15),new Kapeluyx(10,15,"Red"),"Мухаморчик Жорчик",11,22,"Весь Мир"));
grib.push(new CirShpanka(new Nogka(11,15),new Kapeluyx(111,15,"MultiOrkras"),"Шпанка Акаянка",11,22,"Авганистан"));
grib.push(new Lisichka(new Nogka(11,15),new Kapeluyx(64,15,"White"),"Лисички жарят Птички",11,22,"Джони они на деревья"));
for(let gribs of grib){
    console.log(gribs.retInfo());
}


class ControllerThaGribami{
    public index: number;
    private Gribs: Grib[];
    constructor(grib: Grib[]=[]){
        this.Gribs=grib;
    }
    popap(Grib:Grib):void{
        this.Gribs.push();
    }
    prints():void{
        for(let gribs of grib){
            console.log(gribs.retInfo());
        }
    }
    getBigTITS():Grib{
        let numberses=0;
        for(let i = 0; i < this.Gribs.length; i++){
           if(this.Gribs[i].getKapeluyx.length>0){
             numberses=i;
           }
        }
        let gribBig:Grib=this.Gribs[numberses];
       return gribBig
    }
}
const mexamors = new ControllerThaGribami();
console.log('BIG TIGS',mexamors.getBigTITS())
*/
//01,03,22

interface Solders {
    Attack(damag:number): void;
    protection(armor:number): void;
    Retreat(speed:number): void;
    MoveOn(speed:number): void;
}
































/*
let Attack: Solders = {
      
    id: 1, 
    name: "Alice",
    sayWords: function(words: string): void{
        console.log(`${name} говорит "${words}"`);
    }
}
let protection: Solders = {
      
    id: 1, 
    name: "Alice",
    sayWords: function(words: string): void{
        console.log(`${name} говорит "${words}"`);
    }
}
let Retreat: Solders = {
      
    id: 1, 
    name: "Alice",
    sayWords: function(words: string): void{
        console.log(`${name} говорит "${words}"`);
    }
}
let MoveOn: Solders = {
      
    id: 1, 
    name: "Alice",
    sayWords: function(words: string): void{
        console.log(`${name} говорит "${words}"`);
    }
}*/