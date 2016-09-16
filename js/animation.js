$(document).ready(function() {

  $('#tweet-submit, #char-count').css('display', 'none');

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

  // $('.tweet-compose').focusout(function(){
  //   $(this).attr('style','');
  //   $('#tweet-submit, #char-count').hide();
  // });

  // var addTweet = function(tweet) {

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
      if(tweet) {
        alert(avatar);
        $('#stream').prepend(
                      '<div class="tweet">' +
                        '<div class="content">'+
                          '<img class="avatar" src="'+avatar+'" />' +
                          '<p class="tweet-text">' +
                            tweet +
                          '</p>' +
                        '</div>' +
                      '</div>'
                    );
      }
    };


});


// (charCount > 10)
