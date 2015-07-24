$.ajax({
  url: 'https://api.imgur.com/3/album/{id}',
  method: 'GET'
  headers: {
    'Authorization': '78fe666cdc1ec5b'
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
  var rand = Math.floor(Math.random() * pics.length);
  var displayPic = '<img src="' + pics[rand].link + '">';
  $('#picCOntainer').html(displaPic);
}

var button = $('another');
