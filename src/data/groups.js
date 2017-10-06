const groups = [
  {
    id: 1,
    name: "Group Alpha",
    userIDs: [1, 2, 3],
    adminID: 1,
    points: {
      "1": 60,
      "2": 50,
      "3": 30,
    },
  },

  {
    id: 2,
    name: "Group Beta",
    userIDs: [2, 3, 4],
    adminID: 2,
    points: {
      "2": 20,
      "3": 85,
      "4": 37,
    },
  },

  {
    id: 3,
    name: "Group Gamma",
    userIDs: [3, 4, 1],
    adminID: 3,
    points: {
      "3": 10,
      "4": 70,
      "1": 25,
    },
  },

  {
    id: 4,
    name: "Group Delta",
    userIDs: [4, 1, 2],
    adminID: 4,
    points: {
      "4": 15,
      "1": 90,
      "2": 45,
    },
  },
]
export default groups;
