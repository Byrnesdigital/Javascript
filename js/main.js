/* Start commented out code...

console.log("Hello World");

var saludar = function(param){

  var is_not_number = Number.isNaN(param);
  if(is_not_number){
      param = param.toLowerCase();

  }
  if(param == "dia" || (param <= 12 && param >= 0)){
    console.log("Buenos Dias");
  }
  else if (param == "noche") {
      console.log("Buenas Noches");
  }
  else{
    console.log("Buenas");
  }
};

saludar(12);


var suerte = function(parameter){
  if(parameter === 7){
  console.log("Buena Suerte");
}
  else if(parameter === "13"){
    console.log("Sentido Pesame");
  }

};

var i = 0;
while(i<=10){
  console.log(i++);
}



var i;
for(var i=0; i>10; i++){
  console.log(i);
}
end commented out code */
var casa = {altura:100, ancho:100};
var casota = Object.create(casa);
casota.ventanas = 100;
for ( var prop in casota){
    console.log(prop + " : " + casota[prop]);
}

var arreglo = ["a", 5, true, "abc"];
for (var pos in arreglo){
  console.log("pos ->" + pos);
  console.log("arreglo["+pos+"] -> " + arreglo[pos]);
}
