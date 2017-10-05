const chores = [
  {
    id: 1,
    name: "Wash the Dishes",
    description: "Scrub the dishes with soap and water until clean.",
    startTime: Date.now() - (1000 * 72 * 60 * 60),
    endTime: Date.now() + (1000 * 24 * 7 * 60 * 60),
    belongsToGroup: 1,
    belongsToUser: 1,
  },

  {
    id: 2,
    name: "Take Out the Trash",
    description: "Take the trash bag from the kitchen and place it in the roadside trashbin.",
    startTime: Date.now() - (1000 * 48 * 60 * 60),
    endTime: Date.now() + (1000 * 48 * 60 * 60),
    belongsToGroup: 2,
    belongsToUser: 2,
  },

  {
    id: 3,
    name: "Sweep the Front Porch",
    description: "Take a broom, and use sweeping motions with the bristles to clean dust and dirt off of the front porch.",
    startTime: Date.now() - (1000 * 5 * 24 * 60 * 60),
    endTime: Date.now() - (1000 * 3 * 60 * 60),
    belongsToGroup: 3,
    belongsToUser: 1,
  },

  {
    id: 4,
    name: "Wash the Car",
    description: "Clean the car, soap and armor all is under the kitchen sink.",
    startTime: Date.now() - (1000 * 48 * 60 * 60),
    endTime: Date.now() - (1000 * 24 * 3  * 60 * 60),
    belongsToGroup: 4,
    belongsToUser: 4,
  }
]

export default chores;
