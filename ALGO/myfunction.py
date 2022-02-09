# calculer la somme de toutes les valeurs entre 2 points
def calcul(a,b):
    resultat = 0
    for i in range(a, b):
         resultat += i
    return(resultat)

print(calcul(1,993)) # retourne 5050.

