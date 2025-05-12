const students = ["Ankan Mahato","Bidisha Sarkar","Itu Mondal", "Mayuri Sarkar","Somnath Mondal","Shruti Pandey"];
const container = document.getElementById("content");
const time = new Date();
const month = time.getMonth();
const date = time.getDate();
const hours =time.getHours();
const minutes =time.getMinutes();

  students.forEach(e=>{
    let isChecked = localStorage.getItem(e)==='true'
    console.log(e)
    
  //  window.onload = function(){
    if(date === 1 && hours === 0 && minutes === 0){
      localStorage.setItem(e,false)
      container.innerHTML += `<div class="box"><h2>${e}</h2> <input type="checkbox" name="${e}" id="${e.replace(" ","")}" class="names" ${isChecked ? 'checked':''}></div>`
    }
    else{
      container.innerHTML += `<div class="box"><h2>${e}</h2> <input type="checkbox" name="${e}" id="${e.replace(" ","")}" class="names" ${isChecked ? 'checked':''}></div>`
    }
  //  }
    
  })

  
  const checkboxes  = document.getElementsByClassName('names');
  Array.from(checkboxes).forEach((checkbox)=>{
    checkbox.addEventListener('change',(e)=>{
      const studentName = e.target.name;
      const isChecked = e.target.checked;
      localStorage.setItem(studentName,String(isChecked))
    })
  })
  const monthsArray = ['January','Feburary','March','April','May','June','July','August','September','October','November','December']
  const mth = document.getElementById('month')
  mth.innerText += `Month of ${monthsArray[month]}`  
  
  