class Classic {
  constructor(art_url){
    this.art_url = art_url;
    this.frame = "black-border";
  }

  putImageOntoPage(){
    //select where to put the image
    this.container = document.querySelector("body");
    // create a image tag
    this.imgTag = document.createElement("img");
    // change the src to the url  <img src="" />
    this.imgTag.src = this.art_url;
    // add a classname for the border
    this.imgTag.className = this.frame;
    //append the img tag to the div
    console.log(this.imgTag)
    this.container.appendChild(this.imgTag);

    this.imgTag.addEventListener('click', this.removeMyself.bind(this));
  }

  removeMyself(){
    this.container.removeChild(this.imgTag);
  }

}

class Meme extends Classic {
  constructor(art_url){
    super(art_url);
    this.frame = "red-border";
  }
}

let art1 = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg");
art1.putImageOntoPage();
var meme1 = new Meme("https://www.ecolutionhome.com/wp-content/uploads/2018/02/C-Cooking-Memes-1.png")
meme1.putImageOntoPage();
let art2 = new Classic("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg");
art2.putImageOntoPage();
var meme2 = new Meme("https://images-na.ssl-images-amazon.com/images/I/71-6GzgQMkL._SX425_.jpg")
meme2.putImageOntoPage();
