function onOpen() {  
  DocumentApp.getUi()
  .createMenu('More')
  .addItem('Search & Replace', 'myFun1')
  .addItem('Search Text','myFun2')
  .addSeparator()
  .addItem('Selected UpperCase', 'myFun3')
  .addItem('Hello', 'myFun4')
  .addSeparator()
  .addItem('BookMark Hello', 'myFun5')
  .addItem('Table & List', 'myFun6')
  .addItem('Insert Image', 'myFun7')
  .addItem('Clear Doc', 'myFun8')
  .addItem('Template Doc', 'myFun9')
  .addItem('Template Doc +', 'myFun10')
  .addToUi();
}