
let defaultdata={
    list:[{name:"校长"}]
}
const getNum=(state=defaultdata,action)=>{
    switch(action.type){
        case "ADD":
            return
        default :
            return state
    }
}
export default getNum