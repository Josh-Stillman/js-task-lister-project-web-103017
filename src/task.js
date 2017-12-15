/*
task is responsible for creating a single task object
*/

taskStore = []
const Task = (() => {
  let id = 1
  return class Task {
    constructor(description, priority, listId) {
      //your code here
      this.description = description
      this.priority = priority
      this.id = id++
      this.listId = listId
      taskStore.push(this)
  
      let newTask = document.createElement('li')
      newTask.id = this.id
      newTask.innerHTML = `Task: ${this.description}  <br> Priority: ${this.priority}`
      document.getElementById(`list${this.listId}`).appendChild(newTask)

    }
  }

})()
