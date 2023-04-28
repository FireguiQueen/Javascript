function InvalidMsg(textbox) {

    if(textbox.validity.patternMismatch){
       textbox.setCustomValidity('please enter 10 numeric value.');
   }    
   else {
       textbox.setCustomValidity('');
   }
   return true;
}