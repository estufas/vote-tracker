$(document).ready(function() {
var pics;
$.ajax({
  url: 'https://api.imgur.com/3/album/DDoWy.json',
  method: 'GET',
  headers: {
    'Authorization': 'Client-ID 78fe666cdc1ec5b'
  }
})
.done(function(res) {
  pics = res.data.images
  console.dir(pics);

var Photo = function(name) {
  this.name = name;
  this.votes = 0;
};

var Tracker = function() {
  this.lNumber = 0;
  this.rNumber = 0;
};

console.dir(Tracker);

var photoAry = [];

Tracker.prototype.placeLinksInAry = function() {
    for (var i=0; i < pics.length; i++) {
      photoAry.push(new Photo(pics[i].link));
      console.log('fuck my life')
    }
  };

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
  $('#righty').append("<img src=" + "'" + photoAry[rNumber].name + "'" + ">");
  console.log(lefty);
  this.lNumber = lNumber;
  this.rNumber = rNumber;
  console.log(photoAry[lNumber].name);
  tracker.loadLocalData();
  tracker.renderChart();
};

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
tracker.placeLinksInAry();
tracker.getRandomPhotos();
// tracker.saveLocalData();
// tracker.loadLocalData();


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
    console.log('click-2');
  });
});
})
.fail(function(err) {
  console.log(err);

});
