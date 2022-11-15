/**
 * Created by Administrator on 2017/7/20.
 */
var buton = document.getElementsByClassName('button')[0];

document.getElementById('baidu').checked = true;

buton.onclick =query;


function query() {
    var abc = document.getElementById('srh').value;
    var www = 'aaa';
    var bd = document.getElementById('baidu'),
        e360 = document.getElementById('e360'),
        sg = document.getElementById('sougou'),
        by = document.getElementById('biying'),
        gg = document.getElementById('guge');

    if (abc == null || abc =='') {
        return;
    }else {
       if (bd.checked) {
           www = 'http://www.baidu.com/s?ie=utf-8&wd='+abc;
//            console.log(www);
       }else if (e360.checked) {
          www = 'https://www.so.com/s?q=' + abc;
//            console.log(www);
       }else if (sg.checked) {
           www = 'https://www.sogou.com/sogou?query=' + abc;
//            console.log(www);
       }else if (by.checked) {
           www = 'http://cn.bing.com/search?q=' + abc;
//            console.log(www);
       }else if (gg.checked) {
           www = 'http://www.google.com/?#newwindow=1&q=' + abc;
//            console.log(www);
       }else {
           www = 'http://www.baidu.com/s?ie=utf-8&wd=' + abc;
//            console.log(www);
       }
    }

    window.open(www);

}
var keyLi = document.getElementsByClassName('keyWd')[0].getElementsByTagName('li');

//判断网址格式
function CheckUrl(str) {
    var RegUrl = new RegExp();
    RegUrl.compile("[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?");//jihua.cnblogs.com
    if (!RegUrl.test(str)) {
        return false;
    }
    return true;
}

//创建编辑和删除按钮还有图标位置
for (var i = 0,l = keyLi.length;i < l; i++) {
    var creaDiv = document.createElement('div');
    creaDiv.className = "creaDiv";
    var e = document.createElement('span');
    e.className = 'e1';
    e.innerText = 'E';
    e.title = '编辑';
    creaDiv.appendChild(e);
    var d = document.createElement('span');
    d.className = 'd1';
    d.innerText = 'D';
    d.title = '删除';
    creaDiv.appendChild(d);
    var img = document.createElement('img');
    img.className = 'imgClass';
    keyLi[i].appendChild(img);
   keyLi[i].appendChild(creaDiv);
    keyLi[i].onmouseenter = function () {
        this.getElementsByClassName('creaDiv')[0].style.display='block';
    }
    keyLi[i].onmouseleave = function () {
        this.getElementsByClassName('creaDiv')[0].style.display='none';
    }
}

var _this= this;
//闭包 设置对应的localStorage
var arre1 = document.getElementsByClassName('e1');
for (var i = 0,l = arre1.length; i < l; i++) {
    (function (i) {
        var x = _this.keyLi[i].getAttribute('id');
        return arre1[i].onclick = function (e) {
            if ( e && e.stopPropagation ) {
                // 非IE浏览器它支持W3C的stopPropagation()方法
                e.stopPropagation();
            } else {
                // 否则，我们需要使用IE的方式来取消事件冒泡
                window.event.cancelBubble = true;
            }

            var urll = encodeURI(prompt('请输入键位['+x+']对应的网站地址',''));

            if (urll == null || urll ==''||urll == 'null') {
                return ;
            }else if(CheckUrl(urll) == false) {
                return ;
            }
            else{
                localStorage.setItem(x,urll);
                //console.log(urll.charAt(this.length-1));
                if((urll.indexOf('.com') != -1) && urll.indexOf('.com') < urll.length){
                    localStorage.setItem(x+'Src',urll.substr(0,urll.indexOf('.com')+4)+'/favicon.ico');
                }else if((urll.indexOf('.cn') != -1) && urll.indexOf('.cn') < urll.length){
					localStorage.setItem(x+'Src',urll.substr(0,urll.indexOf('.cn')+3)+'/favicon.ico');
				}else if((urll.indexOf('.net') != -1) && urll.indexOf('.net') < urll.length){
					localStorage.setItem(x+'Src',urll.substr(0,urll.indexOf('.net')+4)+'/favicon.ico');
				}
				else {
                    localStorage.setItem(x+'Src',urll+'favicon.ico');
                }

                _this.keyLi[i].getElementsByTagName('img')[0].src=localStorage.getItem(x+'Src');
                _this.keyLi[i].getElementsByTagName('img')[0].style.display = 'inline-block';
            }
        }
    })(i)

}
//闭包 删除对应的localStorage
var arrd1 = document.getElementsByClassName('d1');
for (var i = 0,l = arrd1.length; i < l; i++) {
    (function (i) {
        var x = _this.keyLi[i].getAttribute('id');
        return arrd1[i].onclick = function () {
            localStorage.removeItem(x);
            localStorage.removeItem(x+'Src');
            _this.keyLi[i].getElementsByTagName('img')[0].style.display = 'none';
            //_this.keyLi[i].getElementsByTagName('img')[0].removeAttribute("src");

        }
    })(i)

}

//跳转到对应的网址
for (var i = 0,l = keyLi.length; i < l; i++) {
    (function (i) {
        var x = _this.keyLi[i].getAttribute('id');
        return keyLi[i].onclick = function () {
           var urll = localStorage.getItem(x);
            if (urll == null || urll =='') {
                return false;
            }

            window.open(localStorage.getItem(x));
        }
    })(i)
}
//按键盘跳转

	document.onkeyup = function(e){
        var e = e||window.event;
    var code = e.keyCode;
	//console.log(code);
	var urll = localStorage.getItem(jianpanma[code]);
	if(document.activeElement.id !='srh'){
		if (urll == null || urll =='') {
        return false;
    }
    else {
        if((code <= 90 && code >= 65) ||(code <= 57 && code >= 49))
            window.open(localStorage.getItem(jianpanma[code]));
    }
	}else {
		
		if(code == 13) {
			//preventDefa(e);
                console.log(999);
                if (document.getElementById('srh').value != ''){
                    query();
                }
            }
			
	}
    }

//初始化图标
var imgList = document.getElementsByClassName('keyWd')[0].getElementsByTagName('img');
//console.log(imgList.length);
for (var i = 0,l = imgList.length; i < l; i++){
    var x = _this.keyLi[i].getAttribute('id');
    _this.keyLi[i].getElementsByTagName('img')[0].style.display = 'none';
    _this.keyLi[i].getElementsByTagName('img')[0].src=localStorage.getItem(x+'Src');

    if ( imgList[i].src.substr(this.length-4) != 'null' ){
            //src="null"
        _this.keyLi[i].getElementsByTagName('img')[0].style.display = 'inline-block';
    }

}
//键盘码和对应的ID
var jianpanma = {
    49:'1',50:'2',51:'3',52:'4',53:'5',54:'6',55:'7',56:'8',57:'9',48:'0',65:'A',66:'B',67:'C',68:'D',69:'E',70:'F',71:'G',72:'H',73:'I',74:'J',75:'K',76:'L',77:'M',78:'N',79:'O',80:'P', 81:'Q',82:'R',83:'S',84:'T',85:'U',86:'V',87:'W',88:'X',89:'Y',90:'Z'

}
//阻止浏览器默认事件
function preventDefa(e){ 
  if(window.event){ 
    //IE中阻止函数器默认动作的方式  
    window.event.returnValue = false;  
  } 
  else{ 
    //阻止默认浏览器动作(W3C)  
    e.preventDefault(); 
  }  
} 





//console.log(buton);
