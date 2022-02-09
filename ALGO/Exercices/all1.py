# Fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
def display_last(l):
    print(l[len(l)-1])

display_last([1,2,3,4,5,6,7,8,9])
display_last([1,2,3,4,5,6])
display_last([1,2,3,4,5,6,7,8,9,10,11,12,13])

# Fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
def return_last(l):
    return (l[len(l)-1])

print(return_last([1,2,3,4,5,6,7,8,9]))
print(return_last([1,2,3,4,5,6]))
print(return_last([1,2,3,4,5,6,7,8,9,10,11,12,13]))

# Fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
def return_min(l):
    minimum = l[0]
    for i in range(1,len(l)):
        if minimum > l[i]:
            minimum = l[i]
    return minimum
l = [0,1,2,3,4,5,6,7,8,9,10]
l2 = [0,1,2,3,-4,5,6,7,8,9,-10]
l3 = [0,1,-2,3,4,5,6,-7,8,9,10]
print(return_min(l))
print(return_min(l2))
print(return_min(l3))

# Fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
def return_max(l):
    maximum = l[0]
    for i in range(1,len(l)):
        if maximum < l[i]:
            maximum = l[i]
    return maximum
l = [0,1,2,3,4,5,6,7,8,9,10]
l2 = [0,1,2,3,-4,5,6,7,8,9,-10]
l3 = [0,1,-2,3,4,5,6,-7,8,9,10,11,12]
print(return_max(l))
print(return_max(l2))
print(return_max(l3))

# ++ Fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
def second_biggest(l):
    top1 = 0
    top2 = 0
    for e in l:
        if e>top1:
            top2 = top1
            top1 = e
        elif e>top2:
            top2 = e
    return top2
print(second_biggest([2,1,9,5,7,5,6,58,12,47,64,21,47,59,65,22]))

# Fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
def count(l,n):
    counter = 0
    for i in range(len(l)):
        if n == l[i]:
            counter += 1
    return counter

print(count([2,1,2,3,1,2,3,4,2,3,4],2))
print(count([2,1,2,3,1,2,3,4,2,3,4],3))
print(count([2,1,2,3,1,2,3,4,2,3,4],1))

# Fonction qui prend en entrée un tableau et un nombre et qui retourne True si le nombre existe dans le tableau, False sinon.

# def true_false(l,n):    
#     for i in range(len(l)):
#         if n == l[i]:
#             return True
#         else:
#             return False 

# def true_false(l,n):
#     a = False
#     for i in range(len(l)):
#         if n == l[i]:
#             a = True
#     return a 

# def true_false(l,n):    
#     for i in range(len(l)):
#         if n == l[i]:
#             return True
#     return False

def true_false(l,n):   
    return count(l,n) >= 1   
        
print(true_false([1,2,3,1,2,3,4,2,3,4],1))     
print(true_false([1,2,3,1,2,3,4,2,3,4],10))
print(true_false([1,2,3,1,2,3,4,2,3,4],9))     
print(true_false([1,2,3,1,2,3,4,2,3,4],4))
print(true_false([1,2,3,1,2,3,4,2,3,4],3))
print(true_false([1,2,3,1,2,3,4,2,3,4],2))
print(true_false([1,2,3,1,2,3,4,2,3,4],21))


# Variante de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?
