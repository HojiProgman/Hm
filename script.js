

let res = document.getElementById('text')
let res2 = document.getElementById('text-2')
let res3 = document.getElementById('text-3')
let rnd = Math.floor(Math.random() * 999)
let rnd2 = Math.floor(Math.random() * 999)
let rnd3 = Math.floor(Math.random() * 999)


res.textContent = rnd

res2.textContent = rnd2

res3.textContent = rnd3


// console.log(res);
// console.log(res2);
// console.log(res3);



let proj = document.querySelectorAll('p')
let arr = ["Alex", "John", "Constantine", "Tyler", "Smith", "Munis"]

let styles = ["red", "green", "blue", "black", "yellow", "gray"]

// console.log(arr, styles, proj);

function getRandomizedNumbers() {
  const numbers = [0, 1, 2, 3, 4, 5];
  
  for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  
  return numbers;
}

proj.forEach((p) => {
  getRandomizedNumbers().map((number) => {
    p.innerHTML = arr[number]
    p.style.color = styles[number]
  })
})
// console.log(proj);




// let rndproj = arr[Math.floor(Math.random() * arr.length)]
// let rndcolor = styles[Math.floor(Math.random() * styles.length)]
// // console.log(rndproj);

// proj.forEach(item => {
//   item.textContent = rndproj
//   item.style.color = rndcolor
// })
// // console.log(item);
// console.log(proj);


// proj.forEach((item,i) => {
//   item.textContent = rndproj
//   item.style.color = rndcolor 
// })
// // console.log(item);
// console.log(proj);




















// res.forEach((item,i) => {
  
//   item.textContent = arr[i]
//   item.style.color = styles[i]


// })
// console.log(res);




// for(let item of arr ){
//   let idx = arr.indexOf(item)

//   res[idx].textContent = item
// }





