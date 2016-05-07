	    heroname=hero.attr('class').split(" ");
	    var robot=$(this);
	    var rhasmoved=0;
		var robotname=$(this).attr('class').split(" ");
		var hx=heroname[1].substr(heroname[1].length-1,1);
		var hy=heroname[2].substr(heroname[2].length-1,1);
		var rx=robotname[1].substr(robotname[1].length-1,1);
		var ry=robotname[2].substr(robotname[2].length-1,1);
		if(hx>rx){
			var rxn=parseInt(rx)+1;
			if(atlas["row"+rxn+robotname[2]]==undefined){
				var c=$(".row"+rxn+"."+robotname[2]);
				swapclass(robot,c,"ROBOT","R",robotname[1]+robotname[2],"row"+rxn+robotname[2]);
				rhasmoved=1;
			}else{
			rhasmoved=0;
			}
		}else if(hx<rx){
			var rxn=parseInt(rx)-1;
			if(atlas["row"+rxn+robotname[2]]==undefined){
				var c=$(".row"+rxn+"."+robotname[2]);
				swapclass(robot,c,"ROBOT","R",robotname[1]+robotname[2],"row"+rxn+robotname[2]);
				rhasmoved=1;
			}else{
			rhasmoved=0;			}
		}else{
			rhasmoved=0;
		}
		if(rhasmoved==0){
			if(hy>ry){
				var ryn=parseInt(ry)+1;
				if(atlas[robotname[1]+"col"+ryn]==undefined){
					var c=$("."+robotname[1]+".col"+ryn);
					swapclass(robot,c,"ROBOT","R",robotname[1]+robotname[2],robotname[1]+"col"+ryn);
					rhasmoved=1;
				}
			}else if(hy<ry){
				var ryn=parseInt(ry)-1;
				if(atlas[robotname[1]+"col"+ryn]==undefined){
					var c=$("."+robotname[1]+".col"+ryn);
					swapclass(robot,c,"ROBOT","R",robotname[1]+robotname[2],robotname[1]+"col"+ryn);
					rhasmoved=1;
				}
			}

		}