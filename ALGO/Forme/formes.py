def full_line(n,c):
    s = ""
    for _ in range(n):
        s += c # J'ajoute un caractère à la fin de s
    return s

def empty_line(n,c1,c2):
	s = ""
	s += c1 # Je mets un caractère "plein" à gauche
	for _ in range(n-2): # Je mets n-2 caractères "vides" au milieu
			s += c2
	if n>1:
		s += c1  # Je mets un caractère "plein" à droite
	return s
	
def full_rectangle(largeur,hauteur,c):
	s = ""
	for _ in range(hauteur):
		s += full_line(largeur,c) + "\n"
	return s
	
def empty_rectangle(largeur, hauteur, c1, c2):
	s = ""
	s+= full_line(largeur,c1) + "\n"
	for _ in range (hauteur-2):
		s += empty_line(largeur,c1,c2) + "\n"
	s+= full_line(largeur,c1) + "\n"
	return s
	
def full_triangle1(h,c):
	s = ""
	return s
	
def full_triangle2(h,c1,c2):
	s = ""
	return s
	
	
def full_triangle3(hauteur,c1,c2):
	s=""
	return s
	
def empty_triangle1(hauteur,c1,c2):
	s = ""
	return s

def empty_triangle2(hauteur,c1,c2):
	s = ""
	return s
	
def empty_triangle3(hauteur,c1,c2):
	s = ""
	return s