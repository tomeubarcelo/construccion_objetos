//CONSTRUCTORES
//constructor del objeto coche con cuatro parametros
function coche(marca, modelo, anyo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.anyo = anyo;
    this.color = color;
}

//arrays con los valores que se usaran como parametros en cada objeto creado
var carsName = ['Honda', 'Seat', 'Toyota', 'Hyundai', 'Opel', 'Audi', 'BMW', 'Mitsubishi', 'Fiat', 'Mazda'];
var carsModel = ['Civic', 'Ibiza', 'Yaris', 'i30', 'Corsa', 'R8', 'i8', 'Lancer', '500', 'MX-5'];
var carsYear = [2001, 2003, 2005, 2007, 2011, 2012, 2015, 2017, 2019, 2020];
var carsColor = ['Negro', 'Rojo', 'Gris', 'Negro', 'Azul', 'Gris', 'Blanco', 'Azul', 'Negro', 'Rojo'];


//con un bucle flor vamos instanciando nuevos objetos a traves del constructor
for (let i = 0; i < carsName.length; i++) {
    var objetcCar = new coche(carsName[i], carsModel[i], carsYear[i], carsColor[i]);
    var description = (i + 1) + "- " + carsName[i] + " " + carsModel[i] + " " + carsYear[i] + " " + carsColor[i];
    document.write(description + "<br>");
    console.log(objetcCar);
}