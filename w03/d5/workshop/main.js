class Art {
  constructor(frame, frame_color,art_url){
     this.frame = frame;
     this.color = frame_color;
     this.url = art_url;
  }
}


  // render(){
  //   //do things to the DOM here
  // }


class Classical extends Art {
  constructor(){
    super(frame, frame_color,art_url);
  }

}

let newElement = document.createElement('img');
newElement.src = "http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg";

newElement.className = "pictures";

let parent = document.getElementById('image');
parent.appendChild(newElement);
