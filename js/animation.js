$(document).ready(function() {

  $(".timeago").timeago();

  var tweetClicked = false;

  $('#tweet-submit, #char-count, .tweet-actions, .stats').css('display', 'none');

  $('.tweet-compose').focus(function(){
    $(this).css({
      'height' : '5em'
    });
    $('#tweet-submit, #char-count').show();
    $(this).keyup(function(){
      // var tweetMax = parseInt($('#char-count').text());
      var tweetLength = $(this).val().length;
      var charCount = 140 - tweetLength;
      $('#char-count').text(charCount);
      if(charCount <= 10){
        $('#char-count').css('color', 'red');
      }
      if(charCount > 10) {
        $('#char-count').css('color', '#999');
      }
      if(charCount <= 0) {
        $('#tweet-submit').prop('disable', true);
      }
      if(charCount > 0) {
        $('#tweet-submit').prop('disable', false);
      }
    });
  });

  $('#tweet-submit').mouseup(function(){
    var newTweetTxt = $('.tweet-compose').val();
    if(newTweetTxt.length <= 0) {
      // $('#tweet-content > .tweet-compose').val('No tweet entered.');
      // $('.tweet-compose').css('color', 'red');
      alert('No text entered.');
    }
    addTweet(newTweetTxt);
  });

  var addTweet = function(tweet) {
    var avatar = $('#profile-summary .content .avatar').attr('src');
    var name = $('#profile-summary .name').text();
    var user = '@bobby_mcgee';
    if(tweet) {
      $('#stream').prepend(
                    '<div class="tweet">' +
                      '<div class="content">'+
                        '<img class="avatar" src="'+avatar+'" />' +
                        '<strong class="fullname">'+name+'</strong>' +
                        '<span class="username">'+user+'</span>' +
                        '<p class="tweet-text">' +
                          tweet +
                        '</p>' +
                      '</div>' +
                    '</div>'
                  );
    }
  };

  $('.tweet .content').hover(function(){
    $('.tweet-actions', this).show();
  }, function(){
    $('.tweet-actions', this).hide();
  });

  var hideStats = function(tweetClicked) {
      $('.tweet .content').hover(function(){
        $('.stats', this).slideUp('slow');
        tweetClicked = false;
      });
  };

  $('.tweet .content').click(function(){
    // $timeago($('time .datetime'));
    $('.stats', this).slideDown('slow');
    tweetClicked = true;
    hideStats();
  });


});
