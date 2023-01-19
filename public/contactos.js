// tambah data
function insert_value() {

    $("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');

    var id1= $("#id").val();
    var nombre= $("#nombre").val();
    var familia= $("#familia").val();
    var direccion= $("#direccion").val();
    var telefono= $("#telefono").val();
    var contactos= $("#contactos").val();//////////////////

    var url = script_url+"?callback=ctrlq&direccion="+direccion+"&telefono="+telefono+"&familia="+familia+"&contactos="+contactos+"&nombre="+nombre+"&id="+id1+"&action=delete";

       var request = jQuery.ajax({
         crossDomain: true,
         url: url ,
         method: "GET",
         dataType: "jsonp"
       });
     }

   // perbaharui data
     function update_value(){
    $("#re").css("visibility","hidden");
        document.getElementById("loader").style.visibility = "visible";

    var id1= $("#id").val();
    var nombre= $("#nombre").val();
    var familia= $("#familia").val();
    var direccion= $("#direccion").val();
    var telefono= $("#telefono").val();
    var contactos= $("#contactos").val();//////////////////

    var url = script_url+"?callback=ctrlq&direccion="+direccion+"&telefono="+telefono+"&familia="+familia+"&contactos="+contactos+"&nombre="+nombre+"&id="+id1+"&action=delete";

       var request = jQuery.ajax({
         crossDomain: true,
         url: url ,
         method: "GET",
         dataType: "jsonp"
       });
     }

   //hapus data
     function delete_value(){
    $("#re").css("visibility","hidden");
        document.getElementById("loader").style.visibility = "visible";

    $('#mySpinner').addClass('spinner');
    var id1= $("#id").val();
    var nombre= $("#nombre").val();
    var familia= $("#familia").val();
    var direccion= $("#direccion").val();
    var telefono= $("#telefono").val();
    var contactos= $("#contactos").val();//////////////////

    var url = script_url+"?callback=ctrlq&direccion="+direccion+"&telefono="+telefono+"&familia="+familia+"&contactos="+contactos+"&nombre="+nombre+"&id="+id1+"&action=delete";

       var request = jQuery.ajax({
         crossDomain: true,
         url: url ,
         method: "GET",
         dataType: "jsonp"
       });
     }


     // print the returned data
     function ctrlq(e) {
    $("#re").html(e.result);
    $("#re").css("visibility","visible");
    read_value('');
     }

   function read_value(srch) {

       $("#re").css("visibility","hidden");
       document.getElementById("loader").style.visibility = "visible";
       var url = script_url+"?action=read";

       $.getJSON(url, function (json) {

   // buat tabel yang menampilkan data
           var table = document.createElement("table");
           table.setAttribute("id", "myTable");
           var header = table.createTHead();
     var row = header.insertRow(0);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     var cell6 = row.insertCell(5);///////////////////
     row.style.background = "black";

     cell1.innerHTML = "<b>ID</b>";
     cell2.innerHTML = "<b>Nombre</b>";
     cell3.innerHTML = "<b>Familia</b>";
     cell4.innerHTML = "<b>Dirección</b>";
     cell5.innerHTML = "<b>Teléfono</b>";
     cell6.innerHTML = "<b>Contactos</b>";//////////////////

   //        alert(json.records);
        // masukkan data ke dalam tabel
         if (srch!=''){
           for (var i = 0; i < json.records.length; i++) {

             if(srch==json.records[i].ID){
               tr = table.insertRow(-1);
       var tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].ID;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Nombre;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Familia;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Dirección;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Teléfono;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Contactos;////////////////
               }
           }
            $("#re").html("Datos de la Familia");
           $("#re").css("visibility","visible");
         } else {
            for (var i = 0; i < json.records.length; i++) {

               tr = table.insertRow(-1);
       var tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].ID;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Nombre;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Familia;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Dirección;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Teléfono;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Contactos;////////////////
             }
          }

           var divContainer = document.getElementById("showData");
           divContainer.innerHTML = "";
           divContainer.appendChild(table);
           document.getElementById("loader").style.visibility = "hidden";
        $("#re").css("visibility","visible");

        $("#id").val("")
        $("#nombre").val("")
        $("#familia").val("")
        $("#direccion").val("")
        $("#telefono").val("")
        $("#contactos").val("")
         getData2Input();///////////////////
       });
    }
   //////////// Ketika data dalam tabel diklik
    function getData2Input(){
     var table = document.getElementById("myTable");

     if (table) {
       for (var i = 0; i < table.rows.length; i++) {
         table.rows[i].onclick = function() {
           tableText(this);
         }
       }
     }
   }

   ///////////////////Ekstrak data dari Spreadsheet dan tampilkan di kolom.

   function tableText(tableRow) {
     var id = tableRow.childNodes[0].innerHTML;
     var nombre = tableRow.childNodes[1].innerHTML;
     var familia = tableRow.childNodes[2].innerHTML;
     var direccion = tableRow.childNodes[3].innerHTML;
     var telefono = tableRow.childNodes[4].innerHTML;
     var contactos = tableRow.childNodes[5].innerHTML;//////////
     $("#id").val(id)
     $("#nombre").val(nombre)
     $("#familia").val(familia)
     $("#direccion").val(direccion)
     $("#telefono").val(telefono)
     $("#contactos").val(contactos)
   }

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  var script_url =
      "https://script.google.com/macros/s/AKfycbwbUFqj7W64lzwMGE0NH8xON_cyt_AW-SM4UIG91ngF_dEKkkoVyJrWIUSE95AUqU_0/exec"; /////////////////

  (function () {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
          '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
  })();