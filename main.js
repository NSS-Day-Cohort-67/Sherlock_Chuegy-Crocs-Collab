import { getCrocs, getStyles } from "./database.js"

const crocs = getCrocs()
console.log(crocs)

const styles = getStyles()
console.log(styles)

// Customer wants a small app to give her a detailed list of her croc collection.

// built our database
// wrote and exported getter functions
// imported our getter functions

// we will need a header at the top with the name Chuegy Crocs

// define a function that will return html
const crocInventory = () => {
    //define a variable to hold our html string
    let htmlString = "this is where we want our html to be"
    //we want to display the name property of each croc in our crocs array by iterating through the crocs array
    for (const croc of crocs) {
        console.log(`${croc.name}`)
    }


    //return html
    return htmlString
}   

//call the function
console.log(crocInventory())