function getChai(kind: string | number){
    if(typeof kind === "string"){
        return `making ${kind} chai`
    }
    return `Chai order : ${kind}`
}

function serveChai(msg?:string){
    if(msg){
        return `serving ${msg}`
    }
    return `no message`
}

function orderChai(size: "small" | " medium" | "larze" | number){
    if(size === "small"){
        return `Cutting Chai..`
    }
    if(size === " medium" || size === "larze"){
        return ` Extra Chai `
    }
    return ` chai order ${size}`
}

class khulhadChai{
    serve(){
        return ` Serving khulhad Chai`
    }
}
class Cutting {
    serve(){
        return `serving Cutting chai`
    }
}

function serve(chai: khulhadChai | Cutting){
    if(chai instanceof khulhadChai){
        return chai.serve();
    }
}

type ChaiOrder = {
    type:string,
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return ` Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return ` Servng custom chai: ${item}`
}

type MasalaChai = {type:"masala"; spiceLevel: number}
type GingerChai = {type:"ginger"; amount: number}
type ElaichiChai = {type:"elaichi"; aroma: number}

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order:Chai){
    switch (order.type) {
        case "elaichi":
            return `elaichi Chai`
        case "ginger":
            return `ginger Chai`
        case "masala":
            return `Masala Chai`
            break;
            
    }
}

function brew(order:MasalaChai | GingerChai){
    if("spiceLevel" in order){

    }
}

function isStringArray(arr:unknown){

}