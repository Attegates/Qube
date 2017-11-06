module.exports =
{
    headerValues : 
    {
        "Date" : "",
        "Time" : "",
        "Body type" : "",
        "Gender" : "",
        "Age" : "",
        "Height" : ""
    },

    basicResults : 
    {
        "Weight" : "",
        "Body fat %" : "",
        "Fat mass" : "",
        "Fat free mass" : "",
        "Muscle mass" : "",
        "Bone mass" : "", 
        "TBW" : "",
        "TBW %" : "",
        "BMI" : "",
        "Degree of obesity" : "",
        "Visceral fat rating" : "",
        "Leg muscle score" : "",
        "BMR kcal" : "",
        "BMR score" : "",
        "Metabolic age" : ""
    },

    extensiveResults : 
    {
        "Weight" : "",
        "Body fat %" : "",
        "Fat mass" : "",
        "Fat free mass" : "",  // lean body mass + bones
        "Muscle mass" : "",    // Nimetään lihakset ja sisäelimet massaksi, "lean body mass"
        "Bone mass" : "", 
        "TBW" : "",        // Nestemassa, total body water
        "TBW %" : "",      // Nesteprosentti
        "Intracellular water (ICW)" : "",  // Solun sisäinen vesi
        "Extracellular water (ECW)" : "",  // Solun ulkoinen vesi
        "ECW %" : "",                      // %-arvo edellisestä
        "BMI" : "",
        "Degree of obesity" : "",
        "Visceral fat rating" : "",
        "Leg muscle score" : "",
        "BMR kcal" : "",
        "BMR score" : "",
        "Metabolic age" : "",
        
        rightLeg :
        {
            "Right Leg Fat %" : "",
            "Right Leg Fat mass" : "",
            "Right Leg Muscle mass" : "",
            "Right Leg Fat % score" : "",          // Arvo 1-4
            "Right Leg Muscle mass score" : ""   // Arvo 1-4
        },
        
        leftLeg : 
        {
            "Left Leg Fat %" : "",
            "Left Leg Fat mass" : "",
            "Left Leg Muscle mass" : "",
            "Left Leg Fat % score" : "",
            "Left Leg Muscle mass score" : ""
        },
        
        rightArm : 
        {
            "Right Arm Fat %" : "",
            "Right Arm Fat mass" : "",
            "Right Arm Muscle mass" : "",
            "Right Arm Fat % score" : "",
            "Right Arm Muscle mass score" : ""
        },
        
        leftArm :
        {
            "Left Arm Fat %" : "",
            "Left Arm Fat mass" : "",
            "Left Arm Muscle mass" : "",
            "Left Arm Fat % score" : "",
            "Left Arm Muscle mass score" : ""
        },
        
        trunk :
        {
            "Trunk Fat %" : "",
            "Trunk Fat mass" : "",
            "Trunk Muscle mass" : "",
            "Trunk Fat % score" : "",
            "Trunk Muscle mass score" : ""
        }
    }
}