
var i=0;
var robotway=new array();
function findway(robot,hero) {
	var find=true;
	var robotname=robot.attr('class').split(" ");
	var heroname=hero.attr('class').split(" ");
	var hx=heroname[1].substr(heroname[1].length-1,1);//上下
	var hy=heroname[2].substr(heroname[2].length-1,1);//左右
	var rx=robotname[1].substr(robotname[1].length-1,1);
	var ry=robotname[2].substr(robotname[2].length-1,1);
	var hxn=parseInt(hx);
	var hyn=parseInt(hy);
	var left=0,right=0,up=0,down=0;
	if(hx>rx){
		down=1;
	}
	else if(hx<rx){
		up=1;
	}
	if (hy>ry){
		right=1;
	}else if(hy<ry){
		left=1;
	}
	var leftdown=left+down;
	var leftup=left+up;
	var rightdown=right+down;
	var rightup=right+up;
	if(leftdown==2){
		var rxn=parseInt(rx)+1;
		var ryn=parseInt(ry)-1;
		//ifcango(rxn,ryn,hxn,hyn,i,hero,find);
		 if (atlas["row"+rxn+"col"+ryn]==undefined){
		 	var rob1=$(".row"+rxn+".col"+ryn);
		 	if(hxn==rxn&&hyn==ryn){
		 		robotway[i]="row"+rxn+"col"+ryn;
		 		i-=1;
		 		return true;
		 	}
		 	else if(findway(rob1,hero)==false){
		 		find=false;
		 	}else{
		 		robotway[i]="row"+rxn+"col"+ryn;
		 		i-=1;
		 		return true;
		 	}
		 }else return false;
	}else if(leftup==2){
		var rxn=parseInt(rx)-1;
		var ryn=parseInt(ry)-1;
		//ifcango(rxn,ryn,hxn,hyn,i,hero,find);
		 if (atlas["row"+rxn+"col"+ryn]==undefined){
		 	var rob1=$(".row"+rxn+".col"+ryn);
		 	if(hxn==rxn&&hyn==ryn){
		 		robotway[i]="row"+rxn+"col"+ryn;
		 		i-=1;
		 		return true;
		 	}
		 	else if(findway(rob1,hero)==false){
		 		find=false;
		 	}else{
		 		robotway[i]="row"+rxn+"col"+ryn;
		 		i-=1;
		 		return true;
		 	}
		 }else return false;
	}else if(rightdown==2){
		var rxn=parseInt(rx)+1;
		var ryn=parseInt(ry)+1;
		//ifcango(rxn,ryn,hxn,hyn,i,hero,find);
		 if (atlas["row"+rxn+"col"+ryn]==undefined){
		 	var rob1=$(".row"+rxn+".col"+ryn);
		 	if(hxn==rxn&&hyn==ryn){
		 		robotway[i]="row"+rxn+"col"+ryn;
		 		i-=1;
		 		return true;
		 	}
		 	else if(findway(rob1,hero)==false){
		 		find=false;
		 	}else{
		 		robotway[i]="row"+rxn+"col"+ryn;
		 		i-=1;
		 		return true;
		 	}
		 }else return false;
	}else if (rightup==2){
		var rxn=parseInt(rx)-1;
		var ryn=parseInt(ry)+1;
		//ifcango(rxn,ryn,hxn,hyn,i,hero,find);
		 if (atlas["row"+rxn+"col"+ryn]==undefined){
		 	var rob1=$(".row"+rxn+".col"+ryn);
		 	if(hxn==rxn&&hyn==ryn){
		 		robotway[i]="row"+rxn+"col"+ryn;
		 		i-=1;
		 		return true;
		 	}
		 	else if(findway(rob1,hero)==false){
		 		find=false;
		 	}else{
		 		robotway[i]="row"+rxn+"col"+ryn;
		 		i-=1;
		 		return true;
		 	}
		 }else return false;
	}
	//上下左右
	if(find==false){
			//取到左侧
			
			if (right==1) {
				var rxn=parseInt(rx);
				var ryn=parseInt(ry)+1;
				if (atlas["row"+rxn+"col"+ryn]==undefined){
			 	var rob1=$(".row"+rxn+".col"+ryn);
			 	if(hxn==rxn&&hyn==ryn){
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 	else if(findway(rob1,hero)==false){
			 		find=false;
			 	}else{
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 }else return false;
			}else if (left==1) {
			var rxn=parseInt(rx);
			var ryn=parseInt(ry)-1;
			if (atlas["row"+rxn+"col"+ryn]==undefined){
			 	var rob1=$(".row"+rxn+".col"+ryn);
			 	if(hxn==rxn&&hyn==ryn){
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 	else if(findway(rob1,hero)==false){
			 		find=false;
			 	}else{
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 }else return false;	
			}else if (up==1) {
			var rxn=parseInt(rx)-1;
			var ryn=parseInt(ry);
			if (atlas["row"+rxn+"col"+ryn]==undefined){
			 	var rob1=$(".row"+rxn+".col"+ryn);
			 	if(hxn==rxn&&hyn==ryn){
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 	else if(findway(rob1,hero)==false){
			 		find=false;
			 	}else{
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 }else return false;	
			}else if (down==1) {
			var rxn=parseInt(rx)+1;
			var ryn=parseInt(ry);
			if (atlas["row"+rxn+"col"+ryn]==undefined){
			 	var rob1=$(".row"+rxn+".col"+ryn);
			 	if(hxn==rxn&&hyn==ryn){
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 	else if(findway(rob1,hero)==false){
			 		find=false;
			 	}else{
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 }else return false;	
			}
			// if (atlas["row"+rxn+robotname[2]]!=undefined) {

			// }
			//取到上侧
			
			//取到右侧
			
			//取到下侧
	
	}
	if (find==false) {
		//左
		var rxn=parseInt(rx);
		var ryn=parseInt(ry)-1;
		if (atlas["row"+rxn+"col"+ryn]==undefined){
			 	var rob1=$(".row"+rxn+".col"+ryn);
			 	if(hxn==rxn&&hyn==ryn){
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 	else if(findway(rob1,hero)==false){
			 		find=false;
			 	}else{
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 }else return false;
	}
	//right
	if (find==false) {
		
		var rxn=parseInt(rx);
		var ryn=parseInt(ry)+1;
		if (atlas["row"+rxn+"col"+ryn]==undefined){
			 	var rob1=$(".row"+rxn+".col"+ryn);
			 	if(hxn==rxn&&hyn==ryn){
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 	else if(findway(rob1,hero)==false){
			 		find=false;
			 	}else{
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 }else return false;
	}
	//up
	if (find==false) {
		var rxn=parseInt(rx)-1;
		var ryn=parseInt(ry);
		if (atlas["row"+rxn+"col"+ryn]==undefined){
			 	var rob1=$(".row"+rxn+".col"+ryn);
			 	if(hxn==rxn&&hyn==ryn){
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 	else if(findway(rob1,hero)==false){
			 		find=false;
			 	}else{
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 }else return false;
	}
	//down
	if (find==false) {
		//左
		var rxn=parseInt(rx);
		var ryn=parseInt(ry)-1;
		if (atlas["row"+rxn+"col"+ryn]==undefined){
			 	var rob1=$(".row"+rxn+".col"+ryn);
			 	if(hxn==rxn&&hyn==ryn){
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 	else if(findway(rob1,hero)==false){
			 		find=false;
			 	}else{
			 		robotway[i]="row"+rxn+"col"+ryn;
			 		i-=1;
			 		return true;
			 	}
			 }else return false;
	}
	//left=0;right=0;up=0;down=0;
	i+=1;
}
function ifexist() {
	// body...
}
function ifcango(rxn,ryn,hxn,hyn,i,hero,find) {
	if (atlas["row"+rxn+"col"+ryn]==undefined){
			var rob1=$(".row"+rxn+".col"+ryn);
			if(hxn==rxn&&hyn==ryn){
				robotway[i]="row"+rxn+"col"+ryn;
				return true;
			}
			else if(findway(rob1,hero)==false){
				find=false;
			};
		}else return false;
}