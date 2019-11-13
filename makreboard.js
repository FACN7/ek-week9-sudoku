var str="[";
let sol = "284375196739816254651942378476128539312594687598637412143769825965283741827451963" 
let initial = "2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3";
let sud = sol;
sud = Array.from(sud).map(x=>x.replace(".","0"));
//console.log(sud);
for(var i=0;i<9;i++){
	str+="["
	for(var j=0;j<9;j++){
		str+=(j==8)?(parseInt(sud[9*i+j])):(parseInt(sud[9*i+j])+",");
	}
str+=(i==8)?"]":"],";
}

str+="]";
console.log(str.toString());
