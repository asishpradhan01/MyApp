const input = document.querySelector(".plans");
const addbutton = document.getElementById("addbtn");
const item = document.getElementById("shown");
const newplans = document.querySelector(".newplans");
const days = document.getElementById("addbtndays");
const showing = document.getElementById("showing");
const currentdate = document.getElementById("current-date");
const randomQuotes = document.getElementById("random-quotes");

addbutton.addEventListener('click', () => {
    const text = input.value;
    if(text.trim() !== '') {
        const listitem = document.createElement("li");
        listitem.textContent = text;

     const deletebutton = document.createElement('button');
     deletebutton.textContent = "Remove";
    deletebutton.addEventListener('click', () => {
        listitem.remove();
    })

    listitem.appendChild(deletebutton);
    item.appendChild(listitem);
    input.value = '';
    }
})

days.addEventListener('click', () => {
    const newtext = newplans.value;
    if(newtext.trim() !== '') {
        const newlistitem = document.createElement("li");
        newlistitem.textContent = newtext;

     const newdeletebutton = document.createElement('button');
     newdeletebutton.textContent = "Remove";
    newdeletebutton.addEventListener('click', () => {
        newlistitem.remove();
    })

    newlistitem.appendChild(newdeletebutton);
    showing.appendChild(newlistitem);
    newplans.value = '';
    }
})

const quotes = [
"knowledge is power",

"The only way to do greate work is to love what you do",
  
"Character is power",
   
"The only possible journey is the one you lived",

"keep a cool head and maintain low proifle",
  
 "Don't fear your uniqueness",
];