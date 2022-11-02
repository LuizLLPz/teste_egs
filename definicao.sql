use Master;
drop database if exists Teste;
create database Teste;

use Teste;

create table Pedido (
                        id int primary key,
                        nome varchar(70),
                        horario datetime,
                        valor float
);


create table Produto (
                         id int primary key,
                         nome varchar(70),
                         valor float
);


create table produto_pedido (
                                produto int,
                                pedido int,
                                quantidade int
                                foreign key (produto) references Produto(id),
                                foreign key (pedido) references Pedido(id),
                                primary key (produto,pedido)
);


