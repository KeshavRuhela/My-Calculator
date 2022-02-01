let screen = document.getElementById('screen');
span = document.querySelectorAll('span');
let screenValue = '';
check = Boolean(false);
prec = Number;

for (item of span) {
    item.addEventListener('click', (e) => {
        Ttext = e.target.innerText;
        console.log(Ttext);
        console.log('Button text is', Ttext);
        if (Ttext == 'Clear') {
            screenValue = "";
            screen.value = screenValue;
            check = false;
        } else if (Ttext == "Pow") {
            // screenValue += "**" ;
            if (screenValue.charAt(screenValue.length - 1) == "*" || screenValue.charAt(screenValue.length - 1) == "+" || screenValue.charAt(screenValue.length - 1) == "-" || screenValue.charAt(screenValue.length - 1) == "/") {
                screenValue = screenValue.slice(0, -1);

                if (screenValue.charAt(screenValue.length - 1) == "*" || screenValue.charAt(screenValue.length - 1) == "+" || screenValue.charAt(screenValue.length - 1) == "-" || screenValue.charAt(screenValue.length - 1) == "/") {
                    screenValue = screenValue.slice(0, -1);
                    screenValue += "**";
                    screen.value = screenValue;
                    check = false;
                } else {
                    screenValue += "*";
                    screen.value = screenValue;
                    check = false;
                }
            } else if ((screenValue == "")) {
                console.log("............");
            } else {
                screenValue += "**";
                screen.value = screenValue;
            }
        } else if (Ttext == "%") {
            if (screenValue != "") {
                perc = eval(screenValue);
                console.log("else");
                screen.value = perc / 100;
                screenValue = screen.value;
                if (screenValue.includes(".")) {
                    check = true;
                } else {
                    check = false;
                }
            }
        } else if (Ttext == '=') {
            console.log(screenValue);
            valuee = eval(screenValue); //.........most line to calculate
            screen.value = valuee;
            screenValue = screen.value;
            console.log(typeof (screenValue));
            if (valuee == Math.round(valuee)) {
                check = false;
            } else {
                check = true;
            }
            if (screenValue == "undefined" || screenValue == "Infinity" || screenValue == "NaN") {
                screenValue = "";
            }
        } else if (Ttext == ".") {
            if (check == false) {
                screenValue += Ttext;
                screen.value = screenValue;
                console.log("screen Value", screenValue);
                console.log("screen value", screen.value);
                console.log(check);
                check = true;
            }
        } else if (Ttext == "+" || Ttext == "-" || Ttext == "x" || Ttext == "/") {
            if (screenValue.charAt(screenValue.length - 1) == "+" || screenValue.charAt(screenValue.length - 1) == "-" || screenValue.charAt(screenValue.length - 1) == "*" || screenValue.charAt(screenValue.length - 1) == "/" || screenValue.charAt(screenValue.length - 1) == ".") {
                console.log("its to good");
                screenValue = screenValue.slice(0, -1);
                if (screenValue.charAt(screenValue.length - 1) == "+" || screenValue.charAt(screenValue.length - 1) == "-" || screenValue.charAt(screenValue.length - 1) == "/" || screenValue.charAt(screenValue.length - 1) == "*") {
                    screenValue = screenValue.slice(0, -1);
                    if (Ttext == 'x') {
                        Ttext = '*';
                        screenValue += Ttext;
                        screen.value = screenValue;
                        check = false;
                    } else {
                        screenValue += Ttext;
                        screen.value = screenValue;
                        check = false;
                    }
                } else {
                    if (Ttext == 'x') {
                        Ttext = '*';
                        screenValue += Ttext;
                        screen.value = screenValue;
                        check = false;
                    } else {
                        screenValue += Ttext;
                        screen.value = screenValue;
                        check = false;
                    }
                }

            } else if (screenValue != "") {
                if (Ttext == 'x') {
                    Ttext = '*';
                    screenValue += Ttext;
                    screen.value = screenValue;
                    check = false;
                } else {
                    screenValue += Ttext;
                    screen.value = screenValue;
                    check = false;
                }
            }
        } else {
            screenValue += Ttext;
            screen.value = screenValue;
        }
    })
}

function remoove() {
    console.log(screen.value);
    if (screenValue.charAt(screenValue.length - 1) == "+" || screenValue.charAt(screenValue.length - 1) == "-" || screenValue.charAt(screenValue.length - 1) == "x" || screenValue.charAt(screenValue.length - 1) == "/") {
        check = true;
    } else if (screenValue.charAt(screenValue.length - 1) == ".") {
        check = false;
    }
    // screenValue = screenValue.substring(1);
    screenValue = screenValue.slice(0, -1);
    screen.value = screenValue;
}

