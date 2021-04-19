const bookShelf = {
    books: ['Последнее королевство', 'Мгла', 'Страж снов'],
    updateBook(oldName, newName) {
      // Пиши код ниже этой строки
      for(const book of bookShelf){
        if(this.books.includes(oldName)){
          let ind = this.book.indexOf(oldName);
              this.books.splice(ind,1,newName);
          }
      }	
      
      
      // Пиши код выше этой строки
    },
  };
  