/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {

function renderTweets(data) {
  $tweetContainer = $("#tweet-container")

  data.forEach(function (tweet) {
    tweet.created_at = dateTime(tweet.created_at)
    const $elm = $(createTweetElement(tweet))
    $tweetContainer.prepend($elm)
  })
}

function dateTime(timestamp){
 var a = new Date(timestamp * 1000);
 var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 var year = a.getFullYear();
 var month = months[a.getMonth()];
 var date = a.getDate();
 var hour = a.getHours();
 var min = a.getMinutes();
 var sec = a.getSeconds();
 var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
 return time;
}

function createTweetElement(tweetObj) {

  return `<article>
      <header>
        <img src="${tweetObj.user.avatars.small}">
        <h2>${tweetObj.user.name}</h2>
        <p>${tweetObj.user.handle}<p>
      </header>
      <p>${tweetObj.content.text}</p>
      <footer>
        <p>${tweetObj.created_at}</p>
        <span class="icons">
          <i class="fab fa-font-awesome-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
      </span>
      </footer>
    </article>
  `
}

$(function() {
  var form = $("#tweetForm");
  form.submit(function (event) {
    event.preventDefault();
    var data = $(this).serialize();
    $.post("/tweets", data)
  });
});

function getTweets(){
console.log("getting tweets:")
/ $.ajax({
    url:"/tweets",
    type: "Get",
    dataType: "json",
    success: function(tweets){
      console.log(tweets)
      renderTweets(tweets);
    }
  })
 
}

getTweets()

});