<template>
  <div id="app">
    <div id="nav row">
    <div class="col mt-2 ">
          <img src="./assets/bundesliga.png" height="120" width="100">
   </div>
   </div>
   <hr>
   
    
   
    <router-view/>
    <hr>
     <div class="footer" style="font-family: 'Poor Story', cursive;">
       <router-link to="/">Home</router-link> |
       <router-link to="/schedule">Matches</router-link> |
      <router-link to="/standings">Standings</router-link> |
       <router-link to="/chat">Chat</router-link>
       
      
    </div>
  </div>
</template>
<script>
  // import BooksComponent from "@/components/BooksComponent.vue";
  // import OneBookComponent from "@/components/OneBookComponent.vue";
  // export default {
  //   name: "app",
  //   data() {
  //     return {
  //       // books: [],
  //       // searchBook: "",
  //       // isLoading: true
  //     };
  //   },
    // components: {
    //   BooksComponent,
    //   OneBookComponent
    // }
  //   computed: {
  //     filterTheBooks() {
  //       var searchOneBook = this.searchBook;
  //       if (searchOneBook == "") {
  //         return this.books;
  //         // console.log("Hiu" + this.books);
  //       }
  //       // console.log(this.searchWords);
  //       return this.books.filter(book =>
  //         book.titulo.toLowerCase().includes(searchOneBook.toLowerCase())
  //       );
  //     }
  //   },

  //   created() {
  //     this.getFetch();
  //   },
  //   methods: {
  //     getFetch: function () {
  //       fetch("https://api.myjson.com/bins/udbm5", {
  //           method: "GET"
  //         })
  //         .then(response => {
  //           return response.json();
  //         })
  //         .then(data => {
  //           this.books = data.books;
  //           console.log(this.books);
  //           this.isLoading = false;
  //         });
  //     }
  //   }
  // };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: url("./assets/place.jpg");
  background-repeat: no-repeat;
      background-size:950px 3000px;
    background-position: center;  */
    
}
#nav {
  padding: 30px;
  background-color: black;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer{
      margin-bottom: 4%;
}
</style>
