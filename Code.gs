function onOpen() {  
  //Logger.log('Hello');
  DocumentApp.getUi()
  .createMenu('Advanced')
  .addItem('Logged ?', 'myFun1')
  .addItem('Your Email','myFun2')
  .addSeparator()
  .addItem('Your Name ?', 'myFun3')
  .addItem('Locale / TimeZone', 'myFun4')
  .addSeparator()
  .addItem('Modal', 'myFun5')
  .addItem('HTML Modal', 'myFun6')
  .addItem('Insert Date', 'myFun7')
  .addItem('Doc ID', 'myFun8')
  .addItem('Selected Bold', 'myFun9')
  .addItem('Selected Translate to French', 'myFun10')
  .addToUi();
}

function myFun1(){
  var ui = DocumentApp.getUi();
  var result  = ui.alert('QUESTION :','Are you logged in ?', ui.ButtonSet.YES_NO_CANCEL);  
  ui.alert('Your responded with ' + result);
}

function myFun2(){  
  var ui = DocumentApp.getUi();
  var result = Session.getActiveUser().getEmail();   
  ui.alert('Your email is  ' + result);
}

function myFun3(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt('Getting to know you', 'May I know your name ?', ui.ButtonSet.YES_NO);    
  ui.alert('Your name is  ' + response.getResponseText() + ' ಠ‿ಠ');
}

function myFun4(){
  var ui = DocumentApp.getUi();
  var result = Session.getActiveUserLocale();
  var resultTZ = Session.getScriptTimeZone();   
  ui.alert('Your locale is  ' + result + ' ' + resultTZ);
}

function myFun5(){
  var htmlOutput = HtmlService
  .createHtmlOutput('<p>A change of speed, a change of style...</p>')
  .setWidth(650)
  .setHeight(400);
  DocumentApp.getUi().showModalDialog(htmlOutput, 'Title Whatever');
}

function myFun6(){
  var htmlOutput = HtmlService
  .createHtmlOutputFromFile('modal')
  .setWidth(650)
  .setHeight(400);
  DocumentApp.getUi().showModalDialog(htmlOutput, 'Title Whatever');
}

function myFun7() {
  var cursor = DocumentApp.getActiveDocument().getCursor();
  cursor.insertText(' ' + Date() + ' '); 
}

function myFun8() {
  var doc = DocumentApp.getActiveDocument().getId();
  var ui = DocumentApp.getUi(); 
  ui.alert('Doc ID : ' + doc); 
}

function myFun9(){
  var selection = DocumentApp.getActiveDocument().getSelection();
  var output;
  if(selection){
    var el = selection.getRangeElements();
    for(var x=0;x<el.length;x++){
      if(el[x].getElement().editAsText){
        var holder = el[x].getElement().editAsText();
        output += holder.getText();
        if(el[x].isPartial()){
          holder.setBold(el[x].getStartOffset(),el[x].getEndOffsetInclusive(),true);
        }else{
          holder.setBold(true);
        }
      }
    }
    DocumentApp.getUi().alert('Selected Text '+output);
  }
}

function myFun10(){
  var selection = DocumentApp.getActiveDocument().getSelection();
  var output = 'TRANSLATION:';
  if(selection){
    var el = selection.getRangeElements();
    for(var x=0;x<el.length;x++){
      if(el[x].getElement().editAsText){
        var holder = el[x].getElement().editAsText();
        output += holder.getText();
      }
    }
    
    var french = LanguageApp.translate(output, 'en', 'fr');
    DocumentApp.getUi().alert('French : '+french);
  }
}
