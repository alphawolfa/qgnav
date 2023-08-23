// /**
//  * Created by Administrator on 2017/7/20.
//  */

// function entersearch() {
//   var event = window.event || arguments.callee.caller.arguments[0];
//   if (event.keyCode == 13) {
//     query();
//   }
// }
// function query() {
//   var abc = document.getElementById("mySelect").value;
//   var str = document.getElementById("srh").value;
//   var www = "";
//   if (abc == null || abc == "") {
//     return;
//   } else {
//     if (abc === "百度") {
//       www = "http://www.baidu.com/s?ie=utf-8&wd=" + str;
//     } else if (abc === "360") {
//       www = "https://www.so.com/s?q=" + str;
//     } else if (abc === "搜狗") {
//       www = "https://www.sogou.com/sogou?query=" + str;
//     } else if (abc === "必应") {
//       www = "http://cn.bing.com/search?q=" + str;
//     } else if (abc === "谷歌") {
//       www = "http://www.google.com/?#newwindow=1&q=" + str;
//     } else {
//       www = "http://www.baidu.com/s?ie=utf-8&wd=" + str;
//     }
//   }

//   window.open(www);
// }
// var keyLi = document
//   .getElementsByClassName("keyWd")[0]
//   .getElementsByTagName("li");

// //判断网址格式
// function CheckUrl(str) {
//   var RegUrl = new RegExp();
//   RegUrl.compile(
//     "[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+.?"
//   ); //jihua.cnblogs.com
//   if (!RegUrl.test(str)) {
//     return false;
//   }
//   return true;
// }

// //创建编辑和删除按钮还有图标位置
// for (var i = 0, l = keyLi.length; i < l; i++) {
//   var creaDiv = document.createElement("div");
//   creaDiv.className = "creaDiv";
//   var e = document.createElement("span");
//   e.className = "e1";
//   e.innerText = "E";
//   e.title = "编辑";
//   creaDiv.appendChild(e);
//   var d = document.createElement("span");
//   d.className = "d1";
//   d.innerText = "D";
//   d.title = "删除";
//   creaDiv.appendChild(d);
//   var img = document.createElement("img");
//   img.className = "imgClass";
//   keyLi[i].appendChild(img);
//   keyLi[i].appendChild(creaDiv);
//   keyLi[i].onmouseenter = function () {
//     this.getElementsByClassName("creaDiv")[0].style.display = "block";
//   };
//   keyLi[i].onmouseleave = function () {
//     this.getElementsByClassName("creaDiv")[0].style.display = "none";
//   };
// }

// var _this = this;
// //闭包 设置对应的localStorage
// var arre1 = document.getElementsByClassName("e1");
// for (var i = 0, l = arre1.length; i < l; i++) {
//   (function (i) {
//     var x = _this.keyLi[i].getAttribute("id");
//     return (arre1[i].onclick = function (e) {
//       if (e && e.stopPropagation) {
//         // 非IE浏览器它支持W3C的stopPropagation()方法
//         e.stopPropagation();
//       } else {
//         // 否则，我们需要使用IE的方式来取消事件冒泡
//         window.event.cancelBubble = true;
//       }

//       var urll = encodeURI(
//         prompt(
//           "请输入键位[" + x + "]对应的网站地址",
//           localStorage.getItem(x, urll) || ""
//         )
//       );

//       if (urll == null || urll == "" || urll == "null") {
//         return;
//       } else if (CheckUrl(urll) == false) {
//         return;
//       } else {
//         localStorage.setItem(x, urll);
//         //console.log(urll.charAt(this.length-1));
//         if (urll.indexOf(".com") != -1 && urll.indexOf(".com") < urll.length) {
//           localStorage.setItem(
//             x + "Src",
//             urll.substr(0, urll.indexOf(".com") + 4) + "/favicon.ico"
//           );
//         } else if (
//           urll.indexOf(".cn") != -1 &&
//           urll.indexOf(".cn") < urll.length
//         ) {
//           localStorage.setItem(
//             x + "Src",
//             urll.substr(0, urll.indexOf(".cn") + 3) + "/favicon.ico"
//           );
//         } else if (
//           urll.indexOf(".net") != -1 &&
//           urll.indexOf(".net") < urll.length
//         ) {
//           localStorage.setItem(
//             x + "Src",
//             urll.substr(0, urll.indexOf(".net") + 4) + "/favicon.ico"
//           );
//         } else {
//           localStorage.setItem(x + "Src", urll + "favicon.ico");
//         }

