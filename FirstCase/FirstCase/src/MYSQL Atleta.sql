CREATE TABLE ATLETAS(
id varchar(255) ,
atleta varchar(255), 
competicao varchar(255) ,
unidade varchar(255) ,
value varchar(255)
);

SELECT * FROM ATLETAS;

INSERT INTO ATLETAS(id,atleta,competicao,unidade,value)
VALUES("1","Felipe Santos","nataçao","50","m");

DROP TABLE ATLETAS