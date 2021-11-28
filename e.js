class Utilities {

  constructor() {}

  getInfo() {
    return {
      id: 'utilities',
      name: 'Utlities',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'img',

          blockType: Scratch.BlockType.REPORTER,

          text: 'draw image [img] at [x] [y]',
          arguments: {
            img: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://me234567890.github.io/test/gfd.png'
            },
            x: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            }
          }
        }
        ]
          img({img, x, y}) {
              var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("scream");
  return ctx.drawImage(img, 90, 130, 50, 60, 10, 10, 50, 60);
  }
  }
        Scratch.extensions.register(new Utilities());
