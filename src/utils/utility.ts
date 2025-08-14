export const hrFormat = (time: string)=>{
    const parsedTime= Number(time)
    if (parsedTime == 0){
      return "12 am"
    }
    else if(parsedTime < 12){
      return `${parsedTime} am`
    }
    else if(parsedTime == 12){
        return `${parsedTime} pm`
    }
    return `${parsedTime - 12} pm`
  }