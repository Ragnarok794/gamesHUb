
export const tester = (query, word,wrongLetters)=>{  
console.log(query,word,wrongLetters)
    const  array_word = word.toUpperCase().split('')
  
    let correctLetter =[]
    let wrongLetter = null
    array_word.forEach((letter,i) => 
         {
            if(letter === query.toUpperCase()){
                correctLetter.push({letter,index: i})
            }});
            if(correctLetter.length === 0 && !wrongLetters.includes(query.toUpperCase())){
                wrongLetter = query.toUpperCase()
            }
           
    
  
return {correctLetter,wrongLetter}

}

