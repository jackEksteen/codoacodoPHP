create database integrador_cac;

use integrador_cac;

create table oradores
    (id_orador  integer auto_increment not null,
    nombre      varchar(20) not null,
    apellido    varchar(30) not null,
    mail        varchar(50)not null,
    tema        varchar(30),
    fecha_alta  datetime ,
    primary key (id_orador));


insert into oradores ( nombre, apellido, mail, tema, fecha_alta) values ("Mario", "Luis", "marioluis@mail", "programacion", '2023-11-15');
insert into oradores ( nombre, apellido, mail, tema, fecha_alta) values ("Juan", "Perez", "juanperez@mail", "programacion", '2023-11-15');
insert into oradores ( nombre, apellido, mail, tema, fecha_alta)  values ("Marcos", "Maidana", "marcosmaidanas@mail", "programacion", '2023-11-15');
insert into oradores ( nombre, apellido, mail, tema, fecha_alta) values ("Rene", "Houseman", "Houseman73@mail", "programacion", '2023-11-15');
insert into oradores ( nombre, apellido, mail, tema, fecha_alta) values ("Diego", "Maradona", "eldiegote@mail", "ciberseguridad", '2023-11-15');
insert into oradores ( nombre, apellido, mail, tema, fecha_alta) values ("Linus", "Tovard", "tovard@mail", "ciberseguridad", '2023-11-15');
insert into oradores ( nombre, apellido, mail, tema, fecha_alta) values ("Dario", "Peña", "elrestaurador@mail", "matematica", '2023-11-15');
insert into oradores ( nombre, apellido, mail, tema, fecha_alta) values ("Alan", "Sanchez", "sanchez@mail", "fisica", '2023-11-15');
insert into oradores ( nombre, apellido, mail, tema, fecha_alta) values ("Rob", "Halford", "halford@mail", "algebra", '2023-11-15');

select * from oradores;