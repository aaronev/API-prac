console.log("I'm working here.")

$(document).on('click', '.foundId', function () {
  let parent = $(this).parent()
  let needToFind = $('.find').val()
  let foundId = $(`.info:contains(${needToFind})`)
  parent.find('h3').html(foundId)
})

let counterList = 0
$(document).on('click', '.addToPlaylist', function () {
  let parent = $(this).parent().parent()
  counterList++
  let id = parent.find('.findId').length + counterList
  let list = $('.playlistName').val()
  let song = $('.songToAdd').val()
  let eButton = '<button class = editButton>Edit</button>'
  let dButton = '<button class = deleteInfo>Delete</button>'
  let buttons = eButton + dButton
  parent.find('.addNewList').append(
    '<tr><td>'+id+'</td><td>'+list+'</td><td>'+song+'</td><td>'+buttons+'</td></tr>'
    )
})

let counterArtists = 0
$(document).on('click', '.addToArtists', function () {
  let parent = $(this).parent().parent()
  counterList++
  let id = parent.find('.findId').length + counterList
  let list = $('.playlistName').val()
  let song = $('.songToAdd').val()
  let eButton = '<button class = editButton>Edit</button>'
  let dButton = '<button class = deleteInfo>Delete</button>'
  let buttons = eButton + dButton
  parent.find('.addNewList').append(
    '<tr><td>'+id+'</td><td>'+list+'</td><td>'+song+'</td><td>'+buttons+'</td></tr>'
    )
})

let counterArtists = 0
$(document).on('click', '.addToAlbums', function () {
  let parent = $(this).parent().parent()
  counterList++
  let id = parent.find('.findId').length + counterList
  let list = $('.playlistName').val()
  let song = $('.songToAdd').val()
  let eButton = '<button class = editButton>Edit</button>'
  let dButton = '<button class = deleteInfo>Delete</button>'
  let buttons = eButton + dButton
  parent.find('.addNewList').append(
    '<tr><td>'+id+'</td><td>'+list+'</td><td>'+song+'</td><td>'+buttons+'</td></tr>'
    )
})

let counterArtists = 0
$(document).on('click', '.addToSongs', function () {
  let parent = $(this).parent().parent()
  counterList++
  let id = parent.find('.findId').length + counterList
  let list = $('.playlistName').val()
  let song = $('.songToAdd').val()
  let eButton = '<button class = editButton>Edit</button>'
  let dButton = '<button class = deleteInfo>Delete</button>'
  let buttons = eButton + dButton
  parent.find('.addNewList').append(
    '<tr><td>'+id+'</td><td>'+list+'</td><td>'+song+'</td><td>'+buttons+'</td></tr>'
    )
})

$(document).on('click', '.deleteInfo', function () {
  $(this).parent().parent().remove()
})

$(document).on('click', '.editButton', function() {
  console.log('It works')
})