morData.style.opacity = "0";
morData.style.transition = "all";
morData.style.transitionDuration = "1s"
mor.addEventListener("click", () => {
    if (morData.style.opacity == "1") {
        morData.style.zIndex = "-1";
        morData.style.opacity = "0";
        morData.style.transform = "Rotate(30deg)";
        setTimeout(() => {
            morData.style.transform = "Rotate(0deg)";
        }, 500);
    } else {
        morData.style.transitionDuration = "1s"
        morData.style.opacity = "1";
        morData.style.zIndex = "1";
        morData.style.transform = "Rotate(-30deg)";
        setTimeout(() => {
            morData.style.transform = "Rotate(0deg)";
        }, 500);
    }
});

function help() {
    distanceTable.style.display = "none";
    distanceTableI.style.display = "none";
    distanceTableM.style.display = "none";
    distanceTableK.style.display = "none";
    distanceTableF.style.display = "none";
    distanceTableG.style.display = "none";
    distanceTableC.style.display = "none";
    mainCalculator.style.display = "none"
    Info.style.display = "block"
    mainCalc.style.color = "black"
    MainArea.style.display = "none"
    areaTable.style.display = "none";
    areaTableI2.style.display = "none";
    areaTableF2.style.display = "none";
    areaTableK2.style.display = "none";
    areaTableH.style.display = "none";
    areaTableA.style.display = "none";
    volumeTable.style.display = "none";
    distanceTable.style.display = "none";
    mainVolume.style.display = "none";
    mainDistance.style.display = "none";

}

function mainCal() {
    distanceTable.style.display = "none";
    distanceTableI.style.display = "none";
    distanceTableM.style.display = "none";
    distanceTableK.style.display = "none";
    distanceTableF.style.display = "none";
    distanceTableG.style.display = "none";
    distanceTableC.style.display = "none";
    mainCalculator.style.display = "block"
    mainCalc.style.color = "white"
    Info.style.display = "none"
    MainArea.style.display = "none"
    areaTable.style.display = "none";
    areaTableI2.style.display = "none";
    areaTableF2.style.display = "none";
    areaTableK2.style.display = "none";
    areaTableH.style.display = "none";
    areaTableA.style.display = "none";
    volumeTable.style.display = "none";
    distanceTable.style.display = "none";
    mainVolume.style.display = "none";
    mainDistance.style.display = "none";

}

areaTable.style.display = "none"; //....................................
areaTableI2.style.display = "none"; //....................................
areaTableF2.style.display = "none"; //....................................
areaTableK2.style.display = "none"; //....................................
areaTableH.style.display = "none"; //....................................
areaTableA.style.display = "none"; //....................................

function area() {
    mainCalculator.style.display = "none";
    mainCalc.style.color = "black";
    Info.style.display = "none";
    MainArea.style.display = "block";
    areaTable.style.display = "block";
    volumeTable.style.display = "none";
    distanceTable.style.display = "none";
    mainDistance.style.display = "none";
    mainVolume.style.display = "none";

    distanceTable.style.display = "none";
    distanceTableI.style.display = "none";
    distanceTableM.style.display = "none";
    distanceTableK.style.display = "none";
    distanceTableF.style.display = "none";
    distanceTableG.style.display = "none";
    distanceTableC.style.display = "none";

    // DistanceMainTable2C.style.display = "none"
    // DistanceMainTable2I.style.display = "none"
    // DistanceMainTable2M.style.display = "none"
    // DistanceMainTable2K.style.display = "none"
    // DistanceMainTable2F.style.display = "none"
    // DistanceMainTable2G.style.display = "none"
    // DistanceMainTable2.style.display = "none"
    // DistanceMainTable.style.display = "none"
    // DistanceMainTableC.style.display = "none"
    // DistanceMainTableM.style.display = "none"
    // DistanceMainTableK.style.display = "none"
    // DistanceMainTableF.style.display = "none"
    // DistanceMainTableG.style.display = "none"
    // DistanceMainTableI.style.display = "none"
}

