// Your code here
class Cat {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
      } //closes constructor 

        speak(){
            return `${this.name} says meow!`;
        } //closes speak method
} //Closes Cat Class
  
   
class Dog {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
      } //closes constructor 

        speak(){
            return `${this.name} says woof!`;
        } //closes speak method
} //Closes Dog Class
  
   
class Bird {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
      } //closes constructor
      
        speak(){
            if(this.sex == "male"){
                return `It's me! ${this.name}, the parrot!`
            }
            else{ return `${this.name} says squawk!`}
        } //closes speak method
} //Closes Bird Class
 