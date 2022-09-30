const header = new XMLHttpRequest ();
          

        header.open('GET', 'structure.json')
        header.send();
        header.onload = () => {
            console.log("loaded!" + header.responseText);

        };
       