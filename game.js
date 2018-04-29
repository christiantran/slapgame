//var health = 100;
//var targetName = 'Frank the Fly';
//var hits = 0;

function Target(targetName){

    this.health = 100;
    this.targetName = name;
    this.hits = 0;
    this.items = []
}

var myTarget = new Target();
// myTarget.items.push();

//myTarget.items.push(items.zapper)
var items = {

    zapper: new Item("Zapper",2.5,"Electrocute those flys!"),
    swatter: new Item("Swatter",0.5,"Swat those annoyances away!"),
    newspaper: new Item("Newspaper",1.5,"Smash it!")
}

function Options(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

function update() {

    document.getElementById('health').innerText = myTarget.health
    document.getElementById('hits').innerText = myTarget.hits
}

update()

function slap() {
    myTarget.health--
    myTarget.hits++
    //alert(health)

    update()
}

function punch() {
    myTarget.health = (myTarget.health-5)
    myTarget.hits++

    update()
}

function kick() {
    myTarget.health = (myTarget.health-10)
    myTarget.hits++

    update()
}