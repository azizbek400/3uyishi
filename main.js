
let b = parseInt(Math.random() * 40)
let c = parseInt(Math.random() * 40)
let difference1 = b-5
let difference2 = c-5
difference1 = Math.abs(difference1)
difference2 = Math.abs(difference2)
console.log("b= " + b + " c= " + c)
if (b > 5) {
  if (c > 5) {
    if (b > c) {
      console.log (c + " son 5ga yaqinroq")
    } 
    else {
      console.log (b + " son 5ga yaqinroq")
    }
  } else if (difference1 > difference2) {
    console.log (c + " son 5ga yaqinroq")
  
} else {
  console.log (b + " son 5ga yaqinroq")
}
} else if (c > 5) {
if (difference1 > difference2) {
  console.log (c + " son 5ga yaqinroq")
} else if (difference1 < difference2){
  console.log (b + " son 5ga yaqinroq")
} else {
  console.log ("ikkalasi ham ten yaqin")
}
} else if (b > c) {
  console.log (b + " son 5ga yaqinroq")
} else {
  console.log (c + " son 5ga yaqinroq")
}