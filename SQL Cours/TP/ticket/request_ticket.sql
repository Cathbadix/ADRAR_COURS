SELECT * FROM `vendeurs`;

SELECT nom_article FROM `articles`
inner join ajouter on articles.id_article = ajouter.id_article
inner join tickets on ajouter.id_ticket = tickets.id_ticket
inner join vendeurs on tickets.id_vendeur = vendeurs.id_vendeur
WHERE vendeurs.id_vendeur = 3; 

SELECT SUM(prix_article) as total FROM `articles`;

-- 4-Afficher la somme de tous les articles du ticket 2
SELECT SUM(prix_article) 

select ajouter.id_ticket, ajouter.id_article, article.nom_article, article.prix_article,
ajouter.qtx, round((article.prix_article * ajouter.qtx), 2) 
as sous_total, ticket.date_ticket, vendeur.nom_vendeur, vendeur.prenom_vendeur from ajouter

inner join article, ticket, vendeur 
where ajouter.id_article = article.id_article 
and ajouter.id_ticket = ticket.id_ticket 
and ticket.id_vendeur = vendeur.id_vendeur;

