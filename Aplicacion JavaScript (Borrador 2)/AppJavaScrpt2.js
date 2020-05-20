(function(){
		  //variables
		  var lista=document.getElementById("lista"),
		  tareaInpu=document.getElementById("tareaInput"),
		  btnNuevaTarea=document.getElementById("btn-agregar");
		  
		   if (tarea==""){
			  tareaInput.setAtribute("placeholder","Agrega Tarea Valida");
			  tareaInput.className="error";
			  return false;
		  }
		  
		  //Agregamos el Contenido al enlace
		  enlace.appendChild(contenido);
		  //Le Establecesmos un Atribute href
		  enlace.setAtribute("href","#")
		  //Agregamos el enlace (a) la nueva tarea (li)
		  nuevaTarea.appendChild(enlace);
		  //Agregamos la Nueva tarea ala Lista
		  lista.appenChild(nuevaTarea);
		  
		  tareaInput.value="";
		  for (var i=0; i<=lista.childrem.length -1; i++){
			  lista.childrem[1].addeventListener("click",function(){
		      this.parentNode.removeChild(this);
		  }

		  //Funciones
		  var comprobarInput=function(){};
		     tareaInput.className="";
		     tareaInput.setAtribute("placeholder", "Agrega tu Tarea");
		  };
		  var eliminarTarea=function(){};
		     this.parentNode.removeChild(this);
		  
		  };
		  
		  //Eventos
		  
		  //Agregar Tareas
		     btnNuevaTarea.addEventListener(click), agregarTarea);

          //Comprabar Input
		     tareaInput.addEventListener("click", comprobarInput);
		  
		  for (var i=0; i<=lista.childrem.length -1; i++){
			  lista.childrem[1].addeventListener("click",eliminarTarea);
		  }

{());