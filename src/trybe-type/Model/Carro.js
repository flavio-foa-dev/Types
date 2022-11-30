
export interface ICarro {
  brand: string;
  color: string;
  doors: number;
}










class Carro implements ICarro {

  brand: string = "";
  color: string = "";
  doors: number = 0;

  constructor(){

  }

  honk(buzid: string){}
  turnOn(liga: string){}
  turnOff(desliga: string){}
  speedUp(velocity: string){}
  speedDown(velocity:number){}
  stop(para: string){}
  turn(direcao:string){}
}



// ./Car.ts

class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  turnOn(): void {
    console.log("Carro ligado.");
  }

  turnOff(): void {
    console.log("Carro desligado.");
  }

  turn(direction: string): void {
    console.log(`Virando para a ${direction}.`);
  }

  speedUp(): void {
    console.log("Acelerando o carro.");
  }

  speedDown(): void {
    console.log("Reduzindo a velocidade do carro.");
  }

  stop(): void {
    console.log("Parando o carro.");
  }

  honk(): void {
    console.log("Buzinando: BIP BIP");
  }
}

export default Car;



// ./index.ts

import Car from "./Car";

const gol = new Car("Volkswagen", "prata", 4);

gol.openTheDoor(Doors.DRIVER);
gol.closeTheDoor(Doors.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();


// ./Pizza.ts

type Slices  = 4 | 6 | 8;

interface Pizza {
  flavor: string,
  slices: Slices
}

export default Pizza

// ./index.ts

import Pizza from "./Pizza";

const calabresa: Pizza = {
  flavor: "Calabresa",
  slices: 8
}

console.log(calabresa);

const marguerita: Pizza = {
  flavor: "Marguerita",
  slices: 6
}

console.log(marguerita);


const nutela: Pizza = {
  flavor: "Nutela",
  slices: 4
}

console.log(nutela);

// ./PizzaFlavorsTypes.ts

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type Sugar = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

export {
  Common,
  Vegetarian,
  Sugar
}

// ./PizzaCommon.ts

import Pizza from "./Pizza";
import { Common } from "./PizzaFlavorsTypes";

interface PizzaCommon extends Pizza {
  flavor: Common
}

export default PizzaCommon;

// ./PizzaVegetarian.ts

import Pizza from "./Pizza";
import { Vegetarian } from "./PizzaFlavorsTypes";

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}

export default PizzaVegetarian;

// ./PizzaSugar.ts

import Pizza from "./Pizza";
import { Sugar } from "./PizzaFlavorsTypes";

interface PizzaSugar extends Pizza {
  flavor: Sugar,
  slices: 4
}

export default PizzaSugar;

// ./index.ts

import PizzaVegetarian from "./PizzaVegetarian";
import PizzaCommon from "./PizzaCommon";
import PizzaSugar from "./PizzaSugar";

const calabresa: PizzaCommon = {
  flavor: "Calabresa",
  slices: 6
}

console.log(calabresa);

const frango: PizzaCommon = {
  flavor: "Frango",
  slices: 8
}

console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: "Pepperoni",
  slices: 6
}

console.log(pepperoni);

const marguerita: PizzaVegetarian = {
  flavor: "Marguerita",
  slices: 8
}

console.log(marguerita);

const palmito: PizzaVegetarian = {
  flavor: "Palmito",
  slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaSugar = {
  flavor: "Goiabada com Queijo",
  slices: 4
}

console.log(goiabadaEQueijo);

type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3 ));

console.log(myFilter(["a", "b", "c"], (item, index, array) => {
  return item !== "a"
}));




// ./
npx sequelize migration:generate --name create-authors

'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('authors', {
    });
  },
};

'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('authors', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    });
  },
};

'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('authors', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    });
  },
  async down (queryInterface) {
    await queryInterface.dropTable('authors');

  }
};

npx sequelize migration:generate --name create-genres

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('genres', {
    });
  },
};


'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('genres', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      genre: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    });
  },
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('genres', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      genre: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('genres');
  }
};


