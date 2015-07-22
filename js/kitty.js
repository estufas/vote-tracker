$(document).ready(function(){
var Photo = function(path) {
  this.path = path;
  this.votes = 0;
};

var imgPath = "./img/";

var photoAry = [];
for (var i = 1; i < 15; i++) {
  photoAry.push(new Photo(imgPath + i + ".jpg"));
};
console.dir(photoAry);

Photo.prototype.getRandomPhotos = function(){

  $('#lefty').empty();
  $('#righty').empty();
  $('#lefty').css("background", "");
  $('#righty').css("background", "");
  $('#lefty').css("border", "");
  $('#righty').css("border", "");

var lNumber = Math.floor((Math.random() * (14 -1)) + 1);
var rNumber = Math.floor((Math.random() * (14 -1)) + 1);
if (rNumber === lNumber){
    return this.getRandomPhotos()
}

  $('#lefty').append("<img src=" + photoAry[lNumber].path + ">");
  $('#righty').append("<img src=" + photoAry[rNumber].path + ">");
  console.log(lefty);
};

// function changeImg(imgDiv) {
//   var img = '#' + imgDiv;
//   $(img).empty();
//   $(img).css("background", "");
//   $(img).css("border", "");
//
//
// var lNumber = Math.floor((Math.random() * (14 -1)) + 1);
// var rNumber = Math.floor((Math.random() * (14 -1)) + 1);
// if ( imgDiv === "righty") {
//
// } else {
//   var x = $(img);
//   console.log()
// }
// }
//
//
//   $('#lefty').append("<img src=" + photoAry[lNumber].path + ">");
//   $('#righty').append("<img src=" + photoAry[rNumber].path + ">");
// }
// changeImg("lefty");
// changeImg("righty");

function clickWinner() {
  $('#lefty').click(function(e){
    $('#lefty').css("background", "rgb(154, 8, 8)");
    addVote(e);
    });
  $('#righty').click(function(e){
    $('#righty').css("background", "rgb(154, 8, 8)");
    addVote(e);
  });
};

function addVote(e) {
  console.dir(e.target.parentElement);
  var targetValue = e.target.attributes[0].value;
  for(var i = 0; i < photoAry.length; i++) {
    if( targetValue === photoAry[i].path) {
      photoAry[i].votes++;
    }
  }
  // if (e.target.parentElement.id == "lefty") {
  //   changeImg("righty");
  // } else {
  //   changeImg("lefty");
  // }
}



var photo = new Photo();
photo.getRandomPhotos();
clickWinner();
addVote();
});
