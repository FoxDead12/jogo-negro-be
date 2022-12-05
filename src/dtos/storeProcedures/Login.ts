export const LoginUP =
`CREATE PROCEDURE pr_login(
in email varchar(255),
in pass varchar(255)
)
begin
    declare id int;
    declare date_created datetime;
    declare user_id varchar(255);
    declare hash varchar(255);
    declare userHash varchar(255);

    SELECT u.password, u.dateCreated, u.id, u.idUser into userHash, date_created, id, user_id FROM Users u WHERE u.email = email;
    set hash = SHA2(CONCAT(date_created, email, pass, id, user_id), 512);

    if(hash = userHash) then
        select user_id;
    else 
        select 0;
    end if;
end`;

export const LoginDOWN = 
`DROP PROCEDURE IF EXISTS pr_login;`