npx sequelize migration:generate --name create-books


'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
    });
  },
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      author_id: {
        type: Sequelize.INTEGER,
        field: 'author_id',
        references: {
          model: 'authors', // aqui informamos que a relação será com nossa model 'authors'
          key: 'id', // aqui informamos qual vai ser a coluna que será relacionada (no caso, a coluna 'id')
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      genre_id: {
        type: Sequelize.INTEGER,
        field: 'genre_id',
        references: {
          model: 'genres', // aqui informamos que a relação será com nossa model 'genres'
          key: 'id', // aqui informamos qual vai ser a coluna que será relacionada (no caso, a coluna 'id')
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },
};


'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      author_id: {
        type: Sequelize.INTEGER,
        field: 'author_id',
        references: {
          model: 'authors', // aqui informamos que a relação será com nossa model 'authors'
          key: 'id', // aqui informamos qual vai ser a coluna que será relacionada (no caso, a coluna 'id')
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      genre_id: {
        type: Sequelize.INTEGER,
        field: 'genre_id',
        references: {
          model: 'genres', // aqui informamos que a relação será com nossa model 'genres'
          key: 'id', // aqui informamos qual vai ser a coluna que será relacionada (no caso, a coluna 'id')
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('books');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'authors',
      [
        {
          name: 'Dan Brown',
        },
        {
          name: 'Stephen King',
        },
        {
          name: 'J. K. Rowling',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('authors', null, {});
  },
};

'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'genres',
      [
        {
          genre: 'Horror',
        },
        {
          genre: 'Fantasia',
        },
        {
          genre: 'Suspense',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('genres', null, {});
  },
};

'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'Código Da Vinci',
          author_id: 1,
          genre_id: 3,
        },
        {
          title: 'Origem',
          author_id: 1,
          genre_id: 3,
        },
        {
          title: 'O Iluminado',
          author_id: 2,
          genre_id: 1,
        },
        {
          title: 'Harry Potter e a Pedra Filosofal',
          author_id: 3,
          genre_id: 2,
        },
        {
          title: 'Harry Potter e a Câmara Secreta',
          author_id: 3,
          genre_id: 2,
        },
        {
          title: 'Harry Potter e o Prisioneiro de Azkaban',
          author_id: 3,
          genre_id: 2,
        },
        {
          title: 'Harry Potter e o Cálice de Fogo',
          author_id: 3,
          genre_id: 2,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('books', null, {});
  },
};

import { Model, INTEGER, STRING } from 'sequelize';

class Author extends Model {
  declare id: number;
  declare name: string;
}

export default Author;

import { Model, INTEGER, STRING } from 'sequelize';

class Author extends Model {
  declare id: number;
  declare name: string;
}

Author.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(30),
    allowNull: false,
  },
});

export default Author;

import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

class Author extends Model {
  declare id: number;
  declare name: string;
}

Author.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(30),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'authors',
  timestamps: false,
});

export default Author;

import Author from "./database/models/AuthorModel";

(async () => {
  const authors = await Author.findAll();
  console.table(authors.map((author) => author.toJSON()));

  process.exit(0);
})();

> ts-sequelize-exercise@1.0.0 start
> ts-node src/index.ts
Executing (default): SELECT `id`, `name` FROM `authors` AS `authors`;
┌─────────┬────┬─────────────────┐
│ (index) │ id │      name       │
├─────────┼────┼─────────────────┤
│    0    │ 1  │   'Dan Brown'   │
│    1    │ 2  │ 'Stephen King'  │
│    2    │ 3  │ 'J. K. Rowling' │
└─────────┴────┴─────────────────┘

import { Model, INTEGER, STRING } from 'sequelize';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

export default Book;

import { Model, INTEGER, STRING } from 'sequelize';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING(30),
    allowNull: false,
  },
  authorId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'authors',
      key: 'id',
    }
  },
  genreId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'genres',
      key: 'id',
    }
  }
});

export default Book;