function areaCalculation() {
    AreaMainTable.style.display = "none" //...................................
    AreaMainTableI2.style.display = "none" //...................................
    AreaMainTableF2.style.display = "none" //...................................
    AreaMainTableK2.style.display = "none" //...................................
    AreaMainTableH.style.display = "none" //...................................
    AreaMainTableA.style.display = "none" //...................................

    AreaMainTable2.style.display = "inline-table"
    AreaMainTable2I2.style.display = "inline-table"
    AreaMainTable2F2.style.display = "inline-table"
    AreaMainTable2K2.style.display = "inline-table"
    AreaMainTable2H.style.display = "inline-table"
    AreaMainTable2A.style.display = "inline-table"

    // FOR Meter
    inchSqure = 1550 * Areainputt.value;
    feetSqure = 10.7639 * Areainputt.value;
    hect = 0.0001 * Areainputt.value;
    acre = hect * 2.47;
    kilometerSqure = 0.000001 * Areainputt.value;
    // for inch
    meterSqureI2 = 0.092903 * Areainputt.value;
    feetSqureI2 = 0.00694444 * Areainputt.value;
    hectI2 = 0.000000064516 * Areainputt.value;
    acreI2 = Areainputt.value * 0.000000159423;
    kilometerSqureI2 = 0.00000000064516 * Areainputt.value;
    // for foot
    meterSqureF2 = 0.092903 * Areainputt.value;
    inchSqureF2 = 144 * Areainputt.value;
    hectF2 = 0.0000092903 * Areainputt.value;
    acreF2 = Areainputt.value * 0.0000229568;
    kilometerSqureF2 = 0.00000009290304 * Areainputt.value;
    // for kilometer
    meterSqureK2 = 1000000 * Areainputt.value;
    inchSqureK2 = 1550003100 * Areainputt.value;
    hectK2 = 100 * Areainputt.value;
    acreK2 = Areainputt.value * 247.105;
    footSqureK2 = 10763916 * Areainputt.value;
    // for Hectare
    meterSqureH = 10000 * Areainputt.value;
    inchSqureH = 15500000 * Areainputt.value;
    kilometerSqureH = 0.01 * Areainputt.value;
    acreH = Areainputt.value * 2.47105;
    footSqureH = 107639 * Areainputt.value;
    // for Acer
    meterSqureA = 4046.86 * Areainputt.value;
    inchSqureA = 6272640 * Areainputt.value;
    kilometerSqureA = 0.00404686 * Areainputt.value;
    HectA = Areainputt.value * 0.404686;
    footSqureA = 43560 * Areainputt.value;

    // console.log("inch Squre = ",inchSqure);
    // console.log("feet Squre = ",feetSqure);
    // console.log("Hectare = ",hect);
    // console.log("Acre = ",acre);
    // console.log("kilometer Squre = ",kilometerSqure);

    if (AreaOption.value == "m2") {
        console.log("goodm2");
        areaTable.style.display = "block";
        areaTableI2.style.display = "none";
        areaTableF2.style.display = "none";
        areaTableK2.style.display = "none";
        areaTableH.style.display = "none";
        areaTableA.style.display = "none";
        AreaMainTable2.innerHTML += `<table><tr><td>${inchSqure}</td><td>${feetSqure}</td><td>${kilometerSqure}</td><td>${hect}</td><td>${acre}</td></tr></table>`;
    }
    if (AreaOption.value == "inch2") {
        console.log("goodinch");
        areaTable.style.display = "none";
        areaTableI2.style.display = "block";
        areaTableF2.style.display = "none";
        areaTableK2.style.display = "none";
        areaTableH.style.display = "none";
        areaTableA.style.display = "none";
        AreaMainTable2I2.innerHTML += `<table><tr><td>${meterSqureI2}</td><td>${feetSqureI2}</td><td>${kilometerSqureI2}</td><td>${hectI2}</td><td>${acreI2}</td></tr></table>`;
    }
    if (AreaOption.value == "Feet2") {
        console.log("goodFeet2");
        areaTable.style.display = "none";
        areaTableI2.style.display = "none";
        areaTableF2.style.display = "block";
        areaTableK2.style.display = "none";
        areaTableH.style.display = "none";
        areaTableA.style.display = "none";
        AreaMainTable2F2.innerHTML += `<table><tr><td>${meterSqureF2}</td><td>${inchSqureF2}</td><td>${kilometerSqureF2}</td><td>${hectF2}</td><td>${acreF2}</td></tr></table>`;
    }
    if (AreaOption.value == "kilometer2") {
        console.log("goodkilometer2");
        areaTable.style.display = "none";
        areaTableI2.style.display = "none";
        areaTableF2.style.display = "none";
        areaTableK2.style.display = "block";
        areaTableH.style.display = "none";
        areaTableA.style.display = "none";
        AreaMainTable2K2.innerHTML += `<table><tr><td>${meterSqureK2}</td><td>${inchSqureK2}</td><td>${footSqureK2}</td><td>${hectK2}</td><td>${acreK2}</td></tr></table>`;
    }
    if (AreaOption.value == "Hect") {
        console.log("goodHectare");
        areaTable.style.display = "none";
        areaTableI2.style.display = "none";
        areaTableF2.style.display = "none";
        areaTableK2.style.display = "none";
        areaTableA.style.display = "none";
        areaTableH.style.display = "block";
        AreaMainTable2H.innerHTML += `<table><tr><td>${meterSqureH}</td><td>${inchSqureH}</td><td>${footSqureH}</td><td>${kilometerSqureH}</td><td>${acreH}</td></tr></table>`;
    }
    if (AreaOption.value == "Acre") {
        console.log("goodAcer");
        areaTable.style.display = "none";
        areaTableI2.style.display = "none";
        areaTableF2.style.display = "none";
        areaTableK2.style.display = "none";
        areaTableH.style.display = "none";
        areaTableA.style.display = "block";
        AreaMainTable2A.innerHTML += `<table><tr><td>${meterSqureA}</td><td>${inchSqureA}</td><td>${footSqureA}</td><td>${kilometerSqureA}</td><td>${HectA}</td></tr></table>`;
    }
}

