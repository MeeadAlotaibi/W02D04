//////////////////////////////////////////////////////عشان  نعمل اول جملة بتظهر على الصفحة


const body = document.querySelector("body")
const listTitle = document.createElement("h1")
listTitle.innerHTML = "To Do List" ;
body.append(listTitle)

//////////////////////////////////////////////////////  عشان نعمل القائمة نحتاج الى ....

const UlList = document.createElement("ul") // انشأت عنصر 
UlList.id = "myList"   /// اعطيت هذا العنصر آي دي
body.append(UlList) ///    اعطيته امر بانه يجعل البدي أب للقائمة اللي انشأتها 

////////////////////////////////////////////////////// الان عشان انشئ عناصر القائمة ،، احطهم في مصفوفة 

const elementOfList =["wake up" , "eat breakfast" , "code"]

//////////////////////////////////////////////////////

const deleteLi = (i) => {    /// هنا سويت دالة للحذف 
    elementOfList.splice(i,1)  /// حطيت دالة سبلايس بحيث تاخذ العنصر اللي بعته لي اللوب لمّا ضغط المستخدم على بوتن الدليت ، وتحدف عنصر واحد فقط 
    renderList();  /// استدعينا الريندر عشان تبداء بتفريغ الليست و اسناد القيًّم من جديد بعد عملية الحذف 
} 

//////////////////////////////////////////////////////


 const updateListItem = (i) =>{   /// هنا سويت دالة للتعديل على العناصر الموجودة 
     let update = prompt("Pleae Enter your update","")  /// هنا عرفت متغير خليته يحمل ميثود البرو مت ،، تسمح هذه الميثود بأن يقوم المستخدم بادخال قيمة
     elementOfList[i] = update    ///قمنا بإستاد القيمة المحدثة اللي ادخلها المستخدم الى اندكس المصفوفة 
     renderList(); /// ثم استدعينا الريندر عشان تبداء بتفريغ الليست و اسناد القيًّم من جديد بعد عملية التحديث 
      }

//////////////////////////////////////////////////////




/// بعد كذا لازم اسوي فنكشن فيها لووب عشان اقدر ادخل على المصفوفة و اوزع عناصرها في اللست 

const renderList = () => {
    UlList.innerHTML = "" //  في كل مره خليته يفضّي لي العناصر عشان اعبيهم من جديد مع العنصر الجديد  
// لوب تنشأ عناصر
    for ( let i = 0 ; i < elementOfList.length ; i++){
        const newItem = document.createElement("li") // هنا لما دخل ع المصفوفة قلته له انشئ عنصر للقائمة 
        newItem.innerHTML = elementOfList[i] ;// هنا خليته يخزن قيمة الاندكس في العنصر القائمة و يُظهرة على الويب 
        UlList.append(newItem)    

//////////////////////////////////////////////////////


//وتنشئ بوتن للحذف 
       const newbutton = document.createElement("button") /// هنا لما دخل ع المصفوفة قلته له انشئ عنصر للقائمة 
       newbutton.className ="deleteBtn"; /// اعطينا البوتن كلاس نيم 
       newbutton.innerHTML ="Delete";
       newbutton.addEventListener('click' , ()=>{deleteLi(i)}); /// حطينا للبوتن دالة ايفنت لسنر ،، بحث لو ضغط المستخدم على بوتن الحذف تقوم باستدعاء دالة الحذف الموجودة في سطر 21  
        newItem.append(newbutton);



/////////////////////////////////////////////////////////


// تنشئ بوتن للتحديث 
        const updatebtn = document.createElement("button") /// هنا لما دخل ع المصفوفة قلته له انشئ عنصر للقائمة من نوع بوتن 
        updatebtn.className ="updateBtn"; /// اعطينا البوتن كلاس نيم 
        updatebtn.innerHTML ="Update";
        updatebtn.addEventListener('click' , ()=>{updateListItem(i)}); /// حطينا للبوتن دالة ايفنت لسنر ،، بحث لو ضغط المستخدم على بوتن التحديث تقوم باستدعاء دالة الحدف الموجودة في سطر 29  
        newItem.append(updatebtn);
    }
}
renderList(); // استدعيت الدالة عشان تشتغل


//////////////////////////////////////////////////////


const inputBox = document.createElement("input") // هنا انشأت عنصر اسمه انبوت من  نوع تكست
inputBox.type ="text"
body.append(inputBox) // هنا اضفت هذا العنصر الى البودي كا تشايلد 

/////////////////////
const br = document.createElement("br") // هنا عطيته امر ينشئ سطر جديد ،، هذي قدعنه من عندي هههههههههه امزح ..
body.append(br) ; 


///// المهم نكمّل

const btnButton = document.createElement("button") // هنا عطيته امر بانشاء بوتن
btnButton.innerHTML = "Add" // مكتوب عليه ،، اضغط هنا 
btnButton.id ="btn1" // حطيت له آي دي 
body.append(btnButton) // اضفته ك تشايلد ال البدي 



///////////////////// الحين لازم اسوي فنكشن تنفذ لي الامر اللي راح اعطيه للبوتن 


function addToList  (){
    if(inputBox.value.length) {// سويت شرط ان اذا كان اذا مادخّل قيمة معاناته فورسي فاليو ،، اذا راح ينزل و يكمل تحت 
        elementOfList.push(inputBox.value)// يجيب هذه القيمة من اصندوق النص الي في سطر ٣٣  
        renderList();
        inputBox.value = "" //هذا السترنق يخلي البوكس فاضي بعد ما اسوي بوش للقيمة 
    }
}

btnButton.addEventListener("click", addToList) /// هنا استدعيت ميثود استماع الحدث بحيث يعمل اكشن لما اعمل كليك على البوتن وو  


 