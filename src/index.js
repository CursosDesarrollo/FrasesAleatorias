import "./index.css";
import "./example.scss";
import $ from "jquery";

const kk = ['david','lauren','pepe'],root = $(".root"),DF = $(document.createDocumentFragment());

kk.forEach((val,key)=>{
  DF.append(`
  <tr>
  <td>${key+1}</td>
  <td>${val}</td>
  </tr>
  `);
});

root.append(DF);
$('.prueba').append($('<p>pepe</p>').addClass("SapoPerro"));