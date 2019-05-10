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
