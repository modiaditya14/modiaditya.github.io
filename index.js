// main index.js file

if (localStorage.getItem("ToDolist") == null){
    localStorage.setItem("ToDolist",JSON.stringify([]))
}

if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load',evt => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }

const app = new Vue({
            el: '#app',
            data:{
                title: "Hello !",
                newTodo: '',
                thistodo:'',
                todos:JSON.parse(localStorage.getItem("ToDolist")),
                donetext:''
            },
            methods:{
                tTodo(todo){
                  todo.done=!todo.done;
                  this.ref();

                },
                addTodo(){
                    this.todos.push({
                        title:this.newTodo,
                        done:false,
                        edit:false
                    });
                    this.newTodo='';this.ref();
                },
                rTodo(todo){
                    const todoindex = this.todos.indexOf(todo);
                    this.todos.splice(todoindex,1);this.ref();
                },
                AllDone(){
                    this.todos.forEach(todo => {
                        todo.done=true;this.ref();
                    });
                },
                AllDel(){
                    this.todos = [];
                    this.ref();
                },
                eTodo(todo){
                },
                ref(){
                    localStorage.setItem("ToDolist",JSON.stringify(this.todos))
                }
                }
        });

