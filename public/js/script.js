// Code goes here

$(document).ready(function(){
    
  
    	var Spacing1 = curName.split('-')[1];
        var BoardYes = curName.split('-')[3];
        var bgSpacing1 = (Spacing1 == '1mm') ? '1cm' :
                (Spacing1 == '5mm') ? '5cm' :
                (Spacing1 == '1cm') ? '5cm' :
                (Spacing1 == '10perinch') ? '1in' :
                (Spacing1 == 'quarterinch') ? '2in' :
                '2in';   
   $('#target-bg-linovka').css('background-image', 'url('+pathToImg+curName.replace(/-border|-noborder/i,"")+imgExtension+')');
   
   document.getElementById('target-bg-linovka').style.backgroundSize = bgSpacing1;
    $('#target-a4-linovka').attr('href', pathToPDF + 'A4-' + curName + imgPDFExtension); 
    $('#target-a3-linovka').attr('href', pathToPDF + 'A3-' + curName + imgPDFExtension); 
    $('#target-letter-linovka').attr('href', pathToPDF + 'Letter-' + curName + imgPDFExtension); 
    $('#target-tabloid-linovka').attr('href', pathToPDF + 'Tabloid-' + curName + imgPDFExtension); 
    
    
if(getURLParam()){
    curName = getURLParam();
    applyBGCodeChange(generateImagePath());
	whatSplit()
    setButtonSelection(curName);
  } else {
      setButtonSelection(curName);
  }
 
  
  $('.btn').click(function(){
    $(this).parent().find('button').removeClass('active');
    $(this).addClass('active');
    changeImageSrc($(this));
  
    
  })
    
    if(curName.split('-')[3] == 'border'){
        showBorder();
      }
  
})
var pathToImg = '/images/linovkabg/';
var pathToPDF = '/pdf/';
var imgExtension = '.png';
var imgPDFExtension = '.pdf';
var ramka = '-noborder';
var urlParamName = 'code';


function getURLParam(){
  return window.location.hash.substr(8);
  
  }

function applyBGCodeChange(url){
    $('#target-bg-linovka').css('background-image', 'url('+url.replace(/-border|-noborder/i,"")+imgExtension+')');
    $('#target-a4-linovka').attr('href', pathToPDF + 'A4-' + curName + imgPDFExtension); 
    $('#target-a3-linovka').attr('href', pathToPDF + 'A3-' + curName + imgPDFExtension); 
    $('#target-letter-linovka').attr('href', pathToPDF + 'Letter-' + curName + imgPDFExtension); 
    $('#target-tabloid-linovka').attr('href', pathToPDF + 'Tabloid-' + curName + imgPDFExtension); 
}

function setButtonSelection(){
  var nameArray = curName.split('-');
  $('.button-block button.btn').each(function(){
      var part = $(this).data('part');
      var attr = $(this).data('val');
      if(nameArray[part] === attr){
        $(this).addClass('active')
      }
    });
    
}

function generateImagePath(elem){
  var nameArray = curName.split('-');
  if(elem){
    nameArray[$(elem).data('part')] = $(elem).data('val');
    curName = nameArray.join('-');
  }
  return pathToImg + curName; //+ imgExtension;
  
}

function changeImageSrc(elem){
  applyBGCodeChange(generateImagePath(elem));
  setGetParameter(urlParamName, curName);
}

function setGetParameter(paramName, paramValue)
{
    window.location.hash = '#/?'+paramName+'=' + paramValue;
    
    whatSplit()
    
}


function whatSplit(){
	
	var Spacing1 = curName.split('-')[1];
    var bgSpacing1 = (Spacing1 == '1mm') ? '1cm' :
                     (Spacing1 == '5mm') ? '5cm' :
                     (Spacing1 == '1cm') ? '5cm' :
                     (Spacing1 == '10perinch') ? '1in' :
                     (Spacing1 == 'quarterinch') ? '2in' :
                     '2in';   
	//document.getElementById('param').innerHTML = curName.split('-')[3];
    document.getElementById('target-bg-linovka').style.backgroundSize = bgSpacing1; 
}




function showBorder(){  

  $( '.topdiv').show( "slow" );
  $( '.leftdiv').show( "slow" );
  $( '.rightdiv').show( "slow" );


}

$( '#border').click(function() {
    showBorder()
});

$( '#noborder').click(function() {
  $( '.topdiv').hide( "slow" );
  $( '.leftdiv').hide( "slow" );
  $( '.rightdiv').hide( "slow" );
});