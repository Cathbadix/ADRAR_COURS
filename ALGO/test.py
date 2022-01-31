# Cette ligne permet de charger les fonctionnalités de la tortue
from turtle import *

# Faire avancer la tortue de 100 px
forward(100) 

# Viser une direction, 0 : droite, 90 : haut, 180 : gauche, 270 : bas
setheading(0)

# Changer la couleur de la tortue
color('red')

# Augmente la taille du crayon
pensize(10)

# Arc de cercle sur la gauche
circle(100,180)
#  rayon = 100, angle = 180

# Arc de cercle sur la droite
circle(-50,90)
# rayon = 50, angle = 90

# lever la tortue
up()

# poser la tortue
down()

reset()
# reinitialise

# Faire pause à la fin du programme
input()

# repeat
for _ in range(4):

# angle
right(90)
left(135)
# forme un angle de 90° à droite
#  forme un angle de 135° à gauche
