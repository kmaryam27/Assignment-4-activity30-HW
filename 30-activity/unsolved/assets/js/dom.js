const $ = function (sel) {
    const nodeList = document.querySelectorAll(sel);
  
    const text = function (content) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].textContent = content;
      }
    }
  
    const toggleClass = function (className) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.toggle(className);
      }
    }
  
    const on = function (action, cb) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener(action, cb);
      }
    }
  
    const val = function (content) {
        if(content === undefined){
          return nodeList[0].value; 
        } else {
          nodeList[0].value = content;
        }     
    }
  
    const html = function (content) {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = content;
          }    
    }

    const empty = function () {
      for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].innerHTML = '';
        }    
  }

      //********************print functions*************************** */
      const printAll = function(employeeList){
        for (let i = 0; i < employeeList.length; i++) {
             render(`${employeeList[i].name}`);
             render(`#${employeeList[i].officeNum}`);
             render(`${employeeList[i].phoneNum}`);
             breakLine();
         }
     }

     const breakLine = function(){
      document.getElementById('content').appendChild(document.createElement('br'));
  }

  const render = (...props) => {
    props.forEach(e => {  
       append(e);
    });
  }
  
  const append = content => {
    const p = document.createElement('p');
    p.textContent = content;
    document.getElementById('content').appendChild(p);
  }
  
  
    const publicAPI = {
      text: text,
      toggleClass: toggleClass,
      on: on,
      val: val,
      html: html,
      empty: empty,
      printAll: printAll,
      render: render
    }
  
    return publicAPI;
  
  }
  