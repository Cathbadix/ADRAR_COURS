# Pour écrire un commentaire en python, ont utilise de hacktag "#".
"""Ceci est un commentaire, 
de type chaine multi-ligne"""

print("Hello, World!")
# Affiche le message Hello, World

if 5 > 2:
    print("Cinq est plus grand que deux! / Five is greater than two!")
# L'indentation fait reference aux espaces au debut d'une ligne de code.
# L'indentation in dique un bloc de code, l'ouliber vous donneraune erreur.

# VARIABLE
# Une *variable* est un registre permettant de stocker et référencer une valeur. 
x = 5 
# la vairable x a pour valeur 5, elle est de type int (integer = entier)
y = "John"
# la variable y a pour valeur John , est est de type str (string = chaine de caractère)
print(x)
print(y)
# Le nom d'une variable commence toujours par une lettre ou un underscore
# Le nom d'une variable ne commence jamais par un chiffre
# Le nom d'une variable est compose uniquement de chiffre, de lettre, et de underscore.
# Le nom des variable sont sensible à la case. (age, AGE, Age, aGe,etc...)

# Nombreuses valeurs pour plusieurs variables
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)

# une valeur pour plusieurs variables
x = y = z = "Orange"
print(x)
print(y)
print(z)

# Déballer une collection, liste , tuple, range
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)

# Range (start, stop, step)
