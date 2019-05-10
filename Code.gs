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
  .addSeparator()
  .addSubMenu(DocumentApp.getUi().createMenu('Selected Translate')
     .addItem('To French', 'translateFR')
     .addItem('To Spanish', 'translateES')
     .addItem('To German', 'translateDE'))
  .addToUi();
}
