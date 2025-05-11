const students = ["Ankan Mahato","Bidisha Sarkar","Itu Mondal", "Mayuri Sarkar","Somnath Mondal","Shruti Pandey"];
const container = document.getElementById("content");
students.forEach((e)=>{
  // if(!localStorage.getItem(e)){
    // localStorage.setItem(e,false)
  // }
})
  students.forEach(e=>{
    const isChecked = localStorage.getItem(e)==='true'
    
    console.log(e)
    container.innerHTML += `<div class="box"><h2>${e}</h2> <input type="checkbox" name="${e}" id="${e.replace(" ","")}" class="names" ${isChecked ? 'checked':''}></div>`
  })
  const checkboxes  = document.getElementsByClassName('names');
  Array.from(checkboxes).forEach((checkbox)=>{
    checkbox.addEventListener('change',(e)=>{
      const studentName = e.target.name;
      const isChecked = e.target.checked;
      localStorage.setItem(studentName,String(isChecked))
    })
  })
  
  