export const CreateUserUP =
`CREATE PROCEDURE pr_create_user(
in email varchar(255),
in pass varchar(255),
in name varchar(255)
)
begin
    
    declare date_now datetime;
    declare id int;
    declare user_id varchar(255);
    declare hash varchar(255);
    
    set date_now = now();
    set user_id = UUID();
    
    insert into Users (name, email, password, idUser, dateCreated) values (name, email, '', user_id, date_now);
    set id = LAST_INSERT_ID();
    set hash = SHA2(CONCAT(date_now, email, pass, id, user_id), 512);
    
    update Users u set u.password = hash where u.id = id;
    select user_id;
end`;

export const CreateUserDOWN = 
`DROP PROCEDURE IF EXISTS pr_create_user;`
