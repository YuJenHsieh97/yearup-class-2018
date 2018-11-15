console.log('🚀');
let url = "https://fizal.me/products.json";

axios.get(url)
  .then(function (open){
    let first = open.data.products[0].images[0].src;
    for (i=0;i<open.data.products.length;i++){
      let div = document.getElementById('container');
      let newImg=document.createElement('img');
      let all = open.data.products[i].images[0].src;
      newImg.src = all;
      // div.innerHTML = open.data.products[i].
      div.appendChild(newImg);
      console.log(div);
    }
  });



  // heading.src = first;
  // let one = document.getElementById('1');
  // let two = document.getElementById('2');
  // let three = document.getElementById('3');
  // let four = document.getElementById('4');
  // let five = document.getElementById('5');
  // let six = document.getElementById('6');
  // let seven = document.getElementById('7');
  // let eight = document.getElementById('8');
  // let nine = document.getElementById('9');
  // let ten = document.getElementById('10');
  // let eleven = document.getElementById('11');
  // let i =0;

  // two.src=open.data.products[1].images[0].src;
  // three.src=open.data.products[2].images[0].src;
  // four.src=open.data.products[3].images[0].src;
  // five.src=open.data.products[4].images[0].src;
  // six.src=open.data.products[5].images[0].src;
  // seven.src=open.data.products[6].images[0].src;
  // eight.src=open.data.products[7].images[0].src;
  // nine.src=open.data.products[8].images[0].src;
  // ten.src=open.data.products[9].images[0].src;
  // eleven.src=open.data.products[10].images[0].src;
