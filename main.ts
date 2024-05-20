#!/usr/bin/env node
import inquirer from"inquirer"
/////declare a constant 'answrs//
const answer:{
    Sentence:string
}=await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter a Sentence"
    }
])

const words  = answer.Sentence.trim().split("")
console.log(words)
console.log(`Your sentences word count is${words.length}`);





