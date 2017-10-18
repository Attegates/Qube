var log = '@D2D0D1D4D3S6{0,16,~0,1,~1,1,~2,1,MO,"MC-780",ID,"0000000000000000",St,0,Da,"03/10/2017",TI,"08:24",Bt,0,GE,1,AG,22,Hm,180.0,Pt,1.5,Wk,110.6,FW,33.4,fW,36.9,MW,73.7,mW,70.1,sW,2,bW,3.6,wW,51.5,ww,46.6,wI,29.9,wO,21.6,wo,41.9,MI,34.1,Sw,71.3,OV,55.1,Sf,14.0,SM,58.2,IF,13,LP,80,rB,2277,rb,9527,rJ,1,rA,37,BA,0,BF,0,gF,0,gW,0.0,gf,0.0,gt,0.0,FR,34.4,fR,6.8,MR,13.0,mR,12.3,SR,3,sR,2,FL,33.8,fL,6.7,ML,13.2,mL,12.5,SL,2,sL,2,Fr,28.2,fr,1.8,Mr,4.7,mr,4.4,Sr,2,sr,1,Fl,30.9,fl,2.1,Ml,4.6,ml,4.3,Sl,3,sl,1,FT,33.8,fT,19.5,MT,38.2,mT,36.6,ST,2,sT,2,aH,0.0,cH,0.0,GH,672.9,HH,-40.2,RH,567.2,XH,-70.8,JH,501.8,KH,-54.6,LH,0.0,QH,0.0,iH,0.0,jH,0.0,aR,0.0,cR,0.0,GR,317.6,HR,-22.4,RR,259.8,XR,-35.6,JR,229.7,KR,-22.3,LR,0.0,QR,0.0,iR,0.0,jR,0.0,aL,0.0,cL,0.0,GL,323.4,HL,-22.5,RL,266.7,XL,-34.9,JL,236.9,KL,-22.3,LL,0.0,QL,0.0,iL,0.0,jL,0.0,ar,0.0,cr,0.0,Gr,317.7,Hr,-16.9,Rr,271.1,Xr,-35.4,Jr,238.8,Kr,-34.8,Lr,0.0,Qr,0.0,ir,0.0,jr,0.0,al,0.0,cl,0.0,Gl,321.3,Hl,-16.0,Rl,278.5,Xl,-32.8,Jl,248.0,Kl,-30.8,Ll,0.0,Ql,0.0,il,0.0,jl,0.0,aF,0.0,cF,0.0,GF,641.3,HF,-44.4,RF,527.9,XF,-70.1,JF,469.2,KF,-44.8,LF,0.0,QF,0.0,iF,0.0,jF,0.0,pH,-7.1,pR,-7.8,pL,-7.5,pr,-7.4,pl,-6.7,pF,-7.6,CS,D1S1';

// Cut off all unnecessary stuff from the beginning until "Da, ..."
var start = "Da";

for (var index = 0; index < log.length; index++) 
{
    var sub = log.substr(index, start.length);
    if (sub === start)
    {
        log = log.slice(index, log.length);
        break;
    }
}

for (var index = log.length; index > 0; index--) 
{
    var sub = log.substr(index, start.length);
    if (sub === "aH")
    {
        log = log.slice(0, index);
        break;
    }
}


