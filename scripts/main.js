console.log('This is looking great Cheryln!');


var quotes =
[
  {quote: 'If thou art merry, praise the Lord with singing, with music, with dancing, and with a prayer of praise and thanksgiving.', reference: '~Doctrine and Covenants 136:28~'}, {quote: 'Sing unto the Lord; for he hath done excellent things: this is known in all the earth.', reference: '~Isaiah 12:5~'}, {quote: 'Sing unto the Lord, O ye saints of his, and give thanks at the remembrance of his holiness.', reference: '~Psalm 30:4~'}
];

$('document').ready(function(){

  var quoteObj = quotes[Math.floor(Math.random() * quotes.length)];
    $('#quoteWrapper').append(`<div id="quote">${quoteObj.quote}</div>`);
    $('#quoteWrapper').append(`<div id="reference">${quoteObj.reference}</div>`);
});

$('#director').on('click', function(){
  $('#leadershipDetailsWrapper').children().remove();
  $('#leadershipDetailsWrapper').append(`
    <div class="row">
      <div class="col-lg-10 col-lg-offset-2">
        <h4>Jean Barber</h4>
        <h6>Email: <a>ejeanbarber@gmail.com</a></h6>
        <h6>Phone: 705-435-7974</h6>
      </div>
    </div>`);
});
