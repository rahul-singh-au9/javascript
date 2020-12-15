// Coding Challenge - Iterators and Generators
// A file called data.json would be located in the Week15 home folder. Your job is to get that json data, parse into an object, and make it an iterable. (Don't change the object data type into an array)
// Make it an iterable using
// 1.	Iterators
// 2.	Generators
// When that object is passed inside a FOR OF loop, I should get the output of each item as the following pattern.
// Post Id: 1 Title: Some title
// Post Id: 2 Title: Some other title
// And so on …


const posts = {
  data:[
    {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  }
  ],

[Symbol.iterator]: function* postGenerator(){
  let currentPost = 0;
  while (currentPost < this.data.length){
    yield this.data[currentPost];
    currentPost++
  }
}
}

for (let post of posts){
  console.log(`post id: ${post.id}  Title: ${post.title}`)
  console.log("...............................................")
  console.log(post)
}