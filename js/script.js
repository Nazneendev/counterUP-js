let counterUp = document.querySelectorAll(".counterUp");
let arr = Array.from(counterUp)
// console.log(arr)

arr.map((item)=>{
  // console.log(item);
  // console.log(item.dataset.number);
  let counter=0
  function count() {
   
    counter++;
    // FOr HTML
    item.innerHTML = counter;

    // Condition
    if (counter == item.dataset.number) {
      clearInterval(stop);
    }
  }

  // for Stop
  let stop = setInterval(function () {
    count();
  }, 1000/item.dataset.number);
})