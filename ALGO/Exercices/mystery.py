def f1(l):
	result=0
	for i in range(len(l)):
		if l[i]%2 == 0: # Si le contenue de la case numéro i est paire
			result += l[i] # J'ajoute ce contenue
	return result
# Ici on regarde la valeur de la case dans le tableau.
# C'est une focntion qui retourne la somme de tous les nombres paires de la liste.
	
def f2(l):
	result=0
	for i in range(len(l)):
		if i%2 == 0: # Si le NUMERO de la case numero i est pair (autrement dit, si i est pair)
			result += l[i] # J'ajoute ce numero en question
	return result
	
liste = [0,1,2,3,4,5,6,7,8,9,10]
print('Avec f1 :',f1(liste))
print('Avec f2 :',f2(liste))

# Ici on regarde la valeur du numéro de la case
# C'est une fonction qui retourne la somme de tous les nombres paires des numéros de case de la liste.

# Ecrire une fontion f3 qui prends en entree une liste.
#  et qui retourne la somme des numéros de cases des éléments pairs d'une liste.

def f3(l):
    result=0
    for i in range(len(l)):
        if l[i]%2 == 0:
            result += i
    return result

liste = [3,7,2,20,-3,-8]
print('Avec f1 :',f1(liste))
print('Avec f2 :',f2(liste))
print('Avec f3 :',f3(liste))