
export const tester = (query, word)=>{  

    const  array_word = word.toUpperCase().split('')
   
    let correctLetter =[]
    let wrongLetter = ''
    array_word.forEach((letter,i) => 
         {
            if(letter === query.toUpperCase()){
                correctLetter.push({letter,index: i})
            }});
            if(correctLetter.length === 0 ){
                wrongLetter = query.toUpperCase()
            }
           
    
   if (correctLetter.length > 0 || wrongLetter){
return {correctLetter,wrongLetter}}

}

