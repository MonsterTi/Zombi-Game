window.addEventListener('DOMContentLoaded', function () {
    window.document.body.style.background = "#000";
    var i = 0;
    var monCompteurRapidite = 0;
    var compteurKillCombien = 0;

    function entierAleatoireBallon(min, max) {
        return Math.floor((max - min) * Math.random()) + min;
    }
    var nombreBallon = 35;
    var margeDeMonBallon = nombreBallon;

    var monObjOiseaux = {
        monOiseauxDiv: {
            position: "absolute",
            top: 6,
            right: 20,
            left: 20,
            width: 110,
            height: 97,
            overflow: 'hidden'
        },
        monOiseauxMasque: {
            position: 'relative',
            margin: '0 auto',
            width: 82,
            height: 97,
            overflow: 'hidden'
        },
        monOiseaux: {
            src: 'image/oiseaux.png',
            position: 'absolute',
            top: -8,
            transform: 'scaleX(-1) rotate(32deg)',
            right: -235,
            height: 263
        }
    }

    // Mes objets images pour animer mes personnages 
    var mesImageObject1 = {
        monImage11: [{
                top: "-127%"
            },

            {
                top: "-16%",
            }
        ],
        monImage12: [{
                top: "-17%",
                right: "-472%",
            },

            {
                top: "-127%",
                right: "-472%",
            }
        ],
        monImageZombie: [{
                right: "-870%",
            },

            {
                right: "-769%",
            }
        ],
        monImagePigeon: [{
                top: "-12px",
                right: "-235px",
            },

            {
                top: "-135px",
                right: "-269px",
            }
        ],
    };

    var monObjZombie = {
        monZombieDiv: {
            position: "absolute",
            top: 325,
            left: 100,
            width: 95,
            height: 130,
            overflow: 'hidden'
        },
        monZombieDivMasque: {
            position: 'relative',
            margin: '0 auto',
            width: 102,
            height: 130,
            overflow: 'hidden'
        },
        monZombie: {
            src: 'image/zombie.png',
            position: 'absolute',
            top: -4,
            transform: 'scaleX(-1)',
            right: -808,
            height: 138
        }
    }

    var monBallonBouge = {
        left: 40,
    }


    var mesObjetsSprite = {
        mesZombiesTop: 325,
        mesZombiesTop2: 300,
        mesZombiesLeft: 53,
        mesZombiesLeft: 53,
        monJoueurLeft: 0,
        monJoueurRight: 0,
        mesOiseauxRight: "",
        mesOiseauxLeft: "",
        mesOiseauxTop: "",
    };



    var mesImageObject1 = {
        monImage11: [{
                top: "-127%"
            },

            {
                top: "-16%",
            }
        ],
        monImage12: [{
                top: "-17%",
                right: "-472%",
            },

            {
                top: "-127%",
                right: "-472%",
            }
        ],
        monImageZombie: [{
                right: "-870%"
            },

            {
                right: "-769%",
            }
        ],
        monImagePigeon: [{
                top: "-12px",
                right: "-235px",
            },

            {
                top: "-135px",
                right: "-269px",
            }
        ],
    };

    maCollisionJoueur = {
        joueurSpeed: 1
    }

    maVoitureObj = {
        voitureLeft: "-50"
    }


    var tirerGauche = false
    var animstop = false;
    var gameOver = false;

    window.onkeydown = function (event) {

        var code = event.keyCode; // Ma variable code pour placer mon évenement

        switch (code) {
            case 37:
                tirerGauche = false
                if (mesObjetsSprite.monJoueurLeft < 0) {
                    mesObjetsSprite.monJoueurLeft = 0;
                    i = 0;
                }
                if (!animstop) {
                    var maFrame = 0;
                    mouvement = setInterval(function () {

                        if (gameOver === false) {
                            if (monCompteurRapidite === 0) { // speed normal
                                i = i - 1
                            }
                            if (monCompteurRapidite === 1) { // speed aprés une collision oiseaux
                                i = i - 0.8
                            }
                            if (monCompteurRapidite === 2) { // speed aprés une collision oiseaux
                                i = i - 0.6
                            }
                            if (monCompteurRapidite === 3 || monCompteurRapidite > 3) { // speed aprés une collision oiseaux
                                i = i - 0.4
                            }
                            mesObjetsSprite.monJoueurLeft = i + 0;
                            if (maFrame >= mesImageObject1.monImage12.length) {
                                maFrame = 0;
                            }
                            monJoueur.style.transform = "scaleX(-1)"
                            monJoueur.style.top = mesImageObject1.monImage12[maFrame].top;
                            monJoueur.style.right = mesImageObject1.monImage12[maFrame].right;
                            maFrame++;
                        }

                        if (gameOver === true) {
                            i = i + 0
                            mesObjetsSprite.monJoueurLeft = i + 0;
                        }

                    }, 90)

                }
                animstop = true;
                break;
            case 38:
                break;
            case 39:
                tirerGauche = true
                if (mesObjetsSprite.monJoueurLeft >= 35) {
                    mesObjetsSprite.monJoueurLeft = 35;
                    i = mesObjetsSprite.monJoueurLeft;

                }
                if (!animstop) {
                    var maFrame = 0;
                    mouvement = setInterval(function () {
                        if (gameOver === false) {
                            if (monCompteurRapidite === 0) { // speed normal
                                i = i + 1
                            }
                            if (monCompteurRapidite === 1) { // speed aprés une collision oiseaux
                                i = i + 0.8
                            }
                            if (monCompteurRapidite === 2) { // speed aprés une collision oiseaux
                                i = i + 0.6
                            }

                            if (monCompteurRapidite === 3 || monCompteurRapidite > 3) { // speed aprés une collision oiseaux
                                i = i + 0.4
                            }
                            mesObjetsSprite.monJoueurLeft = i + 0;
                            if (maFrame >= mesImageObject1.monImage11.length) {
                                maFrame = 0;
                            }
                            monJoueur.style.transform = "none";
                            monJoueur.style.top = mesImageObject1.monImage11[maFrame].top;
                            monJoueur.style.right = "5%";
                            maFrame++;
                        }
                        if (gameOver === true) {
                            i = i + 0
                            mesObjetsSprite.monJoueurLeft = i + 0;
                        }
                    }, 95)

                }
                animstop = true;
                break;
            case 40:
                break;
            case 90:

                if (mesObjetsSprite.monJoueurLeft === nombreBallon) {
                    mesObjetsSprite.monJoueurLeft = nombreBallon;
                    i = mesObjetsSprite.monJoueurLeft;


                }
                if (gameOver === false) {

                    if (tirerGauche === true) {
                        if (margeDeMonBallon <= nombreBallon) {
                            maFunctionTirer()
                        }
                    }
                }
                break;
        };

    };
    window.onkeyup = function (event) {
        var code = event.keyCode;
        switch (code) {
            case 37:
                tirerGauche = false
                window.clearInterval(mouvement);
                animstop = false;
                break;
            case 38:

                break;
            case 39:

                if (mesObjetsSprite.monJoueurLeft >= 35) {
                    mesObjetsSprite.monJoueurLeft = 35;
                    i = mesObjetsSprite.monJoueurLeft;


                }
                window.clearInterval(mouvement);
                animstop = false;
                break;
            case 40:

                break;
            case 13:

                break;

            case 90:
                if (gameOver === false) {
                    if (tirerGauche === true) {
                        if (mesObjetsSprite.monJoueurLeft === nombreBallon) {
                            mesObjetsSprite.monJoueurLeft = nombreBallon;
                            i = mesObjetsSprite.monJoueurLeft;

                        }
                        monJoueur.style.right = "5%";
                    }
                }
                break;
        };
    };

    // Création des balises HTML
    //
    // Ma div principale
    var maDivPrincipale = window.document.createElement('div');
    maDivPrincipale.id = "madiv1";
    window.document.body.appendChild(maDivPrincipale);

    // Ma div maImgBg 
    var maImgBg = window.document.createElement('div');
    maImgBg.id = "madiv2";
    maImgBg.style.height = "825px";
    maImgBg.style.width = "106%";
    maImgBg.style.zIndex = "2";
    maImgBg.style.position = "absolute";
    maImgBg.style.background = "url('image/bg.png') no-repeat";
    maImgBg.style.backgroundSize = "110.9% 910px";
    maImgBg.style.margin = "-85px 0px 0px -129px";
    maDivPrincipale.appendChild(maImgBg)

    // Ma Div Game
    var maDivGame = window.document.createElement('div')
    maDivGame.id = "madiv3";
    maDivGame.style.overflow = "hidden";
    maDivGame.style.position = "absolute";
    maDivGame.style.zIndex = "1";
    maDivGame.style.right = "100px";
    maDivGame.style.top = "2px";
    maDivGame.style.background = "url('image/terrain.jpg') no-repeat";
    maDivGame.style.backgroundSize = "100% 599px";
    maDivGame.style.width = "82%";
    maDivGame.style.height = "596px";
    window.document.body.appendChild(maDivGame);
    // Fin des Balises HTML

    // Mon Score 
    monScore = window.document.createElement('div')
    monScore.id = "monScrore";
    monScore.style.background = "rgb(49, 45, 49)"
    monScore.style.color = "white";
    monScore.style.fontSize = "20px";
    monScore.style.position = "absolute";
    monScore.style.width = "auto";
    monScore.style.top = "89%";
    monScore.style.left = "80.5%";
    monScore.style.border = "1px solid white";
    maDivGame.appendChild(monScore);
    window.setInterval(function () {
        window.document.getElementById("monScrore").innerHTML = "&nbsp;&nbsp;" + "ZOMBIE" + "&nbsp;&nbsp;" + (compteurKillCombien) + "/20 &nbsp;";
    }, 500);
    // DEBUT DES PERSONNAGES DES JEUX

    // Création de mon Joueur principal 
    // Mon Joueur (DIV) principale
    var monJoueurDiv = window.document.createElement('div')
    monJoueurDiv.style.position = "absolute";
    monJoueurDiv.style.top = "325px"
    window.setInterval(function () {
        monJoueurDiv.style.left = mesObjetsSprite.monJoueurLeft + "%"
        if (mesObjetsSprite.monJoueurLeft >= 35) {
            mesObjetsSprite.monJoueurLeft = 35;
        }
        if (mesObjetsSprite.monJoueurLeft < 0) {
            mesObjetsSprite.monJoueurLeft = 0;
            i = 0;
        }
    }, 10);
    monJoueurDiv.style.width = "112px";
    monJoueurDiv.style.height = "128px";
    maDivGame.appendChild(monJoueurDiv);

    // Mon Joeur (DIV) Masque
    var monJoueurDivMasque = window.document.createElement('div')
    monJoueurDivMasque.style.position = "relative";
    monJoueurDivMasque.style.margin = "0 auto";
    monJoueurDivMasque.style.width = "103px";
    monJoueurDivMasque.style.height = "129px";
    monJoueurDivMasque.style.overflow = "hidden";
    monJoueurDiv.appendChild(monJoueurDivMasque);

    // Mon Joueur (IMG)
    var monJoueur = window.document.createElement('img')
    monJoueur.src = "image/joueur1.png";
    monJoueur.style.position = "absolute";
    monJoueur.style.top = "-17%"
    monJoueur.style.right = "5%";
    monJoueur.style.height = "298px";
    monJoueurDivMasque.appendChild(monJoueur);

    // Barre de speed
    var laBarredeSpeed = window.document.createElement('div')
    laBarredeSpeed.style.width = "100%";
    laBarredeSpeed.style.overflow = "hidden";
    laBarredeSpeed.style.position = "absolute";
    laBarredeSpeed.style.display = "inline-block";
    laBarredeSpeed.style.height = "20px";
    laBarredeSpeed.style.top = "-30px";
    laBarredeSpeed.style.border = "2px solid rgb(119, 117, 117)";
    laBarredeSpeed.style.borderRadius = "10px";
    monJoueurDiv.appendChild(laBarredeSpeed);

    var laBarredeSpeedCouleur = window.document.createElement('div')
    laBarredeSpeedCouleur.style.height = "20px";
    laBarredeSpeed.appendChild(laBarredeSpeedCouleur);

    monBoolean1 = true;
    monBoolean2 = true;
    monBoolean3 = true;
    monBoolean4 = true;
    window.setInterval(function () {

        if (monCompteurRapidite === 0 && monBoolean1) {
            laBarredeSpeedCouleur.style.width = "100%";
            laBarredeSpeedCouleur.style.background = "rgb(141, 226, 70)";
            monBoolean1 = false;
            monBoolean2 = true;
            monBoolean3 = true;
            monBoolean4 = true;
        }
        if (monCompteurRapidite === 1 && monBoolean2) {

            laBarredeSpeedCouleur.style.width = "80%";
            laBarredeSpeedCouleur.style.background = "rgb(210, 216, 56)";
            monBoolean1 = false;
            monBoolean2 = false;
            monBoolean3 = true;
            monBoolean4 = true;
        }
        if (monCompteurRapidite === 2 && monBoolean3) {

            laBarredeSpeedCouleur.style.width = "60%";
            laBarredeSpeedCouleur.style.background = "rgb(255, 149, 5)";
            monBoolean1 = false;
            monBoolean2 = false;
            monBoolean3 = false;
            monBoolean4 = true;
        }
        if (monCompteurRapidite >= 3 && monBoolean4) {

            laBarredeSpeedCouleur.style.width = "25%";
            laBarredeSpeedCouleur.style.background = "rgb(230, 68, 68)";
            monBoolean1 = false;
            monBoolean2 = false;
            monBoolean3 = false;
            monBoolean4 = false;
        }
    }, 200);

    // Fin de mon Joueur

    // Création de la voiture pour s'enfuir
    var monBooleanVoiture = false
    var margeDeMaVoiture = -50;

    var monBooleanVoiture = true;
    var monBooleanVoitureAvance = false;
    var maVoiture;
    var maVoitureImg;
    var creationVoitureOk = false


    var maVoitureSet = window.setInterval(function () {

        if (compteurKillCombien === 50) {
            maVoiture = window.document.createElement('div');
            maVoiture.style.width = "55%";
            maVoiture.style.zIndex = "1";
            maVoiture.style.position = "absolute";
            maVoiture.style.top = "48%";
            maVoiture.style.left = maVoitureObj.voitureLeft + "%";
            maDivGame.appendChild(maVoiture);

            maVoitureImg = window.document.createElement('img');
            maVoitureImg.src = "image/Chevrolet.png";
            maVoitureImg.style.width = "85%";
            maVoitureImg.style.position = "absolute";
            maVoitureImg.style.transform = "scaleX(-1)";
            maVoiture.appendChild(maVoitureImg);

            // monNuageDiv = window.document.createElement('div');
            // monNuageDiv.style.width = "80%";
            // monNuageDiv.style.zIndex = "1";
            // monNuageDiv.style.position = "absolute";
            // monNuageDiv.style.top = "10%";
            // monNuageDiv.style.left = maVoitureObj.voitureLeft+10 + "%";
            // maDivGame.appendChild(monNuageDiv);

            // monNuageImg = window.document.createElement('img');
            // monNuageImg.src = "image/cloud.png";
            // monNuageImg.style.width = "100%";
            // monNuageImg.style.left = "-26%"
            // monNuageImg.style.position = "absolute";
            // monNuageImg.style.transform = "scaleX(-1)";
            // monNuageDiv.appendChild(monNuageImg);

            creationVoitureOk = true;

            if (maVoiture !== undefined) {
                window.clearInterval(maVoitureSet);
            }


        }
    }, 50);

    var maVoitureEnMarche = window.setInterval(function () {

        
        var entierSupVoiture = Math.ceil(margeDeMaVoiture)

        if (monBooleanVoiture && creationVoitureOk) {
            maVoitureObj.voitureLeft = margeDeMaVoiture + "%";
            maVoiture.style.left = maVoitureObj.voitureLeft
            // monNuageDiv.style.left = maVoitureObj.voitureLeft
            margeDeMaVoiture = margeDeMaVoiture + 0.9;
            
            if (margeDeMaVoiture >= 5) {
                monBooleanVoiture = false;
                monBooleanVoitureAvance = true;
            }
        }

        if (monBooleanVoitureAvance) {
            maVoitureObj.voitureLeft = margeDeMaVoiture + "%";
            maVoiture.style.left = maVoitureObj.voitureLeft;
            margeDeMaVoiture = margeDeMaVoiture - 4;
            if (entierSupVoiture < -47) {
                monBooleanVoiture = false;
                monBooleanVoitureAvance = false;
                if (entierSupVoiture < -15) {

                    maDivGame.style.opacity = 0.3;
                    var imageGameWin = window.document.createElement('div')
                    imageGameWin.style.zIndex = "7";
                    imageGameWin.style.width = "20%";
                    imageGameWin.style.position = "absolute";
                    imageGameWin.style.top = "12%"
                    imageGameWin.style.right = "42%";
                    imageGameWin.style.height = "360px";
                    imageGameWin.style.background = "#303030";
                    imageGameWin.style.textAlign = "center";
                    imageGameWin.style.color = "#fff";
                    imageGameWin.style.paddingTop = "100px"
                    imageGameWin.style.fontSize = "25px"
                    imageGameWin.innerHTML = "Félicitations !" + "<br>" + "<br>" + "<a href='http://gouss95.free.fr/Dark/CV/Tanriverdi_Nicolas-CV2019.pdf'>" + "Voici le lien pour accéder à mon CV" + "</a>";
                    // imageGameWin.innerHTML = "&nbsp;&nbsp;" + "ZOMBIE" + "&nbsp;&nbsp;" + (compteurKillCombien) + "/20 &nbsp;";
                    window.document.body.appendChild(imageGameWin);

                    monTrue1Zombie = false;
                    monTrue2Zombie = false;
                    monTrue3Zombie = false;
                    monTrue4Zombie = false;
                }
                window.clearInterval(maVoitureEnMarche);
            }
            maDivGame.removeChild(monJoueurDiv);
            // maDivGame.removeChild(monNuageDiv);
        }
    }, 50)
    // FIN

    // Création de mon Ballon
    // Mon Ballon (DIV) principale
    var monBallonDiv = window.document.createElement('div')
    monBallonDiv.style.position = "absolute";
    monBallonDiv.style.bottom = "132px"
    monBallonDiv.style.left = "37%"
    monBallonRight = monBallonDiv.style.right
    monBallonDiv.style.width = "38px";
    monBallonDiv.style.height = "34px";
    monBallonDiv.style.overflow = "hidden";
    maDivGame.appendChild(monBallonDiv);

    // monBallonDivMasque (DIV) Masque
    var monBallonDivMasque = window.document.createElement('div')
    monBallonDivMasque.style.position = "relative";
    monBallonDivMasque.style.margin = "0 auto";
    monBallonDivMasque.style.width = "33px";
    monBallonDivMasque.style.height = "34px";
    monBallonDivMasque.style.overflow = "hidden";
    monBallonDiv.appendChild(monBallonDivMasque);

    // monBallon (IMG)
    var monBallon = window.document.createElement('img')
    monBallon.src = "image/ballon1.png";
    monBallon.style.position = "absolute";
    monBallon.style.height = "32px";
    monBallonDivMasque.appendChild(monBallon);
    // FIN DE MES Ballons



    // MA FONCTION TIRER AVEC MON JOUEUR
    monBooleenTirer = false
    maFunctionTirer = function () {
        monJoueur.style.right = "-238%";
        var entierSupJoueur = Math.ceil(mesObjetsSprite.monJoueurLeft)
        if (entierSupJoueur === nombreBallon || entierSupJoueur === nombreBallon - 1 || entierSupJoueur === nombreBallon - 2 || entierSupJoueur === nombreBallon - 3 || entierSupJoueur === nombreBallon - 4 || entierSupJoueur === nombreBallon - 5) {
            compteurKillCombien = compteurKillCombien + 1


            mesObjetsSprite.monJoueurLeft = nombreBallon - 3;
            i = mesObjetsSprite.monJoueurLeft;
            monBooleenTirer = true
            var testTirer = window.setInterval(function () {
                if (monBooleenTirer) {

                    monBallonBouge.left = margeDeMonBallon + "%";
                    monBallonDiv.style.left = monBallonBouge.left
                    var margeDeMonZombie1PourExplosion = margeDeMonZombie1
                    var margeDeMonZombie2PourExplosion = margeDeMonZombie2
                    var margeDeMonZombie3PourExplosion = margeDeMonZombie3
                    var margeDeMonZombie4PourExplosion = margeDeMonZombie4
                    margeDeMonBallon = margeDeMonBallon + 0.9;

                    if (margeDeMonBallon - 3 >= margeDeMonZombie1) {
                        nombreBallon = entierAleatoireBallon(7, 35);
                        monBallonDiv.style.left = nombreBallon + "%"
                        monBooleenTirer = false
                        margeDeMonBallon = nombreBallon
                        margeDeMonZombie1 = 100

                        // Image explosion
                        var testExploseZ1Boolean = true;
                        var monExplosionZ1 = window.document.createElement('img');
                        monExplosionZ1.src = "image/explosion-gif.gif";
                        monExplosionZ1.style.zIndex = "7"
                        monExplosionZ1.style.position = "absolute";
                        monExplosionZ1.style.top = "56%";
                        monExplosionZ1.style.width = "12%"
                        monExplosionZ1.style.left = margeDeMonZombie1PourExplosion + "%";
                        maDivGame.appendChild(monExplosionZ1);
                        var testExploseZ1 = window.setInterval(function () {

                            if (testExploseZ1Boolean) {
                                maDivGame.removeChild(monExplosionZ1);
                                testExploseZ1Boolean = false
                            } else {
                                window.clearInterval(testExploseZ1);
                            }
                        }, 400);
                        window.clearInterval(testTirer);
                    }

                    if (margeDeMonBallon - 3 >= margeDeMonZombie2) {
                        nombreBallon = entierAleatoireBallon(7, 35);
                        monBallonDiv.style.left = nombreBallon + "%"
                        monBooleenTirer = false
                        margeDeMonBallon = nombreBallon
                        margeDeMonZombie2 = 100

                        // Image explosion Zombie 2
                        var testExploseZ2Boolean = true;
                        var monExplosionZ1 = window.document.createElement('img');
                        monExplosionZ1.src = "image/explosion-gif.gif";
                        monExplosionZ1.style.zIndex = "7"
                        monExplosionZ1.style.position = "absolute";
                        monExplosionZ1.style.top = "56%";
                        monExplosionZ1.style.width = "12%"
                        monExplosionZ1.style.left = margeDeMonZombie2PourExplosion + "%";
                        maDivGame.appendChild(monExplosionZ1);
                        var testExploseZ2 = window.setInterval(function () {

                            if (testExploseZ2Boolean) {
                                maDivGame.removeChild(monExplosionZ1);
                                testExploseZ2Boolean = false
                            } else {
                                window.clearInterval(testExploseZ2);
                            }
                        }, 400);
                        window.clearInterval(testTirer);
                    }

                    if (margeDeMonBallon - 3 >= margeDeMonZombie3) {
                        nombreBallon = entierAleatoireBallon(7, 35);
                        monBallonDiv.style.left = nombreBallon + "%"
                        monBooleenTirer = false
                        margeDeMonBallon = nombreBallon
                        margeDeMonZombie3 = 100

                        // Image explosion Zombie 2
                        var testExploseZ3Boolean = true;
                        var monExplosionZ1 = window.document.createElement('img');
                        monExplosionZ1.src = "image/explosion-gif.gif";
                        monExplosionZ1.style.zIndex = "7"
                        monExplosionZ1.style.position = "absolute";
                        monExplosionZ1.style.top = "56%";
                        monExplosionZ1.style.width = "12%"
                        monExplosionZ1.style.left = margeDeMonZombie3PourExplosion + "%";
                        maDivGame.appendChild(monExplosionZ1);
                        var testExploseZ3 = window.setInterval(function () {

                            if (testExploseZ3Boolean) {
                                maDivGame.removeChild(monExplosionZ1);
                                testExploseZ3Boolean = false
                            } else {
                                window.clearInterval(testExploseZ3);
                            }
                        }, 400);
                        window.clearInterval(testTirer);
                    }

                    if (margeDeMonBallon - 3 >= margeDeMonZombie4) {
                        nombreBallon = entierAleatoireBallon(7, 35);
                        monBallonDiv.style.left = nombreBallon + "%"
                        monBooleenTirer = false
                        margeDeMonBallon = nombreBallon
                        margeDeMonZombie4 = 100

                        // Image explosion Zombie 4
                        var testExploseZ4Boolean = true;
                        var monExplosionZ1 = window.document.createElement('img');
                        monExplosionZ1.src = "image/explosion-gif.gif";
                        monExplosionZ1.style.zIndex = "7"
                        monExplosionZ1.style.position = "absolute";
                        monExplosionZ1.style.top = "56%";
                        monExplosionZ1.style.width = "12%"
                        monExplosionZ1.style.left = margeDeMonZombie4PourExplosion + "%";
                        maDivGame.appendChild(monExplosionZ1);
                        var testExploseZ4 = window.setInterval(function () {

                            if (testExploseZ4Boolean) {
                                maDivGame.removeChild(monExplosionZ1);
                                testExploseZ4Boolean = false
                            } else {
                                window.clearInterval(testExploseZ4);
                            }
                        }, 400);
                        window.clearInterval(testTirer);
                    }
                }
            }, 10);

        } else {
            monBooleenTirer = false

        }

    }


    // MES ZOMBIES CONSTRUCTEUR

    var monBooleen = true;
    var monCompteurZ = 0;
    var mesProtoZombie = [];

    var monBooleenZombie1 = true;
    var monBooleenZombie2 = false;
    var monBooleenZombie3 = false;
    var monBooleenZombie4 = false;
    var margeDeMonZombie1 = 100
    var margeDeMonZombie2 = 120
    var margeDeMonZombie3 = 130
    var margeDeMonZombie4 = 140
    var monTrueZombie = true
    var monTrue1Zombie = true
    var monTrue2Zombie = true
    var monTrue3Zombie = true
    var monTrue4Zombie = true
    var maFramez1 = 0;
    var maFramez2 = 0;
    var maFramez3 = 0;
    var maFramez4 = 0;

    var mesZombies = window.setInterval(function () {

        if (monBooleen) {
            mesProtoZombie[monCompteurZ] = Object.create(monObjZombie);


            if (mesProtoZombie[0] !== undefined && monBooleenZombie1) {

                monZombieDiv2 = window.document.createElement('div')
                monZombieDiv2.style.position = mesProtoZombie[0].monZombieDiv.position;
                monZombieDiv2.style.top = mesProtoZombie[0].monZombieDiv.top + "px"
                monZombieDiv2.style.left = mesProtoZombie[0].monZombieDiv.left;
                monZombieDiv2.style.width = mesProtoZombie[0].monZombieDiv.width + "px";
                monZombieDiv2.style.height = mesProtoZombie[0].monZombieDiv.height + "px";
                monZombieDiv2.style.overflow = mesProtoZombie[0].monZombieDiv.overflow;
                maDivGame.appendChild(monZombieDiv2);

                monZombieDivMasque2 = window.document.createElement('div')
                monZombieDivMasque2.style.position = mesProtoZombie[0].monZombieDivMasque.position;
                monZombieDivMasque2.style.margin = mesProtoZombie[0].monZombieDivMasque.margin;
                monZombieDivMasque2.style.width = 95 + "px";
                monZombieDivMasque2.style.height = mesProtoZombie[0].monZombieDivMasque.height + "px";
                monZombieDivMasque2.style.overflow = mesProtoZombie[0].monZombieDivMasque.overflow;
                monZombieDiv2.appendChild(monZombieDivMasque2);

                monZombie2 = window.document.createElement('img')
                monZombie2.src = mesProtoZombie[0].monZombie.src;
                monZombie2.style.position = mesProtoZombie[0].monZombie.position;
                monZombie2.style.top = mesProtoZombie[0].monZombie.top + "%";
                monZombie2.style.transform = mesProtoZombie[0].monZombie.transform;
                // monZombie2.style.right = mesProtoZombie[0].monZombie.right + "%";
                monZombie2.style.height = mesProtoZombie[0].monZombie.height + "px";
                monZombieDivMasque2.appendChild(monZombie2);

                monBooleenZombie1 = false;
                monBooleenZombie2 = true;
                monBooleenZombie3 = false;
                monBooleenZombie4 = false;
            }

            if (mesProtoZombie[1] !== undefined && monBooleenZombie2) {


                monZombieDiv3 = window.document.createElement('div')
                monZombieDiv3.style.position = mesProtoZombie[1].monZombieDiv.position;
                monZombieDiv3.style.top = mesProtoZombie[1].monZombieDiv.top + "px"
                monZombieDiv3.style.left = mesProtoZombie[1].monZombieDiv.left;
                monZombieDiv3.style.width = mesProtoZombie[1].monZombieDiv.width + "px";
                monZombieDiv3.style.height = mesProtoZombie[1].monZombieDiv.height + "px";
                monZombieDiv3.style.overflow = mesProtoZombie[1].monZombieDiv.overflow;
                maDivGame.appendChild(monZombieDiv3);

                monZombieDivMasque3 = window.document.createElement('div')
                monZombieDivMasque3.style.position = mesProtoZombie[1].monZombieDivMasque.position;
                monZombieDivMasque3.style.margin = mesProtoZombie[1].monZombieDivMasque.margin;
                monZombieDivMasque3.style.width = 95 + "px";
                monZombieDivMasque3.style.height = mesProtoZombie[1].monZombieDivMasque.height + "px";
                monZombieDivMasque3.style.overflow = mesProtoZombie[1].monZombieDivMasque.overflow;
                monZombieDiv3.appendChild(monZombieDivMasque3);

                monZombie3 = window.document.createElement('img')
                monZombie3.src = mesProtoZombie[1].monZombie.src;
                monZombie3.style.position = mesProtoZombie[1].monZombie.position;
                monZombie3.style.top = mesProtoZombie[1].monZombie.top + "%";
                monZombie3.style.transform = mesProtoZombie[1].monZombie.transform;
                monZombie3.style.right = mesProtoZombie[1].monZombie.right + "%";
                monZombie3.style.height = mesProtoZombie[1].monZombie.height + "px";
                monZombieDivMasque3.appendChild(monZombie3);

                monBooleenZombie1 = false;
                monBooleenZombie2 = false;
                monBooleenZombie3 = true;
                monBooleenZombie4 = false;
            }
            if (mesProtoZombie[2] !== undefined && monBooleenZombie3) {

                monZombieDiv4 = window.document.createElement('div')
                monZombieDiv4.style.position = mesProtoZombie[2].monZombieDiv.position;
                monZombieDiv4.style.top = mesProtoZombie[2].monZombieDiv.top + "px"
                monZombieDiv4.style.left = mesProtoZombie[2].monZombieDiv.left;
                monZombieDiv4.style.width = mesProtoZombie[2].monZombieDiv.width + "px";
                monZombieDiv4.style.height = mesProtoZombie[2].monZombieDiv.height + "px";
                monZombieDiv4.style.overflow = mesProtoZombie[2].monZombieDiv.overflow;
                maDivGame.appendChild(monZombieDiv4);

                monZombieDivMasque4 = window.document.createElement('div')
                monZombieDivMasque4.style.position = mesProtoZombie[2].monZombieDivMasque.position;
                monZombieDivMasque4.style.margin = mesProtoZombie[2].monZombieDivMasque.margin;
                monZombieDivMasque4.style.width = 95 + "px";
                monZombieDivMasque4.style.height = mesProtoZombie[2].monZombieDivMasque.height + "px";
                monZombieDivMasque4.style.overflow = mesProtoZombie[2].monZombieDivMasque.overflow;
                monZombieDiv4.appendChild(monZombieDivMasque4);

                monZombie4 = window.document.createElement('img')
                monZombie4.src = mesProtoZombie[2].monZombie.src;
                monZombie4.style.position = mesProtoZombie[2].monZombie.position;
                monZombie4.style.top = mesProtoZombie[2].monZombie.top + "%";
                monZombie4.style.transform = mesProtoZombie[2].monZombie.transform;
                monZombie4.style.right = mesProtoZombie[2].monZombie.right + "%";
                monZombie4.style.height = mesProtoZombie[2].monZombie.height + "px";
                monZombieDivMasque4.appendChild(monZombie4);


                monBooleenZombie1 = false;
                monBooleenZombie2 = false;
                monBooleenZombie3 = false;
                monBooleenZombie4 = true;

            }
            if (mesProtoZombie[3] !== undefined && monBooleenZombie4) {

                monZombieDiv5 = window.document.createElement('div')
                monZombieDiv5.style.position = mesProtoZombie[3].monZombieDiv.position;
                monZombieDiv5.style.top = mesProtoZombie[3].monZombieDiv.top + "px"
                monZombieDiv5.style.left = mesProtoZombie[3].monZombieDiv.left;
                monZombieDiv5.style.width = mesProtoZombie[3].monZombieDiv.width + "px";
                monZombieDiv5.style.height = mesProtoZombie[3].monZombieDiv.height + "px";
                monZombieDiv5.style.overflow = mesProtoZombie[3].monZombieDiv.overflow;
                maDivGame.appendChild(monZombieDiv5);

                monZombieDivMasque5 = window.document.createElement('div')
                monZombieDivMasque5.style.position = mesProtoZombie[3].monZombieDivMasque.position;
                monZombieDivMasque5.style.margin = mesProtoZombie[3].monZombieDivMasque.margin;
                monZombieDivMasque5.style.width = 95 + "px";
                monZombieDivMasque5.style.height = mesProtoZombie[3].monZombieDivMasque.height + "px";
                monZombieDivMasque5.style.overflow = mesProtoZombie[3].monZombieDivMasque.overflow;
                monZombieDiv5.appendChild(monZombieDivMasque5);

                monZombie5 = window.document.createElement('img')
                monZombie5.src = mesProtoZombie[3].monZombie.src;
                monZombie5.style.position = mesProtoZombie[3].monZombie.position;
                monZombie5.style.top = mesProtoZombie[3].monZombie.top + "%";
                monZombie5.style.transform = mesProtoZombie[3].monZombie.transform;
                monZombie5.style.right = mesProtoZombie[3].monZombie.right + "%";
                monZombie5.style.height = mesProtoZombie[3].monZombie.height + "px";
                monZombieDivMasque5.appendChild(monZombie5);


                monBooleenZombie1 = false;
                monBooleenZombie2 = false;
                monBooleenZombie3 = false;
                monBooleenZombie4 = false;
            }
            monCompteurZ++;

            if (monCompteurZ === 4) {
                monBooleen = false
            }
        }

        if (monTrueZombie) {

            if (monTrue1Zombie) {
                mesProtoZombie[0].monZombieDiv.left = margeDeMonZombie1 + "%";
                monZombieDiv2.style.left = mesProtoZombie[0].monZombieDiv.left
                margeDeMonZombie1 = margeDeMonZombie1 - 0.9;

                if (maFramez1 >= mesImageObject1.monImageZombie.length) {
                    maFramez1 = 0;
                }
                monZombie2.style.right = mesImageObject1.monImageZombie[maFramez1].right;
                maFramez1++;

                if (margeDeMonZombie1 < 0) {
                    margeDeMonZombie1 = 100
                    
                }
            }

            if (monTrue2Zombie) {
                mesProtoZombie[1].monZombieDiv.left = margeDeMonZombie2 + "%";
                monZombieDiv3.style.left = mesProtoZombie[1].monZombieDiv.left
                margeDeMonZombie2 = margeDeMonZombie2 - 0.9;

                if (maFramez2 >= mesImageObject1.monImageZombie.length) {
                    maFramez2 = 0;
                }
                monZombie3.style.right = mesImageObject1.monImageZombie[maFramez2].right;
                maFramez2++;

                if (margeDeMonZombie2 < 0) {
                    margeDeMonZombie2 = 100
                    
                }

            }

            if (monTrue3Zombie) {
                mesProtoZombie[2].monZombieDiv.left = margeDeMonZombie3 + "%";
                monZombieDiv4.style.left = mesProtoZombie[2].monZombieDiv.left
                margeDeMonZombie3 = margeDeMonZombie3 - 0.9;

                if (maFramez3 >= mesImageObject1.monImageZombie.length) {
                    maFramez3 = 0;
                }
                monZombie4.style.right = mesImageObject1.monImageZombie[maFramez3].right;
                maFramez3++;

                if (margeDeMonZombie3 < 0) {
                    margeDeMonZombie3 = 100
                   
                }


            }

            if (monTrue4Zombie) {
                mesProtoZombie[3].monZombieDiv.left = margeDeMonZombie4 + "%";
                monZombieDiv5.style.left = mesProtoZombie[3].monZombieDiv.left
                margeDeMonZombie4 = margeDeMonZombie4 - 0.9;

                if (maFramez4 >= mesImageObject1.monImageZombie.length) {
                    maFramez4 = 0;
                }
                monZombie5.style.right = mesImageObject1.monImageZombie[maFramez4].right;
                maFramez4++;

                if (margeDeMonZombie4 < 0) {
                    margeDeMonZombie4 = 100
                   
                }


            }

            // Ma collision avec mon Joueur et mes Zombies

            var entierZombie1 = Math.ceil(margeDeMonZombie1)
            var entierZombie2 = Math.ceil(margeDeMonZombie2)
            var entierZombie3 = Math.ceil(margeDeMonZombie3)
            var entierZombie4 = Math.ceil(margeDeMonZombie4)
            var entierJoueur = Math.ceil(mesObjetsSprite.monJoueurLeft) + 6

            if (entierJoueur >= entierZombie1 || entierJoueur >= entierZombie2 || entierJoueur >= entierZombie3 || entierJoueur >= entierZombie4) {
                i = mesObjetsSprite.monJoueurLeft
                monJoueurDiv.style.left = i

                monTrue1Zombie = false;
                monTrue2Zombie = false;
                monTrue3Zombie = false;
                monTrue4Zombie = false;

                monJoueur.src = mesProtoZombie[3].monZombie.src;
                monJoueur.style.position = "absolute";
                monJoueur.style.top = mesProtoZombie[3].monZombie.top + "%";
                monJoueur.style.right = mesProtoZombie[3].monZombie.right + "%";
                monJoueur.style.height = mesProtoZombie[3].monZombie.height + "px";
                monJoueurDivMasque.style.width = 107 + "px";
                monJoueur.style.transform = "scaleX(1)";
                gameOver = true;
                monTrue2Zombie = false;

                //
                maDivGame.style.opacity = 0.3;
                var imageGameOver = window.document.createElement('img')
                imageGameOver.src = "image/GameOver.png";
                imageGameOver.style.zIndex = "5";
                imageGameOver.style.position = "absolute";
                imageGameOver.style.top = "12%"
                imageGameOver.style.right = "35%";
                imageGameOver.style.height = "360px";
                window.document.body.appendChild(imageGameOver);
                imageGameOver.onclick = function () {
                    window.location.reload();
                }

                window.clearInterval(mesZombies);
            }

        } else {
            window.clearInterval(mesZombies);
        }

    }, 200);

    // FIN

    // Mon Oiseaux ANIMATION 

    function entierAleatoire(min, max) {
        return Math.floor((max - min) * Math.random()) + min;
    }

    var monBooleenSetOiseau = true;
    var monCompteurOiseau = 0;
    var margeDeMonOiseau = 0;
    var margeDeMonOiseauLeft = 50;
    var monTrueOiseau = true;
    var maFrameO = 0;
    var monOiseauxDiv;
    var monOiseauxDivMasque;
    var monOiseaux;


    var mesOiseaux = window.setInterval(function () {

        if (monBooleenSetOiseau) {

            if (monCompteurOiseau === 0) {

                // Mes oiseaux (DIV) principale
                monOiseauxDiv = window.document.createElement('div')
                monOiseauxDiv.style.position = monObjOiseaux.monOiseauxDiv.position;
                monOiseauxDiv.style.top = monObjOiseaux.monOiseauxDiv.top + "px"
                monOiseauxDiv.style.right = monObjOiseaux.monOiseauxDiv.right + "%"
                monOiseauxDiv.style.width = monObjOiseaux.monOiseauxDiv.width + "px";
                monOiseauxDiv.style.height = monObjOiseaux.monOiseauxDiv.height + "px";
                monOiseauxDiv.style.overflow = monObjOiseaux.monOiseauxDiv.overflow;
                maDivGame.appendChild(monOiseauxDiv);

                // monOiseauxDivMasque (DIV) Masque
                monOiseauxDivMasque = window.document.createElement('div')
                monOiseauxDivMasque.style.position = monObjOiseaux.monOiseauxMasque.position;
                monOiseauxDivMasque.style.margin = monObjOiseaux.monOiseauxMasque.margin;
                monOiseauxDivMasque.style.width = monObjOiseaux.monOiseauxMasque.width + "px";
                monOiseauxDivMasque.style.height = monObjOiseaux.monOiseauxMasque.height + "px";
                monOiseauxDivMasque.style.overflow = monObjOiseaux.monOiseauxMasque.overflow;
                monOiseauxDiv.appendChild(monOiseauxDivMasque);

                // monOiseaux (IMG)
                monOiseaux = window.document.createElement('img')
                monOiseaux.src = monObjOiseaux.monOiseaux.src;
                monOiseaux.style.position = monObjOiseaux.monOiseaux.position;
                monOiseaux.style.top = monObjOiseaux.monOiseaux.top + "px";
                monOiseaux.style.transform = monObjOiseaux.monOiseaux.transform;
                monOiseaux.style.right = monObjOiseaux.monOiseaux.right + "px";
                monOiseaux.style.height = monObjOiseaux.monOiseaux.height + "px";
                monOiseauxDivMasque.appendChild(monOiseaux);
                // FIN DE MES OISEAUX
                monCompteurOiseau++

            }

            if (monCompteurOiseau >= 1) {
                monBooleenSetOiseau = false
            }
        }

        if (monTrueOiseau) {

            if (monTrueOiseau) {
                monObjOiseaux.monOiseauxDiv.top = margeDeMonOiseau + "%";
                monOiseauxDiv.style.top = monObjOiseaux.monOiseauxDiv.top

                monObjOiseaux.monOiseauxDiv.left = margeDeMonOiseauLeft + "%";
                monOiseauxDiv.style.left = monObjOiseaux.monOiseauxDiv.left

                margeDeMonOiseau = margeDeMonOiseau + 1;
                margeDeMonOiseauLeft = margeDeMonOiseauLeft - 0.6;

                if (margeDeMonOiseau > 60) {
                    margeDeMonOiseau = -4
                    var nombre = entierAleatoire(30, 65);
                    margeDeMonOiseauLeft = nombre;
                }

                if (maFrameO >= mesImageObject1.monImagePigeon.length) {
                    maFrameO = 0;
                }
                monOiseaux.style.right = mesImageObject1.monImagePigeon[maFrameO].right;
                monOiseaux.style.top = mesImageObject1.monImagePigeon[maFrameO].top;
                maFrameO++;

                var entierOiseau = Math.ceil(margeDeMonOiseauLeft)
                var entierJoueur = Math.ceil(mesObjetsSprite.monJoueurLeft) + 2

                if (entierOiseau === entierJoueur && margeDeMonOiseau > 40) {
                    mesObjetsSprite.monJoueurLeft = margeDeMonOiseauLeft - 12;
                    i = mesObjetsSprite.monJoueurLeft
                    monJoueurDiv.style.left = i
                    maRapidite = false
                    maRapiditeTouche1 = true
                    monCompteurRapidite++

                }

            }

        } else {
            window.clearInterval(mesOiseaux);
        }

    }, 50);

});