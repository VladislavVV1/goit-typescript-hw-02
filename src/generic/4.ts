/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Book {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Book> {
  book() {
    console.log(this.props.title);
  }
}

export {};