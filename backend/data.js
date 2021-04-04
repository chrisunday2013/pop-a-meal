import bcrypt from "bcryptjs";

export default {
  users: [
    {
      name: "Uche",
      email: "potentialsunny47@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true
    },
    {
      name: "Mike",
      email: "customer@gmail.com",
      password: bcrypt.hashSync("1212", 8),
      isAdmin: false
    }
  ],
  products:[
    {
    name: 'Burger',
    category:'rest A',
    image:'/images/latest-pics/honey-mustard-chicken-burger.jpg',
    price:1500,
    countInStock: 0,
    brand: 'African dish',
    rating: 4.5,
    numReviews: 8,
    description: "very delicious"

  },

  {
  name: 'Rice',
  category:'rest A',
  image:'/images/latest-pics/salad.jpg',
  price:1800,
  countInStock: 15,
  brand: 'fastfood',
  rating: 4.5,
  numReviews: 9,
  description: "very delicious"
},

{

name: 'Meat',
category:'rest A',
image:'/images/latest-pics/honey-mustard-chicken-burger.jpg',
price:1200,
countInStock: 20,
brand: 'healthy food',
rating: 4.5,
numReviews: 7,
description: "very delicious"
},
{
name: 'Amala',
category:'rest A',
image:'/images/latest-pics/salad.jpg',
price:2200,
countInStock: 8,
brand: 'African dish',
rating: 4.5,
numReviews: 8,
description: "very delicious"
},

{
name: 'Salad',
category:'rest A',
image:'/images/latest-pics/chicago-hot-dog.jpg',
price:1200,
countInStock: 13,
brand: 'continental',
rating: 4.5,
numReviews: 9,
description: "very delicious"
},

{
name: 'Pepper soup',
category:'rest A',
image:'/images/latest-pics/salad.jpg',
price:1800,
countInStock: 10,
brand: 'fastfood',
rating: 4.5,
numReviews: 10,
description: "very delicious"
},

{
name: 'Hot Dog',
category:'rest A',
image:'/images/latest-pics/salad.jpg',
price:2800,
countInStock: 20,
brand: 'fastfood',
rating: 4.5,
numReviews: 10,
description: "very delicious"
},

{
name: 'Eba',
category:'rest A',
image:'/images/latest-pics/hot-dog-restaurant.jpg',
price:2000,
countInStock: 10,
brand: 'fastfood',
rating: 4.5,
numReviews: 10,
description: "very delicious"
},
]
}