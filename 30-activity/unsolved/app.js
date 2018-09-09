const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];


/***************************************************clean main tag header forms */
const cleanPage = function(){
  document.getElementById('verifyDiv').style.display ="none";
  document.getElementById('lookupDiv').style.display ="none";
  document.getElementById('containsDiv').style.display ="none";
  document.getElementById('updateDiv').style.display ="none";
  document.getElementById('addDiv').style.display ="none";
  document.getElementById('deleteDiv').style.display ="none";
  document.getElementById('arrangeDiv').style.display ="none";
  }

/******************************************************clean content div for input new data*/
  const cleanContent = function(){
    if(document.getElementById('content').childNodes.length > 0){
      document.getElementById('content').innerHTML = '';
      }
  }

cleanPage();
cleanContent();

let commandSelected = document.querySelectorAll('aside section div');

commandSelected.forEach(element => {
  element.style.cursor = "pointer";

  element.addEventListener('click', function(){
    cleanPage();
    cleanContent();
    event.preventDefault();
    
    let cmd = element.getAttribute('id');

    if (cmd === 'print') {//if client types print
      document.getElementById('content').style.cssFloat = "left";
      document.getElementById('content').style.textAlign = "left";
      printClass(employeeList).printAll();
     } 
     else if (cmd === 'verify') {//if client types verify
      document.getElementById('verifyDiv').style.display ="block";
      document.getElementById('content').style.textAlign = "center";
     }
     else if (cmd === 'lookup') {//if client types lookup
      document.getElementById('lookupDiv').style.display ="block";
      document.getElementById('content').style.textAlign = "center";
    } 
    else if(cmd === 'contains'){//if client types contains
      document.getElementById('containsDiv').style.display ="block";
      document.getElementById('content').style.textAlign = "center";
     }
     else if(cmd === 'update'){//if client types update
      document.getElementById('updateDiv').style.display ="block";
      document.getElementById('content').style.textAlign = "center";
    }
    else if(cmd === 'add'){//if client types add
      document.getElementById('addDiv').style.display ="block";
      document.getElementById('content').style.textAlign = "center";
    }
    else if(cmd === 'delete'){//if client types delete
      document.getElementById('deleteDiv').style.display ="block";
      document.getElementById('content').style.textAlign = "center";
    }
    else if (cmd === 'arrange') {//if client types arrange
      document.getElementById('arrangeDiv').style.display ="block";
      document.getElementById('content').style.textAlign = "center";
    }
    
  });
});
//*************************************************************** */

document.getElementById('verifySubmit').addEventListener('click', function(){
  cleanContent();
  event.preventDefault();
  const inputName = document.getElementById('verifyInput').value;
       let isExist = 'Employee Not Found';
    
       for (let i = 0; i < employeeList.length; i++) {
         if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
           isExist = 'Employee Found';
         }
       }
       render(isExist);
});

/**************************************************************** */
document.getElementById('lookupSubmit').addEventListener('click', function(){
  cleanContent();
  event.preventDefault();
  const inputName = document.getElementById('lookupInput').value;
  let isExist = false;
      for (let i = 0; i < employeeList.length; i++) {
        if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
          isExist = true;
          printClass(employeeList).print(i); 
        }
      }
      if(isExist === false)
      render('Employee Not Found');
});
/**************************************************************** */
document.getElementById('containsSubmit').addEventListener('click', function(){
  cleanContent();
  event.preventDefault();
  let str = document.getElementById('containsInput').value;
  let checkEmployee = false;
        for (let i = 0; i < employeeList.length; i++) {
          if ((employeeList[i].name).toUpperCase().includes(str.toUpperCase())) {
            checkEmployee = true;
            printClass(employeeList).print(i);
          }
        }
        if(checkEmployee === false)
        render('Employee Not Found');
});
/**************************************************************** */
document.getElementById('updateSubmit').addEventListener('click', function(){
  cleanContent();
  event.preventDefault();
  const inputName = document.getElementById('updateNameInput').value;
  const   inputNum = document.getElementById('updateNumInput').value;
  const inputPhone = document.getElementById('updatePhoneInput').value;
  let checkEmployee = false;
      for (let i = 0; i < employeeList.length; i++) {
        if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
            employeeList[i].officeNum = inputNum;
            employeeList[i].phoneNum = inputPhone;
            checkEmployee = true;
          printClass(employeeList).print(i);
        }/*else if (inputNum === employeeList[i].officeNum) {
          employeeList[i].name = inputName;
          employeeList[i].phoneNum = inputPhone;
          checkEmployee = true;
        printClass(employeeList).print(i);
      }
      else if (inputPhone === employeeList[i].phoneNum) {
        employeeList[i].name = inputName;
        employeeList[i].officeNum = inputNum;
        checkEmployee = true;
      printClass(employeeList).print(i);
    }*/
      }
      if(checkEmployee === false)
      render('Employee Not Found');
});
/******************************************************************* */
document.getElementById('addSubmit').addEventListener('click', function(){
  cleanContent();
  event.preventDefault();
  const inputName = document.getElementById('addNameInput').value;
  const   inputNum = document.getElementById('addNumInput').value;
  const inputPhone = document.getElementById('addPhoneInput').value;
  let checkEmployee = false;
      const employee = {
      name: inputName,
      phoneNum: inputPhone,
      officeNum: inputNum
    };
    for (let i = 0; i < employeeList.length; i++) {
      if((inputName === employeeList[i].name)&&(inputNum === employeeList[i].officeNum)&&(inputPhone === employeeList[i].phoneNum))
      checkEmployee = true;
    }
    if(checkEmployee === false){
      employeeList.push(employee);
      // printClass(employeeList).printAll();
      printClass(employeeList).print(employeeList.length -1);
    }else
      render('Employee added before');
});
/*********************************************************************** */
document.getElementById('deleteSubmit').addEventListener('click', function(){
  cleanContent();
  event.preventDefault();
  const inputName = document.getElementById('deleteInput').value;
    let checkEmployee = false;
      for (let i = 0; i < employeeList.length; i++) {
        if ((employeeList[i].name).toUpperCase() === inputName.toUpperCase()) {
          employeeList.splice(i,1);
          checkEmployee =true;
        } 
      }
      if(checkEmployee === true)
        render('Employee Deleted');
        else
        render('Employee Not Found')
      // printClass(employeeList).printAll();
});
/************************************************************************** */
document.getElementById('arrangeSubmit').addEventListener('click', function(){
  cleanContent();
  event.preventDefault();
  const field = document.getElementById('arrangeCombo').value;
  if (field == 0) {
    employeeList.sort(function(a, b){
      let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
      if (nameA < nameB) //sort string ascending
          return -1;
      if (nameA > nameB)
          return 1;
      return 0; //default return value (no sorting)
  });
  }
  else{
    employeeList.sort(function(a, b){
      return a.officeNum-b.officeNum;
  });
  }
  printClass(employeeList).printAll();
});