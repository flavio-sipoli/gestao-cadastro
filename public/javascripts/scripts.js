function registerClient() {
    let nome = document.getElementById("name").value;
    let cpf = document.getElementById("cpf").value;
    let endereco = document.getElementById("address").value;
    let numero = document.getElementById("number").value;
    let complemento = document.getElementById("details").value;
    let cep = document.getElementById("cep").value;
    let telefone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let client = {
        nome,
        cpf,
        endereco,
        numero,
        complemento,
        cep,
        telefone,
        email,
    };

    let newClient = JSON.stringify(client);
    localStorage.setItem(cpf, newClient);
}

function registerProduct() {

    let tinto = document.getElementById("tinto").value;
    let branco = document.getElementById("branco").value;
    let vinicola = document.getElementById("vinicola").value;
    let pais = document.getElementById("pais").value;
    let referencia = document.getElementById("ref").value;
    let preco = document.getElementById("price").value;
    let quantidade = document.getElementById("quantity").value;

    let product = {
        tinto,
        branco,
        vinicola,
        pais,
        referencia,
        preco,
        quantidade,
    };

    let newProduct = JSON.stringify(product);
    localStorage.setItem(referencia, newProduct)

}
