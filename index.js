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