import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING(30),
    allowNull: false,
  },
  authorId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'authors',
      key: 'id',
    }
  },
  genreId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'genres',
      key: 'id',
    }
  }
}, {
  sequelize: db,
  modelName: 'books',
  underscored: true,
  timestamps: false,
});

export default Book;

import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';
import Author from './AuthorModel';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING(30),
    allowNull: false,
  },
  authorId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'authors',
      key: 'id',
    }
  },
  genreId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'genres',
      key: 'id',
    }
  }
}, {
  sequelize: db,
  modelName: 'books',
  underscored: true,
  timestamps: false,
});

Book.belongsTo(Author, { foreignKey: 'id' });

Author.hasMany(Book, { foreignKey: 'authorId' });

export default Book;

import Book from "./database/models/BookModel";

(async () => {
  const books = await Book.findAll();
  console.table(books.map((book) => book.toJSON()));

  process.exit(0);
})();

> test@1.0.0 start
> ts-node src/index.ts

Executing (default): SELECT `id`, `title`, `author_id` AS `authorId`, `genre_id` AS `genreId` FROM `books` AS `books`;
┌─────────┬────┬───────────────────────────────────────────┬──────────┬─────────┐
│ (index) │ id │                   title                   │ authorId │ genreId │
├─────────┼────┼───────────────────────────────────────────┼──────────┼─────────┤
│    0    │ 1  │             'Código Da Vinci'             │    1     │    3    │
│    1    │ 2  │                 'Origem'                  │    1     │    3    │
│    2    │ 3  │               'O Iluminado'               │    2     │    1    │
│    3    │ 4  │    'Harry Potter e a Pedra Filosofal'     │    3     │    2    │
│    4    │ 5  │     'Harry Potter e a Câmara Secreta'     │    3     │    2    │
│    5    │ 6  │ 'Harry Potter e o Prisioneiro de Azkaban' │    3     │    2    │
│    6    │ 7  │     'Harry Potter e o Cálice de Fogo'     │    3     │    2    │
└─────────┴────┴───────────────────────────────────────────┴──────────┴─────────┘


[
  {
    author: nome_do_autor1,
    totalBooks: quantidade_de_livros_do_autor1,
  },
  {
    author: nome_do_autor2,
    totalBooks: quantidade_de_livros_do_autor2,
  },
    ...
]

import Author from './database/models/AuthorModel';

(async () => {
  const data = await Author.findAll({

  });

  console.log(data);
  process.exit(0);
})();

import Author from './database/models/AuthorModel';
import Book from './database/models/BookModel';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    raw: true
  });

  console.log(data);
  process.exit(0);
})();

import Author from './database/models/AuthorModel';
import Book from './database/models/BookModel';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
    ],
    raw: true
  });

  console.log(data);
  process.exit(0);
})();

import Author from './database/models/AuthorModel';
import Book from './database/models/BookModel';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
    ],
    group: 'authors.name',
    raw: true
  });

  console.log(data);
  process.exit(0);
})();

import sequelize from 'sequelize';
import Author from './database/models/AuthorModel';
import Book from './database/models/BookModel';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks']
    ],
    group: 'authors.name',
    raw: true
  });

  console.log(data);
  process.exit(0);
})();

import sequelize from 'sequelize';
import Author from './database/models/AuthorModel';
import Book from './database/models/BookModel';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks']
    ],
    group: 'authors.name',
    order: [['totalBooks', 'DESC']],
    raw: true
  });

  console.log(data);
  process.exit(0);
})();

import sequelize from 'sequelize';
import Author from './database/models/AuthorModel';
import Book from './database/models/BookModel';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks']
    ],
    group: 'authors.name',
    order: [['totalBooks', 'DESC']],
    raw: true
  });

  console.log(data);
  process.exit(0);
})();

> ts-sequelize-exercise@1.0.0 start
> ts-node src/index.ts

[
  { author: 'J. K. Rowling', totalBooks: 4 },
  { author: 'Dan Brown', totalBooks: 2 },
  { author: 'Stephen King', totalBooks: 1 }
]