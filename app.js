const header = new XMLHttpRequest ();
          

        header.open('GET', 'structure.json')
        header.send();

        header.onload = () => {
        const keys = JSON.parse(header.responseText)

            

        for(var key in keys){
            var header2 = document.createElement(key)
            header2.innerHTML = (keys[key]);
            
            Frame.appendChild(header2)
           
        
        }
            


        };
       