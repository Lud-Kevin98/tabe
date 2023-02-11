'use strict';

let array=['buch', 'Heft', 'Stift', 'Lineal'];
let objekt={
    nachname: 28,
    vorname: 18,
    alter: 24
};


for(let i in array){
    console.log(i);
}

for(let i of array){
    console.log(i);
}


for(let i in objekt){
    console.log(i);
}

//for(let i of objekt){
//    console.log(i);
//}
for(let i of Object.values(objekt)){
    console.log('Wert:'+ i);
}
let v = Object.values(objekt);
let r = v[0];
for(let i=0;i< v.length;i++){
    r = (r > v[i])? v[i] : r;
}
console.log('kleinwert ist:' + r);
document.getElementById('taste').style.backgroundColor='pink';


            let tab = document.createElement('table');
            let thead= document.createElement('thead');
            let tbody= document.createElement('tbody');
            
            tab.appendChild(thead);
            tab.appendChild(tbody);
        
            let row_1= document.createElement('tr');
            let col_1 = document.createElement('th');
             col_1.innerHTML='hallo';
            let col_2=document.createElement('th');
            col_2.innerHTML='kevin';
            let col_3=document.createElement('th');
            col_3.innerHTML='Ludovic';
            
            row_1.appendChild(col_1);
            row_1.appendChild(col_2);
            row_1.appendChild(col_3);
            thead.appendChild(row_1);
            
            let row_2 = document.createElement('tr');
            let data_1 = document.createElement('td');
            data_1.innerHTML='gar';
            let data_2=document.createElement('td');
            data_2.innerHTML='go';
            let data_3 = document.createElement('td');
            data_3.innerHTML='jesuis';
            
            row_2.appendChild(data_1);
            row_2.appendChild(data_2);
            row_2.appendChild(data_3);
            tbody.appendChild(row_2);
            
            
        