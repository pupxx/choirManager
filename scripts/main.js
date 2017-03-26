console.log('This is looking great Cheryln!');
// ==================== Functions =====================
// ====================================================

function appendDetails (idOrClassStr, WrapperStr, name, email, phone){
  $(idOrClassStr).on('click', function(){
    $(WrapperStr).children().remove();
    $(WrapperStr).append(`
      <div class="row">
        <div class="col-lg-10 details">
          <h4>${name}</h4>
          <h6>Email: <a>${email}</a></h6>
          <h6>Phone: ${phone}</h6>
        </div>
      </div>`);
  });
}

function appendQuote (arr){
  $('document').ready(function(){
    var quoteObj = arr[Math.floor(Math.random() * arr.length)];
    $('#quoteWrapper').append(`<div id="quote">${quoteObj.quote}</div>`);
    $('#quoteWrapper').append(`<div id="reference">${quoteObj.reference}</div>`);
  });
}

// ====================  Code ==============================
// =========================================================

var quotes =
[
  {quote: 'If thou art merry, praise the Lord with singing, with music, with dancing, and with a prayer of praise and thanksgiving.', reference: '~Doctrine and Covenants 136:28~'}, {quote: 'Sing unto the Lord; for he hath done excellent things: this is known in all the earth.', reference: '~Isaiah 12:5~'}, {quote: 'Sing unto the Lord, O ye saints of his, and give thanks at the remembrance of his holiness.', reference: '~Psalm 30:4~'}
];

appendQuote (quotes);

appendDetails ('#director', '#leadershipDetailsWrapper', 'Jean Barber', 'ejeanbarber@gmail.com', '705-435-7974');

appendDetails ('#chairman , #accompanist', '#leadershipDetailsWrapper', 'Carol Smith', 'carolrdsmith@gmail.com', '705-424-9452');

$('#addChoirMember').on('click', function(){
  $('#addMember').removeClass('hidden');
})
