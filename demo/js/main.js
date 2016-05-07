$(function(){
    $(".restart").click(function(){
        window.location.reload();
    });
});
$(function(){
    $(".end").click(function(){
        endgame("游戏结束");
        textshow("System:Game is ended by user.Score:"+score+"\n");
        //$(".msgwrap").append("System:Game is ended by user.Score:"+score+"\n");
    });
});
function showscore(score) {
	$(".score").html("Score:"+score);
}
function checkRate(input)  
{  
     var re =/^[0-9]*[1-9][0-9]*$/;
     if (!re.test(input))  
    {  
        alert("请输入正整数");          
        return false;  
     }else{
     	return true;
     }  
};
var atlas=new Array();//地图
var powerup=0;//能量
var score=0;//得分
var i=0;//路径索引
var robotway=new Array();//路径
function findway(robot,hero,i,find,z,y) {
	i.x+=1;
	//var find=false;
	var robotname=robot.attr('class').split(" ");
	var heroname=hero.attr('class').split(" ");
	var hx=heroname[1].substr(heroname[1].length-1,1);//上下
	var hy=heroname[2].substr(heroname[2].length-1,1);//左右
	var rx=robotname[1].substr(robotname[1].length-1,1);
	var ry=robotname[2].substr(robotname[2].length-1,1);
	var hxn=parseInt(hx);
	var hyn=parseInt(hy);
	var rxn=parseInt(rx);
	var ryn=parseInt(ry);
	var left=0,right=0,up=0,down=0;
	if (robotname==undefined) {left=down=up=right=0;}
	if(hx>rx){down=1;}
	else if(hx<rx){up=1;}
	else if (hx==rx) {down=up=0;}
	if (hy>ry){right=1;}
	else if(hy<ry){left=1;}
	else if (hy==ry) {right=left=0;}
	var leftdown=left+down;
	var leftup=left+up;
	var rightdown=right+down;
	var rightup=right+up; 
	//alert(left+down+up+right);  
	switch(left+down+up+right){
		case 2:{
			if (leftdown==2&&z!=2) {
				//rxn+=1;
				//ryn-=1;
				find=ifexist(rxn+1,ryn-1,hero,i,find,z,y);
				z=6;
			}else if (leftup==2&&z!=4) {
				//rxn-=1;
				//ryn-=1;
				find=ifexist(rxn-1,ryn-1,hero,i,find,z,y);
				z=8;
			}else if (rightup==2&&z!=6) {
				//rxn-=1;
				//ryn+=1;
				find=ifexist(rxn-1,ryn+1,hero,i,find,z,y);
				z=2;
			}else if (rightdown==2&&z!=8) {
				//rxn+=1;
				//ryn+=1;
				find=ifexist(rxn+1,ryn+1,hero,i,find,z,y);
				z=4;
			}
			//break;
		}
		case 1:{
			if (find==false) {
					
					if (left==1&&z!=3) {
						//ryn-=1;
						find=ifexist(rxn,ryn-1,hero,i,find,z,y);
						z=7;
					}else if (right==1&&z!=7) {
						//ryn+=1;
						find=ifexist(rxn,ryn+1,hero,i,find,z,y);
						z=3;
					}
			}
			if (find==false) {
				
				if (up==1&&z!=5) {
						//rxn-=1;
						find=ifexist(rxn-1,ryn,hero,i,find,z,y);
						z=1;
					}else if (down==1&&z!=1) {
						//rxn+=1;
						find=ifexist(rxn+1,ryn,hero,i,find,z,y);
						z=5;
					}
			}
			break;
		}
		case 0:{
			find=true;
			//alert(find);
			break;
		}
	}
	if (find==false) {//free choice
		if (z!=5) {
			find=ifexist(rxn-1,ryn,hero,i,find,z,y);//up
			z=1;
		}
		//alert(rxn+"#"+ryn);
		if (find==false&&z!=6) {
			find=ifexist(rxn-1,ryn+1,hero,i,find,z,y);//rightup
			z=2;
		}
		if (find==false&&z!=7) {
			find=ifexist(rxn,ryn+1,hero,i,find,z,y);//right
			z=3;
		}
		if (find==false&&z!=8) {
			find=ifexist(rxn+1,ryn+1,hero,i,find,z,y);//rightdown
			z=4;
		}
		if (find==false&&z!=1) {
			find=ifexist(rxn+1,ryn,hero,i,find,z,y);//down
			z=5;
		}
		if (find==false&&z!=2) {
			find=ifexist(rxn+1,ryn-1,hero,i,find,z,y);//leftdown
			z=6;
		}
		if (find==false&&z!=3) {
			find=ifexist(rxn,ryn+1,hero,i,find,z,y);//left
			z=7;
		}
		if (find==false&&z!=4) {
			find=ifexist(rxn-1,ryn-1,hero,i,find,z,y);//leftup
			z=8;
		}
	}
	if (find==false) {
		alert("i can't find the way");
		return false;
	}else{
		var mapi="row"+rxn+"col"+ryn;
		//alert(mapi);
		robotway[i.x]=mapi;
		//alert(i.x+"#"+robotway[i.x]);
		 i.x-=1;
		return true;
	}
}
function ifexist(rxn,ryn,hero,i,find,z,y) {
	var mapi="row"+rxn+"col"+ryn;
	//alert(mapi);
	if (rxn>=0&&rxn<=9&&ryn>=0&&ryn<=9) {
		if (atlas[mapi]==undefined||atlas[mapi]==1){
			//if (hero!=$(".row"+rxn+".col"+ryn)) {
				var robotn=$(".row"+rxn+".col"+ryn);
				//alert(robotn.attr('class'));
				var isend=findway(robotn,hero,i,find,z,y);
			//else alert(isend);
			if (isend==true){
				return true;
			}else{
				return false;
			}
		}else return false;
	}else {
		//alert("我曹");
		return false;}
}
function swapclass(first,second,glass,name,firat,secat) {
	first.html("")
		 .removeClass(glass);
	atlas[secat]=atlas[firat];
	atlas[firat]=undefined;
	second.html(name)
		  .removeClass("POWER_UP")
		  .removeClass("ROBOT")
		  .removeClass('HERO')
		  .addClass(glass);
}
$(document).ready(function(){ 
var Hero=0;
var Process=0;
var round=1;
//var powerlow=0;
//setup
  $(".cell").click(function(){
	var addr=this.className.split(" ");
	if (Process==0) {
  	var setup=prompt("setup","h");
  	if(setup!=""&&atlas[addr[1]+addr[2]]!=undefined){alert("已有存在");return 0;}
	  	switch(setup){
	  		case 'h':
	  		case 'H':
			  	if (Hero==0){
			  		$(this).html("H")
			  			   .addClass("HERO");
			  		atlas[addr[1]+addr[2]]=1;
			  		Hero=1;
			  	}
			  	else alert("已经有一个hero存在了！");
	  			break;
	  		case 'o':
	  		case 'O':
	  			$(this).addClass("OBSTACE");
	  			atlas[addr[1]+addr[2]]=3;
	  			//alert(atlas[addr[1]+addr[2]]);
	  			break;
	  		case 'r':
	  		case 'R':
	  			$(this).html("R")
			  			   .addClass("ROBOT");
			  	atlas[addr[1]+addr[2]]=2;
			  	//alert(atlas[addr[1]+addr[2]]);
	  			break;
	  		default:
	  		if (setup>=1&&setup<=9&&checkRate(setup)){
	  			$(this).html("p_"+setup)
			  			   .addClass("POWER_UP");
			  	atlas[addr[1]+addr[2]]=(parseInt(setup)+4);
	  		}else{
	  			alert("请输入正确的指令！");
	  		}
	  	}
	}
  });
//start
$(".start").click(function() {
	Process=1;
});
$(document).keydown(function(event){
	if(Process!=1)return 0;
	var hero=$('.HERO');
	var heroname=hero.attr('class').split(" ");
	switch (event.keyCode) {
		case 87:
			//alert("上");
			var a=heroname[1].substr(heroname[1].length-1,1);
			var b=parseInt(a)-1;
			if(b>=0&&b<=9){
				var c=$(".row"+b+"."+heroname[2]);
				if (atlas["row"+b+heroname[2]]>4) {
					//alert(atlas["row"+b+heroname[2]]);
					powerup+=(atlas["row"+b+heroname[2]]-4);
					score+=(atlas["row"+b+heroname[2]]-4);
					swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],"row"+b+heroname[2]);
					break;
				}
				if (atlas["row"+b+heroname[2]]==2&&powerup>0) {
					swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],"row"+b+heroname[2]);
					score+=100;
					break;
				}
				if(atlas["row"+b+heroname[2]]!=undefined){alert("障碍");break;}
				swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],"row"+b+heroname[2]);
			}
			break;
		case 65:
			//alert("左");
			var a=heroname[2].substr(heroname[2].length-1,1);
			var b=parseInt(a)-1;
			if(b>=0&&b<=9){
				var c=$("."+heroname[1]+".col"+b);
				if (atlas[heroname[1]+"col"+b]>4) {
					powerup+=(atlas[heroname[1]+"col"+b]-4);
					score+=(atlas[heroname[1]+"col"+b]-4);
					swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],heroname[1]+"col"+b);
					break;
				}
				if (atlas[heroname[1]+"col"+b]==2&&powerup>0) {
					swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],heroname[1]+"col"+b);
					score+=100;
					break;
				}
				if(atlas[heroname[1]+"col"+b]!=undefined){alert("障碍");break;}
				swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],heroname[1]+"col"+b);
			}
			break;
		case 83:
			//alert("下");
			var a=heroname[1].substr(heroname[1].length-1,1);
			var b=parseInt(a)+1;
			if(b>=0&&b<=9){
				var c=$(".row"+b+"."+heroname[2]);
				if (atlas["row"+b+heroname[2]]>4) {
					powerup+=(atlas["row"+b+heroname[2]]-4);
					score+=(atlas["row"+b+heroname[2]]-4);
					swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],"row"+b+heroname[2]);
					break;
				}
				if (atlas["row"+b+heroname[2]]==2&&powerup>0) {
					swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],"row"+b+heroname[2]);
					score+=100;
					break;
				}
				if(atlas["row"+b+heroname[2]]!=undefined){alert("障碍");break;}
				swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],"row"+b+heroname[2]);
			}	
			break;
		case 68:
			//alert("右");
			var a=heroname[2].substr(heroname[2].length-1,1);
			var b=parseInt(a)+1;
			if(b>=0&&b<=9){
				var c=$("."+heroname[1]+".col"+b);
				if (atlas[heroname[1]+"col"+b]>4) {
					swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],heroname[1]+"col"+b);
					powerup+=(atlas[heroname[1]+"col"+b]-4);
					break;
				}
				if (atlas[heroname[1]+"col"+b]==2&&powerup>0) {
					swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],heroname[1]+"col"+b);
					score+=100;
					break;
				}
				if(atlas[heroname[1]+"col"+b]!=undefined){alert("障碍");break;}
				swapclass(hero,c,"HERO","H",heroname[1]+heroname[2],heroname[1]+"col"+b);
			}
			break;
		default:
			alert("无效");	
			break;
	}
	textshow("System:Hero has moved\n");
	// $(".msgwrap").append("System:Hero has moved\n");
	// $('textarea').scrollTop = $('textarea').scrollHeight;
