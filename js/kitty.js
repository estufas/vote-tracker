
var Photo = function(name) {
  this.name = name;
  this.votes = 0;
};

var img1 = new Photo('img/1.jpg');
var img2 = new Photo('img/2.jpg');
var img3 = new Photo('img/3.jpg');
var img4 = new Photo('img/4.jpg');
var img5 = new Photo('img/5.jpg');
var img6 = new Photo('img/6.jpg');
var img7 = new Photo('img/7.jpg');
var img8 = new Photo('img/8.jpg');
var img9 = new Photo('img/9.jpg');
var img10 = new Photo('img/10.jpg');
var img11 = new Photo('img/11.jpg');
var img12 = new Photo('img/12.jpg');
var img13 = new Photo('img/13.jpg');
var img14 = new Photo('img/14.jpg');

var photoAry = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]

var Tracker = function() {
  this.lNumber = 0;
  this.rNumber = 0;
};
console.dir(Tracker);

Tracker.prototype.getRandomPhotos = function() {

  $('#lefty').empty();
  $('#righty').empty();
  $('#lefty').css("background", "");
  $('#righty').css("background", "");
  $('#lefty').css("border", "");
  $('#righty').css("border", "");

var lNumber = Math.floor((Math.random() * (14 -1)) + 1);
var rNumber = Math.floor((Math.random() * (14 -1)) + 1);
if (rNumber === lNumber){
    return this.getRandomPhotos();
}
  $('#lefty').append("<img src=" + photoAry[lNumber].name + ">");
  $('#righty').append("<img src=" + photoAry[rNumber].name + ">");
  console.log(lefty);
  this.lNumber = lNumber;
  this.rNumber = rNumber;
  console.log(photoAry);
  tracker.loadLocalData();
  tracker.renderChart();
}

Tracker.prototype.addVote = function(e) {
  console.dir(e.target.parentElement);
  var targetValue = e.target.attributes[0].value;
  for(var i = 0; i < photoAry.length; i++) {
    if( targetValue === photoAry[i].name) {
      tracker.loadLocalData();
      photoAry[i].votes++;
      tracker.saveLocalData();
      console.log(photoAry[i].votes);
    }
  }
};
// var myChart = null;
Tracker.prototype.renderChart = function() {
this.loadLocalData();
console.log(photoAry[this.lNumber].votes);
var barData = {
    labels : ['left cat - right cat'],
    datasets : [
        {
        fillColor : "#48A497",
        strokeColor : "#48A4D1",
        data : [photoAry[this.lNumber].votes]
      },
      {
        fillColor : "#48A567",
        strokeColor : "#4876D1",
        data : [photoAry[this.rNumber].votes]
      }
    ]
  }

var myChart = document.getElementById('myChart').getContext("2d");
new Chart(myChart).Bar(barData);
};

Tracker.prototype.saveLocalData = function() {
  localStorage.setItem("photoAry", JSON.stringify(photoAry));
  // localStorage.setItem("righty", JSON.stringify(photoAry));
  console.log(photoAry);
};

//Load the local copy of the array
Tracker.prototype.loadLocalData = function() {
  console.log('hello-from-localStorage');
  return JSON.parse(localStorage.getItem("photoAry"));
};

var tracker = new Tracker();
tracker.getRandomPhotos();
// tracker.saveLocalData();
// tracker.loadLocalData();

$(document).ready(function(){

  // if (!localStorage.getItem('photoAry')) {
  //   tracker.saveLocalData();
  //   console.log('localstore');
  // } else {
  //   tracker.loadLocalData();
  //   console.log('loadData')
  // };

  $('#lefty').click(function(e){
    $('#lefty').css("background", "rgb(154, 8, 8)");
    tracker.addVote(e);
    tracker.saveLocalData();
    tracker.renderChart();
    console.log('click');
    });
  $('#righty').click(function(e){
    $('#righty').css("background", "rgb(154, 8, 8)");
    tracker.addVote(e);
    tracker.saveLocalData();
    tracker.renderChart();
    console.dir(photoAry)
    });
  $('button').click(function(){
    tracker.loadLocalData();
    tracker.renderChart();
    tracker.getRandomPhotos();
    // console.log('click-2');
  });
});
