{


type Shape = { shape: "circle", radius: 5 } | { shape: "rectangle", width: 4, height: 6}

const calculateShapeArea = (shape: Shape) : number => {
    if(shape.shape === "rectangle"){
        const rectangleWidth = shape.width
        const rectangleHeight = shape.height;
        return rectangleWidth * rectangleHeight
    }else if(shape.shape === "circle"){
        const shapeRadius = shape.radius * shape.radius
        const pi = Math.PI;
        return pi * shapeRadius;
    }
}


const circleResult = calculateShapeArea({
    shape: "circle", radius: 5
})
const rectangleResult = calculateShapeArea({
    shape: "rectangle", width: 4, height: 6 
})


// console.log(`The Circle shape is ${circleResult}`)
// console.log(`The Rectangle shape is ${rectangleResult}`)




}