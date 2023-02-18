function errorParser(error){
    let errorMessage = "";
    
    if(error.name == "ValidationError"){
        for(let [field,el] of Object.entries(error.errors)){
            errorMessage = el.properties.message;
        }
    }else{
        errorMessage = error.message;
    }
    return errorMessage;
};

module.exports = errorParser;