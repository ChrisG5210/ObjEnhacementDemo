// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

const createInstructor = () => {
    return {
        firstName,
        lastname
    };
};

////////////////////////////////////////////////////////////////////////////


// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;
const instructor = () => {
    return {
        firstName: 'Colt',
        [favoriteNumber]: "That is my favorite"
    };
}; 

////////////////////////////////////////////////////////////////////////////

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

const professor = {
    firstName: "Colt",
    sayHi: () => {
        return "HI!"
    },
    sayBye: () => {
        return firstName + sayBye;
    }
}

////////////////////////////////////////////////////////////////////////////


// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

const createAnimal = (species, verb, noise) => {
    return {species,[verb] () {
            return noise;
        }
    };
};