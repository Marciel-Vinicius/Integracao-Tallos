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


function clientes_tallos() {
    fetch('https://api.megasac.tallos.com.br/v2/contacts/whatsapp-business-by-brokers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6IjY0NWEzYTk1NWMxNzc1NzZmZjU4MjViYSIsImNvbXBhbnkiOiI2NDVhM2E5NTVjMTc3NTc2ZmY1ODI1YjciLCJpYXQiOjE3MjExNTM3MzZ9.-YWgauMrYYeGHQHUs05Iloy_wgvNC5L0ZtoKPbWiwdY"
        },
        body: JSON.stringify({
            "full_name": "Marciel Vinicius de Lara",
            "cel_phone": "+55 49 999509185",
            "integration": "integration-1",
            "email": "marcielviniciusdelara@gmail.com",
            "cpf": "012.386.599-93",
            "cnpj": "",
            "address": {
                "country": "Brazil",
                "state": "Santa Catarina",
                "city": "Princesa",
                "district": "Centro",
                "street": "Rua Rio Grande do Sul",
                "number": "123",
                "zip_code": "89935-000",
            },
        })
    }).then(response => {
        response.json().then(data => {
            console.log(data);
        }
        );
    });
}
clientes_tallos();



//  function clientes_tallos() {
//      fetch('https://api.megasac.tallos.com.br/v2/customers', {
//          method : 'GET',
//          headers : {
//              'Content-Type' : 'application/json',
//              authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6IjY0NWEzYTk1NWMxNzc1NzZmZjU4MjViYSIsImNvbXBhbnkiOiI2NDVhM2E5NTVjMTc3NTc2ZmY1ODI1YjciLCJpYXQiOjE3MjExNTM3MzZ9.-YWgauMrYYeGHQHUs05Iloy_wgvNC5L0ZtoKPbWiwdY"
//          }
//      }).then(response => {
//          response.json().then(data => {
//              const clientes_tallo = data;

//              for (let prop in clientes_tallo) {
//                  console.log(prop + ':', clientes_tallo[prop]);
//              }
//          });
//      }).catch(error => {
//          console.log('Erro ao realizar a requisição:', error);
//      });
//  }
//  clientes_tallos();



//função para levar os clientes do foccolojas para o tallos
function sincronizmo_clientes() {
    fetch('https://web.foccolojas.com.br/foccolojas/api/comercial/v1/13633/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
    })
}


