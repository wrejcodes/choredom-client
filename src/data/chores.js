const chores = [
  {
    id: 1,
    name: "Wash the Dishes",
    description: "Scrub the dishes with soap and water until clean.",
    startTime: Date.now() - (1000 * 72 * 60 * 60),
    endTime: Date.now() + (1000 * 24 * 7 * 60 * 60),
    belongsToGroup: 1,
    belongsToUser: 1,
    points: {
      worth: 25,
      buy: 75,
      steal: 40,
    }
  },

  {
    id: 2,
    name: "Take Out the Trash",
    description: "Take the trash bag from the kitchen and place it in the roadside trashbin.",
    startTime: Date.now() - (1000 * 48 * 60 * 60),
    endTime: Date.now() + (1000 * 48 * 60 * 60),
    belongsToGroup: 2,
    belongsToUser: 2,
    points: {
      worth: 15,
      buy: 40,
      steal: 30,
    }
  },

  {
    id: 3,
    name: "Sweep the Front Porch",
    description: "Take a broom, and use sweeping motions with the bristles to clean dust and dirt off of the front porch.",
    startTime: Date.now() - (1000 * 5 * 24 * 60 * 60),
    endTime: Date.now() - (1000 * 3 * 60 * 60),
    belongsToGroup: 3,
    belongsToUser: 3,
    points: {
      worth: 15,
      buy: 30,
      steal: 25,
    }
  },

  {
    id: 4,
    name: "Wash the Car",
    description: "Clean the car. Soap and armor all is under the kitchen sink.",
    startTime: Date.now() - (1000 * 48 * 60 * 60),
    endTime: Date.now() - (1000 * 24 * 3  * 60 * 60),
    belongsToGroup: 4,
    belongsToUser: 4,
    points: {
      worth: 30,
      buy: 90,
      steal: 60,
    }
  },
    {
    id: 5,
    name: "Mow the Lawn",
    description: "Use the push mower. Riding mower is :(",
    startTime: Date.now() - (1000 * 72 * 60 * 60),
    endTime: Date.now() + (1000 * 24 * 7 * 60 * 60),
    belongsToGroup: 1,
    belongsToUser: 2,
    points: {
      worth: 40,
      buy: 100,
      steal: 70,
    }
  },

  {
    id: 6,
    name: "Clean up all of your $%#!^$ trash!",
    description: "Seriously, it smells like garbage.",
    startTime: Date.now() - (1000 * 48 * 60 * 60),
    endTime: Date.now() + (1000 * 48 * 60 * 60),
    belongsToGroup: 2,
    belongsToUser: 3,
    points: {
      worth: 20,
      buy: 1000,
      steal: 0,
    }
  },

  {
    id: 7,
    name: "Vacuum and carpet fresh.",
    description: "Family is coming into town.",
    startTime: Date.now() - (1000 * 5 * 24 * 60 * 60),
    endTime: Date.now() - (1000 * 3 * 60 * 60),
    belongsToGroup: 3,
    belongsToUser: 4,
    points: {
      worth: 20,
      buy: 50,
      steal: 40,
    }
  },

  {
    id: 8,
    name: "Trash Day",
    description: "Get everything to the street!",
    startTime: Date.now() - (1000 * 48 * 60 * 60),
    endTime: Date.now() - (1000 * 24 * 3  * 60 * 60),
    belongsToGroup: 4,
    belongsToUser: 1,
    points: {
      worth: 10,
      buy: 30,
      steal: 15,
    }
  }, 
    {
    id: 9,
    name: "Wash the Dishes",
    description: "Scrub the dishes with soap and water until clean.",
    startTime: Date.now() - (1000 * 72 * 60 * 60),
    endTime: Date.now() + (1000 * 24 * 7 * 60 * 60),
    belongsToGroup: 1,
    belongsToUser: 3,
    points: {
      worth: 15,
      buy: 50,
      steal: 25,
    }
  },

  {
    id: 10,
    name: "Dust",
    description: "It's getting dusty and crusty.",
    startTime: Date.now() - (1000 * 48 * 60 * 60),
    endTime: Date.now() + (1000 * 48 * 60 * 60),
    belongsToGroup: 2,
    belongsToUser: 4,
    points: {
      worth: 30,
      buy: 75,
      steal: 45,
    }

  },

  {
    id: 11,
    name: "Clean the fridge",
    description: "Before whatever is inside becomes sentient :eyes:",
    startTime: Date.now() - (1000 * 5 * 24 * 60 * 60),
    endTime: Date.now() - (1000 * 3 * 60 * 60),
    belongsToGroup: 3,
    belongsToUser: 1,
    points: {
      worth: 50,
      buy: 120,
      steal: 90,
    }
  },

  {
    id: 12,
    name: "Water all of the plants",
    description: ":sunflower: :sweat_drops:",
    startTime: Date.now() - (1000 * 48 * 60 * 60),
    endTime: Date.now() - (1000 * 24 * 3  * 60 * 60),
    belongsToGroup: 4,
    belongsToUser: 2,
    points: {
      worth: 20,
      buy: 40,
      steal: 50,
    }
  }
]

export default chores;
