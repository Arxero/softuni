function uniqueWords(input) {
    let text = input.join('\n');
    let unique = new Set();
    let regex = /[^\w\d]+/;

    let words = text.split(regex)
    .filter(x => x != '')
    .map(x => x.toLowerCase())
    .forEach(element => unique.add(element));

console.log([...unique].join(', '));
    
}
// uniqueWords([`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui. 
// Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. 
// Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. 
// Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. 
// Morbi in ipsum varius, pharetra diam vel, mattis arcu. 
// Integer ac turpis commodo, varius nulla sed, elementum lectus.  
// Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.`]);