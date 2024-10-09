const fetch = require('node-fetch');
const sqlite3 = require('sqlite3').verbose();
const schedule = require('node-schedule');

// Inicializa o banco de dados SQLite
const db = new sqlite3.Database('./clientes.db');

// Cria a tabela de clientes se não existir
db.run(`CREATE TABLE IF NOT EXISTS clientes (
    id TEXT PRIMARY KEY,
    nome TEXT,
    cpf TEXT,
    cnpj TEXT,
    email TEXT,
    telefone TEXT,
    sexo TEXT,
    situacao TEXT,
    tipoPessoa TEXT,
    endereco TEXT,
    enderecoCobranca TEXT,
    consultorResponsavel TEXT,
    unidade TEXT,
    dataCadastro TEXT
)`, () => {
    console.log('Tabela "clientes" verificada/criada.');
});

// Função para obter dados dos clientes da API da Focco Lojas
function clientesFoccoLojas() {
    console.log('Iniciando requisição à API Focco Lojas...');
    
    fetch('https://web.foccolojas.com.br/foccolojas/api/comercial/v1/13633/clientes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc3VhcmlvIjoiNTAwMTAiLCJpc3MiOiJGb2NjbyBTaXN0ZW1hcyBkZSBHZXN0YW8iLCJGQUJSSUNBIjoiRk9DQ09MT0pBUyIsImp0aSI6IjA2OTZiYjIwLTYyMjMtNGExYy05ZWJmLWUxNWM3NDM4N2I5YyJ9.7yd7b-Oq6QyAlI8l9kn9Nyb0JHRonvIkPi1y8LJTnQk"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Dados recebidos da API Focco Lojas:', data);
        
        const endereco = JSON.stringify(data.endereco);
        const enderecoCobranca = JSON.stringify(data.enderecoCobranca);
        const consultorResponsavel = JSON.stringify(data.consultorResponsavel);
        const unidade = JSON.stringify(data.unidade);

        db.run(`INSERT OR REPLACE INTO clientes VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            data.id, data.nome, data.cpf, data.cnpj, data.email, data.telefone,
            data.sexo, data.situacao, data.tipoPessoa, endereco,
            enderecoCobranca, consultorResponsavel, unidade, data.dataCadastro
        ], () => {
            console.log(`Cliente ${data.nome} inserido/atualizado no banco de dados.`);
        });
    })
    .catch(error => {
        console.log('Erro ao realizar a requisição:', error);
    });
}

// Função para enviar os dados para a API da Talles
function clientesTallos(cliente) {
    console.log(`Enviando dados do cliente ${cliente.nome} para a API Talles...`);
    
    fetch('https://api.megasac.tallos.com.br/v2/contacts/whatsapp-business-by-brokers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZSI6IjY0NWEzYTk1NWMxNzc1NzZmZjU4MjViYSIsImNvbXBhbnkiOiI2NDVhM2E5NTVjMTc3NTc2ZmY1ODI1YjciLCJpYXQiOjE3MjExNTM3MzZ9.-YWgauMrYYeGHQHUs05Iloy_wgvNC5L0ZtoKPbWiwdY"
        },
        body: JSON.stringify({
            full_name: cliente.nome,
            cel_phone: cliente.telefone,
            integration: "integration-1",
            email: cliente.email,
            cpf: cliente.cpf,
            cnpj: cliente.cnpj,
            address: {
                country: "Brazil",
                state: cliente.endereco.uf,
                city: cliente.endereco.cidade,
                district: cliente.endereco.bairro,
                street: cliente.endereco.logradouro,
                number: cliente.endereco.numero,
                zip_code: cliente.endereco.cep
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Dados do cliente ${cliente.nome} enviados para a API Talles com sucesso:`, data);
    })
    .catch(error => {
        console.log(`Erro ao enviar dados do cliente ${cliente.nome} para a API Talles:`, error);
    });
}

// Função para sincronizar os dados do banco SQLite com a API da Talles
function sincronizarClientes() {
    console.log('Sincronizando clientes do banco de dados com a API Talles...');
    
    db.all('SELECT * FROM clientes', (err, rows) => {
        if (err) {
            console.error('Erro ao consultar o banco de dados:', err);
            return;
        }

        rows.forEach(cliente => {
            const endereco = JSON.parse(cliente.endereco);
            clientesTallos({
                ...cliente,
                endereco
            });
        });
    });
}

// Agenda a execução da função a cada minuto
schedule.scheduleJob('*/1 * * * *', () => {
    console.log('Iniciando processo de sincronização...');
    
    clientesFoccoLojas();
    sincronizarClientes();
});