//         _this.keyLi[i].getElementsByTagName("img")[0].src =
//           localStorage.getItem(x + "Src");
//         _this.keyLi[i].getElementsByTagName("img")[0].style.display =
//           "inline-block";
//       }
//     });
//   })(i);
// }
// //闭包 删除对应的localStorage
// var arrd1 = document.getElementsByClassName("d1");
// for (var i = 0, l = arrd1.length; i < l; i++) {
//   (function (i) {
//     var x = _this.keyLi[i].getAttribute("id");
//     return (arrd1[i].onclick = function () {
//       localStorage.removeItem(x);
//       localStorage.removeItem(x + "Src");
//       _this.keyLi[i].getElementsByTagName("img")[0].style.display = "none";
//       //_this.keyLi[i].getElementsByTagName('img')[0].removeAttribute("src");
//     });
//   })(i);
// }

// //跳转到对应的网址
// for (var i = 0, l = keyLi.length; i < l; i++) {
//   (function (i) {
//     var x = _this.keyLi[i].getAttribute("id");
//     return (keyLi[i].onclick = function () {
//       var urll = localStorage.getItem(x);
//       if (urll == null || urll == "") {
//         return false;
//       }

//       window.open(localStorage.getItem(x));
//     });
//   })(i);
// }
// //按键盘跳转

// document.onkeyup = function (e) {
//   var e = e || window.event;
//   var code = e.keyCode;
//   //console.log(code);
//   var urll = localStorage.getItem(jianpanma[code]);
//   if (document.activeElement.id != "srh") {
//     if (urll == null || urll == "") {
//       return false;
//     } else {
//       if ((code <= 90 && code >= 65) || (code <= 57 && code >= 49))
//         window.open(localStorage.getItem(jianpanma[code]));
//     }
//   } else {
//     if (code == 13) {
//       //preventDefa(e);
//       console.log(999);
//       if (document.getElementById("srh").value != "") {
//         query();
//       }
//     }
//   }
// };

// //初始化图标
// var imgList = document
//   .getElementsByClassName("keyWd")[0]
//   .getElementsByTagName("img");
// //console.log(imgList.length);
// for (var i = 0, l = imgList.length; i < l; i++) {
//   var x = _this.keyLi[i].getAttribute("id");
//   _this.keyLi[i].getElementsByTagName("img")[0].style.display = "none";
//   _this.keyLi[i].getElementsByTagName("img")[0].src = localStorage.getItem(
//     x + "Src"
//   );

//   if (imgList[i].src.substr(this.length - 4) != "null") {
//     //src="null"
//     _this.keyLi[i].getElementsByTagName("img")[0].style.display =
//       "inline-block";
//   }
// }
// //键盘码和对应的ID
// var jianpanma = {
//   49: "1",
//   50: "2",
//   51: "3",
//   52: "4",
//   53: "5",
//   54: "6",
//   55: "7",
//   56: "8",
//   57: "9",
//   48: "0",
//   65: "A",
//   66: "B",
//   67: "C",
//   68: "D",
//   69: "E",
//   70: "F",
//   71: "G",
//   72: "H",
//   73: "I",
//   74: "J",
//   75: "K",
//   76: "L",
//   77: "M",
//   78: "N",
//   79: "O",
//   80: "P",
//   81: "Q",
//   82: "R",
//   83: "S",
//   84: "T",
//   85: "U",
//   86: "V",
//   87: "W",
//   88: "X",
//   89: "Y",
//   90: "Z",
// };
// //阻止浏览器默认事件
// function preventDefa(e) {
//   if (window.event) {
//     //IE中阻止函数器默认动作的方式
//     window.event.returnValue = false;
//   } else {
//     //阻止默认浏览器动作(W3C)
//     e.preventDefault();
//   }
// }
// //粒子背景
// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");
// const width = window.innerWidth;
// const height = window.innerHeight;

