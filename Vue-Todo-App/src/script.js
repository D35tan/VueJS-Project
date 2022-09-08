const app = Vue.createApp({
  data() {
    return {
      ulHeadline: "Your Todos",
      filterHeadline: "Filters & Options",
      database: "http://localhost:3000/todos",
      hideDone: false,
      hideOpen: false,
      activeRadio: 1,
      todos: [],
      newEntry: "",
      doneVisibility: "",
      openVisibility: "",
    };
  },
  computed: {},
  methods: {
    addNewTodo() {
      const inputValue = document.querySelector("#todo-input").value;
      let data = {
        description: this.newEntry,
        done: false,
      };
      this.newEntry = "";
      if (inputValue.length > 2) {
        fetch(this.database, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        fetch(this.database)
          .then((res) => res.json())
          .then((newData) => (this.todos = newData));
      }
    },
    removeDone() {
      let done = this.todos.filter((todo) => todo.done === true);
      for (item of done) {
        fetch(this.database + "/" + item.id, {
          method: "DELETE",
        });
      }
    },
    updateDoneState(todo) {
      todo.done = !todo.done;
      fetch(this.database + "/" + todo.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
    },
    reloadPage() {
      setTimeout(500);
      window.location.reload;
    },
    toggleFilter() {
      const style = document.querySelector(":root").style;
      style.setProperty("--hide-done-filter", this.doneVisibility);
      style.setProperty("--hide-open-filter", this.openVisibility);
    },
    filterTodos() {
      const doneTodos = document.querySelector(".done-todo");
      const openTodos = document.querySelector(".open-todo");
      if (this.activeRadio === 1) {
        this.doneVisibility = "";
        this.openVisibility = "";
      } else {
        if (this.activeRadio === 2) {
          this.doneVisibility = "none";
          this.openVisibility = "";
        } else {
          if (this.activeRadio === 3) {
            this.doneVisibility = "";
            this.openVisibility = "none";
          }
        }
      }
    },
  },
  watch: {},
  created() {
    fetch(this.database)
      .then((res) => res.json())
      .then((data) => (this.todos = data));
  },
  mounted() {},
}).mount("#app");

const header = document.querySelector("#header");
header.textContent = "Todo App";
