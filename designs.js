function makeGrid() {

    const num_of_cells = document.getElementById("input_width").value,
          num_of_raws = document.getElementById("input_height").value,
          table = $("#pixel_canvas"); 

    for(let x = 0 ; x<num_of_raws ; x++){
        let td = "<td class='data'></td>";
        let tr = `<tr> ${td.repeat(num_of_cells)} </tr>`;
        table.append(tr);
    }
    
}

// TODO : fire makeGrid() function when submit form
$( "#sizePicker" ).submit(function( event ) {
  makeGrid();
  event.preventDefault();
});

// TODO : make cell colored when event fired 
$("#pixel_canvas").on('click' , ".data", function () {
    color = document.getElementById("colorPicker").value;
    $(event.target).css("background-color" , color);
});