distanceTable.style.display = "none";
volumeTable.style.display = "none";
volumeTableV.style.display = "none";
volumeTableI.style.display = "none";
volumeTableF.style.display = "none";
volumeTableM.style.display = "none";
volumeTableU.style.display = "none";

distanceTableC.style.display = "none";
distanceTableM.style.display = "none";
distanceTableK.style.display = "none";
distanceTableF.style.display = "none";
distanceTableG.style.display = "none";
distanceTableI.style.display = "none";

function volume() {
    mainCalculator.style.display = "none"
    mainCalc.style.color = "black"
    Info.style.display = "none"
    MainArea.style.display = "none"
    distanceTable.style.display = "none";
    distanceTableI.style.display = "none";
    distanceTableM.style.display = "none";
    distanceTableK.style.display = "none";
    distanceTableF.style.display = "none";
    distanceTableG.style.display = "none";
    distanceTableC.style.display = "none";
    // mainDistance.style.display = "none";
    mainVolume.style.display = "block"
    areaTable.style.display = "none";
    areaTableI2.style.display = "none";
    areaTableF2.style.display = "none";
    areaTableK2.style.display = "none";
    areaTableH.style.display = "none";
    areaTableA.style.display = "none";
    volumeTable.style.display = "block";
    // distanceTable.style.display = "none";
    distanceTable.style.display = "none";
    mainDistance.style.display = "none";
}

