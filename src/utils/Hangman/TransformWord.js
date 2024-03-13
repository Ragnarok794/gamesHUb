

export const transformWord = (word) =>{
   
    const letter = word.split('')
    const transformedLetters = letter.map(()=>'_')
                     
    
    return {transformedLetters}
}



