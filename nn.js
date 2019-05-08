"use strict"

function Stopwatch() {
    // writing my duration that way gives room for editing
    // practice encapsulation
    // this.duration = 0;
   
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })

    let isRunning = false;
    let time2 = null;
    let time3 = null;
    let duration = 0;

    this.start = function() {
        if (isRunning)
            throw new Error('Stop Watch already started')
        isRunning = true;
        time2 = new Date().getTime();
        console.log('stop watch started');
    }
    this.stop = function() {
        if (!isRunning)
            throw new Error('Stop Watch is not started')
        isRunning = false;
        time3 = new Date().getTime();
        //milliseconds converted to sec
        duration += Number(time3 - time2) / 1000;
        console.log('stop watch stopped');

    }
    this.reset = function() {
        duration = 0;
        time2 = null;
        time3 = null;
        isRunning = false;

    }

}
// classical and prototypical inheritance
//POLYMORPHISM
function Phone(ade) {
    this.ade = ade;
    this.omi = 1;
}

Phone.prototype.samsung = function() {
    console.log('samsung');
}

function Laptop(ade) {
    Phone.call(this, ade);   
    //**instead of new Phone below Object.create was used process broken
    // copies only the constructor the other took prototype
    this.hp = 'hp';
    // _proto_ = Phone;
}

// this makes it inherit from phone base not object base
// Laptop.prototype = Object.create(Object.prototype);
// Arrangement matters. before asus was not showing 
Laptop.prototype = Object.create(Phone.prototype);  //**continuation
Laptop.prototype.constructor = Laptop;

Laptop.prototype.asus = function() {
    console.log('asus');
}
//Mixing 
let animal2 = {
    awalk() {
        if (!isSleeping) {
            alert('I walk')
        }
    },
    asleep() {
        this.isSleeping = true;
    }
}
Object.assign(Laptop.prototype, animal2)   //because its a mixing objcet.create could have being used
var c1 = new Laptop('ade');

//Normal Objects
var animal = {
    walk() {
        if (!isSleeping) {
            alert('I walk')
        }
    },
    sleep() {
        this.isSleeping = true;
    }
}

let rabbit = {
    name: 'White Walker',
    //  _proto_: animal
    prototype: animal
}
//dont use out side like rabbit.proto or prototype
// perso.prototype.toString = function(){ console.log('hi')}
let perso = {name: 'mosh'}
let objectbase = Object.getPrototypeOf(perso);
console.log(Object.getOwnPropertyDescriptor(objectbase, 'toString'));
// myObj.__proto__ === Object.getPrototypeOf(myObj) == myObj.prototype
//prototype is to save memory because of many instances
// Objcet.defineProperty 
// for getter and setters/ writable/enumerable/configurable
// iterating class/function 
// Object.key(jjj)  instance member
// for(let key in jjj)   instance/prototype

function HTMLElement() {
    this.click = function() {
        console.log('click');
    }
}
HTMLElement.prototype.focus = function() {  //prototype
    console.log('focused');
}
function HTMLSelectElement(items = []) {   //1new   + htmle proto
    this.addItem = function(ite) {
        this.items.push(ite)
    };
    this.items = items;
    this.removeItem = function(ite) {
        let pn = this.items.indexOf(ite);
        this.items.splice(pn, 1);
    };
}
//HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
HTMLSelectElement.prototype = new HTMLElement
HTMLSelectElement.prototype.constructor = HTMLSelectElement
// HTMLSelectElement.prototype = new HTMLElement
//it applies his prototype automatically
function HTMLImageElement(src) {    //2new   +  htmle proto
    this.src = src;
    this.render = function() {
        return `<img src="${this.src}" />`;
    }
};
HTMLImageElement.prototype = new HTMLElement;
HTMLImageElement.prototype.constructor = HTMLImageElement
var c11 = new HTMLElement
var c10 = new HTMLSelectElement
var c12 = new HTMLImageElement

class Obo {
    draw() {
        console.log('my house');
    }
}
const z = new Obo();
const y = z.draw;
// y.call('this', Obo);


// export class Controllers {
    class Controllers {
    constructor() {
        this.data = 'hi';
        this.firstname= 'colt';
    }
    static getme3(){
      return 'tomi';
      // return console.log(this.getme2());
    }

    static getme2(){
      return console.log('hi ' + this.constructor.data);
    }
    getme1(){
      return  console.log(this.constructor.getme3());
    }
    getme(){
      return 'tomi';
    }
    getme0(){
      
       return setTimeout( function(){
       console.log(`hi ${this.firstname}`);
       }.bind(this),4000);
        };
    

    getAllMeetUps() {
        return console.log(`${this.data} ${this.getme()}`);
    }
}

// normal methods can call static with this.constructor == the class name
// static can call others with this.constructor too
// 


var tayo = new Controllers();
tayo.getAllMeetUps();

function tamed(){
  return this;
}


var colt = {
  firstname: "colt",
  sayHi: function(){
    setTimeout(function(){
      console.log(`hi ${this.firstname}`);
    }.bind(this),1000);
  }
}




// this when called inside a function return the window object
// when you use strict mode the this keyboard will be undefined
// it as to be called in an object not fuction or function in an object
// 
// the keyword this create an empty object thats y a function with this ordinary will work
// the keyword this is a attached to the empty object
// its adds return this to the end of the function
// add object _proto_ to refer it back to the constructor
// e.g function house(){
//              this.house = 'hi';
//              }
//       var me = new house();