function volumeCalculation() {
    VolumeMainTable.style.display = "none"
    VolumeMainTableV.style.display = "none"
    VolumeMainTableI.style.display = "none"
    VolumeMainTableF.style.display = "none"
    VolumeMainTableM.style.display = "none"
    VolumeMainTableU.style.display = "none"
    VolumeMainTable2.style.display = "inline-table"
    VolumeMainTable2V.style.display = "inline-table"
    VolumeMainTable2I.style.display = "inline-table"
    VolumeMainTable2F.style.display = "inline-table"
    VolumeMainTable2M.style.display = "inline-table"
    VolumeMainTable2U.style.display = "inline-table"
    // for mililiter
    liter = 0.001 * volumeinputt.value;
    CubicInch = 0.0610237 * volumeinputt.value;
    CubicFoot = 0.0000353147 * volumeinputt.value;
    CubicMeter = 0.000001 * volumeinputt.value;
    USliquidGallon = 0.000264172 * volumeinputt.value;
    // for liter
    miliLiterV = 1000 * volumeinputt.value;
    CubicInchV = 61.0237 * volumeinputt.value;
    CubicFootV = 0.0353147 * volumeinputt.value;
    CubicMeterV = 0.001 * volumeinputt.value;
    USliquidGallonV = 0.264172 * volumeinputt.value;
    // for Inch 3
    miliLiterI = 16.3871 * volumeinputt.value;
    LiterI = 0.0163871 * volumeinputt.value;
    CubicFootI = 0.000578704 * volumeinputt.value;
    CubicMeterI = 0.0000163871 * volumeinputt.value;
    USliquidGallonI = 0.004329 * volumeinputt.value;
    // for Foot 3
    miliLiterF = 28316.8 * volumeinputt.value;
    LiterF = 28.3168 * volumeinputt.value;
    CubicInchF = 1728 * volumeinputt.value;
    CubicMeterF = 0.0283168 * volumeinputt.value;
    USliquidGallonF = 7.48052 * volumeinputt.value;
    // for meter 3
    miliLiterM = 1000000 * volumeinputt.value;
    LiterM = 1000 * volumeinputt.value;
    CubicInchM = 61023.7 * volumeinputt.value;
    CubicFootM = 35.3147 * volumeinputt.value;
    USliquidGallonM = 264.172 * volumeinputt.value;
    // for Us Liquid Gallon
    miliLiterU = 3785.41 * volumeinputt.value;
    LiterU = 3.78541 * volumeinputt.value;
    CubicInchU = 231 * volumeinputt.value;
    CubicFootU = 0.133681 * volumeinputt.value;
    CubicMeterU = 0.00378541 * volumeinputt.value;

    if (AreaOptionV.value == "ml") {
        console.log("goodMilliliter");
        volumeTable.style.display = "block";
        volumeTableV.style.display = "none";
        volumeTableI.style.display = "none";
        volumeTableF.style.display = "none";
        volumeTableM.style.display = "none";
        volumeTableU.style.display = "none";
        VolumeMainTable2.innerHTML += `<table><tr><td>${liter}</td><td>${CubicInch}</td><td>${CubicFoot}</td><td>${CubicMeter}</td><td>${USliquidGallon}</td></tr></table>`;
        // VolumeMainTable2.innerHTML =`<table><tr><td>${liter}</td><td>${CubicInch}</td><td>${CubicFoot}</td><td>${CubicMeter}</td><td>${USliquidGallon}</td></tr></table>` + VolumeMainTable2.innerHTML;
    }

    if (AreaOptionV.value == "liter") {
        console.log("goodLiter");
        volumeTable.style.display = "none";
        volumeTableI.style.display = "none";
        volumeTableF.style.display = "none";
        volumeTableM.style.display = "none";
        volumeTableU.style.display = "none";
        volumeTableV.style.display = "block";
        VolumeMainTable2V.innerHTML += `<table><tr><td>${miliLiterV}</td><td>${CubicInchV}</td><td>${CubicFootV}</td><td>${CubicMeterV}</td><td>${USliquidGallonV}</td></tr></table>`;

    }
    if (AreaOptionV.value == "CubicInch") {
        console.log("goodInch3");

        volumeTable.style.display = "none";
        volumeTableV.style.display = "none";
        volumeTableF.style.display = "none";
        volumeTableM.style.display = "none";
        volumeTableU.style.display = "none";
        volumeTableI.style.display = "block";
        VolumeMainTable2I.innerHTML += `<table><tr><td>${miliLiterI}</td><td>${LiterI}</td><td>${CubicFootI}</td><td>${CubicMeterI}</td><td>${USliquidGallonI}</td></tr></table>`;
    }
    if (AreaOptionV.value == "CubicFoot") {
        console.log("goodFoot3");

        volumeTable.style.display = "none";
        volumeTableV.style.display = "none";
        volumeTableF.style.display = "block";
        volumeTableM.style.display = "none";
        volumeTableU.style.display = "none";
        volumeTableI.style.display = "none";
        VolumeMainTable2F.innerHTML += `<table><tr><td>${miliLiterF}</td><td>${LiterF}</td><td>${CubicInchF}</td><td>${CubicMeterF}</td><td>${USliquidGallonF}</td></tr></table>`;
    }
    if (AreaOptionV.value == "CubicMeter") {
        console.log("goodmeter3");

        volumeTable.style.display = "none";
        volumeTableV.style.display = "none";
        volumeTableM.style.display = "block";
        volumeTableU.style.display = "none";
        volumeTableF.style.display = "none";
        volumeTableI.style.display = "none";
        VolumeMainTable2M.innerHTML += `<table><tr><td>${miliLiterM}</td><td>${LiterM}</td><td>${CubicInchM}</td><td>${CubicFootM}</td><td>${USliquidGallonM}</td></tr></table>`;
    }
    if (AreaOptionV.value == "USLiquidGallon") {
        console.log("goodUSLiquidGallon");

        volumeTable.style.display = "none";
        volumeTableV.style.display = "none";
        volumeTableM.style.display = "none";
        volumeTableU.style.display = "block";
        volumeTableF.style.display = "none";
        volumeTableI.style.display = "none";
        VolumeMainTable2U.innerHTML += `<table><tr><td>${miliLiterU}</td><td>${LiterU}</td><td>${CubicInchU}</td><td>${CubicFootU}</td><td>${CubicMeterU}</td></tr></table>`;
    }
}

function Construction() {
    console.log("yes");
    // window.open("./cons.html");
    // window.open("./cons.html","_self");
    alert("page is Under Construction !")

}