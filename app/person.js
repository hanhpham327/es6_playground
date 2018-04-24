class Person{
    constructor(name){
        this.name=name;
    }
    sleep(hours){
        return `<h1> I'm going to sleep for ${hours} </h1>`
    }

    drink(cups){
        return `<h1> I'm going to drink ${cups} cups of water </h1>`
    }
    speak(message){
        return `<h1> ${this.name} said ${message} </h1>`
    }
}

class SuperPerson extends Person{
    
    constructor(name,heroName){
        super(name);
        //super is handling this.name in the child constructor
        this.heroName = heroName;
        
    }

    sayHeroName(){
       return this.speak(`i'm ${this.heroName}`)
    }

    xRay(){
        // return `<h1>${this.name} said: I see everything!! </h1>`;
        return this.speak('I can see everything!!')

    }
}

export default SuperPerson;