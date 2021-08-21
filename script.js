let card = function(image, cardTitleAbove, litres, cardTitleBelow, black = false){
    d1 = document.createElement('div')
    d1.className = "card"

    d2 = document.createElement('div')
    d2.className = "card_image"
    d2.innerHTML = `<img src="./images/${image}" /> `
    d1.appendChild(d2)

    d3 = document.createElement('div')

    p1 = document.createElement('p')
    black == true ? p1.className = "miniHead title-black" : p1.className = "miniHead title-white"
    p1.innerText = cardTitleAbove
    d1.appendChild(p1)

    p2 = document.createElement('p')
    black == true ? p2.className = "card_title title-black" : p2.className = "card_title title-white"
    p2.innerText = litres
    d1.appendChild(p2)

    p3 = document.createElement('p')
    black == true ? p3.className = "unit title-black" : p3.className = "unit title-white"
    p3.innerText = cardTitleBelow
    d1.appendChild(p3)

    target = document.querySelector('.cards-list')
    console.log(target)
    target.appendChild(d1)
}

let entryList1 = [
    ['tshirt-3310850_960_720.png', 'T-Shirt', '3900 L', 'per T-Shirt'],
    ['jeans-4407197_960_720.jpg', 'Jeans', '7600 L', 'per jeans'],
    ['bed-sheets-314755_960_720.jpg', 'Bedsheet', '10746 L', 'per bedsheet'],
    ['rice-background.jpg', 'Rice', '2497 L', 'per Kg'],
    ['wheat.webp', 'Wheat', '900 L', 'per Kg'],
    ['cocoa.jpg', 'Cocoa', '1700 L', 'per 100g'],
    ['almonds.jpg', 'Almonds', '3.78 L', 'per almond'], //(https://endtrophyhuntingnow.com/2015/05/09/17567/factory-farming-stats-water-nuts-eggs-hamburgers/)
    ['sugar.jpg', 'Sugar', '2515 L', 'per Kg'],
    ['bread.jpg', 'Bread', '58 L', 'per slice'], 
    ['cheese.jpg', 'Cheese', '49 L', 'per slice'],
    ['butter-1449453_960_720.jpg', 'Butter', '555.3 L', 'per 100g'],
    ['chicken.jpg', 'Chicken meat', '4325 L', 'per Kg'],
    ['pizza.jfif', 'Pizza', '2139 L', 'per pizza'],
    ['burger.jpg', 'Cheeseburger', '2644 L', 'per burger'], //(water consumption & factory farming memes)
    ['ice_cream.jpg', 'Icecream prod.', '159 L', 'per scoop'], //(https://www.motherjones.com/wp-content/uploads/Dairy-comparisons_0.gif)
    ['pasta-2805203_1280.jpg', 'Pasta', '1849 L', 'per Kg'],
    ['apple-fruits-natural-102104.jpg', 'Apple', '70 L', 'per apple'],
    ['banana-2449019_960_720.png', 'Banana', '95 L', 'per banana'],
    ['potato.jpg', 'Potato', '50 L', 'per potato'],
    ['cabbage.jpg', 'Cabbage', '237 L', 'per Kg'],

]

entryList1.forEach(function(item, index){
    card(item[0], item[1], item[2], item[3], item[4])
})

entryList2 = [
    ['tomato.jfif', 'Tomato', '18 L', 'per tomato'],
    ['lettuce.jpg', 'Lettuce', '126.3 L', 'per Kg'], //(https://www.amazon.in/dp/B014WIMZBM/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)
    ['egg.jpg', 'Egg', '196 L', 'per egg'],
    ['car.jpg', 'Car', '147631 L', 'per Car'],
    ['bike-wheel-cycling-tourism.jpg', 'Bicycle', '132 L', 'per bicycle'],
    ['paper.jpg', 'Paper', '2-13 L', 'per A4 size paper'],
    ['android-phone-mobile-phone-smartphone-smartphones-2466542.jpg', 'Smartphone', '12075 L', 'per smartphone'],
    ['toothbrush.jpg', 'Not turning off tap', '12-15 L', 'each brushing session'],
    ['shower-653671_960_720.jpg', 'Bathing', '161 L', 'per bath'],
    ['leakage.jpg', 'Leakage', '37854 L', 'per Household per year'],
    ['tire.jpg', 'Tire', '1962.5 L', 'per tire'], //(https://images-na.ssl-images-amazon.com/images/I/819anKX%2BsRL.jpg)
    ['iron.jpg', 'Iron', '42775 L', 'per ton iron ore concentrate'],
    ['wood.jpg', 'Wood', '293000 L', 'per cubicmeter'], //(https://www.sciencedirect.com/science/article/pii/S030917081730012X)
    ['Aluminium-4.jpg', 'Aluminium', '4535 L', 'per ton aluminium'],
    ['cement.jpg', 'Cement', '4633 L', 'per tonne'], //(https://images-na.ssl-images-amazon.com/images/I/819anKX%2BsRL.jpg)
    ['paint.jpg', 'Paint', '190 L', 'per litre'], //(https://images-na.ssl-images-amazon.com/images/I/819anKX%2BsRL.jpg)
    ['leather-shoe-wallpaper-preview.jpg', 'Leather boots', '25000 L', 'per pair'],
    ['bottles-4251473_960_720.jpg', 'Plastic bottle', '2.5 L', 'per bottle'],
    ['coffee.jfif', 'Coffee', '136 L', 'per cup'],
    ['tea.jfif', 'Tea', '28 L', 'per cup'],
    ['cola.jpg', 'Cola', '350 L', 'per litre'], //(https://yourwaterfootprint.files.wordpress.com/2014/08/ywf-graphic-ywf-cola.jpg)
    ['beer.jfif', 'Beer', '74 L', 'per glass'],
    ['wine.jpg', 'Wine', '109 L', 'per glass'],
    ['rubber.jpg', 'Synthetic Rubber', '458 L', 'per Kg'], //(https://images-na.ssl-images-amazon.com/images/I/819anKX%2BsRL.jpg)
    // 1 barrel of crude oil - 7000 L (https://images-na.ssl-images-amazon.com/images/I/819anKX%2BsRL.jpg)
    // <!-- 1 glass Milk - 255 L -->
]

var pointer = 0
let load = function(){
    for (let pointerEnd = pointer+16; pointer < pointerEnd; pointer++) {
        if (pointer < entryList2.length){
        card(entryList2[pointer][0], entryList2[pointer][1], entryList2[pointer][2], entryList2[pointer][3], entryList2[pointer][4])
        }else{
            document.querySelector('.more').style.background = 'rgba(137, 188, 255)'
            break
        }
        
    }
}

moreButton = document.querySelector('.more')
moreButton.addEventListener("click", load)

// btn = document.getElementById('submit')
// btn.addEventListener('click', preventFunc)
// function preventFunc(e){
//     console.log('Thanks', e)
//     e.preventDefault()
// }