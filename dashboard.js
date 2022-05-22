function append(){
    let data = JSON.parse(localStorage.getItem("students")) || []; 

    let div = document.getElementById("container");
   
    data.forEach(function(el,index){
    container.innerHtml=null; 
    let div = document.createElement("div");
    let img = document.createElement("img");
     img.src = el.image;
     let name = document.createElement("h2");
     name.innerText = el.name;
     let unit = document.createElement("p");
     unit.innerText  = el.unit;
     let batch = document.createElement("h3");
     batch.innerText=el.batch;
     let course = document.createElement("h4");
     course.innerText = el.course;
     let btn = document.createElement("button");
     btn.innerText = "Remove";
     btn.addEventListener("click",function() {
         remove(index);
    });
      
     div.append(img,name,batch,unit,course,btn);
     container.append(div);
    });
        
}

append();

function remove(index){
    let data = JSON.parse(localStorage.getItem("students")) || []; 
    // event.target.parentNode.remove();
    let newData = data.filter(function(el,i){
        if(i === index){
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return i !==index;
        }
      
      
    });
 
    localStorage.setItem("students",JSON.stringify(newData));

append();

window.location.reload();

    // console.log(newData);



}

function calculate(){
    let data = JSON.parse(localStorage.getItem("students")) || []; 
    let obj = {};
    console.log(data,'may arah')
    for(let i =0;i<data.length;i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch] = 1;
        }else{
          obj[data[i].batch] ++;
        }
       
    }

    console.log(obj);
   
    for(var key in obj){
      let show = document.getElementById("showData");
      var div = document.createElement("div");
      var p1 = document.createElement("p");
      p1.innerText = key+":-";
      var p2 = document.createElement("p");
      p2.innerText = obj[key]

      div.append(p1,p2)
      show.append(div)
    }

}

calculate();