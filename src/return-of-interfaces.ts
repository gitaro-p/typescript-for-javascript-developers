export {};

class Peko {}
class Poko {}

class Taro extends Peko {}

interface Hanako {
  gomisute(): void;
}

interface Norio {
  saraarai(): void;
}

class Jiro implements Hanako, Norio {
  gomisute(): void {
    console.log('gomisute');
  }

  saraarai(): void {
    console.log('saraarai');
  }
}

const jiro = new Jiro();
jiro.gomisute();
jiro.saraarai();
