// tambah data
function insert_value() {

  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  $('#mySpinner').addClass('spinner');


  var Fecha = $("#Fecha").val();
  var Acomodador = $("#Acomodador").val();
  var Reunion = $("#Reunion").val();
  var Asistencia = $("#Asistencia").val();
  var Zoom = $("#Zoom").val();//////////////////

  var url = script_url + "?callback=ctrlq&Fecha=" + Fecha + "&Acomodador=" + Acomodador + "&Reunion=" + Reunion + "&Asistencia=" + Asistencia + "&Zoom=" + Zoom + "&action=insert";

  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

// perbaharui data
function update_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";


  var Fecha = $("#Fecha").val();
  var Acomodador = $("#Acomodador").val();
  var Reunion = $("#Reunion").val();
  var Asistencia = $("#Asistencia").val();
  var Zoom = $("#Zoom").val();//////////////////

  var url = script_url + "?callback=ctrlq&Fecha=" + Fecha + "&Acomodador=" + Acomodador + "&Reunion=" + Reunion + "&Asistencia=" + Asistencia + "&Zoom=" + Zoom + "&action=insert";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

//hapus data
function delete_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";

  $('#mySpinner').addClass('spinner');

  var Fecha = $("#Fecha").val();
  var Acomodador = $("#Acomodador").val();
  var Reunion = $("#Reunion").val();
  var Asistencia = $("#Asistencia").val();
  var Zoom = $("#Zoom").val();//////////////////

  var url = script_url + "?callback=ctrlq&Fecha=" + Fecha + "&Acomodador=" + Acomodador + "&Reunion=" + Reunion + "&Asistencia=" + Asistencia + "&Zoom=" + Zoom + "&action=insert";

  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}


// print the returned data
function ctrlq(e) {
  $("#re").html(e.result);
  $("#re").css("visibility", "visible");
  read_value('');
}

function read_value(srch) {

  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  var url = script_url + "?action=read";

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
    row.style.background = "#000000";


    cell1.innerHTML = "<b>Fecha</b>";
    cell2.innerHTML = "<b>Acomodador</b>";
    cell3.innerHTML = "<b>Reunion</b>";
    cell4.innerHTML = "<b>Asistencia</b>";
    cell5.innerHTML = "<b>Zoom</b>";//////////////////

    //        alert(json.records);
    // masukkan data ke dalam tabel
    if (srch != '') {
      for (var i = 0; i < json.records.length; i++) {

        if (srch == json.records[i].ID) {
          tr = table.insertRow(-1);
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = json.records[i].Fecha;
          tabCell = tr.insertCell(-1);
          tabCell.innerHTML = json.records[i].Acomodador;
          tabCell = tr.insertCell(-1);
          tabCell.innerHTML = json.records[i].Reunion;
          tabCell = tr.insertCell(-1);
          tabCell.innerHTML = json.records[i].Asistencia;
          tabCell = tr.insertCell(-1);
          tabCell.innerHTML = json.records[i].Zoom;////////////////
        }
      }
      $("#re").html("Datos de la Persona");
      $("#re").css("visibility", "visible");
    } else {
      for (var i = 0; i < json.records.length; i++) {

        tr = table.insertRow(-1);
        var tabCell = tr.insertCell(-1);

        tabCell.innerHTML = json.records[i].Fecha;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Acomodador;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Reunion;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Asistencia;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Zoom;////////////////
      }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    document.getElementById("loader").style.visibility = "hidden";
    $("#re").css("visibility", "visible");


    $("#Fecha").val("")
    $("#Acomodador").val("")
    $("#Reunion").val("")
    $("#Asistencia").val("")
    $("#Zoom").val("")
    getData2Input();///////////////////
  });
}
//////////// Ketika data dalam tabel diklik
function getData2Input() {
  var table = document.getElementById("myTable");

  if (table) {
    for (var i = 0; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        tableText(this);
      }
    }
  }
}

///////////////////Ekstrak data dari Spreadsheet dan tampilkan di kolom.

function tableText(tableRow) {

  var Fecha = tableRow.childNodes[0].innerHTML;
  var Acomodador = tableRow.childNodes[1].innerHTML;
  var Reunion = tableRow.childNodes[2].innerHTML;
  var Asistencia = tableRow.childNodes[3].innerHTML;
  var Zoom = tableRow.childNodes[4].innerHTML;//////////

  $("#Fecha").val(Fecha)
  $("#Acomodador").val(Acomodador)
  $("#Reunion").val(Reunion)
  $("#Asistencia").val(Asistencia)
  $("#Zoom").val(Zoom)
}


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

var script_url =
  "https://script.google.com/macros/s/AKfycbyQ2BzD1u8iIILqWHLVmJ4dg8LJrCMoc6cLagtmhO6Hd0kdV2nUxb3A9BTPF0rkhETR0A/exec"; /////////////////

(function () {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
    '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

