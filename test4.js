
prev = [
    {
  "_id": {
    "$oid": "68aeb7ef34a786d7440fefa2"
  },
  "name": "kfksldf",
  "state": false,
  "createdAt": {
    "$date": "2025-08-27T07:46:55.646Z"
  },
  "updatedAt": {
    "$date": "2025-08-27T07:46:55.646Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "68aeb7ef34a786d7440fefs2"
  },
  "name": "wkfksldf",
  "state": false,
  "createdAt": {
    "$date": "2025-08-27T07:46:55.646Z"
  },
  "updatedAt": {
    "$date": "2025-08-27T07:46:55.646Z"
  },
  "__v": 0
}
]

let newprev = prev.map(item => ({ ...item, state: true }))

console.log(newprev)