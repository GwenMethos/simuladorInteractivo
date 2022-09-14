class Ropa {
    constructor(tipo, precio){
        this.tipo = tipo;
        this.precio = precio;
        this.stock = 20;
    }
    sumarStock(stock){
        this.stock =  this.stock + stock;
    }
    /*ivaPrecio(precio){
        this.precio = this.precio * 1.16;
    }*/
}

const sudadera = new Ropa("Sudadera de Iron Maiden lml,", 1600);
const gorra = new Ropa("Gorra", 500);
const playera = new Ropa("Playera Foro Sol Mexico", 650);

const stockProductos = [];
stockProductos.push(sudadera);
stockProductos.push(gorra);
stockProductos.push(playera);

console.log(stockProductos);

for (let stock of stockProductos){
    console.log(stock);
}

function aumentarPlayeras (arrayProductos){
    for (let stock of arrayProductos){
        if(stock.tipo === "Playera Foro Sol Mexico"){
            stock.sumarStock(500);
        }
    }
}
aumentarPlayeras(stockProductos);
console.log(stockProductos);

/*function ivaMexico (arrayPrecio){
    for (let precio of arrayPrecio){
        if(stock.precio == precio){
            stock.ivaPrecio();
        }
    }
}*/
