/*
list is responsible for creating a single list component
*/

let listStore = []
const List = (() => {
  let id = 1
  return class List {
    constructor(title) {
      //your code here
      // NOTE: How can we use the private id variable to auto increment list ids🤔?
      this.id = id++
      this.title = title

      let newList = document.createElement('div')
      newList.class = 'list'
      newList.id = `list${this.id}`
      newList.innerHTML = `<h2> <button data-id=${this.id} class="delete-list">X</button>${this.title}</h2><ul></ul>`
      document.getElementById("lists").appendChild(newList)

      listStore.push(this)

      List.updateSelector()

      document.querySelector(`#list${this.id} button`).addEventListener("click", this.deleteList)


    }
    deleteList(event){

      let delId = this.dataset.id
      let delList = listStore.find(function(list){list.id === delId})
      let i = listStore.indexOf(delList) - 1
      // debugger
      listStore.splice(i, 1)


      document.getElementById(`list${this.dataset.id}`).remove
      ()
      List.updateSelector()
      if (listStore.length === 0){
      document.getElementById('create-task-form').style.display = 'none';
      }

    }

    static updateSelector(){
      let dropDown = document.getElementById('parent-list')
      dropDown.innerHTML = ""
      listStore.forEach(function(ls){
        dropDown.innerHTML += `<option value="${ls.id}">${ls.title}</option>`
      })
    }
  }

})()
