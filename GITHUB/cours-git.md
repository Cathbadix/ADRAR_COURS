# 09/12/2021 Cours Git Adrar dispensé par Jonathan

### **1 - Télécharger**
> https://git-scm.com/

## CONFIGURER GIT:

### 2 - Enregistrer le User.name:
    $ git config --global user.name "User_Name"

### 3 - Enregistrer le User.email:
    $ git config --global user.email "monMail@mail.com"

### 4 - Vérifier sa configuration:
    $ git config --list

### 5 - Vérifier sa configuration:
    $ git config --global color.diff auto
    $ git config --global color.status auto
    $ git config --global color.branch auto



### 6 - Configurer son éditor:

    $ git config --global core.editor notepad++
    $ git config --global core.editor code
    $ git config --global merge.tool vimdiff

## INITIALISATION D'UN NOUVEAU PROJET ET COMMANDE:

> Memo Commande 
>
>> 1 - [Documentation de base fournit par Jonathan](../git_cour/documentation/notice_gitlocal_github.pdf)
>>
>> 2 - [Documentation de base fournit par Jonathan](../git_cour/documentation/git_cours_v01.pdf)
>>
>> 3 - [Documentation CMD de base](https://www.hostinger.fr/tutoriels/commandes-git#:~:text=Commandes%20GIT%20de%20base.%20L%E2%80%99une%20des%20commandes%20git,%C3%AAtre%20utilis%C3%A9e%20pour%20ajouter%20des%20fichiers%20%C3%A0%20l%E2%80%99index.)
>>
>---
>---
>
>>$ git init
>>
>>Cette commande est utilisée pour créer un nouveau dépôt GIT à la racine de votre dossier
>
>>$git add
>>
>>La commande git add peut être utilisée pour ajouter des fichiers à l’index.
>
>>$git clone
>>
>>La commande git clone est utilisée pour la vérification des dépôts
>
>>$git commit
>>
>>La commande git commit permet de valider les modifications apportées au HEAD. Notez que tout commit ne se fera pas dans le dépôt distant.
>
>>$git status
>>
>>La commande git status affiche la liste des fichiers modifiés ainsi que les fichiers qui doivent encore être ajoutés ou validés.
>
>>$git checkout
>>
>>La commande git checkout peut être utilisée pour créer des branches ou pour basculer entre elles. 
>>>créer une branche:
>>>>$git checkout -b "nom-branche"
>>
>>>Pour passer simplement d’une branche à une autre, utilisez:
>>>>$git checkout "nom-branche"
>
>>$ git branh
>>
>>La commande git branch peut être utilisée pour répertorier, créer ou supprimer des branches. 
>>
>>>Pour répertorier toutes les branches présentes dans le dépôt, utilisez:
>>>
>>>>$git branch
>>
>>>Pour supprimer une branche:
>>>
>>>>git branch –d "nom-branche"
>
>>$git pull
>>
>>Pour fusionner toutes les modifications présentes sur le dépôt distant dans le répertoire de travail local, la commande pull est utilisée. 
>>
>>>$git pull



### 7 - Initialiser un dépot local dans son dossier
    $ git init


### 8 - Créer un répository sur GitHub
    https://github.com/new

### 9 - Clone son repository en local
    $ git remote add clone https://github.com/Cathbadix/testgitdevops34.git

### 10 - Sauvegarde "Pull, Push, Commit"
    -->working directory -->stage --> repository "Historique des commits"

#### **10.1 - "PULL" On récupére notre repository distant**

    $ git pull https://github.com/Cathbadix/testgitdevops34.git

#### **10.2 - "PUSH And Commit" d'un fichier ajouter dans le dossier**
On créer un fichier à la racine de notre repository local
exemple: test.html

Ensuite, on va add ce fichier dans le Stage, pour le commit  par là suite sur notre repository distant à l'aide de $git add et $git commit -m.

    $ git add nomDuFichier

et

    $ git commit -m "ajout du fichier test.html"

ou pour plusieur fichier

    $ git add *

ou 

    $git add -A

et on le commit

    $git commit -am "raison du commit"


### 11 - Nano

Ouvrir un document existant:

    nano nomDuFichier.extention

On peut directement écrire dan le fichier via le CMD, pour sauvegarder la modification

    Ctrl+X et validé avec Y

### 12 - PUSH les commit

Pour push les commit, on utilise $git push lienDuRepository

    $ git push https://github.com/Cathbadix/testgitdevops34.git

### 13 - Créer une nouvelle Branch

Pour créer une nouvelle branch dev, faite la commande $ git branch nomDeLaBranche dans le Bash

    $ git branch dev

et faite un $git checkout pour basculer dessus

    $ git checkout nomDeLaBranche

### 14 - Basculer d'une Branch à une autre

Nous pouvons basculer d'une branche à l'autre via notre bash. Pour ce faire, il suffit d'utiliser la commande $ git checkout nomDeLaBranche ou l'on souhaite travailler.
D'une branche à une autres, il est normal de ne pas forcément voir les fichier rajouter dans une ou l'autre branche, ne paniquer donc pas.

Donc nous avons tous la branch master et nous allons créer une branch dev, pour ce faire on tappe cette commande dans le bash:

    $ git branch dev

et on bascule dessus:

    $ git checkout dev

Vous remarquerez dans votre bash, que vous êtes passer de master à dev:

![master-dev](../git_cour/img/master_dev.png)

> Tous les fichiers que vous créerez sur cette novuelle branch, n'apparaîtrons que sur cette branch, si vous basculer donc sur la branche Master, ne soyez pas surpris de ne pas voir les nouveaux document dans votre dossier.