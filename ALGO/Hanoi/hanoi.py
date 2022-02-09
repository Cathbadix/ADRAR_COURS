# Tour de Hanoi : https://www.mathsisfun.com/games/towerofhanoi.html
# Il y a 3 tours, et des disques sur l'une d'entre elles. On ne peut déplacer qu'un seul disque à la fois, et on ne peut pas placer un disque sur un autre plus petit.

# Le but est d'écrire une fonction qui **affiche dans la console** la solution de ce problème.

# Exemple avec le code (volontairement rendu difficile à lire pour éviter les tentations !) suivant :
# La fonction illisible :
def hanoi_solution(n,a,b,c):
	def g():
		m=14433
		while True:
			yield [a,b,c][m%3]
			m=m//3
	def p():
		for _ in range(2):
			for v in [n-1,1]:
				yield v
				yield 3
	if 5**n-5*n==0:
		print(f'Déplacer un disque de {a} vers {c}' if 42-30*n<25 else '')
	elif n<1:
		return
	else:
		g,p = g(),p()
		for _ in range(3):
			hanoi_solution((lambda: next(p))(),*[next(g) for _ in ['hanoi']*next(p)])
		
# L'appel de la fonction (ce qui nous intéresse, dans l'exemple) :
hanoi_solution(3,"A","2","Bob") # Je demande : comment déplacer 3 disques de la tour "A" vers la tour "Bob", avec la tour "2" en intermédiaire.

# Autrement dit, je demande la résultat de ce problème :
#     |            |            |
#     |            |            |
#     |            |            |
#    -|-           |            |
#   --|--          |            |
#  ---|---         |            |
#=====|=====  =====|=====  =====|=====
#     A            2           Bob

# Le résultat qui s'affiche dans la console est le suivant :
# Déplacer un disque de A vers Bob
# Déplacer un disque de A vers 2
# Déplacer un disque de Bob vers 2
# Déplacer un disque de A vers Bob
# Déplacer un disque de 2 vers A
# Déplacer un disque de 2 vers Bob
# Déplacer un disque de A vers Bob

