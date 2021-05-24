const animals = []
var index = 0
var cash = 0

function send() {
    const name = document.getElementById('animal-name');
    const cost = document.getElementById('animal-cost');
    const lifespan = document.getElementById('animal-lifespan');
    const post = new AnimalClass(name.value, cost.value, lifespan.value)

    cash -= cost.value
    animals.push(post)
    renderAnimalList(animals)

    name.value = ""
    cost.value = ""
    lifespan.value = ""
}

class AnimalClass {

    constructor(name,  cost, lifespan) {
        this.name = name;
        this.cost = cost;
        this.lifespan = lifespan;
        this.index = Date.now()

    }

    getListObject = function() {
        const li = document.createElement('li')

        const h3 = document.createElement('h3')
        const pPrice = document.createElement('p')

        h3.innerText = this.name
        pPrice.innerText = `Paid: ${this.cost} $`

        li.appendChild(h3)
        li.appendChild(pPrice)

        return li
    }
}


setInterval(newVisitor, 1000)
setInterval(checkAnimalsLifeTime, 1000)


function checkAnimalsLifeTime() {
    for (let e=0; e <animals.length; e++) {
        const animal = animals[e]
        if (animal.index + +animal.lifespan * 60000 < Date.now()) {
            animals.splice(e, 1)
            renderAnimalList(animals)
        }
    }
}


function newVisitor(){
    const cashElement = document.getElementById("cash")
    cash += 10
    cashElement.innerHTML = `Cash: ${cash}$`
}


function renderAnimalList(animals) {
    const list = document.getElementById("animal-list")
    list.innerText = ""

    for (let i=0; i < animals.length; i ++) {
        const post = animals[i]
        const li = post.getListObject();
        list.appendChild(li);
    }
}
