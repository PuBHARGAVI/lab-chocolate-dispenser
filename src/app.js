var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color,count){
    if(count<0){
        return "Count must be positive";
    }
    for(var i=0;i<count;i++){
            chocolates.unshift(color)
        }
    }
//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    var res=[]
    if(number>chocolates.length){
     return "Insufficient number of chocolates";   
    }
    for(var i=0;i<number;i++){
        res[i]=chocolates.shift(); 
        }
return res;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
var res=[];
if(number>chocolates.length){
    return "Insufficient number of chocolates";
}
for(var i=0;i<number;i++){
    res[i]=chocolates.pop();
}
return res;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color){
    var res=[];
    if(number>chocolates.length){
        return "Insufficient number of chocolates";
    }
    var c=1;
    for(var i=chocolates.length-1;i>=0;i--){
    if(chocolates[i]==color){
        res[c]=chocolates.splice(i,1);
        if(c==number){
            break;
        }
        c=c+1;
        }
    }
    if(c!=number){
    return "Insufficient number of chocolates";        
    }
    return ["No chocolates of given color"];
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates){
var obj={'green':0,'silver':0,'blue':0, 'crimson':0, 'purple':0, 'red':0, 'pink':0}
for(var i=0;i<chocolates.length;i++){
        obj[chocolates[i]]+=1;
    }
var arr=[];
arr.push(obj['green']);
arr.push(obj['silver']);
arr.push(obj['blue']);
arr.push(obj['crimson']);
arr.push(obj['purple']);
arr.push(obj['red']);
arr.push(obj['pink']);
return arr;
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates){
var obj={'green':0,'silver':0,'blue':0, 'crimson':0, 'purple':0, 'red':0, 'pink':0}
for(var i=0;i<chocolates.length;i++){
        obj[chocolates[i]]+=1;
    }
   console.log(obj);
return chocolates.sort(function(a,b){
    if (obj[a]<obj[b]) {
        return -1;
    }
    if (obj[a]>obj[b]) {
        return 1;
    }
    if(obj[a]==obj[b]){
        if(a>b){
            return 1;
        }
        else{
            return -1;
        }
    }
    return 0;
});
}
//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor){
var c=0;
    for(var i=0;i<chocolates.length;i++){
        if(chocolates[i]==color){
            c=c+1;
            chocolates[i]=finalColor;
            if(c==number){
                break;
            }
        }
    }
    if(c<number){
        return "Insufficient number of chocolates";
    }
    return chocolates;
}
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
    if (color == finalColor)
    return "color and finalcolor are same";
    else{
    for(var i=0;i<chocolates.length;i++){
        if (chocolates[i] == color)
            chocolates[i] = finalColor;
        }
       }
    var c=0;
    for(var i=0;i<chocolates.length;i++){
    if(chocolates[i]==finalColor){
        c=c+1;
    }
}
return [c,chocolates];
}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(chocolates, color){
    for(var i=0;i<chocolates.length;i++){
        if (chocolates[i] == color)
            chocolates.splice(i,'1');
        }
    chocolates.removeall
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
