const $ = function (employeeList) {

    //********************print functions*************************** */
    const printAll = function(){
        for (let i = 0; i < employeeList.length; i++) {
             render(`${employeeList[i].name}`);
             render(`#${employeeList[i].officeNum}`);
             render(`${employeeList[i].phoneNum}`);
             breakLine();
         }
     }
  
    const print = function(i){
        render(`${employeeList[i].name}`);
        render(`#${employeeList[i].officeNum}`);
        render(`${employeeList[i].phoneNum}`);
        breakLine();
    }

    const breakLine = function(){
        document.getElementById('content').appendChild(document.createElement('br'));
    }


    /************************modul pattern************************************** */

    const publicAPI = {
        printAll: printAll,
        print: print,
      }
    
      return publicAPI;
}