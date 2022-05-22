
function Student(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `Ft-web${b}`;
  }
  
  
  function storeData(e){
      e.preventDefault();
    let form = document.getElementById("studentsData");
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;
  
    let s1 =  new Student(name,course,unit,image,batch);
    let data = JSON.parse(localStorage.getItem("students")) || [];
     data.push(s1);
  
     localStorage.setItem("students",JSON.stringify(data));
    console.log(data);
    window.location.href="dashboard.html";
  
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