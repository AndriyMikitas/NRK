let Price
let data1 = 0
let data2 = "0 dpi"
let len = 0;
let wid = 0;
console.log(data1)
document.querySelector('.b-10').addEventListener('click', () =>{
     let data1 = document.querySelector('.s-10').value
     var myParent = document.body;
     if (data1==1){ 
          

          var dpiinfo = document.createElement("p")
          dpiinfo.innerText='Роздільна здатність(кількість точок на дюйм)'
          myParent.appendChild(dpiinfo)

          //Create array of options to be added
          var array = ["360 dpi","720 dpi","1440 dpi"];

          //Create and append select list
          var selectList = document.createElement("select");
          selectList.id = "mySelect";
          selectList.className = "dpi"
          myParent.appendChild(selectList);

          //Create and append the options
          for (var i = 0; i < array.length; i++) {
               var option = document.createElement("option");
               option.value = array[i];
               option.text = array[i];
               selectList.appendChild(option);
          }



          //length/width fields

          var leninfo = document.createElement("p")
          leninfo.innerText='Довжина(в см)'
          myParent.appendChild(leninfo)

          var worklength = document.createElement("input")
          worklength.type = "text"
          worklength.className = "i-2"
          myParent.appendChild(worklength)

          var widinfo = document.createElement("p")
          widinfo.innerText='Ширина(в см)'   
          myParent.appendChild(widinfo)

          var workwidth = document.createElement("input")
          workwidth.type = "text"
          workwidth.className = "i-3"
          myParent.appendChild(workwidth)

          var but3 = document.createElement("button");
          but3.className="b-13"
          but3.textContent="Ввести дані"
          myParent.appendChild(but3)

          
               
               document.querySelector('.b-13').addEventListener('click', ()=>{
                    let dataDPI = document.querySelector('.dpi').value
                    console.log(dataDPI )
                    var len = document.querySelector('.i-2').value/100;
                    var wid = document.querySelector('.i-3').value/100;
                    var area = len*wid

                    console.log(area)
                    var additions = document.createElement("h2")
                    additions.innerText='Додаткові послуги:'
                    myParent.appendChild(additions)

                    //проклейка банера

                    var qq = document.createElement("p")
                    qq.innerText='Проклейка банера'
                    myParent.appendChild(qq)

                    var prokleyka = document.createElement("input")
                    prokleyka.type="checkbox"
                    prokleyka.className = "i-22"
                    prokleyka.id="22"
                    myParent.appendChild(prokleyka)

                    //порізка баннера

                    var ww = document.createElement("p")
                    ww.innerText='Порізка банера'
                    myParent.appendChild(ww)

                    var porizka = document.createElement("input")
                    porizka.type = "checkbox"
                    porizka.className = "i-23"
                    porizka.id = "23"
                    myParent.appendChild(porizka)

                    //люверси

                    var ee = document.createElement("p")
                    ee.innerText='Люверси'
                    myParent.appendChild(ee)

                    var luversi = document.createElement("input")
                    luversi.type = "checkbox"
                    luversi.className = "i-24"
                    luversi.id="24"
                    myParent.appendChild(luversi)

                    var but24 = document.createElement("button");
                    but24.className="b-24"
                    but24.textContent="Обрати доп послуги"
                    but24.style="margin-left: 20px;"
                    myParent.appendChild(but24)

                    if (dataDPI=="720 dpi"){
                         Price=area*230
                    }
                    if (dataDPI=="360 dpi"){
                         Price=area*210
                    }
                    if (dataDPI=="1440 dpi"){
                         Price=(area*250)
                    }

                    document.querySelector('.b-24').addEventListener('click', ()=>{
                         let kleyka = document.querySelector('.i-22').value;
                         let rizka = document.querySelector('.i-23').value;
                         let luv = document.querySelector('.i-24').value;
                         


                         if (document.querySelector('.i-24').checked){
                              
                              len=Number(len)+0.1
                              
                              wid=Number(wid)+0.1
                              console.log(Price)
                              Price=Math.floor((Price/area)*len*wid)
                              console.log(Price)

                              if (document.querySelector('.i-22').checked){
                                   Price=Math.floor(Price+(len*30))
                              }
                              if (document.querySelector('.i-23').checked){
                                   Price=Math.floor(Price+(len*3))
                              }

                              var rr = document.createElement("p")
                              rr.innerText='Введіть відстань між люверсами(10/20/50см)'
                              myParent.appendChild(rr)

                              var luvDistance = document.createElement("input")
                              luvDistance.type = "number"
                              luvDistance.className = "i-25"
                              myParent.appendChild(luvDistance)
                              
                              var but25 = document.createElement("button");
                              but25.className="b-25"
                              but25.textContent="Ввести дані"
                              myParent.appendChild(but25)

                              document.querySelector('.b-25').addEventListener('click', ()=>{
                                   let data25 = document.querySelector('.i-25').value
                                   luvSum = (Math.floor((wid*100)/data25)+Math.floor((len*100)/data25))*2
                                   var tt = document.createElement("p")
                                   tt.innerText='Приблизна кількість люверсів = ' + luvSum
                                   myParent.appendChild(tt)
                                   
                                   Price = Price + 5*luvSum

                                   var pp = document.createElement("p")
                                   pp.innerText='Ціна = ' + Price
                                   myParent.appendChild(pp)

                              })

                         }
                         else{
                              if (document.querySelector('.i-22').checked){
                                   Price=Math.floor(Price+(len*30))
                              }
                              if (document.querySelector('.i-23').checked){
                                   Price=Math.floor(Price+(len*3))
                              }
                              var pp = document.createElement("p")
                                   pp.innerText='Ціна = ' + Price
                                   myParent.appendChild(pp)
                         }

                         

                         

                    })

                    

                    //люверси(так/ні)(все шо вище - чекбокси) ${luvSum}



                    //кількість люверсів
               })
          }
     
     
     



     






          if (data1==2){ 
          

               var dpiinfo = document.createElement("p")
               dpiinfo.innerText='Роздільна здатність(кількість точок на дюйм)'
               myParent.appendChild(dpiinfo)
     
               //Create array of options to be added
               var array = ["360 dpi","720 dpi"];
     
               //Create and append select list
               var selectList = document.createElement("select");
               selectList.id = "mySelect";
               selectList.className = "dpi"
               myParent.appendChild(selectList);
     
               //Create and append the options
               for (var i = 0; i < array.length; i++) {
                    var option = document.createElement("option");
                    option.value = array[i];
                    option.text = array[i];
                    selectList.appendChild(option);
               }
     
     
     
               //length/width fields
     
               var leninfo = document.createElement("p")
               leninfo.innerText='Довжина(в см)'
               myParent.appendChild(leninfo)
     
               var worklength = document.createElement("input")
               worklength.type = "text"
               worklength.className = "i-2"
               myParent.appendChild(worklength)
     
               var widinfo = document.createElement("p")
               widinfo.innerText='Ширина(в см)'   
               myParent.appendChild(widinfo)
     
               var workwidth = document.createElement("input")
               workwidth.type = "text"
               workwidth.className = "i-3"
               myParent.appendChild(workwidth)
     
               var but3 = document.createElement("button");
               but3.className="b-13"
               but3.textContent="Ввести дані"
               myParent.appendChild(but3)
     
               
                    
                    document.querySelector('.b-13').addEventListener('click', ()=>{
                         let dataDPI = document.querySelector('.dpi').value
                         console.log(dataDPI )
                         var len = document.querySelector('.i-2').value/100;
                         var wid = document.querySelector('.i-3').value/100;
                         var area = len*wid
     
                         console.log(area)
                         var additions = document.createElement("h2")
                         additions.innerText='Додаткові послуги:'
                         myParent.appendChild(additions)
     
                         //проклейка банера
     
                         var qq = document.createElement("p")
                         qq.innerText='Проклейка банера'
                         myParent.appendChild(qq)
     
                         var prokleyka = document.createElement("input")
                         prokleyka.type="checkbox"
                         prokleyka.className = "i-22"
                         prokleyka.id="22"
                         myParent.appendChild(prokleyka)
     
                         //порізка баннера
     
                         var ww = document.createElement("p")
                         ww.innerText='Порізка банера'
                         myParent.appendChild(ww)
     
                         var porizka = document.createElement("input")
                         porizka.type = "checkbox"
                         porizka.className = "i-23"
                         porizka.id = "23"
                         myParent.appendChild(porizka)
     
                         //люверси
     
                         var ee = document.createElement("p")
                         ee.innerText='Люверси'
                         myParent.appendChild(ee)
     
                         var luversi = document.createElement("input")
                         luversi.type = "checkbox"
                         luversi.className = "i-24"
                         luversi.id="24"
                         myParent.appendChild(luversi)
     
                         var but24 = document.createElement("button");
                         but24.className="b-24"
                         but24.textContent="Обрати доп послуги"
                         but24.style="margin-left: 20px;"
                         myParent.appendChild(but24)
     
                         if (dataDPI=="720 dpi"){
                              Price=area*230
                         }
                         if (dataDPI=="360 dpi"){
                              Price=area*210
                         }
                         document.querySelector('.b-24').addEventListener('click', ()=>{
                              let kleyka = document.querySelector('.i-22').value;
                              let rizka = document.querySelector('.i-23').value;
                              let luv = document.querySelector('.i-24').value;
                              
     
     
                              if (document.querySelector('.i-24').checked){
                                   
                                   len=Number(len)+0.1
                                   
                                   wid=Number(wid)+0.1
                                   console.log(Price)
                                   Price=Math.floor((Price/area)*len*wid)
                                   console.log(Price)
     
                                   if (document.querySelector('.i-22').checked){
                                        Price=Math.floor(Price+(len*30))
                                   }
                                   if (document.querySelector('.i-23').checked){
                                        Price=Math.floor(Price+(len*3))
                                   }
     
                                   var rr = document.createElement("p")
                                   rr.innerText='Введіть відстань між люверсами(10/20/50см)'
                                   myParent.appendChild(rr)
     
                                   var luvDistance = document.createElement("input")
                                   luvDistance.type = "number"
                                   luvDistance.className = "i-25"
                                   myParent.appendChild(luvDistance)
                                   
                                   var but25 = document.createElement("button");
                                   but25.className="b-25"
                                   but25.textContent="Ввести дані"
                                   myParent.appendChild(but25)
     
                                   document.querySelector('.b-25').addEventListener('click', ()=>{
                                        let data25 = document.querySelector('.i-25').value
                                        luvSum = (Math.floor((wid*100)/data25)+Math.floor((len*100)/data25))*2
                                        var tt = document.createElement("p")
                                        tt.innerText='Приблизна кількість люверсів = ' + luvSum
                                        myParent.appendChild(tt)
                                        
                                        Price = Price + 5*luvSum
     
                                        var pp = document.createElement("p")
                                        pp.innerText='Ціна = ' + Price
                                        myParent.appendChild(pp)
     
                                   })
     
                              }
                              else{
                                   if (document.querySelector('.i-22').checked){
                                        Price=Math.floor(Price+(len*30))
                                   }
                                   if (document.querySelector('.i-23').checked){
                                        Price=Math.floor(Price+(len*3))
                                   }
                                   var pp = document.createElement("p")
                                        pp.innerText='Ціна = ' + Price
                                        myParent.appendChild(pp)
                              }
     
                              
     
                              
     
                         })
     
                         
     
                         //люверси(так/ні)(все шо вище - чекбокси) ${luvSum}
     
     
     
                         //кількість люверсів
                    })
               }
          
















          if (data1==3){ 
               
               var dpiinfo = document.createElement("p")
               dpiinfo.innerText='Роздільна здатність(кількість точок на дюйм)'
               myParent.appendChild(dpiinfo)
     
               //Create array of options to be added
               var array = ["720 dpi","1440 dpi"];
     
               //Create and append select list
               var selectList = document.createElement("select");
               selectList.id = "mySelect";
               selectList.className = "dpi"
               myParent.appendChild(selectList);
     
               //Create and append the options
               for (var i = 0; i < array.length; i++) {
                    var option = document.createElement("option");
                    option.value = array[i];
                    option.text = array[i];
                    selectList.appendChild(option);
               }
     
               
     
               //length/width fields
     
               var leninfo = document.createElement("p")
               leninfo.innerText='Довжина(в см)'
               myParent.appendChild(leninfo)
     
               var worklength = document.createElement("input")
               worklength.type = "text"
               worklength.className = "i-2"
               myParent.appendChild(worklength)
     
               var widinfo = document.createElement("p")
               widinfo.innerText='Ширина(в см)'   
               myParent.appendChild(widinfo)
     
               var workwidth = document.createElement("input")
               workwidth.type = "text"
               workwidth.className = "i-3"
               myParent.appendChild(workwidth)
     
               var but3 = document.createElement("button");
               but3.className="b-13"
               but3.textContent="Ввести дані"
               myParent.appendChild(but3)
     
               
                    
                    document.querySelector('.b-13').addEventListener('click', ()=>{
                         let dataDPI = document.querySelector('.dpi').value
                         console.log(dataDPI )
                         var len = document.querySelector('.i-2').value/100;
                         var wid = document.querySelector('.i-3').value/100;
                         var area = len*wid
                         
                         console.log(area)
                         var additions = document.createElement("h4")
                         additions.innerText='Додаткові послуги'
                         myParent.appendChild(additions)
     
                         //проклейка банера
     
                         var qq = document.createElement("p")
                         qq.innerText='Ламінація'
                         myParent.appendChild(qq)
     
                         var prokleyka = document.createElement("input")
                         prokleyka.type="checkbox"
                         prokleyka.className = "i-22"
                         prokleyka.id="22"
                         myParent.appendChild(prokleyka)
     
                         //порізка баннера
     
                         var ww = document.createElement("p")
                         ww.innerText='Порізка '
                         myParent.appendChild(ww)
     
                         var porizka = document.createElement("input")
                         porizka.type = "checkbox"
                         porizka.className = "i-23"
                         porizka.id = "23"
                         myParent.appendChild(porizka)
     
                         //люверси
     
                         var but24 = document.createElement("button");
                         but24.className="b-24"
                         but24.textContent="Обрати доп послуги"
                         but24.style="margin-left: 20px;"
                         myParent.appendChild(but24)
     
                         if (dataDPI=="720 dpi"){
                              Price=area*185
                         }
                         if (dataDPI=="1440 dpi"){
                              Price=(area*220)
                         }
                         

                         document.querySelector('.b-24').addEventListener('click', ()=>{
                              let kleyka = document.querySelector('.i-22').value;
                              let rizka = document.querySelector('.i-23').value;
                              console.log(Price)
                                   if (document.querySelector('.i-22').checked){
                                        Price=Math.floor(Price+(len*120))
                                        
                                   }
                                   
                                   if (document.querySelector('.i-23').checked){
                                        Price=Math.floor(Price+(len*3))
                                   }
                                   var pp = document.createElement("p")
                                        pp.innerText='Ціна = ' + Price
                                        myParent.appendChild(pp)
                              
     
                              
     
                              
     
                         })

                    })
               }













               if (data1==4){ 
               
                    var dpiinfo = document.createElement("p")
                    dpiinfo.innerText='Роздільна здатність(кількість точок на дюйм)'
                    myParent.appendChild(dpiinfo)
          
                    //Create array of options to be added
                    var array = ["720 dpi"];
          
                    //Create and append select list
                    var selectList = document.createElement("select");
                    selectList.id = "mySelect";
                    selectList.className = "dpi"
                    myParent.appendChild(selectList);
          
                    //Create and append the options
                    for (var i = 0; i < array.length; i++) {
                         var option = document.createElement("option");
                         option.value = array[i];
                         option.text = array[i];
                         selectList.appendChild(option);
                    }
          
                    
          
                    //length/width fields
          
                    var leninfo = document.createElement("p")
                    leninfo.innerText='Довжина(в см)'
                    myParent.appendChild(leninfo)
          
                    var worklength = document.createElement("input")
                    worklength.type = "text"
                    worklength.className = "i-2"
                    myParent.appendChild(worklength)
          
                    var widinfo = document.createElement("p")
                    widinfo.innerText='Ширина(в см)'   
                    myParent.appendChild(widinfo)
          
                    var workwidth = document.createElement("input")
                    workwidth.type = "text"
                    workwidth.className = "i-3"
                    myParent.appendChild(workwidth)
          
                    var but3 = document.createElement("button");
                    but3.className="b-13"
                    but3.textContent="Ввести дані"
                    myParent.appendChild(but3)
          
                    
                         
                         document.querySelector('.b-13').addEventListener('click', ()=>{
                              let dataDPI = document.querySelector('.dpi').value
                              console.log(dataDPI )
                              var len = document.querySelector('.i-2').value/100;
                              var wid = document.querySelector('.i-3').value/100;
                              var area = len*wid
                              
                              console.log(area)
                              var additions = document.createElement("h4")
                              additions.innerText='Додаткові послуги'
                              myParent.appendChild(additions)
          
                              //проклейка банера
          
                              var qq = document.createElement("p")
                              qq.innerText='Ламінація'
                              myParent.appendChild(qq)
          
                              var prokleyka = document.createElement("input")
                              prokleyka.type="checkbox"
                              prokleyka.className = "i-22"
                              prokleyka.id="22"
                              myParent.appendChild(prokleyka)
          
                              //порізка баннера
          
                              var ww = document.createElement("p")
                              ww.innerText='Порізка '
                              myParent.appendChild(ww)
          
                              var porizka = document.createElement("input")
                              porizka.type = "checkbox"
                              porizka.className = "i-23"
                              porizka.id = "23"
                              myParent.appendChild(porizka)
          
                              //люверси
          
                              var but24 = document.createElement("button");
                              but24.className="b-24"
                              but24.textContent="Обрати доп послуги"
                              but24.style="margin-left: 20px;"
                              myParent.appendChild(but24)
          
                              if (dataDPI=="720 dpi"){
                                   Price=area*220
                              }
                              
                              
     
                              document.querySelector('.b-24').addEventListener('click', ()=>{
                                   let kleyka = document.querySelector('.i-22').value;
                                   let rizka = document.querySelector('.i-23').value;
                                   console.log(Price)
                                        if (document.querySelector('.i-22').checked){
                                             Price=Math.floor(Price+(len*120))
                                             
                                        }
                                        
                                        if (document.querySelector('.i-23').checked){
                                             Price=Math.floor(Price+(len*3))
                                        }
                                        var pp = document.createElement("p")
                                             pp.innerText='Ціна = ' + Price
                                             myParent.appendChild(pp)
                                   
          
                                   
          
                                   
          
                              })

                         })
                    }











                    if (data1==5){ 
               
                         var dpiinfo = document.createElement("p")
                         dpiinfo.innerText='Роздільна здатність(кількість точок на дюйм)'
                         myParent.appendChild(dpiinfo)
               
                         //Create array of options to be added
                         var array = ["1440 dpi"];
               
                         //Create and append select list
                         var selectList = document.createElement("select");
                         selectList.id = "mySelect";
                         selectList.className = "dpi"
                         myParent.appendChild(selectList);
               
                         //Create and append the options
                         for (var i = 0; i < array.length; i++) {
                              var option = document.createElement("option");
                              option.value = array[i];
                              option.text = array[i];
                              selectList.appendChild(option);
                         }
               
                         
               
                         //length/width fields
               
                         var leninfo = document.createElement("p")
                         leninfo.innerText='Довжина(в см)'
                         myParent.appendChild(leninfo)
               
                         var worklength = document.createElement("input")
                         worklength.type = "text"
                         worklength.className = "i-2"
                         myParent.appendChild(worklength)
               
                         var widinfo = document.createElement("p")
                         widinfo.innerText='Ширина(в см)'   
                         myParent.appendChild(widinfo)
               
                         var workwidth = document.createElement("input")
                         workwidth.type = "text"
                         workwidth.className = "i-3"
                         myParent.appendChild(workwidth)
               
                         var but3 = document.createElement("button");
                         but3.className="b-13"
                         but3.textContent="Ввести дані"
                         myParent.appendChild(but3)
               
                         
                              
                              document.querySelector('.b-13').addEventListener('click', ()=>{
                                   let dataDPI = document.querySelector('.dpi').value
                                   console.log(dataDPI )
                                   var len = document.querySelector('.i-2').value/100;
                                   var wid = document.querySelector('.i-3').value/100;
                                   var area = len*wid
                                   
                                   console.log(area)
                                   var additions = document.createElement("h4")
                                   additions.innerText='Додаткові послуги'
                                   myParent.appendChild(additions)
               
                                   //проклейка банера
               
                                   var qq = document.createElement("p")
                                   qq.innerText='Ламінація'
                                   myParent.appendChild(qq)
               
                                   var prokleyka = document.createElement("input")
                                   prokleyka.type="checkbox"
                                   prokleyka.className = "i-22"
                                   prokleyka.id="22"
                                   myParent.appendChild(prokleyka)
               
                                   //порізка баннера
               
                                   var ww = document.createElement("p")
                                   ww.innerText='Порізка '
                                   myParent.appendChild(ww)
               
                                   var porizka = document.createElement("input")
                                   porizka.type = "checkbox"
                                   porizka.className = "i-23"
                                   porizka.id = "23"
                                   myParent.appendChild(porizka)
               
                                   //люверси
               
                                   var but24 = document.createElement("button");
                                   but24.className="b-24"
                                   but24.textContent="Обрати доп послуги"
                                   but24.style="margin-left: 20px;"
                                   myParent.appendChild(but24)
               
                                  
                                   if (dataDPI=="1440 dpi"){
                                        Price=(area*405)
                                   }
                                   
          
                                   document.querySelector('.b-24').addEventListener('click', ()=>{
                                        let kleyka = document.querySelector('.i-22').value;
                                        let rizka = document.querySelector('.i-23').value;
                                        console.log(Price)
                                             if (document.querySelector('.i-22').checked){
                                                  Price=Math.floor(Price+(len*120))
                                                  
                                             }
                                             
                                             if (document.querySelector('.i-23').checked){
                                                  Price=Math.floor(Price+(len*3))
                                             }
                                             var pp = document.createElement("p")
                                                  pp.innerText='Ціна = ' + Price
                                                  myParent.appendChild(pp)
                                        
               
                                        
               
                                        
               
                                   })

                              })
                         }







               if (data1==6){ 
               
               var dpiinfo = document.createElement("p")
               dpiinfo.innerText='Роздільна здатність(кількість точок на дюйм)'
               myParent.appendChild(dpiinfo)
     
               //Create array of options to be added
               var array = ["720 dpi","1440 dpi"];
     
               //Create and append select list
               var selectList = document.createElement("select");
               selectList.id = "mySelect";
               selectList.className = "dpi"
               myParent.appendChild(selectList);
     
               //Create and append the options
               for (var i = 0; i < array.length; i++) {
                    var option = document.createElement("option");
                    option.value = array[i];
                    option.text = array[i];
                    selectList.appendChild(option);
               }
     
               
     
               //length/width fields
     
               var leninfo = document.createElement("p")
               leninfo.innerText='Довжина(в см)'
               myParent.appendChild(leninfo)
     
               var worklength = document.createElement("input")
               worklength.type = "text"
               worklength.className = "i-2"
               myParent.appendChild(worklength)
     
               var widinfo = document.createElement("p")
               widinfo.innerText='Ширина(в см)'   
               myParent.appendChild(widinfo)
     
               var workwidth = document.createElement("input")
               workwidth.type = "text"
               workwidth.className = "i-3"
               myParent.appendChild(workwidth)
     
               var but3 = document.createElement("button");
               but3.className="b-13"
               but3.textContent="Ввести дані"
               myParent.appendChild(but3)
     
               
                    
                    document.querySelector('.b-13').addEventListener('click', ()=>{
                         let dataDPI = document.querySelector('.dpi').value
                         console.log(dataDPI )
                         var len = document.querySelector('.i-2').value/100;
                         var wid = document.querySelector('.i-3').value/100;
                         var area = len*wid
                         
                         console.log(area)
                         var additions = document.createElement("h4")
                         additions.innerText='Додаткові послуги'
                         myParent.appendChild(additions)
     
                         //проклейка банера
     
                         var qq = document.createElement("p")
                         qq.innerText='Ламінація'
                         myParent.appendChild(qq)
     
                         var prokleyka = document.createElement("input")
                         prokleyka.type="checkbox"
                         prokleyka.className = "i-22"
                         prokleyka.id="22"
                         myParent.appendChild(prokleyka)
     
                         //порізка баннера
     
                         var ww = document.createElement("p")
                         ww.innerText='Порізка '
                         myParent.appendChild(ww)
     
                         var porizka = document.createElement("input")
                         porizka.type = "checkbox"
                         porizka.className = "i-23"
                         porizka.id = "23"
                         myParent.appendChild(porizka)
     
                         //люверси
     
                         var but24 = document.createElement("button");
                         but24.className="b-24"
                         but24.textContent="Обрати доп послуги"
                         but24.style="margin-left: 20px;"
                         myParent.appendChild(but24)
     
                         if (dataDPI=="720 dpi"){
                              Price=area*190
                         }
                         if (dataDPI=="1440 dpi"){
                              Price=(area*210)
                         }
                         

                         document.querySelector('.b-24').addEventListener('click', ()=>{
                              let kleyka = document.querySelector('.i-22').value;
                              let rizka = document.querySelector('.i-23').value;
                              console.log(Price)
                                   if (document.querySelector('.i-22').checked){
                                        Price=Math.floor(Price+(len*120))
                                        
                                   }
                                   
                                   if (document.querySelector('.i-23').checked){
                                        Price=Math.floor(Price+(len*3))
                                   }
                                   var pp = document.createElement("p")
                                        pp.innerText='Ціна = ' + Price
                                        myParent.appendChild(pp)
                              
     
                              
     
                              
     
                         })
     
                         
     
                         
                    })
               }












               if (data1==7){
                    var dpiinfo = document.createElement("p")
                    dpiinfo.innerText='Білборд (стандарт 6м*3м) - 480 грн (Порізка входить у вартість)'
                    myParent.appendChild(dpiinfo)
               }















               if (data1==8){ 
               
                    var dpiinfo = document.createElement("p")
                    dpiinfo.innerText='Роздільна здатність(кількість точок на дюйм)'
                    myParent.appendChild(dpiinfo)
          
                    //Create array of options to be added
                    var array = ["360 dpi","720 dpi"];
          
                    //Create and append select list
                    var selectList = document.createElement("select");
                    selectList.id = "mySelect";
                    selectList.className = "dpi"
                    myParent.appendChild(selectList);
          
                    //Create and append the options
                    for (var i = 0; i < array.length; i++) {
                         var option = document.createElement("option");
                         option.value = array[i];
                         option.text = array[i];
                         selectList.appendChild(option);
                    }
          
                    
          
                    //length/width fields
          
                    var leninfo = document.createElement("p")
                    leninfo.innerText='Довжина(в см)'
                    myParent.appendChild(leninfo)
          
                    var worklength = document.createElement("input")
                    worklength.type = "text"
                    worklength.className = "i-2"
                    myParent.appendChild(worklength)
          
                    var widinfo = document.createElement("p")
                    widinfo.innerText='Ширина(в см)'   
                    myParent.appendChild(widinfo)
          
                    var workwidth = document.createElement("input")
                    workwidth.type = "text"
                    workwidth.className = "i-3"
                    myParent.appendChild(workwidth)
          
                    var but3 = document.createElement("button");
                    but3.className="b-13"
                    but3.textContent="Ввести дані"
                    myParent.appendChild(but3)
          
                    
                         
                         document.querySelector('.b-13').addEventListener('click', ()=>{
                              let dataDPI = document.querySelector('.dpi').value
                              console.log(dataDPI )
                              var len = document.querySelector('.i-2').value/100;
                              var wid = document.querySelector('.i-3').value/100;
                              var area = len*wid
                              
                              console.log(area)
                              var additions = document.createElement("h4")
                              additions.innerText='Додаткові послуги'
                              myParent.appendChild(additions)
          
          
                              //порізка баннера
          
                              var ww = document.createElement("p")
                              ww.innerText='Порізка '
                              myParent.appendChild(ww)
          
                              var porizka = document.createElement("input")
                              porizka.type = "checkbox"
                              porizka.className = "i-23"
                              porizka.id = "23"
                              myParent.appendChild(porizka)
          
                              //люверси
          
                              var but24 = document.createElement("button");
                              but24.className="b-24"
                              but24.textContent="Обрати доп послуги"
                              but24.style="margin-left: 20px;"
                              myParent.appendChild(but24)
          
                              if (dataDPI=="720 dpi"){
                                   Price=area*85
                              }
                              if (dataDPI=="360 dpi"){
                                   Price=(area*60)
                              }
                              
     
                              document.querySelector('.b-24').addEventListener('click', ()=>{
                                   
                                   let rizka = document.querySelector('.i-23').value;
                                   console.log(Price)
                                       
                                        
                                        if (document.querySelector('.i-23').checked){
                                             Price=Math.floor(Price+(len*3))
                                        }
                                        var pp = document.createElement("p")
                                             pp.innerText='Ціна = ' + Price
                                             myParent.appendChild(pp)

          
                              })
          
                              
          
                              
                         })
                    }











                    if (data1==9){ 
               
                         var dpiinfo = document.createElement("p")
                         dpiinfo.innerText='Роздільна здатність(кількість точок на дюйм)'
                         myParent.appendChild(dpiinfo)
               
                         //Create array of options to be added
                         var array = ["720 dpi", "1440 dpi"];
               
                         //Create and append select list
                         var selectList = document.createElement("select");
                         selectList.id = "mySelect";
                         selectList.className = "dpi"
                         myParent.appendChild(selectList);
               
                         //Create and append the options
                         for (var i = 0; i < array.length; i++) {
                              var option = document.createElement("option");
                              option.value = array[i];
                              option.text = array[i];
                              selectList.appendChild(option);
                         }
               
                         
               
                         //length/width fields
               
                         var leninfo = document.createElement("p")
                         leninfo.innerText='Довжина(в см)'
                         myParent.appendChild(leninfo)
               
                         var worklength = document.createElement("input")
                         worklength.type = "text"
                         worklength.className = "i-2"
                         myParent.appendChild(worklength)
               
                         var widinfo = document.createElement("p")
                         widinfo.innerText='Ширина(в см)'   
                         myParent.appendChild(widinfo)
               
                         var workwidth = document.createElement("input")
                         workwidth.type = "text"
                         workwidth.className = "i-3"
                         myParent.appendChild(workwidth)
               
                         var but3 = document.createElement("button");
                         but3.className="b-13"
                         but3.textContent="Ввести дані"
                         myParent.appendChild(but3)
               
                         
                              
                              document.querySelector('.b-13').addEventListener('click', ()=>{
                                   let dataDPI = document.querySelector('.dpi').value
                                   console.log(dataDPI )
                                   var len = document.querySelector('.i-2').value/100;
                                   var wid = document.querySelector('.i-3').value/100;
                                   var area = len*wid
                                   
                                   console.log(area)
                                   var additions = document.createElement("h4")
                                   additions.innerText='Додаткові послуги'
                                   myParent.appendChild(additions)
               
               
                                   //порізка баннера
               
                                   var ww = document.createElement("p")
                                   ww.innerText='Порізка '
                                   myParent.appendChild(ww)
               
                                   var porizka = document.createElement("input")
                                   porizka.type = "checkbox"
                                   porizka.className = "i-23"
                                   porizka.id = "23"
                                   myParent.appendChild(porizka)
               
                                   //люверси
               
                                   var but24 = document.createElement("button");
                                   but24.className="b-24"
                                   but24.textContent="Обрати доп послуги"
                                   but24.style="margin-left: 20px;"
                                   myParent.appendChild(but24)
               
                                   if (dataDPI=="720 dpi"){
                                        Price=area*115
                                   }
                                   if (dataDPI=="1440 dpi"){
                                        Price=(area*135)
                                   }
                                   
          
                                   document.querySelector('.b-24').addEventListener('click', ()=>{
                                        
                                        let rizka = document.querySelector('.i-23').value;
                                        console.log(Price)
                                            
                                             
                                             if (document.querySelector('.i-23').checked){
                                                  Price=Math.floor(Price+(len*3))
                                             }
                                             var pp = document.createElement("p")
                                                  pp.innerText='Ціна = ' + Price
                                                  myParent.appendChild(pp)
     
               
                                   })
               
                                   
               
                                   
                              })
                         }

                         







                         if (data1==10){
                              var dpiinfo = document.createElement("p")
                              dpiinfo.innerText='Бекліт, Сітілайт (стандарт 1.2м*1.8м), порізка входить у вартість'
                              myParent.appendChild(dpiinfo)
                              var dpiinfo = document.createElement("p")
                         dpiinfo.innerText='Роздільна здатність(кількість точок на дюйм)'
                         myParent.appendChild(dpiinfo)
               
                         //Create array of options to be added
                         var array = ["360 dpi","720 dpi"];
               
                         //Create and append select list
                         var selectList = document.createElement("select");
                         selectList.id = "mySelect";
                         selectList.className = "dpi"
                         myParent.appendChild(selectList);
               
                         //Create and append the options
                         for (var i = 0; i < array.length; i++) {
                              var option = document.createElement("option");
                              option.value = array[i];
                              option.text = array[i];
                              selectList.appendChild(option);
                         }
               
                         
               
                         //length/width fields
               
                        
               
                         var but3 = document.createElement("button");
                         but3.className="b-13"
                         but3.textContent="Ввести дані"
                         myParent.appendChild(but3)
               
                         
                              
                              document.querySelector('.b-13').addEventListener('click', ()=>{
                                   let dataDPI = document.querySelector('.dpi').value
                                   console.log(dataDPI )
                                   
                                                                                                                        
                                   if (dataDPI=="360 dpi"){
                                        Price=185
                                   }
                                   if (dataDPI=="720 dpi"){
                                        Price=210
                                   }
                                   
                                   var pp = document.createElement("p")
                                                  pp.innerText='Ціна = ' + Price
                                                  myParent.appendChild(pp)
          
                                   
               
                                   
               
                                   
                              })

                         }









                         if (data1==11){
                              var dpiinfo = document.createElement("p")
                              dpiinfo.innerText='Сітіскрол (стандарт 1.27м*1.86м), 360 dpi - 450 грн (порізка входить у вартість)'
                              myParent.appendChild(dpiinfo)
                         }















                         if (data1==12){
                              var dpiinfo = document.createElement("p")
                              dpiinfo.innerText='Сітіборд (стандарт 3.15м*2.3м), 1440 dpi - 1550 грн (порізка входить у вартість)'
                              myParent.appendChild(dpiinfo)
                         }















                         if (data1==13){ 
               
                              var dpiinfo = document.createElement("p")
                              dpiinfo.innerText='Роздільна здатність(кількість точок на дюйм)'
                              myParent.appendChild(dpiinfo)
                    
                              //Create array of options to be added
                              var array = ["1440 dpi"];
                    
                              //Create and append select list
                              var selectList = document.createElement("select");
                              selectList.id = "mySelect";
                              selectList.className = "dpi"
                              myParent.appendChild(selectList);
                    
                              //Create and append the options
                              for (var i = 0; i < array.length; i++) {
                                   var option = document.createElement("option");
                                   option.value = array[i];
                                   option.text = array[i];
                                   selectList.appendChild(option);
                              }
                    
                              
                    
                              //length/width fields
                    
                              var leninfo = document.createElement("p")
                              leninfo.innerText='Довжина(в см)'
                              myParent.appendChild(leninfo)
                    
                              var worklength = document.createElement("input")
                              worklength.type = "text"
                              worklength.className = "i-2"
                              myParent.appendChild(worklength)
                    
                              var widinfo = document.createElement("p")
                              widinfo.innerText='Ширина(в см)'   
                              myParent.appendChild(widinfo)
                    
                              var workwidth = document.createElement("input")
                              workwidth.type = "text"
                              workwidth.className = "i-3"
                              myParent.appendChild(workwidth)
                    
                              var but3 = document.createElement("button");
                              but3.className="b-13"
                              but3.textContent="Ввести дані"
                              myParent.appendChild(but3)
                    
                              
                                   
                                   document.querySelector('.b-13').addEventListener('click', ()=>{
                                        let dataDPI = document.querySelector('.dpi').value
                                        console.log(dataDPI )
                                        var len = document.querySelector('.i-2').value/100;
                                        var wid = document.querySelector('.i-3').value/100;
                                        var area = len*wid
                                        
                                        console.log(area)
                                        var additions = document.createElement("h4")
                                        additions.innerText='Додаткові послуги'
                                        myParent.appendChild(additions)
                    
                    
                                        //порізка баннера
                    
                                        var ww = document.createElement("p")
                                        ww.innerText='Порізка '
                                        myParent.appendChild(ww)
                    
                                        var porizka = document.createElement("input")
                                        porizka.type = "checkbox"
                                        porizka.className = "i-23"
                                        porizka.id = "23"
                                        myParent.appendChild(porizka)
                    
                                        //люверси
                    
                                        var but24 = document.createElement("button");
                                        but24.className="b-24"
                                        but24.textContent="Обрати доп послуги"
                                        but24.style="margin-left: 20px;"
                                        myParent.appendChild(but24)
                    
                                        
                                        if (dataDPI=="1440 dpi"){
                                             Price=(area*790)
                                        }
                                        
               
                                        document.querySelector('.b-24').addEventListener('click', ()=>{
                                             
                                             let rizka = document.querySelector('.i-23').value;
                                             console.log(Price)
                                                 
                                                  
                                                  if (document.querySelector('.i-23').checked){
                                                       Price=Math.floor(Price+(len*3))
                                                  }
                                                  var pp = document.createElement("p")
                                                       pp.innerText='Ціна = ' + Price
                                                       myParent.appendChild(pp)
          
                    
                                        })
                    
                                        
                    
                                        
                                   })
                              }







               

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
               
               
          
          
})
