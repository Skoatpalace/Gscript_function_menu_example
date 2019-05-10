function myFun1(){
  var body = DocumentApp.getActiveDocument().getBody();
  var ui = DocumentApp.getUi(); 
  var response = ui.prompt('Search', 'What did you want to find ?', ui.ButtonSet.OK_CANCEL);
  if(response.getResponseText()){
    var replacer = ui.prompt('Replace', 'Replace with what ?', ui.ButtonSet.OK_CANCEL);
    body.replaceText(response.getResponseText(), replacer.getResponseText());
  }
}

function myFun2(){
  var body = DocumentApp.getActiveDocument().getBody();
  var ui = DocumentApp.getUi(); 
  var response = ui.prompt('Search', 'What did you want to find ?', ui.ButtonSet.OK_CANCEL);
  if(response.getResponseText()){
    var finderContent = body.findText(response.getResponseText()); 
    Logger.log(finderContent);
    while(finderContent != null){
      var outputContent = finderContent.getElement().editAsText(); 
      Logger.log(outputContent);
      var startPos = finderContent.getStartOffset(); 
      var endPos = finderContent.getEndOffsetInclusive();
      outputContent.setBackgroundColor(startPos, endPos, '#D62D20');
      finderContent = body.findText(response.getResponseText(), finderContent);
    }
  }  
}

function myFun3(){
  var selection = DocumentApp.getActiveDocument().getSelection();
  if(selection){
    var element = selection.getRangeElements();
    for(var x=0; x<element.length; x++){
      var textSelected = element[x].getElement().editAsText();
      if(element[x].isPartial()){
        var selText = textSelected.getText().substring(element[x].getStartOffset(), element[x].getEndOffsetInclusive() + 1);
        textSelected.deleteText(element[x].getStartOffset(), element[x].getEndOffsetInclusive());
        textSelected.insertText(element[x].getStartOffset(), selText.toUpperCase()); 
      }else{
        textSelected.setText(textSelected.getText().toUpper); 
      }
    }
  }
}

function myFun4(){
  var doc = DocumentApp.getActiveDocument(); 
  var body = doc.getBody(); 
  var finderContent = body.findText('HELLO');
  var x = 1;
  while(finderContent != null){
    var outputContent = finderContent.getElement().editAsText(); 
    Logger.log(outputContent);
    var startPos = finderContent.getStartOffset(); 
    var endPos = finderContent.getEndOffsetInclusive() + 1;    
    outputContent.insertText(endPos, 'HELLO');
    outputContent.insertText(startPos,' '+ x + ' ');
    if(x>10){break;}
    x++;    
    outputContent.setBackgroundColor(startPos, endPos + 9, '#D62D20');
    finderContent = body.findText('HELLO', finderContent);
  }
}

function myFun5(){
  var doc = DocumentApp.getActiveDocument(); 
  var body = doc.getBody(); 
  var finderContent = body.findText('HELLO');
  var x = 1;
  while(finderContent != null){    
    var position = doc.newPosition(finderContent.getElement(), 0);    
    doc.setCursor(position);
    var booker = doc.addBookmark(position); 
    var outputContent = finderContent.getElement().editAsText(); 
    var startPos = finderContent.getStartOffset(); 
    var endPos = finderContent.getEndOffsetInclusive() + 1;    
    if(x>10){break;}
    x++;    
    finderContent = body.findText('HELLO', finderContent);
  }
}

function myFun6(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var data = [['first Row','2nd column','3rd column'],['Second Row','2nd column','3rd column'],['Third Row','2nd column','3rd column']];
  //var table = body.appendTable(data);
  
  var heading = body.insertParagraph(0, doc.getName());
  heading.setHeading(DocumentApp.ParagraphHeading.HEADING1);
  
  var table = body.insertTable(1, data);
  table.getRow(1).editAsText().setBackgroundColor('#ffff66');
  
  doc.setName('New Doc Name Exercise Tester');
  
  var listItem1 = body.appendListItem('First Item');
  var listItem2 = body.appendListItem('Item #2');
  var listItem3 = body.appendListItem('Item #3');
  var listItem4 = body.appendListItem('Item #4');
  
  heading.appendHorizontalRule();
  listItem4.appendText('NEW TEXT ADDED');
  var listItem5 = listItem1.copy();
  body.appendListItem(listItem5);
  listItem2.clear();
  
}
function myFun7(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var myImage = UrlFetchApp.fetch('https://placeimg.com/640/480/any').getBlob();
  //body.appendImage(myImage.getBlob());
  var cursor = doc.getCursor();
  cursor.insertInlineImage(myImage);
  var image = body.insertImage(0, myImage);
}
function myFun8(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  body.clear();
}
function myFun9(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  body.appendParagraph('Welcome to the page, {firstName}');
  body.appendParagraph('Thanks for sharing');
  body.appendParagraph('Ready on {date}');
}
function myFun10(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var ui = DocumentApp.getUi();
  var response = ui.prompt('Search', 'What is your name?', ui.ButtonSet.OK_CANCEL);
  if(response.getResponseText()){
    body.replaceText('{firstName}', response.getResponseText());
    body.replaceText('{date}', Date());
    
  }
}

