/*
sudoku = [
[0,0,9,7,4,8,0,0,0,],
[7,5,6,0,2,3,4,0,0,],
[0,0,0,5,0,0,0,0,0,],
[2,0,5,3,7,0,0,0,0,],
[0,0,0,0,0,0,8,0,0,],
[0,4,0,0,6,0,3,5,9,],
[8,0,0,0,3,0,7,9,2,],
[0,3,4,0,0,7,0,0,8,],
[0,0,2,0,0,0,5,0,4,]
];
*/

/*
sudoku = [
[0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,]
];*/

/*
sudoku = [
[0,4,0,2,0,0,5,9,1,],
[0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,4,0,0,],
[5,0,0,6,0,0,0,4,9,],
[1,8,0,9,0,0,0,0,0,],
[7,9,6,5,8,4,0,1,0,],
[4,0,0,8,2,1,0,0,3,],
[0,0,7,3,0,0,0,8,0,],
[8,5,3,7,0,6,0,0,0,]
];

/*
sudoku = [
[0,2,0,1,0,0,4,5,6,],
[8,6,0,3,5,0,0,0,2,],
[0,0,0,9,0,0,8,0,0,],
[3,1,8,0,0,0,2,0,0,],
[5,0,0,2,0,3,0,0,9,],
[0,0,2,0,0,0,3,1,7,],
[0,0,9,0,0,8,0,0,0,],
[1,0,0,0,9,2,0,6,3,],
[4,5,6,0,0,1,0,2,0,]
];
*/
/*
sudoku = [
[7,1,9,0,0,0,0,0,0,],
[0,0,8,2,0,0,0,0,0,],
[0,0,0,0,0,5,0,0,4,],
[3,2,0,8,0,4,0,6,0,],
[0,4,7,0,0,0,0,3,0,],
[0,0,0,0,0,0,0,0,0,],
[2,0,0,0,0,0,0,0,7,],
[0,0,0,0,1,2,0,0,5,],
[0,0,0,7,0,0,0,1,0,]
];*/


sudoku = [
[0,3,8,0,0,0,2,0,0,],
[0,0,5,0,6,9,0,8,0,],
[0,0,0,0,1,0,0,0,0,],
[0,1,3,4,0,0,0,0,6,],
[7,0,0,0,0,0,0,0,2,],
[8,0,0,0,0,3,1,9,0,],
[0,0,0,0,2,0,0,0,0,],
[0,6,0,9,5,0,7,0,0,],
[0,0,4,0,0,0,6,1,0,]
];



function makeSudoku(){
	var expertOn=false;
	on=1;
	while(on==1){
		on=0;
	for(row=0;row<=8;row++){
		for(col=0;col<=8;col++){
			certain=[1,2,3,4,5,6,7,8,9];
			if(sudoku[row][col]==0){
				for(x=0;x<=8;x++){
					number = sudoku[row][x];
					if(certain.includes(number)){
						pos = certain.indexOf(number);
						certain.splice(pos,1);}}
				for(y=0;y<=8;y++){
					number = sudoku[y][col];
					if(certain.includes(number)){
						pos = certain.indexOf(number);
						certain.splice(pos,1);}}

				if(row>=0&&row<=2){
					if(col>=0&&col<=2){
						for(x=0;x<=2;x++){for(y=0;y<=2;y++){
							number = sudoku[x][y];
							if(certain.includes(number)){
								pos = certain.indexOf(number);
								certain.splice(pos,1);}
					}}}
					else if(col>=3&&col<=5){
						for(x=0;x<=2;x++){for(y=3;y<=5;y++){
							number = sudoku[x][y];
							if(certain.includes(number)){
								pos = certain.indexOf(number);
								certain.splice(pos,1);}
					}}}
					else if(col>=6&&col<=8){
						for(x=0;x<=2;x++){for(y=6;y<=8;y++){
							number = sudoku[x][y];
							if(certain.includes(number)){
								pos = certain.indexOf(number);
								certain.splice(pos,1);}
					}}}
				}
				else if(row>=3&&row<=5){
					if(col>=0&&col<=2){
						for(x=3;x<=5;x++){for(y=0;y<=2;y++){
							number = sudoku[x][y];
							if(certain.includes(number)){
								pos = certain.indexOf(number);
								certain.splice(pos,1);}
					}}}
					else if(col>=3&&col<=5){
						for(x=3;x<=5;x++){for(y=3;y<=5;y++){
							number = sudoku[x][y];
							if(certain.includes(number)){
								pos = certain.indexOf(number);
								certain.splice(pos,1);}
					}}}
					else if(col>=6&&col<=8){
						for(x=3;x<=5;x++){for(y=6;y<=8;y++){
							number = sudoku[x][y];
							if(certain.includes(number)){
								pos = certain.indexOf(number);
								certain.splice(pos,1);}
					}}}
				}
				else if(row>=6&&row<=8){
					if(col>=0&&col<=2){
						for(x=6;x<=8;x++){for(y=0;y<=2;y++){
							number = sudoku[x][y];
							if(certain.includes(number)){
								pos = certain.indexOf(number);
								certain.splice(pos,1);}
					}}}
					else if(col>=3&&col<=5){
						for(x=6;x<=8;x++){for(y=3;y<=5;y++){
							number = sudoku[x][y];
							if(certain.includes(number)){
								pos = certain.indexOf(number);
								certain.splice(pos,1);}
					}}}
					else if(col>=6&&col<=8){
						for(x=6;x<=8;x++){for(y=6;y<=8;y++){
							number = sudoku[x][y];
							if(certain.includes(number)){
								pos = certain.indexOf(number);
								certain.splice(pos,1);}
					}}}
				}
				if(certain.length==1){sudoku[row][col]=certain[0]; on=1;}
				

				}
			}
		}
	}
	for(row=0;row<=8;row++){
		for(col=0;col<=8;col++){
			number = sudoku[row][col];
			if(number==0){expertOn=true;}
		}}
	if(expertOn==true){console.log("evil");evil();}
	return sudoku
}

function evil(){
	for(row=0;row<=8;++row){
		for(col=0;col<=8;++col){
			if (sudoku[row][col]==0){
				if(row>=0&&row<=2){
					if(col>=0&&col<=2){matrix(row,col,0,0);}
					else if(col>=3&&col<=5){matrix(row,col,0,1);}
					else if(col>=6&&col<=8){matrix(row,col,0,2);}
				}
				else if(row>=3&&row<=5){
					if(col>=0&&col<=2){matrix(row,col,1,0);}
					else if(col>=3&&col<=5){matrix(row,col,1,1);}
					else if(col>=6&&col<=8){matrix(row,col,1,2);}
				}
				else if(row>=6&&row<=8){
					if(col>=0&&col<=2){matrix(row,col,2,0);}
					else if(col>=3&&col<=5){matrix(row,col,2,1);}
					else if(col>=6&&col<=8){matrix(row,col,2,2);}
				}
			}
		}
	}
}

function matrix(row,col,x,y){
	relariveRow=row-x*3;
	relativeCol=col-y*3;
	for(i=1;i<=9;i++){
		certain = 8;
		for (j=x*3;j<=x*3+2;j++){
			for (k=y*3;k<=y*3+2;k++){
				if(j!=row&&k!=col){
					contain=false
					for(z=0;z<=8;z++){
						number =sudoku[j][z];
						if (number==i){contain=true};
						number = sudoku[z][k];
						if (number==i){contain=true};
					}
					if(contain==true){certain--;}
				}
				else{certain--;}
			}
		}
		if(certain==0){sudoku[row][col]=i}
	}
}