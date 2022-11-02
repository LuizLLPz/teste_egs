
insert into Produto values (1, 'Bolacha Maria', 5.50);

-- Promoção 
update Produto set valor = 5.00 where id = 1;

delete from Produto where id = 1;
insert into Produto values (1, 'Bolacha Maria', 5.50);
insert into Pedido values (1, 'Lucas', '2018-01-01 10:00:00', 20.00);
update Pedido set horario = '2018-01-02 10:00:10' where id = 1;
delete from Pedido where id = 1;
insert into Pedido values (1, 'Lucas', '2018-01-01', 20.00);
insert into produto_pedido values (1, 1, 4);



-- Populando banco para busca

insert into Produto values (2,'Refrigerante 1L',5.00);
insert into Produto values (3, 'Saco de arroz 5kg', 10.00);
insert into Produto values (4, 'Açucar 1kg', 2.00);
insert into Produto values (5, 'Margarina sem sal 500g', 3.00);

insert into Pedido values (2, 'Leandro', '2022-11-01 18:30:40', 08.00);
insert into Pedido values (3, 'Lincoln', '2022-11-01 09:25:15', 12.00);
insert into Pedido values (4, 'Lucas', '2022-11-02 12:03:18', 02.00);
insert into Pedido values (5, 'Laerte', '2022-11-01 19:50:18', 11.00);
