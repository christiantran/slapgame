var health = 100;
var targetName = 'Frank';
var hits = 0;

function update() {
    document.getElementById('health').innerText = health
    document.getElementById('hits').innerText = hits
}

update()

function slap() {
    health--
    hits++
    //alert(health)

    update()
}

function punch() {
    health = (health-5)
    hits++

    update()
}

function kick() {
    health = (health-10)
    hits++

    update()
}