# Exercice 1 : écrire 50 fois "Bonjour" dans la console.
print("Exercice 1")
for _ in range(50):
    print('Bonjour')

# Exercice 2 : écrire dans la console :
# A
# B
# A
# B
# A
# B
# A
# B
# A
# B
print("Exercice 2")
a = 'A'
b = 'B'
for _ in range(3):
    print(a)
    print(b)

# Exercice 3 : écrire dans la console :
# A
# A
# A
# A
# A
# B
# A
# A
# A
# A
# A
# B
# A
# A
# A
# A
# A
# B
print("Exercice 3")
for _ in range(3):
    for _ in range(5):
        print('A')
    print('B')
    

# Exercice 4 : écrire dans la console :
# 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
print("Exercice 4")

for i in range(0,10):
    print(i)

# Exercice 5 : écrire dans la console :
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# 11
# 12
print("Exercice 5")
for i in range(3, 13):
    print(i)
    


# Exercice 6 : écrire dans la console :
# 12
# 11
# 10
# 9
# 8
# 7
# 6
# 5
# 4
# 3
print("Exercice 6")
for i in range(12, 2, -1):
    print(i)
    

# Exerice 7 : écrire dans la console :
# 0
# 1
# 2
# 3
# 0
# 1
# 2
# 3
# 0
# 1
print("Exercice 7")
for i in range(2):
    for i in range(0,4):
        print(i)
print(0)
print(1)
print("exercice 7 bis")
for i in range(10):
    print(i%4)

# Exercice 8 : écrire dans la console :
# 0
# 1
# 2
# 3
# 4
# A
# A
# A
# 8
# 9
print("Exercice 8")

for i in range(0, 10):
    if i > 4 and i <8:
        print("A")
    else:
        print(i)


# Exercice 9 : écrire dans la console :
# 100
# 1
# 2
# 103
# 4
# 5
# 106
# 7
# 8
# 109
print("Exercice 9")
for i in range(0, 10):
    if i%3 ==0:
        i += 100
    print(i)
        

# Exercice 10 : écrire dans la console :
# 0
# 101
# 202
# 3
# 104
# 205
# 6
# 107
# 208
# 9
print("Exercice 10")
for i in range(0, 10):
    if i%3 == 1:
        i += 100
    elif i%3 == 2:
        i += 200
    print(i)

# Exercice 11 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
print("Exercice 11")
resultat = 0
for i in range(1, 101):
    resultat += i
    print(resultat)

# Exercice 12 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
print("Exercice 12")
# TODO
result = 0
i = 0
while result < 302253:
    i += 1
    result += i
print(i)

# Exercice 13 : écrire dans la console tous les résultats possibles de lancers de deux dé :
# 1 1
# 1 2
# 1 3
# ...
# 6 4
# 6 5
# 6 6
print("Exercice 13")
# TODO
for i in range(1,7):
    for n in range(1,7):
        print(i, n)

# Exercice 14 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
print("Exercice 14")
# TODO

# Exercice 15 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
print("Exercice 15")
# TODO

# Exercice 16 : afficher la table de multiplication de 1 (de 1 à 9):
# 1 x 1 = 1
# 1 x 2 = 2
# 1 x 3 = 3
# 1 x 4 = 4
# 1 x 5 = 5
# 1 x 6 = 6
# 1 x 7 = 7
# 1 x 8 = 8
# 1 x 9 = 9
print("Exercice 16")
# TODO

# Exercice 17 : que faut-il modifier du code précédent pour obtenir la table de 2 :
# 2 x 1 = 2
# 2 x 2 = 4
# 2 x 3 = 6
# 2 x 4 = 8
# 2 x 5 = 10
# 2 x 6 = 12
# 2 x 7 = 14
# 2 x 8 = 16
# 2 x 9 = 18
print("Exercice 17")
# TODO

# Exercice 18 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
# 1 x 1 = 1
# 1 x 2 = 2
# 1 x 3 = 3
# 1 x 4 = 4
# . . .
# 9 x 7 = 63
# 9 x 8 = 72
# 9 x 9 = 81
print("Exercice 18")
# TODO

# Exercice 19 : Afficher :
# 1
# 1
# 2
# 3
# 5
# 8
# 13
# 21
# 34
# 55
print("Exercice 19")
# TODO

# Exercice 20 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
print("Exercice 20")
# TODO

# Exercice 21 : afficher dans la console la forme suivante :
"""
*
**
***
****
*****
"""
print("Exercice 21")
# TODO

# Exercice 22 : afficher dans la console la forme suivante :
"""
    *
   **
  ***
 ****
*****
"""
print("Exercice 22")
# TODO

# Exercice 23 : afficher dans la console la forme suivante :
"""
    *
   ***
  *****
 *******
*********
"""
print("Exercice 23")
# TODO

# Exercice 24 : afficher dans la console la forme suivante :
"""
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
"""
print("Exercice 24")
# TODO
