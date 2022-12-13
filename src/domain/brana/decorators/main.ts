// orm
class ORM {

 async save(entyty: Entity) {

  }
}



class Entity {

}


export class Book extends Entity {
  title: string;
  author: string;

  constructor(title: string, author: string){
    super()
    this.title = title;
    this.author = author;
  }

}


async function init(){
  const book = new Book("Clean Code", "Robert mark");
  console.log(book);
  const orm = new ORM();
  orm.save(book);

}
init()
