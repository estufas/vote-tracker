
  var photoAry = [
    { name : 'img/1.jpg',
    votes : 0 },
    { name : 'img/2.jpg',
    votes : 0 },
    { name : 'img/3.jpg',
    votes : 0 },
    { name : 'img/4.jpg',
    votes : 0 },
    { name : 'img/5.jpg',
    votes : 0 },
    { name : 'img/6.jpg',
    votes : 0 },
    { name : 'img/7.jpg',
    votes : 0 },
    { name : 'img/8.jpg',
    votes : 0 },
    { name : 'img/9.jpg',
    votes : 0 },
    { name : 'img/10.jpg',
    votes : 0 },
    { name : 'img/11.jpg',
    votes : 0 },
    { name : 'img/12.jpg',
    votes : 0 },
    { name : 'img/13.jpg',
    votes : 0 },
    { name : 'img/14.jpg',
    votes : 0 }
  ];

console.dir(photoAry);

var Photo = function(path) {
  this.path = path;
  this.votes = 0;
};

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
  console.log(photoAry[lNumber].votes);
  tracker.renderChart();
}

Tracker.prototype.addVote = function(e) {
  console.dir(e.target.parentElement);
  var targetValue = e.target.attributes[0].value;
  for(var i = 0; i < photoAry.length; i++) {
    if( targetValue === photoAry[i].name) {
      photoAry[i].votes++;
      console.log(photoAry[i].votes);
    }
  }
};

Tracker.prototype.renderChart = function() {
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

var tracker = new Tracker();
tracker.getRandomPhotos();

$(document).ready(function(){

  $('#lefty').click(function(e){
    $('#lefty').css("background", "rgb(154, 8, 8)");
    tracker.addVote(e);
    console.log('click');
    });
  $('#righty').click(function(e){
    $('#righty').css("background", "rgb(154, 8, 8)");
    tracker.addVote(e);
    console.dir(photoAry)
    });
  $('button').click(function(){
    tracker.getRandomPhotos();
    tracker.renderChart();
    console.log('click-2');
  });

});
