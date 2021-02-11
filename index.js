// main index.js file


if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load',evt => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }

const app = new Vue({
            el: '#app',
            created(){

            },
            data:{
                newTodo: '',
                thistodo:'',
                todos:JSON.parse(localStorage.getItem("ToDolist")||'[]'),
                donetext:'',
                EditEd = ''
            },
            methods:{
                dEdit(todo){
                    todo.edit=false
                    todo.title=this.EditEd
                },
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
                ref(){
                    localStorage.setItem("ToDolist",JSON.stringify(this.todos))
                }
                }
        });

