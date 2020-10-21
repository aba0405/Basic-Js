function welcomeGuest(name, greetHandler) {
 greetHandler(name);
}
const actorName = "Julio Bueno";

function greetMorning(name) {
 console.log('Good Morning', name)
}

function greetAfternoon(name) {
 console.log('Good Afternoon', name)
}

welcomeGuest(actorName, greetAfternoon)