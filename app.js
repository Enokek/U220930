const header = new XMLHttpRequest ();
          

        header.open('GET', 'structure.json')
        header.send();
        header.onload = () => {
            
          var anka = JSON.parse(header.responseText)
          console.log(anka);

        };
       