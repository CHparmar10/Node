module.exports = reqfilter = (req,res,next)=>{
    //console.log(reqfilter);

    if(!req.query.age){
        res.send("Please provide age");
    }
    else if(req.query.age < 18){
        res.send("you can not access this page");
    }
    else{
        next();
    }
};