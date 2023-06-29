

let url = "http://localhost:8080/contatos-1/api/funcionarios/"

var getJSON = function(url)
{
    return new Promise(function(resolve, reject)
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.setRequestHeader("Authorization", "Basic " + btoa("api:WFLYDM0102"));


        xhr.onload = function()
        {
            var status = xhr.status;
            if (status === 200) {
                resolve(xhr.response);
            } else {
                reject(status);
            }
        };

        xhr.send();
    });
};


getJSON(url).then(function(data) {

    console.log(data);

    let arrayFoto = data[0].foto

    console.log(typeof arrayFoto)

    let image = document.getElementById("ItemPreview");

    image.src = "data:image/png;base64," + btoa(arrayFoto);

    console.log("data:image/png;base64," + btoa(arrayFoto))

}, function(status) { alert('Erro!' + status); }

);
