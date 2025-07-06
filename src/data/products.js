const products = [
  {
    id: 1,
    name: "VR Headset",
    price: 50799,
    category: "electronics",
    image: "/images/Gaming/vr.jpg",
   description: "VR headsets typically consist of a headset or goggles that you wear over your eyes, often with built-in displays.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 2499,
    category: "electronics",
    image: "/images/electronics/headphone.jpg",
    description:"Stylish glasses to protect your eyes from sunlight."
  },
  {
    id: 3,
    name: "Sunglasses",
    price: 2999,
    category: "fashion",
    image: "/images/fashion/Sunglasses.jpg",
    description:""
  }
 ,
 {
    id: 4,
    name: "Personal Computer",
    price: 60999,
    category: "electronics",
    image: "/images/Electronics/PC.jpg",
    description:" A desktop computer for work, gaming, or study."
  },
   {
    id: 5,
    name: "Cushion",
    price: 599,
    category: "home",
    image: "/images/Home Appliance/Cushion.jpg",
    description:" A soft pillow for comfort and decoration."
  }
  
 ,
  {
    id: 6,
    name: "Star War Action Figure",
    price: 1299,
    category: "toys",
    image: "/images/toys/Action Figure.jpg",
    description:" A collectible toy figure from Star Wars."
  },
  {
    id: 7,
    name: "Women's Handbag",
    price: 1499,
    category: "fashion",
    image: "/images/fashion/handbag.jpg",
    description:" A fashionable and practical carry bag for women."
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 899,
    category: "electronics",
    image: "/images/electronics/Bluetoothspeaker.jpg",
    description:"A compact speaker that plays music wirelessly."
  },
  {
    id: 9,
    name: "Denim Jacket",
    price: 199,
    category: "fashion",
    image: "/images/fashion/Denim jacket.jpg",
    description:" A trendy jacket made from denim."
  },
  
 {
    id: 10,
    name: "Death Note",
    price: 199,
    category: "books",
    image: "/images/Electronics/manga.jpeg",
    description:"Death Note (stylized in all caps) is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata."
  },
  {
    id: 11,
    name: "Camera",
    price: 699,
    category: "electronics",
    image: "/images/electronics/c.jpg",
    description:"A device to take high-quality photos or videos."
  },
  {
    id: 12,
    name: "Remote Control Car",
    price: 1599,
    category: "toys",
    image: "/images/toys/Remote Control Car.jpg",
    description:"A toy car you can control with a remote."
  },
  {
    id: 13,
    name: "Denim Jeans",
    price: 999,
    category: "fashion",
    image: "/images/fashion/jeans.jpg",
    description:"Comfortable and classic denim pants."
  },
  {
    id: 14,
    name: "Smart Watch",
    price: 3499,
    category: "electronics",
    image: "/images/electronics/smartwatch.jpg",
    description:"A digital watch with smart features like notifications."
  },
  {
    id: 15,
    name: "Atomic Habits",
    price: 399,
    category: "books",
    image: "/images/books/automic-habbits.jpg",
    description:"A book about building better habits."
  },
  {
    id: 16,
    name: "Wall Painting",
    price: 1199,
    category: "home",
    image: "/images/home Appliance/painting.jpg",
    description:"A decorative painting for home walls."
  },
  {
    id: 17,
    name: "Dumbbell Set",
    price: 1799,
    category: "fitness",
    image: "/images/fitness/dumbbells.jpg",
    description:" Weights for strength training and workouts."
  },
  {
    id: 18,
    name: "Teddy Bear Plush",
    price: 899,
    category: "toys",
    image: "/images/toys/Teddy Bear.jpg",
    description:"A soft, cuddly teddy bear."
  },
  {
    id: 19,
    name: "Leather Jacket",
    price: 2499,
    category: "fashion",
    image: "/images/fashion/jacket.jpg",
    description:"A stylish outerwear made from leather."
  },
  {
    id: 20,
    name: "Gaming Mouse",
    price: 1299,
    category: "electronics",
    image: "/images/Gaming/mouse.jpg",
    description:" A high-performance mouse for gaming."
  },
  {
    id: 21,
    name: "Marvel Comics",
    price: 349,
    category: "books",
    image: "/images/books/comics.jpg",
    description:"Comic books featuring Marvel superheroes."
  },
  {
    id: 22,
    name: "LED Table Lamp",
    price: 499,
    category: "home",
    image: "/images/home appliance/Table Lamp.jpg",
    description:"A small light for desks or study tables."
  },
  {
    id: 23,
    name: "iron Box",
    price: 799,
    category: "home",
    image: "/images/Home Appliance/iron box.jpg",
    description:"A household appliance for ironing clothes."
  },
  {
    id: 24,
    name: "Puzzle Game Set",
    price: 699,
    category: "toys",
    image: "/images/toys/puzzle Game.jpg",
    description:"A fun and challenging puzzle game."
  },
  
 
  {
    id: 25,
    name: "Washing machine",
    price: 7799,
    category: "Home Appliance",
    image: "/images/Home Appliance/Washing machine.jpg",
    description:"A machine for automatic clothes washing."
  },
  {
    id: 26,
    name: "Smartphone",
    price: 30000,
    category: "electronics",
    image: "/images/electronics/mobile.jpg",
    description:"A modern mobile phone with smart features."
  },
  {
    id: 27,
    name: "Gaming Moniter",
    price: 21999,
    category: "electronics",
    image: "/images/Gaming/moniter.jpg",
    description:"A screen designed for smooth gaming visuals."
  },
  {
    id: 28,
    name: "Protein Shaker Bottle",
    price: 499,
    category: "fitness",
    image: "/images/fitness/Water bottle.jpg",
    description:"A bottle to mix and drink protein shakes."
  },
  {
    id: 29,
    name: "Psycological Of Money",
    price: 299,
    category: "books",
    image: "/images/books/automic.jpg",
    description:"A book on money and mindset."
  },
  {
    id: 30,
    name: "Olive Oil",
    price: 699,
    category: "beauty",
    image: "/images/Grocery/Olive Oil.jpg",
    description:"Healthy oil for  skincare."
  },
  {
    id: 31,
    name: "Men's Casual Shirt",
    price: 799,
    category: "fashion",
    image: "/images/fashion/casual.jpg",
    description:"A comfortable shirt for everyday wear.",
  },
   {
    id: 32,
    name: "Harry Potter",
    price: 299,
    category: "books",
    image: "/images/books/Mystery Novel.jpg",
    description:"A fantasy novel full of magic and adventure."
  },{
    id: 33,
    name: "Ceramic Vase",
    price: 499,
    category: "home",
    image: "/images/home Appliance/vase.jpg",
    description:"A decorative vase for flowers."
  },
   {
    id: 34,
    name: "Yoga Mat",
    price: 599,
    category: "Fitness",
    image: "/images/Fitness/Yoga Mat.jpg",
    description:"A mat for yoga, workouts, or stretching."
  },{
    id: 35,
    name: "Notebook & Pen Set",
    price: 199,
    category: "books",
    image: "/images/books/notebook.jpg",
    description:"A notebook with a pen for writing or notes."
  },
  {
    id: 36,
    name: "Face Moisturizer",
    price: 799,
    category: "beauty",
    image: "/images/Beauty/Face Moisturizer.jpg",
    description:" A cream to keep your face soft and hydrated."
  },{
    id: 37,
    name: "Perfume Bottle",
    price: 3499,
    category: "beauty",
    image: "/images/Beauty/Perfume Bottle.jpg",
    description:" A bottle of fragrance to keep you smelling fresh."
  },
   {
    id: 38,
    name: "Wall Clock",
    price: 699,
    category: "home",
    image: "/images/home Appliance/Wall colck.jpg",
    description:"A clock for your wall to show time."
  }




];

export default products;