// canvas.width = width;
// canvas.height = height;

// const particles = [];
// const connections = [];
// const particleCount = 300;
// const particleSpeed = 1;
// const particleSize = 2;
// const maxDistance = 100;
// const lightningColor = "#fff";

// class Particle {
//   constructor() {
//     this.x = Math.random() * width;
//     this.y = Math.random() * height;
//     this.color = "#fff";
//     this.angle = Math.random() * 360;
//     this.speed = Math.random() * particleSpeed;
//     this.opacity = Math.random() * 0.5 + 0.5;
//   }

//   update() {
//     this.x += Math.cos(this.angle) * this.speed;
//     this.y += Math.sin(this.angle) * this.speed;

//     if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
//       this.x = Math.random() * width;
//       this.y = Math.random() * height;
//     }
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, particleSize, 0, Math.PI * 2);
//     ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
//     ctx.fill();
//   }
// }

// function createParticles() {
//   for (let i = 0; i < particleCount; i++) {
//     particles.push(new Particle());
//   }
// }

// function drawConnections() {
//   for (let i = 0; i < particles.length; i++) {
//     for (let j = i + 1; j < particles.length; j++) {
//       const dx = particles[i].x - particles[j].x;
//       const dy = particles[i].y - particles[j].y;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       if (distance < maxDistance) {
//         ctx.beginPath();
//         ctx.moveTo(particles[i].x, particles[i].y);
//         ctx.lineTo(particles[j].x, particles[j].y);
//         ctx.strokeStyle = lightningColor;
//         ctx.lineWidth = 0.2 * (1 - distance / maxDistance);
//         ctx.stroke();
//         ctx.closePath();
//       }
//     }
//   }
// }

// function animate() {
//   ctx.clearRect(0, 0, width, height);

//   for (const particle of particles) {
//     particle.update();
//     particle.draw();
//   }

//   drawConnections();

//   requestAnimationFrame(animate);
// }

// document.addEventListener("mousemove", (e) => {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;

//   for (const particle of particles) {
//     const dx = mouseX - particle.x;
//     const dy = mouseY - particle.y;
//     const distance = Math.sqrt(dx * dx + dy * dy);

//     if (distance < maxDistance) {
//       particle.angle = Math.atan2(dy, dx);
//       particle.speed = 5;
//     } else {
//       particle.speed = Math.random() * particleSpeed;
//     }
//   }
// });

