# Créer une liste
l = [1,4,7,8,5,2,5,2,5,2]

# Acccéder à un élément en particulier : nom[numéro de la case]
# Afficher ce qu'il y a dans la troisième case (case numéro 2)
print((l[2]))

# Modifier la valeur d'une case
l[6] = 99
print(l)

# Ajouter un élement à la fin de la liste
l.append(-7)
print(l)

#  Retirer le dernier élément
l.pop()
print(l)

# Retirer plusieur fois un élément
for _ in range(4):
    l.pop()
print(l)

#  EN plus de supprimer la dernière case de la liste, la fonction pop retourne la valeur qui était à l'intérieur
#  Retirer la dernière case ET afficher la valeur qui était dedans
print('On vient de supprimer',l.pop())
print(l)

# Taille (longeur) de la liste (nombre d'élèments à l'intérieur)
len(l)
print('Taille de la liste:',len(l))
