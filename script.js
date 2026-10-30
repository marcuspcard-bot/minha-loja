// Preços dos produtos (iguais aos da página)
let precoBurguer = 18;
let precoBatata = 12;
let precoSuco = 8;

function simularCompra() {

    // 1. Perguntar a quantidade de cada produto
    let qtdBurguer = prompt("Quantos X-Burguer você quer? (R$ 18,00 cada)\nDigite 0 se não quiser.");
    let qtdBatata = prompt("Quantas Batatas Fritas você quer? (R$ 12,00 cada)\nDigite 0 se não quiser.");
    let qtdSuco = prompt("Quantos Sucos Naturais você quer? (R$ 8,00 cada)\nDigite 0 se não quiser.");

    // 2. Converter as respostas para número
    qtdBurguer = Number(qtdBurguer);
    qtdBatata = Number(qtdBatata);
    qtdSuco = Number(qtdSuco);

    // Se a pessoa digitar algo que não é número ou um número negativo, conta como 0
    if (isNaN(qtdBurguer) || qtdBurguer < 0) {
        qtdBurguer = 0;
    }
    if (isNaN(qtdBatata) || qtdBatata < 0) {
        qtdBatata = 0;
    }
    if (isNaN(qtdSuco) || qtdSuco < 0) {
        qtdSuco = 0;
    }

    // Se todas as quantidades forem zero, avisa e para a função
    if (qtdBurguer == 0 && qtdBatata == 0 && qtdSuco == 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    // 3. Calcular o valor de cada produto (preço x quantidade)
    let valorBurguer = precoBurguer * qtdBurguer;
    let valorBatata = precoBatata * qtdBatata;
    let valorSuco = precoSuco * qtdSuco;

    let total = valorBurguer + valorBatata + valorSuco;

    // Verificar se tem direito ao desconto (compra a partir de R$ 50)
    let desconto = 0;
    if (total >= 50) {
        desconto = total * 0.10;
    }

    let totalFinal = total - desconto;

    // 4. Montar a mensagem e mostrar com alert
    let mensagem = "=== RESUMO DA COMPRA ===\n\n";
    mensagem = mensagem + "X-Burguer: " + qtdBurguer + " x R$ 18,00 = R$ " + valorBurguer.toFixed(2) + "\n";
    mensagem = mensagem + "Batata Frita: " + qtdBatata + " x R$ 12,00 = R$ " + valorBatata.toFixed(2) + "\n";
    mensagem = mensagem + "Suco Natural: " + qtdSuco + " x R$ 8,00 = R$ " + valorSuco.toFixed(2) + "\n\n";
    mensagem = mensagem + "Subtotal: R$ " + total.toFixed(2) + "\n";

    if (desconto > 0) {
        mensagem = mensagem + "Desconto (10%): - R$ " + desconto.toFixed(2) + "\n";
    } else {
        mensagem = mensagem + "Sem desconto (compre a partir de R$ 50,00 para ganhar 10%)\n";
    }

    mensagem = mensagem + "TOTAL A PAGAR: R$ " + totalFinal.toFixed(2);

    alert(mensagem);
}
