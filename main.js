
const url1 = "https://api.adviceslip.com/advice"

document.getElementById("btn").addEventListener("click", () => {
    fetch(url1)
    .then (res => res.json())
    .then (data => {
        console.log(data)
         document.getElementById("output").innerHTML =
        `<p>${data.slip.advice}</p>`
    })
})


// const promises = [];
// for (i=1; i<=10; i++) {
//     promises.push(fetch(url)
//     .then (response => response.json()));
// }
//     Promise.all(promises)
//     .then (results => {
//         const dogs = results.map(data => ({
//             image: data.messasge
//         }))
//         displayDogs(dogs)
//     })


//  const displayDogs = () => {
//     document.getElementById("dogImages").innerHTML =
//         `<img src="${results.image}"/>`
//     };
