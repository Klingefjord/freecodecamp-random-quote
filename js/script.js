var quoteKey = "9Bnh5taZmUmshhs1LHyWEz52mSb2p1YTlyKjsn3qjYWYWZDiXh";

//load initial content
changer();

//Click on quote button
$("#quote-btn").click(function(){
  changer();
});

//changes quote
function changeQuote(quote, author) {
  $("#quote").html('<i>"' + quote + '"</i>');
  $("#author").html("- " + author);
}

//sends an api request & calls changeQuote
function changer(){
 $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    dataType: 'json',
    success: function(data) {
      quote = data.quote;
      author = data.author;
      changeQuote(quote, author); //changes quotation
      updateTwitter(quote, author); //updates twitter
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", quoteKey);
    }
  });
}

function updateTwitter(quote, author) {
  $("#twitter-link").attr('href', 'https://twitter.com/intent/tweet?url=[your URL]&text="' + quote + '" - ' + author);
}
