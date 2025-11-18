async function getCat() {
    try{
        const res = await fetch("https://meowfacts.herokuapp.com/");
        if (!res.ok) throw new Error("Bad response");
        const data = await res.json();
        return data.data[0];
    } catch (err) {
        return "Could not fetch cat fact ;n;";
    }
}
async function updateFact(){
    const timer = document.getElementById("timer");
    const box = document.getElementById("catfact");
    const fact = await getCat();
    box.innerHTML = fact;
}
updateFact();
setInterval(() => {
  updateFact();
}, 10000);