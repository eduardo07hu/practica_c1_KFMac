tinymce.init({
    selector: 'textarea#basic-example',
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

//definir arregflo en js
const pedidos = [];
const cargarTabla = () =>{
  let tbody = document.querySelector("#tbody-tabla");
  tbody.innerHTML ="";
  for(let i=0; i< pedidos.length; ++i){
    let p = pedidos[i];

    let tr = document.createElement("tr");

    let tdNRO = document.createElement("td");
    let tdNombre = document.createElement("td");

    let tipo = document.createElement("i");

    let tdTipo = document.createElement("td");
    let tdTotal = document.createElement("td");

    tdNRO.innerText = i + 1;
    tdNombre.innerText = p.nombre;
    


    if(p.tipo == "1"){
      tipo.classList.add("fas", "fa-fist-raised");
    } else if (p.tipo == "2"){
      tipo.classList.add("fas","fa-hamburger");
    }

    tdTipo.appendChild(tipo);

    tdTotal.innerText = p.total;

    tr.appendChild(tdNRO);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdTotal);

    tbody.appendChild(tr);

  }
};
document.querySelector("#agregar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#tipoPedido-select").value;
    let total = document.querySelector("#total-txt").value;

    //crear on objeto
    let pedido = {};

    //atributos del objeto
    pedido.nombre = nombre;
    pedido.tipo = tipo;
    pedido.total = total;
    
    pedidos.push(pedido);
    cargarTabla();
    Swal.fire("Pokemon Agregado", "Resultado Exitoso", "info" );
});