var descriptions = {
    "Da": "Date",
    "TI": "Time",
    "Bt": "Body type",
    "GE": "Gender",
    "AG": "Age",
    "Hm": "Height",
    "Pt": "Clothes weight (Preset tare)",
    "Wk": "Weight",
    "FW": "Body fat %",
    "fW": "Fat mass",
    "MW": "Fat free mass",
    "mW": "Muscle mass",
    "sW": "Muscle score",
    "bW": "Bone mass",
    "wW": "TBW",
    "ww": "TBW %",
    "wI": "Intracellular water (ICW)",
    "wO": "Extracellular water (ECW)",
    "wo": "ECW %",
    "MI": "BMI",
    "Sw": "Standard body weight",
    "OV": "Degree of obesity",
    "Sf": "Standard fat %",
    "SM": "Standard muscle mass",
    "IF": "Visceral fat rating",
    "LP": "Leg muscle score",
    "rB": "BMR kcal",
    "rb": "BMR kJ",
    "rJ": "BMR score",
    "rA": "Metabolic age",
    "BA": "Muscle mass balance(arm)",
    "BF": "Muscle mass balance(leg)",
    "gF": "Target body fat %",
    "gW": "Predicted weight",
    "gf": "Predicted fat mass",
    "gt": "Fat to lose/gain",
    "FR": "Right Leg Fat %",
    "fR": "Right Leg Fat mass",
    "MR": "Right Leg Fat free mass",
    "mR": "Right Leg Muscle mass",
    "SR": "Right Leg Fat % score",
    "sR": "Right Leg Muscle mass score",
    "FL": "Left Leg Fat %",
    "fL": "Left Leg Fat mass",
    "ML": "Left Leg Fat free mass",
    "mL": "Left Leg Muscle mass",
    "SL": "Left Leg Fat % score",
    "sL": "Left Leg Muscle mass score",
    "Fr": "Right Arm Fat %",
    "fr": "Right Arm Fat mass",
    "Mr": "Right Arm Fat free mass",
    "mr": "Right Arm Muscle mass",
    "Sr": "Right Arm Fat % score",
    "sr": "Right Arm Muscle mass score",
    "Fl": "Left Arm Fat %",
    "fl": "Left Arm Fat mass",
    "Ml": "Left Arm Fat free mass",
    "ml": "Left Arm Muscle mass",
    "Sl": "Left Arm Fat % score",
    "sl": "Left Arm Muscle mass score",
    "FT": "Trunk Fat %",
    "fT": "Trunk Fat mass",
    "MT": "Trunk Fat free mass",
    "mT": "Trunk Muscle mass",
    "ST": "Trunk Fat % score",
    "sT": "Trunk Muscle mass score",
    "CS": "Check sum"  
};

var logKey = [];
var logVal = [];

var logPairs = {};
var logDescVal = {};

logArr = log.split(",")

// Divide log into keys and values
for (var index = 0; index < logArr.length; index++) {
    if (index % 2 == 0)
    {
        logKey.push(logArr[index]);
    }
    else
    {
        logVal.push(logArr[index]);
    } 
}

    // Create a JSON with pairs of keys and values
    // ex. "Da" : "03/10/2017"
for (var index = 0; index < logKey.length; index++) 
    {
        logPairs[logKey[index]] = logVal[index];
    }

// It's possible to search the JSON with the keys
// console.log("Print logPairs.AG: " + logPairs.AG);   // AG : 22, age

// Example of extracting values from the arrays and objects
// console.log(logKey[7]); // => Wk
// console.log(descriptions[logKey[7]]); // => Weight
// console.log(logVal[7]); // => 110,6

// Connect descriptions and values
// Find logKey with index, find description with the key and add value to the description
for (var index = 0; index < logKey.length; index++) 
    {
        logDescVal[descriptions[logKey[index]]] = logVal[index];    // What?!
    }

// Save object keys to an array from logDescVal
var elementKeys = Object.keys(logDescVal);

// Print data on page
// Extract values from logDescVal
// Add object key from array and the extracted value to the paragraph
// Append paragraph to the page
var index = 0;
for (var key in logDescVal) {
    if (logDescVal.hasOwnProperty(key)) {
        var elementValue = JSON.stringify(logDescVal[key]);     
        var newParagraph = document.createElement("p");          
        newParagraph.appendChild(document.createTextNode(elementKeys[index] + ": " + elementValue));
        document.body.appendChild(newParagraph);
        index++;
    }
}

// for (var index = 0; index < elementKeys.length; index++) {
//     console.log(elementKeys[index]);
// }
