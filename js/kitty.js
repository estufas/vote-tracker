
//
// var Photo = function(imgPath) {
//   this.votes = 0;
//   this.leftPic = leftPic;
//   this.rightPic = rightPic;
// }

// Photo.prototype.voteTrack = function(){
//   //when the pictture is clicked
//   this.vote +=1;
// };
var photos = ['img/1.jpg','img/2.jpg','img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg','img/11.jpg','img/12.jpg', 'img/13.jpg', 'img/14.jpg' ]
var Tracker = function(photos) {
  //this.photos = [];
};

Tracker.prototype.getRandomPhotos = function(){
var lNumber = Math.floor((Math.random() * (14 -1)) + 1);
var rNumber = Math.floor((Math.random() * (14 -1)) + 1);
if (rNumber === lNumber){
    return this.getRandomPhotos()
} else {
  this.leftPic = photos[lNumber];
  this.rightPic = photos[rNumber];
}

  var lefty = document.getElementById('lefty');
  lefty.innerHTML = "<img src=" + photos[lNumber] + ">";
  var righty = document.getElementById('righty');
  righty.innerHTML = "<img src=" + photos[rNumber] + ">";
  console.log(lefty);
};
Tracker.prototype.voting = function(){

};

Tracker.prototype.declareWinner = function(){

};

Tracker.prototype.declaring = function(){

};


Tracker.prototype.updateTally = function(){

};

Tracker.prototype.resetResults = function(){

};

Tracker.prototype.castVote = function(){

};

var tracker = new Tracker();
tracker.getRandomPhotos();
