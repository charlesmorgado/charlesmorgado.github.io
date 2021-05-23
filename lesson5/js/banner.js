let thedate = new Date();
// console.log(thedate.getDay());

// process 
if(thedate.getDay() == 5){
    // console.log('Pancake day!!');
   document.querySelector('#banner').style.display = 'block';
}
else{
    document.querySelector('#banner').style.display = "none";
}
