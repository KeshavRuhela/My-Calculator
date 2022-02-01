function distance() {
    mainCalculator.style.display = "none"
    mainCalc.style.color = "black"
    Info.style.display = "none"
    MainArea.style.display = "none"
    mainDistance.style.display = "none";
    mainVolume.style.display = "none"
    mainDistance.style.display = "block"
    areaTable.style.display = "none";
    areaTableI2.style.display = "none";
    areaTableF2.style.display = "none";
    areaTableK2.style.display = "none";
    areaTableH.style.display = "none";
    areaTableA.style.display = "none";
    volumeTable.style.display = "none";
    distanceTable.style.display = "block";
}

function DistanceCalculation() {
    DistanceMainTable.style.display = "none"
    DistanceMainTableC.style.display = "none"
    DistanceMainTableM.style.display = "none"
    DistanceMainTableK.style.display = "none"
    DistanceMainTableF.style.display = "none"
    DistanceMainTableG.style.display = "none"
    DistanceMainTableI.style.display = "none"
    DistanceMainTable2C.style.display = "inline-table"
    DistanceMainTable2I.style.display = "inline-table"
    DistanceMainTable2M.style.display = "inline-table"
    DistanceMainTable2K.style.display = "inline-table"
    DistanceMainTable2F.style.display = "inline-table"
    DistanceMainTable2G.style.display = "inline-table"
    DistanceMainTable2.style.display = "inline-table"
    // for milimeter
    CentiMeter = 0.1 * distanceinputt.value;
    inch = 0.03937 * distanceinputt.value;
    Meter = 0.001 * distanceinputt.value;
    Kilometre = 0.000001 * distanceinputt.value;
    Foot = 0.003281 * distanceinputt.value;
    Gaj = 0.000264172 * distanceinputt.value;    //.............  
    // for Cenimeter
    milimeterC = 10 * distanceinputt.value;
    inchC = 0.393701 * distanceinputt.value;
    MeterC = 0.01 * distanceinputt.value;
    KilometreC = 0.00001 * distanceinputt.value;
    FootC = 0.032808 * distanceinputt.value; 
    GajC = 0.000264172 * distanceinputt.value;
    // for inch
    milimeterI = 25.4 * distanceinputt.value;
    CentimeterI = 2.54 * distanceinputt.value;
    MeterI = 0.0254 * distanceinputt.value;
    KilometreI = 0.000025 * distanceinputt.value;
    FootI = 0.083333 * distanceinputt.value; 
    GajI = 0.000264172 * distanceinputt.value;      // ................
    // for meter
    milimeterM = 1000 * distanceinputt.value;
    CentiMeterM = 100 * distanceinputt.value;
    inchM = 39.37008 * distanceinputt.value;
    KilometreM = 0.001 * distanceinputt.value;
    FootM = 3.28084 * distanceinputt.value;
    GajM = 0.000264172 * distanceinputt.value;
   // for Kilometer
   milimeterK = 1000000 * distanceinputt.value;
   CentiMeterK = 100000 * distanceinputt.value;
   inchK = 39370.08 * distanceinputt.value;
   MetreK = 1000 * distanceinputt.value;
   FootK = 3280.84 * distanceinputt.value;
   GajK = 0.000264172 * distanceinputt.value;
   // for Foot
   milimeterF = 304.8 * distanceinputt.value;
   CentiMeterF = 30.48 * distanceinputt.value;
   inchF = 3280.84 * distanceinputt.value;
   MetreF = 0.3048 * distanceinputt.value;
   KilometreF = 0.000305 * distanceinputt.value;
   GajF = 0.000264172 * distanceinputt.value;
   // for Gaj
   milimeterG = 304.8 * distanceinputt.value;
   CentiMeterG = 30.48 * distanceinputt.value;
   inchG = 0.03937 * distanceinputt.value;

   MetreG = 0.3048 * distanceinputt.value;
   KilometreG = 0.000305 * distanceinputt.value;
   FootG = 0.000264172 * distanceinputt.value;
   
    if (DistanceOptionV.value == "mm") {
        console.log("goodMilliMiter");
        distanceTable.style.display = "block";
        distanceTableI.style.display = "none";
        distanceTableM.style.display = "none";
        distanceTableK.style.display = "none";
        distanceTableF.style.display = "none";
        distanceTableG.style.display = "none";
        distanceTableC.style.display = "none";
        DistanceMainTable2.innerHTML += `<table><tr><td>${CentiMeter}</td><td>${inch}</td><td>${Meter}</td><td>${Kilometre}</td><td>${Foot}</td><td>${Gaj}</td></tr></table>`;
        // VolumeMainTable2.innerHTML =`<table><tr><td>${liter}</td><td>${CubicInch}</td><td>${CubicFoot}</td><td>${CubicMeter}</td><td>${USliquidGallon}</td></tr></table>` + VolumeMainTable2.innerHTML;
    }
    if (DistanceOptionV.value == "cm") {
        console.log("goodCentiMiter");
        distanceTableI.style.display = "none";
        distanceTable.style.display = "none";
        distanceTableM.style.display = "none";
        distanceTableK.style.display = "none";
        distanceTableF.style.display = "none";
        distanceTableG.style.display = "none";
        distanceTableC.style.display = "block";
        DistanceMainTable2C.innerHTML += `<table><tr><td>${milimeterC}</td><td>${inchC}</td><td>${MeterC}</td><td>${KilometreC}</td><td>${FootC}</td><td>${GajC}</td></tr></table>`;
    }
    if (DistanceOptionV.value == "inch") {
        console.log("goodCentiMiter");
        distanceTable.style.display = "none";
        distanceTableM.style.display = "none";
        distanceTableK.style.display = "none";
        distanceTableF.style.display = "none";
        distanceTableG.style.display = "none";
        distanceTableG.style.display = "none";
        distanceTableI.style.display = "block";
        DistanceMainTable2I.innerHTML += `<table><tr><td>${milimeterI}</td><td>${CentimeterI}</td><td>${MeterI}</td><td>${KilometreI}</td><td>${FootI}</td><td>${GajI}</td></tr></table>`;
    }

    if (DistanceOptionV.value == "meter") {
        console.log("goodMeter");
        distanceTableI.style.display = "none";
        distanceTable.style.display = "none";
        distanceTableC.style.display = "none";
        distanceTableK.style.display = "none";
        distanceTableF.style.display = "none";
        distanceTableG.style.display = "none";
        distanceTableM.style.display = "block";
        DistanceMainTable2M.innerHTML += `<table><tr><td>${milimeterM}</td><td>${CentiMeterM}</td><td>${inchM}</td><td>${KilometreM}</td><td>${FootM}</td><td>${GajM}</td></tr></table>`;
    }
    if (DistanceOptionV.value == "kilometer") {
        console.log("goodKilometre");
        distanceTableI.style.display = "none";
        distanceTable.style.display = "none";
        distanceTableM.style.display = "none";
        distanceTableC.style.display = "none";
        distanceTableF.style.display = "none";
        distanceTableG.style.display = "none";
        distanceTableK.style.display = "block";
        DistanceMainTable2K.innerHTML += `<table><tr><td>${milimeterK}</td><td>${CentiMeterK}</td><td>${inchK}</td><td>${MetreK}</td><td>${FootK}</td><td>${GajK}</td></tr></table>`;
    }
    if (DistanceOptionV.value == "Foot") {
        console.log("goodFoot");
        distanceTableI.style.display = "none";
        distanceTable.style.display = "none";
        distanceTableM.style.display = "none";
        distanceTableK.style.display = "none";
        distanceTableC.style.display = "none";
        distanceTableG.style.display = "none";
        distanceTableF.style.display = "block";
        DistanceMainTable2F.innerHTML += `<table><tr><td>${milimeterF}</td><td>${CentiMeterF}</td><td>${inchF}</td><td>${MetreF}</td><td>${KilometreF}</td><td>${GajF}</td></tr></table>`;
    }
    if (DistanceOptionV.value == "Gaj") {
        console.log("goodGaj");
        distanceTableI.style.display = "none";
        distanceTable.style.display = "none";
        distanceTableG.style.display = "block";
        distanceTableM.style.display = "none";
        distanceTableK.style.display = "none";
        distanceTableF.style.display = "none";
        distanceTableC.style.display = "none";
        DistanceMainTable2G.innerHTML += `<table><tr><td>${milimeterG}</td><td>${CentiMeterG}</td><td>${inchG}</td><td>${MetreG}</td><td>${KilometreG}</td><td>${FootG}</td></tr></table>`;
    }
}
