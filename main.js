const array = [
    Math.E,
    Math.PI,
    Math.LOG10E,
    Math.LOG2E,
    Math.LN10,
    Math.LN2,
    Math.SQRT2,
    Math.SQRT1_2
  ]
  
  for (const item of array) {
    document.getElementById("a0").innerHTML += `${item}<br>`
  }
  
  let a1 = document.getElementById("a1")
  let a2 = document.getElementById("a2")
  let a3 = document.getElementById("a3")
  let a4 = document.getElementById("a4")
  let a5 = document.getElementById("a5")
  let a6 = document.getElementById("a6")
  
  a1.addEventListener("click", (event) => {
    alert(Math.atan(1))
  })
  
  a2.addEventListener("click", (event) => {
    alert(Math.pow(Math.E,2))
  })
  
  a3.addEventListener("click", (event) => {
    alert(Math.log(Math.pow(Math.E,2)))
  })
  
  a4.addEventListener("click", (event) => {
    alert(Math.log10(100))
  })
  
  a5.addEventListener("click", (event) => {
    alert(Math.log2(8))
  })
  
  a6.addEventListener("click", (event) => {
    alert(Math.random(0.44051778077089376))
  })