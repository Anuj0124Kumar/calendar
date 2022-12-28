var dt=new Date();

function renderDate(){
 dt.setDate(1);
var day=dt.getDay();

console.log(dt.getDay());
var endDate=new Date(
     dt.getFullYear(),
     dt.getMonth()+1,
     0
).getDate();

console.log(endDate);
var prevDate=new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
).getDate();

console.log(prevDate);

console.log(dt.getMonth());
document.getElementById('date_str').innerHTML=dt.toDateString();

var today=new Date();
console.log(today);

var Month=[
    "january",
    "february",
    "march",
    "April",
    "May",
    "june",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December"
]; 

document.getElementById("month").innerHTML=Month[dt.getMonth()];

var cells="";

for(  x=day;x>0;x--){
   cells+= "<div class='prevDate'>"+ (prevDate-x+1) +"</div>";
}

for( i=1;i<=endDate;i++){
    if(i == today.getDate() && dt.getMonth() == today.getMonth() && dt.getFullYear() == today.getFullYear()){
        cells+= "<div class='today'>"+ i +"</div>";
    }
    else{
        cells+= "<div>"+ i +"</div>";
    }
 }
  document.getElementsByClassName('days')[0].innerHTML=cells;
}
function moveDate(para){
  if(para == 'moveprev'){
    dt.setMonth(dt.getMonth()-1);
    
  }
  else if(para == 'movenext'){
    dt.setMonth(dt.getMonth()+1);
  }
  renderDate();
}




