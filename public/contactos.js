// tambah data
function insert_value() {

    $("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');

    var id1= $("#id").val();
    var nombre= $("#nombre").val();
    var direccion= $("#direccion").val();
    var telefono= $("#telefono").val();
    var contactos= $("#contactos").val();//////////////////

    var url = script_url+"?callback=ctrlq&direccion="+direccion+"&telefono="+telefono+"&contactos="+contactos+"&nombre="+nombre+"&id="+id1+"&action=delete";

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
    var direccion= $("#direccion").val();
    var telefono= $("#telefono").val();
    var contactos= $("#contactos").val();//////////////////

    var url = script_url+"?callback=ctrlq&direccion="+direccion+"&telefono="+telefono+"&contactos="+contactos+"&nombre="+nombre+"&id="+id1+"&action=delete";

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
    var direccion= $("#direccion").val();
    var telefono= $("#telefono").val();
    var contactos= $("#contactos").val();//////////////////

    var url = script_url+"?callback=ctrlq&direccion="+direccion+"&telefono="+telefono+"&contactos="+contactos+"&nombre="+nombre+"&id="+id1+"&action=delete";

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
     var cell5 = row.insertCell(4);///////////////////
     row.style.background = "black";

     cell1.innerHTML = "<b>ID</b>";
     cell2.innerHTML = "<b>Nombre</b>";
     cell3.innerHTML = "<b>Dirección</b>";
     cell4.innerHTML = "<b>Teléfono</b>";
     cell5.innerHTML = "<b>Contactos</b>";//////////////////

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
     var direccion = tableRow.childNodes[2].innerHTML;
     var telefono = tableRow.childNodes[3].innerHTML;
     var contactos = tableRow.childNodes[4].innerHTML;//////////
     $("#id").val(id)
     $("#nombre").val(nombre)
     $("#direccion").val(direccion)
     $("#telefono").val(telefono)
     $("#contactos").val(contactos)
   }

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  var script_url =
      "https://script.google.com/macros/s/AKfycbxSLLAjBZV4Cr0L7Q6Kd2zq48Jh8DZsibT90FjySJ0LBJivA9W-sAVCDsWtt2-nzYpM/exec"; /////////////////

  (function () {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
          '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
  })();