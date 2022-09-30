const header = new XMLHttpRequest ();
          

        header.open('GET', 'structure.json')
        header.send();

const anka = new XMLHttpRequest ();
          

        anka.open('GET', 'cars.json')
        anka.send();


LoadCars = () => {carsList.hidden = false};
       
header.onload = () => {
       
    const keys = JSON.parse(header.responseText)

        for(var key in keys){
            var header2 = document.createElement(key)
            header2.innerHTML = (keys[key]);
            
            Frame.appendChild(header2)
        }
        };

        
anka.onload = () => {
    var cars = JSON.parse(anka.responseText);
    var list = document.createElement("ul");
    carsList.appendChild(list);

            for(var brand in cars) {
                var listinUL = document.createElement("li");
                listinUL.innerHTML = (cars[brand]);
                carsList.appendChild(listinUL);
            }
            
        }
       
       