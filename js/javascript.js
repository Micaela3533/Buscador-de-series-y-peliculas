var boton = document.querySelector('#buscar');
var div = document.querySelector('#resultado');
var div2 = document.querySelector('#resultado2');
boton.addEventListener('click', function () {
    div2.innerHTML="";
    fetch('http://www.omdbapi.com/?s=' + document.getElementById('t1').value + '&type='+ select.value +'&y='+ document.getElementById('t2').value  + '&apikey=36fbb5b')
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
            div2.insertAdjacentHTML("beforeend", '<h2 style="text-align:center;color:white;">Resultados Obtenidos</h2> ')            
            div2.insertAdjacentHTML("beforeend", '<table style="color:white"  class="table caption-top"><thead> <tr><th scope="col">#</th><th scope="col">Title</th> <th scope="col">Type</th><th scope="col">Year</th> </tr> <tbody id="table"><tr> ')
           
        for(var n=0; n<data.Search.length;n++){ 
            var tabl= document.querySelector('#table')
            var num = n+1;
            tabl.insertAdjacentHTML("beforeend",'<tr> <th scope="row"> '+ num  + '</th> <td>' +data.Search[n].Title +'</td> <td>' +data.Search[n].Type +'</td> <td>' +data.Search[n].Year +'</td> </tr>') 
           
        }
        div2.insertAdjacentHTML("beforeend", '</tbody></table>')
        
        console.log(data);
        
    })
    .catch(function(error){
        console.log(error);
    })

})