// createParticles();
// animate();
function entersearch() {
  var _0x276501 =
    window["\u0065\u0076\u0065\u006e\u0074"] ||
    arguments["\u0063\u0061\u006c\u006c\u0065\u0065"][
      "\u0063\u0061\u006c\u006c\u0065\u0072"
    ]["\u0061\u0072\u0067\u0075\u006d\u0065\u006e\u0074\u0073"][
      0x9885a ^ 0x9885a
    ];
  if (
    _0x276501["\u006b\u0065\u0079\u0043\u006f\u0064\u0065"] ==
    (0x75d7a ^ 0x75d77)
  ) {
    query();
  }
}
function query() {
  var _0x281a26 = document[
    "\u0067\u0065\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0042\u0079\u0049\u0064"
  ]("tceleSym".split("").reverse().join(""))["\u0076\u0061\u006c\u0075\u0065"];
  var _0x3654d8 = document[
    "\u0067\u0065\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0042\u0079\u0049\u0064"
  ]("hrs".split("").reverse().join(""))["value"];
  var _0x2944e = "".split("").reverse().join("");
  if (_0x281a26 == null || _0x281a26 == "") {
    return;
  } else {
    if (_0x281a26 === "\u5EA6\u767E".split("").reverse().join("")) {
      _0x2944e =
        "=dw&8-ftu=ei?s/moc.udiab.www//:ptth".split("").reverse().join("") +
        _0x3654d8;
    } else if (_0x281a26 === "063".split("").reverse().join("")) {
      _0x2944e =
        "=q?s/moc.os.www//:sptth".split("").reverse().join("") + _0x3654d8;
    } else if (_0x281a26 === "\u72D7\u641C".split("").reverse().join("")) {
      _0x2944e =
        "=yreuq?uogos/moc.uogos.www//:sptth".split("").reverse().join("") +
        _0x3654d8;
    } else if (_0x281a26 === "\u5E94\u5FC5".split("").reverse().join("")) {
      _0x2944e =
        "=q?hcraes/moc.gnib.nc//:ptth".split("").reverse().join("") + _0x3654d8;
    } else if (_0x281a26 === "\u6B4C\u8C37".split("").reverse().join("")) {
      _0x2944e =
        "\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0067\u006f\u006f\u0067\u006c\u0065\u002e\u0063\u006f\u006d\u002f\u003f\u0023\u006e\u0065\u0077\u0077\u0069\u006e\u0064\u006f\u0077\u003d\u0031\u0026\u0071\u003d" +
        _0x3654d8;
    } else {
      _0x2944e =
        "\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0062\u0061\u0069\u0064\u0075\u002e\u0063\u006f\u006d\u002f\u0073\u003f\u0069\u0065\u003d\u0075\u0074\u0066\u002d\u0038\u0026\u0077\u0064\u003d" +
        _0x3654d8;
    }
  }
  window["open"](_0x2944e);
}
var keyLi = document[
  "\u0067\u0065\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0073\u0042\u0079\u0043\u006c\u0061\u0073\u0073\u004e\u0061\u006d\u0065"
]("dWyek".split("").reverse().join(""))[0x94107 ^ 0x94107][
  "\u0067\u0065\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0073\u0042\u0079\u0054\u0061\u0067\u004e\u0061\u006d\u0065"
]("il".split("").reverse().join(""));
function CheckUrl(_0x97b77b) {
  var _0x1d04b5 = new RegExp();
  _0x1d04b5["compile"](
    "[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+.?"
  );
  if (!_0x1d04b5["\u0074\u0065\u0073\u0074"](_0x97b77b)) {
    return ![];
  }
  return !![];
}
for (
  var i = 0xaba51 ^ 0xaba51, l = keyLi["\u006c\u0065\u006e\u0067\u0074\u0068"];
  i < l;
  i++
) {
  var creaDiv = document[
    "\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074"
  ]("vid".split("").reverse().join(""));
  creaDiv["className"] = "creaDiv";
  var e =
    document[
      "\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074"
    ]("span");
  e["className"] = "\u0065\u0031";
  e["\u0069\u006e\u006e\u0065\u0072\u0054\u0065\u0078\u0074"] = "E";
  e["\u0074\u0069\u0074\u006c\u0065"] = "\u8F91\u7F16"
    .split("")
    .reverse()
    .join("");
  creaDiv["\u0061\u0070\u0070\u0065\u006e\u0064\u0043\u0068\u0069\u006c\u0064"](
    e
  );
  var d = document["createElement"]("naps".split("").reverse().join(""));
  d["\u0063\u006c\u0061\u0073\u0073\u004e\u0061\u006d\u0065"] = "d1";
  d["\u0069\u006e\u006e\u0065\u0072\u0054\u0065\u0078\u0074"] = "\u0044";
  d["title"] = "\u5220\u9664";
  creaDiv["\u0061\u0070\u0070\u0065\u006e\u0064\u0043\u0068\u0069\u006c\u0064"](
    d
  );
  var img =
    document[
      "\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074"
    ]("img");
  img["\u0063\u006c\u0061\u0073\u0073\u004e\u0061\u006d\u0065"] =
    "\u0069\u006d\u0067\u0043\u006c\u0061\u0073\u0073";
  keyLi[i][
    "\u0061\u0070\u0070\u0065\u006e\u0064\u0043\u0068\u0069\u006c\u0064"
  ](img);
  keyLi[i][
    "\u0061\u0070\u0070\u0065\u006e\u0064\u0043\u0068\u0069\u006c\u0064"
  ](creaDiv);
  keyLi[i]["onmouseenter"] = function () {
    this["getElementsByClassName"](
      "\u0063\u0072\u0065\u0061\u0044\u0069\u0076"
    )[0xc95eb ^ 0xc95eb]["\u0073\u0074\u0079\u006c\u0065"]["display"] = "kcolb"
      .split("")
      .reverse()
      .join("");
  };
  keyLi[i]["onmouseleave"] = function () {
    this["getElementsByClassName"]("viDaerc".split("").reverse().join(""))[
      0x6300d ^ 0x6300d
    ]["style"]["\u0064\u0069\u0073\u0070\u006c\u0061\u0079"] = "enon"
      .split("")
      .reverse()
      .join("");
  };
}
var _this = this;
var arre1 = document[
  "\u0067\u0065\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0073\u0042\u0079\u0043\u006c\u0061\u0073\u0073\u004e\u0061\u006d\u0065"
]("1e".split("").reverse().join(""));
for (var i = 0xebffe ^ 0xebffe, l = arre1["length"]; i < l; i++) {
  (function (_0x5a1f1a) {
    var _0x5b97f1 =
      _this["\u006b\u0065\u0079\u004c\u0069"][_0x5a1f1a][
        "\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065"
      ]("\u0069\u0064");
    return (arre1[_0x5a1f1a]["onclick"] = function (_0x53b392) {
      if (
        _0x53b392 &&
        _0x53b392[
          "\u0073\u0074\u006f\u0070\u0050\u0072\u006f\u0070\u0061\u0067\u0061\u0074\u0069\u006f\u006e"
        ]
      ) {
        _0x53b392["stopPropagation"]();
      } else {
        window["event"]["cancelBubble"] = !![];
      }
      var _0x4d5160 = encodeURI(
        prompt(
          "[\u4F4D\u952E\u5165\u8F93\u8BF7".split("").reverse().join("") +
            _0x5b97f1 +
            "\u5740\u5730\u7AD9\u7F51\u7684\u5E94\u5BF9]"
              .split("")
              .reverse()
              .join(""),
          localStorage["getItem"](_0x5b97f1, _0x4d5160) || ""
        )
      );
      if (
        _0x4d5160 == null ||
        _0x4d5160 == "" ||
        _0x4d5160 == "llun".split("").reverse().join("")
      ) {
        return;
      } else if (CheckUrl(_0x4d5160) == ![]) {
        return;
      } else {
        localStorage["\u0073\u0065\u0074\u0049\u0074\u0065\u006d"](
          _0x5b97f1,
          _0x4d5160
        );
        if (
          _0x4d5160["indexOf"]("moc.".split("").reverse().join("")) !=
            -(0x9bf3f ^ 0x9bf3e) &&
          _0x4d5160["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](".com") <
            _0x4d5160["\u006c\u0065\u006e\u0067\u0074\u0068"]
        ) {
          localStorage["setItem"](
            _0x5b97f1 + "Src",
            _0x4d5160["\u0073\u0075\u0062\u0073\u0074\u0072"](
              0x29839 ^ 0x29839,
              _0x4d5160["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](".com") +
                (0x77e9c ^ 0x77e98)
            ) + "/favicon.ico"
          );
        } else if (
          _0x4d5160["indexOf"](".cn") != -(0x32188 ^ 0x32189) &&
          _0x4d5160["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](".cn") <
            _0x4d5160["length"]
        ) {
          localStorage["setItem"](
            _0x5b97f1 + "Src",
            _0x4d5160["\u0073\u0075\u0062\u0073\u0074\u0072"](
              0x8e7f3 ^ 0x8e7f3,
              _0x4d5160["indexOf"]("\u002e\u0063\u006e") + (0x6f71e ^ 0x6f71d)
            ) + "/favicon.ico"
          );
        } else if (
          _0x4d5160["indexOf"]("\u002e\u006e\u0065\u0074") != -0x1 &&
          _0x4d5160["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](".net") <
            _0x4d5160["\u006c\u0065\u006e\u0067\u0074\u0068"]
        ) {
          localStorage["setItem"](
            _0x5b97f1 + "Src",
            _0x4d5160["substr"](
              0x0,
              _0x4d5160["indexOf"]("\u002e\u006e\u0065\u0074") + 0x4
            ) + "/favicon.ico"
          );
        } else {
          localStorage["\u0073\u0065\u0074\u0049\u0074\u0065\u006d"](
            _0x5b97f1 + "\u0053\u0072\u0063",
            _0x4d5160 + "oci.nocivaf".split("").reverse().join("")
          );
        }
        _this["\u006b\u0065\u0079\u004c\u0069"][_0x5a1f1a][
          "\u0067\u0065\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0073\u0042\u0079\u0054\u0061\u0067\u004e\u0061\u006d\u0065"
        ]("img")[0x0]["src"] = localStorage["getItem"](_0x5b97f1 + "Src");
        _this["\u006b\u0065\u0079\u004c\u0069"][_0x5a1f1a][
          "getElementsByTagName"
        ]("gmi".split("").reverse().join(""))[0x0][
          "\u0073\u0074\u0079\u006c\u0065"
        ]["\u0064\u0069\u0073\u0070\u006c\u0061\u0079"] = "inline-block";
      }
    });
  })(i);
}
var arrd1 = document["getElementsByClassName"](
  "1d".split("").reverse().join("")
);
for (var i = 0xdb4c6 ^ 0xdb4c6, l = arrd1["length"]; i < l; i++) {
  (function (_0x5f265e) {
    var _0xc0e1ea = _this["keyLi"][_0x5f265e][
      "\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065"
    ]("di".split("").reverse().join(""));
    return (arrd1[_0x5f265e]["onclick"] = function () {
      localStorage["removeItem"](_0xc0e1ea);
      localStorage[
        "\u0072\u0065\u006d\u006f\u0076\u0065\u0049\u0074\u0065\u006d"
      ](_0xc0e1ea + "Src");
      _this["keyLi"][_0x5f265e]["getElementsByTagName"]("img")[0x0][
        "\u0073\u0074\u0079\u006c\u0065"
      ]["display"] = "none";
    });
  })(i);
}
for (var i = 0x0, l = keyLi["length"]; i < l; i++) {
  (function (_0x474a05) {
    var _0xd75952 = _this["keyLi"][_0x474a05]["getAttribute"]("id");
    return (keyLi[_0x474a05]["onclick"] = function () {
      var _0x2110cd = localStorage["getItem"](_0xd75952);
      if (_0x2110cd == null || _0x2110cd == "") {
        return ![];
      }
      window["open"](localStorage["getItem"](_0xd75952));
    });
  })(i);
}
document["onkeyup"] = function (_0x1c0f32) {
  var _0x1c0f32 = _0x1c0f32 || window["event"];
  var _0x1e8a6c = _0x1c0f32["keyCode"];
  var _0x34df18 = localStorage["\u0067\u0065\u0074\u0049\u0074\u0065\u006d"](
    jianpanma[_0x1e8a6c]
  );
  if (document["activeElement"]["id"] != "hrs".split("").reverse().join("")) {
    if (_0x34df18 == null || _0x34df18 == "") {
      return ![];
    } else {
      if (
        (_0x1e8a6c <= (0xa6009 ^ 0xa6053) &&
          _0x1e8a6c >= (0x5640e ^ 0x5644f)) ||
        (_0x1e8a6c <= 0x39 && _0x1e8a6c >= (0xa684c ^ 0xa687d))
      )
        window["open"](
          localStorage["\u0067\u0065\u0074\u0049\u0074\u0065\u006d"](
            jianpanma[_0x1e8a6c]
          )
        );
    }
  } else {
    if (_0x1e8a6c == 0xd) {
      console["log"](0x3e7);
      if (
        document["getElementById"]("srh")["value"] !=
        "".split("").reverse().join("")
      ) {
        query();
      }
    }
  }
};
var imgList = document["getElementsByClassName"](
  "\u006b\u0065\u0079\u0057\u0064"
)[0x6aa39 ^ 0x6aa39]["getElementsByTagName"]("img");
for (var i = 0x0, l = imgList["length"]; i < l; i++) {
  var x =
    _this["keyLi"][i][
      "\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065"
    ]("id");
  _this["keyLi"][i]["getElementsByTagName"]("img")[0x2db02 ^ 0x2db02]["style"][
    "display"
  ] = "enon".split("").reverse().join("");
  _this["keyLi"][i]["getElementsByTagName"]("gmi".split("").reverse().join(""))[
    0xa7652 ^ 0xa7652
  ]["\u0073\u0072\u0063"] = localStorage["getItem"](
    x + "crS".split("").reverse().join("")
  );
  if (
    imgList[i]["src"]["substr"](this["length"] - (0x76326 ^ 0x76322)) != "null"
  ) {
    _this["keyLi"][i]["getElementsByTagName"](
      "gmi".split("").reverse().join("")
    )[0x3d0f0 ^ 0x3d0f0]["style"]["display"] =
      "\u0069\u006e\u006c\u0069\u006e\u0065\u002d\u0062\u006c\u006f\u0063\u006b";
  }
}
var jianpanma = {
  0x31: "1",
  0x32: "2",
  0x33: "3",
  0x34: "4",
  0x35: "5",
  0x36: "6",
  0x37: "7",
  0x38: "8",
  0x39: "9",
  0x30: "0",
  0x41: "A",
  0x42: "\u0042",
  0x43: "C",
  0x44: "D",
  0x45: "E",
  0x46: "F",
  0x47: "G",
  0x48: "\u0048",
  0x49: "I",
  0x4a: "J",
  0x4b: "K",
  0x4c: "L",
  0x4d: "M",
  0x4e: "N",
  0x4f: "O",
  0x50: "P",
  0x51: "Q",
  0x52: "R",
  0x53: "S",
  0x54: "T",
  0x55: "U",
  0x56: "V",
  0x57: "W",
  0x58: "X",
  0x59: "Y",
  0x5a: "Z",
};
function preventDefa(_0x29ed5b) {
  if (window["event"]) {
    window["event"]["returnValue"] = ![];
  } else {
    _0x29ed5b["preventDefault"]();
  }
}
const canvas = document["getElementById"]("myCanvas");
const ctx = canvas["getContext"]("d2".split("").reverse().join(""));
const width = window["innerWidth"];
const height =
  window["\u0069\u006e\u006e\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074"];
canvas["width"] = width;
canvas["height"] = height;
const particles = [];
const connections = [];
const particleCount = 0x12c;
const particleSpeed = 0x1;
const particleSize = 0x2;
const maxDistance = 0x64;
const lightningColor = "fff#".split("").reverse().join("");
class Particle {
  constructor() {
    this["x"] = Math["random"]() * width;
    this["\u0079"] = Math["random"]() * height;
    this["color"] = "fff#".split("").reverse().join("");
    this["angle"] = Math["random"]() * 0x168;
    this["speed"] = Math["random"]() * particleSpeed;
    this["opacity"] = Math["random"]() * 0.5 + 0.5;
  }
  ["update"]() {
    this["x"] +=
      Math["cos"](this["\u0061\u006e\u0067\u006c\u0065"]) * this["speed"];
    this["y"] += Math["sin"](this["angle"]) * this["speed"];
    if (
      this["x"] < 0x0 ||
      this["x"] > width ||
      this["y"] < (0x20a9c ^ 0x20a9c) ||
      this["y"] > height
    ) {
      this["x"] = Math["random"]() * width;
      this["y"] = Math["random"]() * height;
    }
  }
  ["ward".split("").reverse().join("")]() {
    ctx["beginPath"]();
    ctx["arc"](
      this["\u0078"],
      this["y"],
      particleSize,
      0xdfeeb ^ 0xdfeeb,
      Math["PI"] * (0x79cb0 ^ 0x79cb2)
    );
    ctx["fillStyle"] = "rgba(255,\x20255,\x20255,\x20" + this["opacity"] + ")";
    ctx["fill"]();
  }
}
function createParticles() {
  for (
    let _0x1eb28c = 0xc06b1 ^ 0xc06b1;
    _0x1eb28c < particleCount;
    _0x1eb28c++
  ) {
    particles["push"](new Particle());
  }
}
function drawConnections() {
  for (let _0x140db9 = 0x0; _0x140db9 < particles["length"]; _0x140db9++) {
    for (
      let _0x2ea4f0 = _0x140db9 + 0x1;
      _0x2ea4f0 < particles["\u006c\u0065\u006e\u0067\u0074\u0068"];
      _0x2ea4f0++
    ) {
      const _0x3efdf0 =
        particles[_0x140db9]["\u0078"] - particles[_0x2ea4f0]["x"];
      const _0x613c4a =
        particles[_0x140db9]["\u0079"] - particles[_0x2ea4f0]["y"];
      const _0x499a54 = Math["sqrt"](
        _0x3efdf0 * _0x3efdf0 + _0x613c4a * _0x613c4a
      );
      if (_0x499a54 < maxDistance) {
        ctx["beginPath"]();
        ctx["moveTo"](particles[_0x140db9]["x"], particles[_0x140db9]["y"]);
        ctx["lineTo"](particles[_0x2ea4f0]["x"], particles[_0x2ea4f0]["y"]);
        ctx[
          "\u0073\u0074\u0072\u006f\u006b\u0065\u0053\u0074\u0079\u006c\u0065"
        ] = lightningColor;
        ctx["lineWidth"] =
          0.2 * ((0x35332 ^ 0x35333) - _0x499a54 / maxDistance);
        ctx["stroke"]();
        ctx["closePath"]();
      }
    }
  }
}
function animate() {
  ctx["clearRect"](0x0, 0x223e3 ^ 0x223e3, width, height);
  for (const _0x4b907c of particles) {
    _0x4b907c["\u0075\u0070\u0064\u0061\u0074\u0065"]();
    _0x4b907c["draw"]();
  }
  drawConnections();
  requestAnimationFrame(animate);
}
document["addEventListener"]("mousemove", (_0x14ef80) => {
  const _0x5ed3a8 = _0x14ef80["\u0063\u006c\u0069\u0065\u006e\u0074\u0058"];
  const _0x4a3521 = _0x14ef80["\u0063\u006c\u0069\u0065\u006e\u0074\u0059"];
  for (const _0x4c5bcb of particles) {
    const _0x4bf07a = _0x5ed3a8 - _0x4c5bcb["x"];
    const _0x14cb5c = _0x4a3521 - _0x4c5bcb["y"];
    const _0x1ac8c9 = Math["sqrt"](
      _0x4bf07a * _0x4bf07a + _0x14cb5c * _0x14cb5c
    );
    if (_0x1ac8c9 < maxDistance) {
      _0x4c5bcb["angle"] = Math["atan2"](_0x14cb5c, _0x4bf07a);
      _0x4c5bcb["speed"] = 0x5;
    } else {
      _0x4c5bcb["\u0073\u0070\u0065\u0065\u0064"] =
        Math["random"]() * particleSpeed;
    }
  }
});
createParticles();
animate();
