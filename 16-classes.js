class SomeClass {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  get() {
    console.log(this.a, this.b);
  }

  goGetGet() {
    this.get();
  }

  static doSomethingWithClass(...items) {
    console.log('---------');
    items.forEach((item) => {
      item.get();
    });
    console.log('---------');
  }
}

let item1 = new SomeClass(3, 2);
let item2 = new SomeClass(99, 122);

item1.get();
item1.goGetGet();

SomeClass.doSomethingWithClass(item1, item2);
