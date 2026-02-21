const users = ["alice", "bob", "charlie"];

interface User {
  id: number;
  name: string;
}

function toUserObjects(userNames: string[]): User[] {
  return userNames.map((userName, index) => {
    return {
      id: index + 1,
      name: userName,
    };
  });
}

// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]
console.log(toUserObjects(users));
