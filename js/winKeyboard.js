const winKeys = [
  {
    "key": "`",
    "keyCode": 192,
    "class": "key",
  },
  {
    "key": "1",
    "keyCode": 49,
    "class": "key",
  },
  {
    "key": "2",
    "keyCode": 50,
    "class": "key",
  },
  {
    "key": "3",
    "keyCode": 51,
    "class": "key",
  },
  {
    "key": "4",
    "keyCode": 52,
    "class": "key",
  },
  {
    "key": "5",
    "keyCode": 53,
    "class": "key",
  },
  {
    "key": "6",
    "keyCode": 54,
    "class": "key",
  },
  {
    "key": "7",
    "keyCode": 55,
    "class": "key",
  },
  {
    "key": "8",
    "keyCode": 56,
    "class": "key",
  },
  {
    "key": "9",
    "keyCode": 57,
    "class": "key",
  },
  {
    "key": "0",
    "keyCode": 48,
    "class": "key",
  },
  {
    "key": "-",
    "keyCode": 189,
    "class": "key",
  },
  {
    "key": "=",
    "keyCode": 187,
    "class": "key",
  },
  {
    "key": "Backspace",
    "keyCode": 8,
    "class": "key Backspace",
  },
  {
    "key": "Tab",
    "keyCode": 9,
    "class": "key Tab",
  },
  {
    "key": "q",
    "keyCode": 81,
    "class": "key",
  },
  {
    "key": "w",
    "keyCode": 87,
    "class": "key",
  },
  {
    "key": "e",
    "keyCode": 69,
    "class": "key",
  },
  {
    "key": "r",
    "keyCode": 82,
    "class": "key",
  },
  {
    "key": "t",
    "keyCode": 84,
    "class": "key",
  },
  {
    "key": "y",
    "keyCode": 89,
    "class": "key",
  },
  {
    "key": "u",
    "keyCode": 85,
    "class": "key",
  },
  {
    "key": "i",
    "keyCode": 73,
    "class": "key",
  },
  {
    "key": "o",
    "keyCode": 79,
    "class": "key",
  },
  {
    "key": "p",
    "keyCode": 80,
    "class": "key",
  },
  {
    "key": "[",
    "keyCode": 219,
    "class": "key",
  },
  {
    "key": "]",
    "keyCode": 221,
    "class": "key",
  },
  {
    "key": "\\",
    "keyCode": 220,
    "class": "key Slash",
  },
  {
    "key": "CapsLock",
    "keyCode": 20,
    "class": "key CapsLock",
  },
  {
    "key": "a",
    "keyCode": 65,
    "class": "key",
  },
  {
    "key": "s",
    "keyCode": 83,
    "class": "key",
  },
  {
    "key": "d",
    "keyCode": 68,
    "class": "key",
  },
  {
    "key": "f",
    "keyCode": 70,
    "class": "key",
  },
  {
    "key": "g",
    "keyCode": 71,
    "class": "key",
  },
  {
    "key": "h",
    "keyCode": 72,
    "class": "key",
  },
  {
    "key": "j",
    "keyCode": 74,
    "class": "key",
  },
  {
    "key": "k",
    "keyCode": 75,
    "class": "key",
  },
  {
    "key": "l",
    "keyCode": 76,
    "class": "key",
  },
  {
    "key": ";",
    "keyCode": 186,
    "class": "key",
  },
  {
    "key": "'",
    "keyCode": 222,
    "class": "key",
  },
  {
    "key": "Enter",
    "keyCode": 13,
    "class": "key Enter",
  },
  {
    "key": "Shift",
    "keyCode": 16,
    code: "ShiftLeft",
    "class": "key ShiftLeft",
  },
  {
    "key": "z",
    "keyCode": 90,
    "class": "key",
  },
  {
    "key": "x",
    "keyCode": 88,
    "class": "key",
  },
  {
    "key": "c",
    "keyCode": 67,
    "class": "key",
  },
  {
    "key": "v",
    "keyCode": 86,
    "class": "key",
  },
  {
    "key": "b",
    "keyCode": 66,
    "class": "key",
  },
  {
    "key": "n",
    "keyCode": 78,
    "class": "key",
  },
  {
    "key": "m",
    "keyCode": 77,
    "class": "key",
  },
  {
    "key": ",",
    "keyCode": 188,
    "class": "key",
  },
  {
    "key": ".",
    "keyCode": 190,
    "class": "key",
  },
  {
    "key": "/",
    "keyCode": 191,
    "class": "key",
  },
  {
    "key": "&uarr;",
    "keyCode": 38,
    "class": "key ArrowUp",
  },
  {
    "key": "Shift",
    "keyCode": 16,
    code: "ShiftRight",
    "class": "key ShiftRight",
  },
  {
    "key": "Ctrl",
    "keyCode": 17,
    code: "ControlLeft",
    "class": "key ControlLeft",
  },
  {
    "key": "Del",
    "keyCode": 46,
    "class": "key  Delete",
  },
  {
    "key": "Win",
    "keyCode": 91,
    "class": "key MetaLeft",
  },
  {
    "key": "Alt",
    "keyCode": 18,
    code: "AltLeft",
    "class": "key AltLeft",
  },
  {
    "key": " ",
    "keyCode": 32,
    "class": "key Space",
  },
  {
    "key": "Alt",
    "keyCode": 18,
    code: "AltRight",
    "class": "key AltRight",
  },
  
  {
    "key": "&larr;",
    "keyCode": 37,
    "class": "key ArrowLeft",
  },
    {
    "key": "&darr;",
    "keyCode": 40,
    "class": "key ArrowDown",
  },
  {
    "key": "&rarr;",
    "keyCode": 39,
    "class": "key ArrowRight",
  },
  {
    "key": "Ctrl",
    "keyCode": 17,
    code: "ControlRight",
    "class": "key ControlRight",
  },
];

export { winKeys };
