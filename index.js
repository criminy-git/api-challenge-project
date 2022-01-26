const output=document.getElementById("output")

const fetchAdvice=()=>{
  const promises=[];
  for(let i=1; i<=15;i++){
      const url=`https://api.adviceslip.com/advice/${i}`;
      promises.push(fetch(url).then((res)=>res.json()));
  }
  Promise.all(promises).then((results)=>{
      const Advice =results.map((data)=>({
          'id':data.slip.id,
          'advice':data.slip.advice,
      }));
      displayAdvice(Advice);
  })
};

const displayAdvice=(Advice, Images)=>{
  console.log(Advice);
  const adviceHTMLString= Advice.map(Advice=>`
  <li class="card1">
  <div class="front">
  <img class="adviceImage" src="https://source.unsplash.com/random"/>
 
  <center><h3 id="adviceNo">Advice #${Advice.id}</h3></center> </div>
  <div class="back">
  <center><h3 id="adviceNo">Advice #${Advice.id}</h3></center>
  <center><p id="adviceString">${Advice.advice}</p></center> </div>
  </li>
  `).join(" ")
  output.innerHTML=adviceHTMLString;
}
fetchAdvice();
