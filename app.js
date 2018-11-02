/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

var invis = true;
var problemCount = 0;
var problemArray = [];
window.onload = function () { //displays local storage when opening page
  for(var key in localStorage) {
    if(typeof localStorage[key] === 'function' || key === 'length') {
      continue;
    }
    problemArray.push(key)
   $(".show-text").append('<div class="problem"><a class="problems" id="problem' + problemCount + '" href="#" onmouseover="mouseOver(\'' + key + '\')" onclick="confirmCompletion(\'' + key + '\')">' + key + '</a><img class="deleteOne" onClick=\"removeKey(\'' + key + '\')\" src="images/redx.png"><img class="noteImg" onClick=\"addNotes(\'' + key + '\')\" src="images/note.png"><div class="complete">' + JSON.parse(localStorage[key]).completed + '</div></div>');
    problemCount++
  }
}
function mouseOver (key) {
  $(".show-notes").empty()
  var parsed = JSON.parse(localStorage[key])
  $(".show-notes").append('Notes<div>Date Created: ' +  parsed.date + '</div><br><div>' + parsed.notes + '</div>')
}

function confirmCompletion (key) { 
  window.open(JSON.parse(localStorage[key]).website, '_blank')
  var finished = prompt('Did you complete the problem?');
  if(finished === 'yes') {
    var newObj = localStorage[key];
    var hello = JSON.parse(newObj)

    hello.completed = (Number(hello.completed[10]) === 0) ? 'Completed ' + (Number(hello.completed[10]) + 1 + ' time' ) : 'Completed ' + (Number(hello.completed[10]) + 1) + ' times';
    localStorage.setItem(key, JSON.stringify(hello))
    location.reload();
  }
}
// remove item from app
function removeKey (key) {  //removes key and reloads page
  var confirm = prompt('Type \'Delete\' to remove')
  if(confirm === 'delete' || confirm === 'Delete') {
    localStorage.removeItem(key);
    location.reload();
  }
}
function addNotes(key) {
  if(invis === true) {
    invis = false;
    document.getElementById('invisible').id = 'textBlock';
  } else if (invis === false) {
    invis = true;
    var myObj = JSON.parse(localStorage[key])
    myObj.notes = $('#textBlock').val();
    localStorage.setItem(key, JSON.stringify(myObj))
    document.getElementById('textBlock').id = 'invisible';
  } 
}
function sortBy() {

  if($("#select-sort").val() === 'Name') {
    location.reload();
  }
  if($("#select-sort").val() === 'Completed') {
    var newArr = _.sortBy(problemArray, function (key) {
    return JSON.parse(localStorage[key]).completed[10]
    })
    $(".show-text").empty();
    $(".show-text").append('<div id="textTitle">Interesting Problems<br><select id="select-sort"><option>Name</option><option>Completed</option></select><button onclick="sortBy()">Sort</button></div>')
    for(var key in newArr) {
      $(".show-text").append('<div class="problem"><a class="problems" id="problem' + problemCount + '" href="#" onmouseover="mouseOver(\'' + newArr[key] + '\')" onclick="confirmCompletion(\'' + newArr[key] + '\')">' + newArr[key] + '</a><img class="deleteOne" onClick=\"removeKey(\'' + newArr[key] + '\')\" src="images/redx.png"><img class="noteImg" onClick=\"addNotes(\'' + key + '\')\" src="images/note.png"><div class="complete">' + JSON.parse(localStorage[newArr[key]]).completed + '</div></div>');      
    }
  }
}
$(document).ready(function(){
  // add event listener
  $(".add-text-btn").on("click", function(){
    var timeCreated = new Date().toString().slice(0, 21)  //day date time & min
    var curTextValue = {
      website: $('#website').val(),
      date: timeCreated,
      completed: 'Completed 0 times',
      notes: ' '
      }
    var curKeyValue = $('#theKey').val(); // each new entry adds to storage
    localStorage.setItem(curKeyValue, JSON.stringify(curTextValue));
    $(".show-text").append('<div class="problem"><a class="problems" id="problem' + problemCount + '" href="#" onmouseover="mouseOver(\'' + curKeyValue + '\')" onclick="confirmCompletion(\'' + curKeyValue + '\')">' + curKeyValue + '</a><img class="deleteOne" onClick=\"removeKey(\'' + curKeyValue + '\')\" src="images/redx.png"><img class="noteImg" onClick=\"addNotes(\'' + curKeyValue + '\')\" src="images/note.png"><div class="complete">Completed 0 times</div></div>');
    problemCount++;
  });
  // listen for click event (del)
  $(".clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
    $(".show-text").empty();
    $(".show-notes").empty();
    $(".show-text").append('<div id="textTitle">Interesting Problems</div>')
    $(".show-notes").append('Notes')
  });
  function random() {
    var idNums = Math.floor(Math.random()*problemCount)
    window.open(JSON.parse(localStorage[problemArray[idNums]]).website, '_blank');
     var finished = prompt('Did you complete the problem?');
    if(finished === 'yes') {
      var newObj = localStorage[problemArray[idNums]];
      var myObj = JSON.parse(newObj)
      myObj.completed = (Number(myObj.completed[10]) === 0) ? 'Completed ' + (Number(myObj.completed[10]) + 1 + ' time' ) : 'Completed ' + (Number(myObj.completed[10]) + 1) + ' times';
      localStorage.setItem(problemArray[idNums], JSON.stringify(myObj))
      location.reload();
    } 
  }
  $(".open-random-problem").on("click", function(){
    random()
  });

});

/*
Majority of the time, I need to go back to a problem. I've passed the test cases, I just
havent executed it in the fastest time.

Add alert to clear local storage
Add sort by alphabetical/time created/ difficulty?
hover over probelm and it shows notes


*/