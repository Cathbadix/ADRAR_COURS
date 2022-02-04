# 1) Créer une liste l1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.
l1 = [144,202,216,216,222,64]

# 2) Ajouter le nombre 0 à la fin de la liste l1.
l1.append(0)

# 3) Afficher *un par un* tous les éléments de la liste l1.
for i in range(len(l1)):
    print(l1[i])

# 4) Retirer le dernier élément de la liste l1.
l1.pop()

# 5) Créer une liste l2 qui contient les nombres 238, 222, 228, 216, 200.
l2 = [238,222,228,216,200]

# 6) Ajouter le nombre 58 à la fin de l2.
l2.append(58)

# 7) Ajouter *un par un* tous les éléments de la liste l2 à la fin de la liste l1.
for i in range(len(l2)):
    l1.append(l2[i])
print(l1)

# 8) Afficher *un par un* tous les éléments de la liste l1.
for i in range(len(l1)):
    print(l1[i])

# 9) Retirer et stocker dans la variable ma_variable le dernier élément de la liste l1.
ma_variable = l1.pop()
print(ma_variable)

# 10) Afficher la taille de la liste l1.
len(l1)
print(len(l1))

# 11) Ajouter le nombre 66 à la fin de la liste l1.
l1.append(66)

# 12) Diviser par 2 toutes les variables contenues dans la liste l1.
for i in range(len(l1)):
    print(l1[i]//2)

# 13) Tester le code suivant pour vérifier si vous avez le bon résultat à la fin (le but n'est pas de chercher à comprendre ce code) :
# from functools import reduce
# print(reduce(lambda x,y:x+chr(int(y)),l1,""))
# print(chr(ma_variable)+chr(ma_variable-17))