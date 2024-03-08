function addClass(el, name) {
  el.className += " " + name;
}

function removeClass(el, name) {
  el.className = el.className.replace(name, " ");
}
const categoryPage = document.querySelector(".category-page");
const homePage = document.querySelector(".home-page");

categoryPage.addEventListener("click", (e) => {
  removeClass(categoryPage, "selected");
  removeClass(homePage, "selected");
  addClass(categoryPage, "selected");
  e.stopPropagation();
});
homePage.addEventListener("click", (e) => {
  removeClass(categoryPage, "selected");
  removeClass(homePage, "selected");
  addClass(homePage, "selected");
  e.stopPropagation();
});
const booksImg = document.querySelector(".books-img")
const rightSide = document.querySelector(".right-side");
const leftSide = document.querySelector(".left-side");
const bookText = document.querySelector(".book-text");
const bookName = document.querySelector(".book-name");
const bookAuthor = document.querySelector(".author");
const bookRating = document.querySelector(".rating");
const bookGenres = document.querySelector(".genres");
const bookrealease = document.querySelector(".book-realease");
const bookInfoHeading = document.querySelector(".bookInfo-heading");
const slider = document.querySelector(".slider")
const rightStyle = document.querySelector('.right-style')
const slideDown = document.querySelector('.right-side.slideDown')
let bookData = [
    {
    imageUrl:'book1.jpg',
    bookName: "HARRY POTTER",
    author: "J.K ROWLING",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4.5,
    geners: "comedy,drama,action",
    realeaseDate: "2 march 2014",
    color:'#63C2EB'
  },
  {
    imageUrl:'book2.jpg',
    bookName: "MONEY PSYCHOLOGY",
    author: "MORGEN HOUSEL",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4,
    geners: "psychology,biographi",
    realeaseDate: "7 april 2003",
    color:'white'
  },
  {
    imageUrl:'book3.jpg',
    bookName: "MASTER THINKING",
    author: "THIBAUT",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4.2,
    geners: "story,psychology",
    realeaseDate: "12 december 2010",
    color:'#e7cf75'
  },
  {
    imageUrl:'book4.jpg',
    bookName: "MAHABHARAT",
    author: "VYASA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 5,
    geners: "god,motivation,",
    realeaseDate: "5000 before christ",
    color:'#aceb7a'
  },
  {
    imageUrl:'book5.jpg',
    bookName: "THE LOCKED DOOR",
    author: "FRIEDA McFADDEN",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4.1,
    geners: "thiller",
    realeaseDate: "6 september 2019",
    color:'#7e8de6'
  },
  {
    imageUrl:'book6.jpg',
    bookName: "UNLIMITED MEMORY",
    author: "KEVIN HORSELY",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4.8,
    geners: "dark,suspense",
    realeaseDate: "5 june 2020",
    color:'#ec85e0'
  },
  {
    imageUrl:'book7.jpg',
    bookName: "AUTOBIOGRAPHY",
    author: "PARAMAHANSA YOGANANDA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4.3,
    geners: "biography,motivation",
    realeaseDate: "2 january 2001",
    color:'#75d8bbad'
  },
  {
    imageUrl:'book8.jpg',
    bookName: "DEATH",
    author: "SADGURU",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4.9,
    geners: "knowledge,motivation",
    realeaseDate: "22 april 2022",
    color:'#8d65b2'
  },
];


let count = 1
const nextBtn = document.querySelector('.next-icon')
nextBtn.addEventListener('click', (e)=>{
  e.stopPropagation()
  const bookDetailes =  bookData[count]
  bookInfoHeading.style = `background-color: var(--primary-backgroundColor);`




  removeClass(leftSide, 'slideUp')
  removeClass(leftSide, 'left-style')
  addClass(leftSide, 'slideUp')
  rightSide.style = `background-color: var(--primary-backgroundColor);;`
  removeClass(rightSide, 'slideDown')
  removeClass(rightSide, 'right-style')
  addClass(rightSide,'slideDown')
  removeClass(bookInfoHeading,'swipeleft')
  addClass(bookInfoHeading,'swipeleft')


  booksImg.innerHTML = ''
  const img = document.createElement("img");
  booksImg.appendChild(img);
  img.setAttribute("class", "book-img");
  img.setAttribute("src", `${bookDetailes.imageUrl}`);
  bookName.innerHTML = bookDetailes.bookName
  bookText.innerHTML = bookDetailes.text
  bookAuthor.innerHTML = bookDetailes.author
  bookRating.innerHTML = bookDetailes.rating
  bookGenres.innerHTML = bookDetailes.geners
  bookrealease.innerHTML = bookDetailes.realeaseDate
  count++
  if(count === bookData.length){
    count = 0
  }
})

rightSide.addEventListener('animationend',()=>{
  removeClass(rightSide, 'right-style')
  removeClass(rightSide,'slideDown')
  addClass(rightSide, 'rightS')
})

leftSide.addEventListener('animationend', ()=>{
  removeClass(leftSide, 'left-style')
  removeClass(leftSide, 'slideUp')
  addClass(leftSide,'leftS')
})
bookInfoHeading.addEventListener('animationend', ()=>{
  removeClass(bookInfoHeading, 'swipeleft')
})
