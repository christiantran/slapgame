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

function giveItem(itemName){

    myTarget.items.push(killerItems[itemName]);
    myTarget.items.push(killerItems[itemName]);
    myTarget.items.push(killerItems[itemName]);
}

var killerItems = {

    zapper: new Items("Zapper", 1.5,"Electrocute those flys!"),
    swatter: new Items("Swatter", 0.75,"Swat those annoyances away!"),
    newspaper: new Items("Newspaper", 0.5,"Smash it!")
}

function Items(name, modifier, description){
    this.itemName = name;
    this.modifier = modifier;
    this.description = description;
}

function addMods(){
    var totalMods = 1
    for (var i = 0; i< myTarget.items.length; i++){
        var item = myTarget.items[i];
        totalMods += item.modifier;
    }
        return totalMods

}

function update() {

    document.getElementById('health').innerText = myTarget.health
    document.getElementById('hits').innerText = myTarget.hits
}

update()

function slap() {
    myTarget.health -= 1 * addMods();
    myTarget.hits++;
    //alert(health)

    update()
}

function punch() {
    myTarget.health -= 5 * addMods();
    myTarget.hits++;

    update()
}

function kick() {
    myTarget.health -= 10 * addMods();
    myTarget.hits++;

    update()
}