// function contrato_focco() {
//     fetch('https://web.foccolojas.com.br/foccolojas/api/comercial/v1/14675/contratos', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc3VhcmlvIjoiNTAwMTAiLCJpc3MiOiJGb2NjbyBTaXN0ZW1hcyBkZSBHZXN0YW8iLCJGQUJSSUNBIjoiRk9DQ09MT0pBUyIsImp0aSI6IjA2OTZiYjIwLTYyMjMtNGExYy05ZWJmLWUxNWM3NDM4N2I5YyJ9.7yd7b-Oq6QyAlI8l9kn9Nyb0JHRonvIkPi1y8LJTnQk"
//         }
//     }).then(response => {
//         response.json().then(data => {
//             const contrato = data;

//             for (let prop in contrato) {
//                 console.log(prop + ':', contrato[prop]);
//             }
//         });
//     }).catch(error => {
//         console.log('Erro ao realizar a requisição:', error);
//     });
// }
// contrato_focco();


// metodo get api tallos
function carteiras() {
    fetch('https://api.tallos.com.br/v2/wallets', {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6IjY0NWEzYTk1NWMxNzc1NzZmZjU4MjViYSIsImNvbXBhbnkiOiI2NDVhM2E5NTVjMTc3NTc2ZmY1ODI1YjciLCJpYXQiOjE3MjExNTM3MzZ9.-YWgauMrYYeGHQHUs05Iloy_wgvNC5L0ZtoKPbWiwdY"
        }
    }).then(response => {
        response.json().then(data => {
            const carteira = data;

            for (let prop in carteira) {
                console.log(prop + ':', carteira[prop]);
            }
        });
    }).catch(error => {
        console.log('Erro ao realizar a requisição:', error);
    });
}
carteiras();


function clientes_foccolojas() {
    fetch('https://web.foccolojas.com.br/foccolojas/api/comercial/v1/13633/clientes', {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
            authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc3VhcmlvIjoiNTAwMTAiLCJpc3MiOiJGb2NjbyBTaXN0ZW1hcyBkZSBHZXN0YW8iLCJGQUJSSUNBIjoiRk9DQ09MT0pBUyIsImp0aSI6IjA2OTZiYjIwLTYyMjMtNGExYy05ZWJmLWUxNWM3NDM4N2I5YyJ9.7yd7b-Oq6QyAlI8l9kn9Nyb0JHRonvIkPi1y8LJTnQk"
        }
    }).then(response => {
        response.json().then(data => {
            const clientes_foccoloja = data;

            for (let prop in clientes_foccoloja) {
                console.log(prop + ':', clientes_foccoloja[prop]);
            }
        });
    }).catch(error => {
        console.log('Erro ao realizar a requisição:', error);
    });
}
clientes_foccolojas();