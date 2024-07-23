window.onload = function(){ 
    var i, day = 20;
    var boardBody = document.getElementById('boardBody');
    for(i = 10; i > 0; i--){
        var row = document.createElement('tr');
        row.className = 'body';
        row.innerHTML = "<td>" + (11 - i) + "</td>"+
                        "<td class = 'title'>제목.</td>" +
                        "<td>멋사</td>" +
                        "<td> 24-08-" + day-- + "</td>" ;

        boardBody.appendChild(row);
    }
};