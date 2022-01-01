
const butn = document.querySelector('#btn');
const butn2 = document.querySelector('#btn2'); 
butn.addEventListener('click', function (){
    const data = document.getElementById('input').value;
    try
    {
        const json = JSON.parse(data);
        
        fetch('/jsonapi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })
        .then(response => {
            const status = response.status;
            if (status == 400)
            {
                alert("Entered Data Has Less Than 2 Parameters Please Enter Valid Format");
            }
            else if(status == 201)
            {
                document.getElementById('upper').style.display = 'none';
                document.getElementById('lower').style.display = 'flex';
                const myform = document.querySelector("#form");


                for (let val in json)
                {
                    var label = document.createElement("Label");
                    label.innerHTML = val+" : ";

                    var newInput = document.createElement("INPUT");
                    newInput.type = "text";
                    newInput.value = json[val];
                    
                    myform.appendChild(label);
                    myform.appendChild(newInput);
                    myform.appendChild(document.createElement('BR'));
                    myform.appendChild(document.createElement('BR'));
                }
            }
        });
    }
    catch (e)
    {
        alert("Entered Data is Not Valid JSON.");
    }
});


butn2.addEventListener('click', function () {
    var list = document.getElementById("form");
    while (list.hasChildNodes()) {  
        list.removeChild(list.firstChild);
    }
    document.getElementById('lower').style.display = 'none';
    document.getElementById('upper').style.display = 'flex';
});