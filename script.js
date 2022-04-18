// 1 задача.
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};
for (let num in numbers) {
    if (numbers[num] >= 3) {
    console.log(numbers[num]);
    }
};


//2 задача.
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, // вывести это число
        },
      },
      {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
  };

  console.log(post.author);
  console.log(post.comments[0].rating.dislikes);
  console.log(post.comments[1].userId);
  console.log(post.comments[1].text);


  //3 задача.
 const products = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
  ];

  // не уверена, что это оптимальное решение, но значения выводит правильно
products.forEach(products => console.log(products.price -((products.price * 15) / 100)));


//4 задача. 
const productss = [
    {
      id: 3,
      price: 127,
      photos: [
        "1.jpg",
        "2.jpg",
      ],
    },
    {
      id: 5,
      price: 499,
      photos: [],
    },
    {
      id: 10,
      price: 26,
      photos: [
        "3.jpg",
      ],
    },
    {
      id: 8,
      price: 78,
    },
  ];

  console.log(productss.filter(item => "photos" in item && item.photos.length !== 0));
  productss.sort((item_1, item_2) => item_1.price - item_2.price);
  console.log(productss);


//5 задача. 
const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const result = {};
  for (let i = 0; i < Math.min(en.length, ru.length); i++) {
    result[en[i]] = ru[i];
    }
console.log(result);



