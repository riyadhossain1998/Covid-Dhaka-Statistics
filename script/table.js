var file_name = "covid26042020.csv";
var date = [file_name.split(/[d.]+/)[1].substring(0, 2) , file_name.split(/[d.]+/)[1].substring(2, 4) , file_name.split(/[d.]+/)[1].substring(4, 8) ]
var labels = []
var datas = []
$(document).ready(function(){
    $.ajax({
      url: file_name,
      dataType:"text",
      crossDomain:true,
      success:function(data)
      {
         var table = data.split(/\r?\n|\r/); //split by new line
         var table_data = '<table style = "border:2px solid black;border-collapse:collapse">';
         var sum = 0;
         for(var count = 0; count < table.length-1; count++) {
            var cell_data = table[count].split(","); //split by commas
            table_data += '<tr>'
            table_data += '<td>'+cell_data[0]+'</td>';
            table_data += '<td>'+cell_data[1]+'</td>';
            if(count>0){
            labels.push(cell_data[0])
            console.log('pushed '+ cell_data[0])
            datas.push(cell_data[1])
            sum+=parseInt(cell_data[1])}
            table_data += '</tr>';
         }
        table_data += '<tr><td>Total</td><td>'+sum+'</td>'
        table_data += '</table>';
        $('#tcasesDhk').text(sum)
        $('#table').html(table_data);
      }
    });

    $("#title").text(date[0] + '/' + date[1]+ '/'+date[2]);

});
