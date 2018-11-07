function validador(){

	var Datos= new Array(4);
	Datos[0]= document.getElementById("PosFINAL").value;
	Datos[1]= document.getElementById("PosINICIAL").value;
	Datos[2]= document.getElementById("Velocidad").value;
	Datos[3]= document.getElementById("Tiempo").value;
	var resultado=0;
	var valid= true;

	
	
					
	//validar que estan todos los datos necesarios
	for (var i=0; i<5 ;i++){
		if(Datos[i]==""){
			for(var j=i+1; j<5;j++){
				if(Datos[j]==""){
					valid=false;
					swal({
					  icon: 'error',
					  title: 'No es posible calcular',
					  text: 'Algo va mal, revisa los datos',
					  footer: '<a href>Has dejado dos espacios en blanco</a>'
					})
					break;
				}
				
			}
			break;
		}
	}
	if(valid==true){	
			if (Datos[0] == "") { //posicion final
			resultado= Number(Datos[1])+(Number(Datos[2])*Number(Datos[3]));
				swal({
					icon: 'success',
					title: 'La posicion final es '+ resultado+'m',
					Button: false,
					timer: 2500
					})
			}else if (Datos[1] == "") { //posicion inicial
			resultado= Number(Datos[0])-(Number(Datos[2])*Number(Datos[3]));
				swal({
					icon: 'success',
					title: 'La posicion inicial es '+resultado+'m',
					Button: false,
					timer: 2500
					})
			}else if (Datos[2] == "") { //velocidad
			resultado= (Number(Datos[0])-Number(Datos[1]))/Number(Datos[3]);
				swal({
					icon: 'success',
					title: 'La velocidad del objeto es '+ resultado+'m/s',
					Button: false,
					timer: 2500
					})
			}else if (Datos[3] == "") { //tiempo
			resultado= (Number(Datos[0])-Number(Datos[1]))/Number(Datos[2]);
				swal({
					icon: 'success',
					title: 'El tiempo transcurrido es '+ resultado+'s',
					Button: false,
					timer: 2500
					})
			}
	}
}