//robot move
	$(".ROBOT").each(function() {
		var hero=$('.HERO');
		var robot=$(this);
		var robotname=robot.attr('class').split(" ");
		var t={x:0};
		findway(robot,hero,t,false,1,1);
		var newrot= "."+robotway[2].substr(0,4)+"."+robotway[2].substr(4,4);
		var change=true;
		if($('.HERO').html()==$(newrot).html()){
			if (powerup<=0) {
				change=true;
			}else{
				//swapclass($(newrot),robot,"HERO","H",robotway[2],robotname[1]+robotname[2]);
				robot.html("")
					 .removeClass('ROBOT');
				score+=100;
				change=false;
			}
		}
		if (change==true) {
			swapclass(robot,$(newrot),"ROBOT","R",robotname[1]+robotname[2],robotway[2]);
		}		
		textshow("System:A Robot has moved\n");		
	});
	$(".title").html("GAME Round "+round);
	showscore(score);
	if ($('.HERO').val()==undefined) {
		endgame("robot win");
		$(".msgwrap").append("System:HERO is killed.Score:"+score+"\n");
	}
	else if ($('.ROBOT').val()==undefined) {
		endgame("You win");
		textshow("System:Robot is all killed.Score:"+score+"\n");
		//$(".msgwrap").append("System:Robot is all killed.Score:"+score+"\n");
	}
	else if(powerup<=0&&$('.POWER_UP').val()==undefined){
		endgame("平局");
		textshow("System:Draw.Score:"+score+"\n");
		//$(".msgwrap").append("System:Draw.Score:"+score+"\n");
	}
	//if(this.)
	powerup-=1;
	round++;
	});


});
function textshow(str) {
	$(".msgwrap").append(str+"\n");
	$('textarea').scrollTop($('.msgwrap')[0].scrollHeight+1);
}
function endgame(str) {
	alert(str);
	Process=3;
	$(document).off('keydown');
}