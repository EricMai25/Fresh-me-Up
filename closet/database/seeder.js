const fs = require('fs');
const faker = require('faker')


// id: 1,
// name: 'Blue Suit',
// color: 'Blue',
// article: 'Suit',
// type: 'Buisness',
// favorite: 'false',
// dateworn: '1548532490265',
// laundry: 'true',
let start = 0
const name = faker.random.word// name 
const color = ()=>{
    const coloring = ['Red', 'Blue', 'Yellow', 'Green', 'Orange', 'Purple', 'Brown', 'Grey', 'White', "Pink"]
    const number = faker.random.number({min:0 , max: coloring.length-1})
    return coloring[number]
}  // color 
const image = faker.random.image
const type = ()=>{
    const typeArr = ['Buisness', 'Casual', 'Formal', 'Athletic']
    const number = faker.random.number({min:0 , max: typeArr.length-1})
    return typeArr[number]
}   // type 

const article = ['Suit', 'Shirt', 'Shoes', 'Watch', 'Pant']  // article 

const favorite = faker.random.boolean // favorite 

const date = faker.date.recent  // dateworn 

const laundry = faker.random.boolean  // laundry
let data = (article)=>{
    return(
        [
         start,
         name(),
         article,
         color(),
         image(),
         type(),
         favorite(),
         date(),
         laundry()
        ].join()+'\n'
    )
}
const column = ['id', 'name', 'article', 'color', 'image', 'type', 'favorite', 'date', 'laundry']
for (let j = 0; j < article.length; j++){
    const stream = fs.createWriteStream(`../../Data/${article[j]}.csv`)
    stream.write(column.join()+'\n');
    articleWriter(stream, data , article[j]);
    start = 0
}

function articleWriter(writer, data , article){
    let i = 50;
    write();
    function write(){
        let ok = true;
        while(i>0&& ok){
            i--
            if(i===0){
                writer.write(data(article));
                start++
            }else{
                ok = writer.write(data(article));
                start++;
            }
        }
        if(i>0){
            writer.once('drain', write)
        }
    }
}