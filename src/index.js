
document.addEventListener('DOMContentLoaded', () => {
  // your code here ....

      document.getElementById('create-task-form').style.display = 'none';


    document.querySelector('#create-list-form input[type="submit"]').addEventListener("click", newList)

    function newList(event) {
      event.preventDefault()

      if(event.target.form[0].value !== "") {
       document.getElementById('create-task-form').style.display = '';

       let x = new List(document.getElementById('new-list-title').value)
       event.target.form[0].value = ""
     }
    }


    document.querySelector('#create-task-form input[type="submit"]').addEventListener("click", newTask)

    function newTask(event) {
      event.preventDefault()

      if(event.target.form[1].value !== "")
      {
        let priority = event.target.form[2].value
        if (priority === "") {
          priority = "low"
        }
       let x = new Task(event.target.form[1].value, priority, event.target.form[0].value)
       event.target.form[1].value = ""
       event.target.form[2].value = ""

     }
    }


});
  // update list of lists dynamically.  iterate through store of lists.
