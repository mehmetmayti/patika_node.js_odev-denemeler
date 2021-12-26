const pi=3.14;


const circleArea =function(r){
    console.log(pi*r*r);
}

const circleCircumference =function(r){
    console.log(pi*r*2);
}

module.exports={
    circleArea,
    circleCircumference
}