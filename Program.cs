var CalculaDesconto = (double preco, double porcentagem) 
    => preco - (preco * porcentagem / 100);

// Main method
Console.WriteLine("Black Friday! Produtos com desconto de 60%");

double preco = Convert.ToDouble(Console.ReadLine());
double desconto = CalculaDesconto(preco, 60);

Console.WriteLine("Produto custava: " + preco);
Console.WriteLine($"Com o desconto: {preco - desconto:##.##}");
Console.WriteLine($"Valor do desconto: {desconto:##.##}");
