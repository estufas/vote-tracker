$.ajax({
  method: 'GET'
  url: 'https://api.imgur.com/3/album/DDoWy.json',
  headers: {
    'Authorization': 'CLient-ID 78fe666cdc1ec5b'
}
})
.done(function(res)) {
  pics = res.data.images;
  console.log(pics);
})
.fail(function(err) {
  console.log(err);
});

// console.log(pics);

function showFromImgur() {
  var rand = Math.floor(Math.random() * photoAry.length);
  var displayPicLeft = '<img src="' + photoAry[rand].link + '">';
  $('#lefty').html(displaPicLeft);
  var displayPicRight = '<img src="' + photoAry[rand].link + '">';
  $('#righty').html(displaPicRight);
}

var button = $('button');
