//object strawberryroll
//key-title
//value-info after key
//const strawberryShortcakeRoll = {
//    title: "Strawberry Shortcake Roll",
//description: " shortcake filled with cream and strawberry jelly",
//calories: "240 calories per serving",
// packageContents: "6 two packs per box"
//}

//const swissRoll = {
//   title: "Swiss Roll",
// description: "chocolate cake roll filled with cream",
// calories: "240 per serving",
//packageContents: "6 two packs per box"
//}
//a constructor function that constructs an object


//passing information into the function the things in the parenthesis are the arguments.
//const replacs let so yo ucan't accidentally override things

function populateDB() {
    const cakes = []
    const createCake = (name, ingredients, nutrient, boxContents) => {
        const snackCake = {
            title: name,
            description: ingredients,
            calories: nutrient,
            packageContents: boxContents
        }
        cakes.push(snackCake)
        
        const stringified = JSON.stringify(cakes)
        localStorage.setItem("snackCake", stringified)
    }
          createCake("christmas tree",
    "vanilla cake with white icing", 180,
    12)
    
    createCake("Swiss Roll",
        "chocolate cake with white icing", 180,
        6)

     createCake("Strawberry Shortcake Roll", "shortcake, cream filling, strawberry jelly", 180, 6)

     createCake("Chocolate Cupcake", "chocolate cake, cream filling, chocolate icing, 220, 8")

//each cake is individually pushed into the cakes array. This makes it more automated than creating each object.

};