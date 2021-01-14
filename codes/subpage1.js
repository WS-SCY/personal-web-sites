

window.onload = function(){   
	var oDiv = document.getElementById("performance_display");  
	var oImg = oDiv.getElementsByTagName('img')[0];   
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var oLi = oUl.getElementsByTagName('li');
	var arrSrc = ['../picture/guaiqiao_logo.jpg','../picture/mypic.jpg','../picture/guaiqiao_logo.jpg','../picture/mypic.jpg','../picture/guaiqiao_logo.jpg'];
	var arrText = ['图片描述：第一张','图片描述：第二张','图片描述：第三张','图片描述：第四张','图片描述：第五张']; 
	var num = 0;
	var oldLi = 0; 
	//初始化  
	oImg.src = arrSrc[num]; 
	for(var i=0;i<arrSrc.length;i++){
		oUl.innerHTML += '<li> </li>'; 
	} 
	oLi[oldLi].className = 'active'; 
	//切换图片
	for(var i=0;i<arrSrc.length;i++){
		//自定义属性，一一对应
		oLi[i].index = i;
		oLi[i].onclick = function(){
			var id = this.index;
			//通过自定义的属性设置对应的信息
			oImg.src = arrSrc[id];  
			oLi[oldLi].className = '';
			oldLi = id;
			this.className = 'active';
		}
	} 
} 