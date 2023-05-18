import inquirer from "inquirer";






class Pet {
  constructor(
    name,
    species,
    breed,
    hunger = "100",
    happiness = "100",
    energy = "100"
  ) {
    this.name = name;
    this.species = species;
    this.hunger = hunger;
    this.happiness = happiness;
    this.energy = energy;
    this.breed = breed;
  }

  feed() {
    console.log(`You fed ${this.name}!`);
    
    switch (this.breed) {
      case "Golden Retriever":
      case "Labrador Retriever":
        this.hunger += 25;
        break;
      case "Poodle":
      case "Beagle":
        this.hunger += 23;
        break;
      default:
      case "Bulldog":
      case "German Shepherd":
        this.hunger += 20;
    }
  }

  play() {
    console.log(`You played with ${this.name}! He had fun!`);
    this.hunger += 20;
  }

  bath() {
    console.log(`You washed ${this.name}!`);
    this.happiness += 20;
  }
}

const mainScript = function() {
  print("Meeowwwww")
}

inquirer
  .prompt([
    {
      name: "petname",
      type: "input",
      message: "What is your pet's name?",
    },
    {
      name: "pettype",
      type: "list",
      message: "What is your pet?",
      choices: ["Dog", "Cat", "Rabbit", "Bunny"],
    },
  ])
  .then(function (answer) {
    switch(answer.pettype) {
        case "Dog":
          inquirer
            .prompt([
              {
               name: "dogbreed",
               type: "list",
               message: "What is the dog's breed?",
               choices: [
               "Labrador Retriever",
               "German Shephred",
               "Golden Retriever",
               "Bulldog",
               "Beagle",
               "Poodle"
              ],
            },
         ])
        .then(answers => {
          console.log(answers);
          var breed = answers.breed
        });
      break;
      case "Cat":
        inquirer
          .prompt([
            {
              name: "catbreed",
              type: "list",
              message: "What is the cat's breed?",
              choices: [
                "Calico",
                "Siamese",
                "Tabby",
                "Persian"
              ]
            }
          ])
          .then (answers => {
          console.log(answers);
          var breed = answers.breed
        });
      break;
    }
  });