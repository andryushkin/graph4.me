$(document).ready(function(){
  
  $('.btn').click(function(){
    $(this).parent().find('button').removeClass('active');
    $(this).addClass('active');
    changeImageSrc($(this));
  });
  
});


//



var pathToImg = 'http://graph4.me/images/linovkabg/';
var pathToPDF = 'http://graph4.me/linovka/';
var imgExtension = '.png';
var imgPDFExtension = '.pdf';
var ramka = '-noborder';

$( '#noborder').click(function() {
  $( '.topdiv').hide( "slow" );
  $( '.leftdiv').hide( "slow" );
  $( '.rightdiv').hide( "slow" );
  ramka='-noborder';
});

$( '#border').click(function() {
  $( '.topdiv').show( "slow" );
  $( '.leftdiv').show( "slow" );
  $( '.rightdiv').show( "slow" );
  ramka='-border';
});

$( '#novline').click(function() {
	

  $( '.vline20mm').hide( "slow" );
  $( '.vline1quarterinch').hide( "slow" );
  ramka='-novline';	
	});
	

$( '#vline20mm').click(function() {

  $( '.vline20mm').show( "slow" );
  $( '.vline1quarterinch').hide( "slow" );
  ramka='-vline20mm';
});	

$( '#vline1quarterinch').click(function() {

  $( '.vline20mm').hide( "slow" );
  $( '.vline1quarterinch').show( "slow" );
  ramka='-vline1quarterinch';
});	
 
function changeImageSrc(elem){
  var img = $('#target-image-linovka').attr('src');
  var imgName = img.split(pathToImg)[1].split('.')[0];
  var nameArray = imgName.split('-');
  nameArray[$(elem).data('part')] = $(elem).data('val');
  var finalURL = pathToImg + nameArray.join('-') + imgExtension;
  var finalA4URL = pathToPDF + 'A4-' + nameArray.join('-') + ramka + imgPDFExtension;
  var finalLetterURL = pathToPDF + 'Letter-' + nameArray.join('-') + ramka + imgPDFExtension;
  $('#target-image-linovka').attr('src', finalURL);
  $('#target-a4-linovka').attr('href', finalA4URL);
  $('#target-letter-linovka').attr('href', finalLetterURL);
  document.getElementById('target-bg-linovka').style.backgroundImage = 'url(' + finalURL + ')';
  
  //document.getElementById('target-a4-linovka').href = 'url(' + finalA4URL + ')';
  
}


