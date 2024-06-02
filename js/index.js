
var sitenameinput=document.getElementById("sitename");
var SiteURLinput=document.getElementById("SiteURL");
var submitBtn=document.getElementById("submitBtn");
var datawrapper=document.getElementById("tbody");
var updatabutton=document.getElementById("updatabutton");
var searchinputinput=document.getElementById("searchinput");


if (localStorage.getItem("newbookmark")!==null){

plist=JSON.parse(localStorage.getItem("newbookmark"))

displaydata(plist)
}

var plist=[];
function addbookmark(){
    if ( urlvalied() ==true && sitenameinput.value !="" ){


        var newbookmark={
    
            sitename:sitenameinput.value,
            Siteurl:SiteURLinput.value,
        
        
        
        
        }
        
        plist.push(newbookmark)
        console.log(plist);
        clearinput()
        localStorage.setItem("newbookmark",JSON.stringify(plist))
        displaydata(plist)
        
    }
    else
    {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text:`${urlvalied() == false ? "please enter url" : ""} ${sitenameinput.value == "" ? "and enter site name": ""}` ,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }



}


function clearinput()
{

    sitenameinput.value="";
    SiteURLinput.value="";



}



function displaydata(arry){
var cartona="";
for (var i=0;i<arry.length;i++)
{

cartona+=`<tr>

<td>${i}</td>
<td>${arry[i].sitename}</td>

<td><a href="${arry[i].Siteurl}" class=" btn btn-primary " target="_blank" >visit</a></td>
<td><button class="btn btn-success"onclick="preupdata(${i})" >updata</button></td>
<td><button class=" btn btn-danger" onclick="deletbookmark(${i})">delet</button></td>


</tr>
`



};



datawrapper.innerHTML=(cartona);

}







var index;

function preupdata(i){
index=i;
 submitBtn.classList.add("d-none")
updatabutton.classList.remove("d-none")

sitenameinput.value=plist[i].sitename;
SiteURLinput.value=plist[i].Siteurl;


}

function adddata(){

submitBtn.classList.remove("d-none")
updatabutton.classList.add("d-none")
plist[index].sitename=sitenameinput.value;
plist[index].Siteurl=SiteURLinput.value;


displaydata(plist)
localStorage.setItem("newbookmark",JSON.stringify(plist))

clearinput()



}



function deletbookmark(){


plist.splice(index,1)
localStorage.setItem("newbookmark",JSON.stringify(plist))
displaydata(plist)






}




function searchinput(){

    term=searchinputinput.value;
    var termproduct=[];
    for(i=0;i<plist.length;i++){
    
    if(plist[i].sitename.toLowerCase().includes(term.toLowerCase()) )
    
    {
    
    termproduct.push(plist[i])
    
    
    
    
    
    
    }
    
    
    }
    
    
    displaydata(termproduct)
    
    
    
    }




function urlvalied(){
var pattern=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+~#?&//=]*)/gi;
// console.log(pattern.test(SiteURLinput.value));
return pattern.test(SiteURLinput.value)





}


function regexinput(element)
{

var regex={ 

  sitename:/^[A-Z][a-z]{2,8}$/,
  SiteURL:/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+~#?&//=]*)/gi,
  


}
if(regex[element.id].test(element.value)==true)
{

element.classList.add("is-valid");
element.classList.remove("is-invalid");
return true;

}
else
{
  

element.classList.add("is-invalid");
element.classList.remove("is-valid");  
  return false;


  
}





}





  