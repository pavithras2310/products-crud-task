var stockItems = [];
var addItems=()=>{
    var item = document.getElementById("item").value;
    stockItems.push(item);
    document.getElementById("item").value = "";
    getItems(stockItems);
}

document.getElementById("btnid").addEventListener("click",addItems);

var getItems=(st)=>{
    var emptyStr="";
    var sNo = 0;
    stockItems.forEach(element => {
        sNo += 1;
        emptyStr += "<tr><td>"+sNo+"</td><td>"+element+"</td><td>Edit/Remove</td></tr>";
    });
    document.getElementById("tbodyid").innerHTML=emptyStr;
}