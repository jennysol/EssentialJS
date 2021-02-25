const people = {
  salutation: 'Good Morning!',
  say() {
      console.log(this.salutation)
  }
}

people.say()

const say = people.say
say() // conflict between paradigms: functional 00 

const sayPeople = people.say.bind(people)
sayPeople()
