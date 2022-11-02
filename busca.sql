-- 2) Buscar os pedidos mais recentes ordenados pela data e hora do pedido
SELECT * FROM pedidos ORDER BY horario;

-- 3) Buscar os produtos com menor valor
-- Produto mais barato
SELECT * from Produto order by preco limit 1;
-- Ordenado
SELECT  *  from Pedido  order by preco;
