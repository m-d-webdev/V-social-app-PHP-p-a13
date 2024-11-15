let father= document.querySelector(".father")
let container = document.querySelector(".container");
let btn_addMore = document.getElementById("addMore-btn");
let cloned_cnt = container.cloneNode(true);
var conteur = document.querySelector(".conteur");
var cnt_zom= document.querySelector(".zom_in_img");
let img_zoomed= document.querySelector(".zom_in_img  img");
cnt_zom.addEventListener('click', (e)=>{
  if(!img_zoomed.contains(e.target)){
    cnt_zom.classList.remove("add_visibility");
  }
})


img_zoomed.ondblclick=()=>{
  img_zoomed.classList.toggle("add-zoom")
}
// DETAILS ELEMENT +                               \\\\\\\\\\\\\\\\\\\\\\\\\\\\|||||||||||||||||||||||||||||||||\\\\\\\\\\\\\\|||||||||||///////////////////////////////////////////////?\'|\\|\|/\|/\|/\|?\|/\?\\|/\|/\|/;

// 

data=[
list={
        nom:'NO3MANE',
        lastname:'ELMADO',
        img_prof:'https://i.pinimg.com/736x/f9/a0/55/f9a055dfd0ee56068b73b108681cdfaa.jpg',
        date_publish:'15 / 06 / 2023',
        text_des:"j'ai sa dans ma bon marcher ",
        imgs: 'https://i.pinimg.com/736x/f9/a0/55/f9a055dfd0ee56068b73b108681cdfaa.jpg',
        fulname : function (){
          return  this.nom+" "+ this.lastname
        },
    
},
list={
        nom:'Mohammed ',
        lastname:'AYT ',
        img_prof:'https://i.pinimg.com/564x/45/cf/fb/45cffb3a0cbefbc8f2052862c835ce67.jpg',
        date_publish:'15 / 06 / 2023',
        text_des:"Yeah you wil never know all about me  ",
        imgs: 'https://i.pinimg.com/736x/b8/83/84/b883847992d3a3410a17ca030991a2f4.jpg',
        fulname : function (){
          return  this.nom+" "+ this.lastname
        },
    
},
list={
        nom:'Bohsn ',
        lastname:'F_T',
        img_prof:'https://i.pinimg.com/736x/87/3b/d0/873bd00d96528ad5c32d91ecebaead04.jpg',
        date_publish:'29 / 05 / 2023',
        text_des:"Never give up",
        imgs: 'https://i.pinimg.com/736x/87/3b/d0/873bd00d96528ad5c32d91ecebaead04.jpg',
        fulname : function (){
          return  this.nom+" "+ this.lastname
        },
    
},
list={
      nom:'HMAD ALAKOUCH ',
      lastname:'F_T',
      img_prof:'https://i.pinimg.com/736x/87/3b/d0/873bd00d96528ad5c32d91ecebaead04.jpg',
      date_publish:'29 / 05 / 2023',
      text_des:"Its for sale ",
      imgs: 'https://i.pinimg.com/564x/f7/1b/b6/f71bb62c0af9ab540bc77188ebaafb7d.jpg',
      fulname : function (){
        return  this.nom+" "+ this.lastname
      },
  
},
list={
    nom:'Elon ',
    lastname:'musck',
    img_prof:'https://i.pinimg.com/736x/db/63/46/db6346a3f6f40ea88428797599a2c70e.jpg',
    date_publish:'29 / 05 / 2023',
    text_des:"NEW !! ",
    imgs: 'https://i.pinimg.com/564x/96/c8/ba/96c8ba616e7afacbb47dd505cf181425.jpg',
    fulname : function (){
      return  this.nom+" "+ this.lastname
    },

},
list={
  nom:'brahim ',
  lastname:'ELMOUDEN',
  img_prof:'https://i.pinimg.com/564x/45/cf/fb/45cffb3a0cbefbc8f2052862c835ce67.jpg',
  date_publish:'15 / 06 / 2023',
  text_des:"In work ",
  imgs: 'https://i.pinimg.com/564x/67/1a/2e/671a2e60d8e9ec89b014079f71fd0f81.jpg',
  fulname : function (){
    return  this.nom+" "+ this.lastname
  },

},
list={
  nom:'3abdollah',
  lastname:'BENNANI',
  img_prof:'https://i.pinimg.com/564x/e6/59/34/e65934742e83f4250962eac0028f153a.jpg',
  date_publish:'15 / 06 / 2023',
  text_des:"like my bother ",
  imgs: 'https://i.pinimg.com/564x/e6/59/34/e65934742e83f4250962eac0028f153a.jpg',
  fulname : function (){
    return  this.nom+" "+ this.lastname
  },

},
list={
  nom:'fatima',
  lastname:'EL',
  img_prof:'https://i.pinimg.com/564x/ad/98/e4/ad98e42a3301529aeb86f7666b29acdc.jpg',
  date_publish:'15 / 06 / 2023',
  text_des:"j'ai sa dans ma bon marcher ",
  imgs: 'https://i.pinimg.com/564x/ad/98/e4/ad98e42a3301529aeb86f7666b29acdc.jpg',
  fulname : function (){
    return  this.nom+" "+ this.lastname
  },

},
list={
  nom:'lahsen',
  lastname:'BEN',
  img_prof:'https://i.pinimg.com/564x/9f/b3/a9/9fb3a9dda3877cc7b5589621dd8e93ae.jpg',
  date_publish:'15 / 06 / 2023',
  text_des:"j'ai sa dans ma bon marcher ",
  imgs: 'https://i.pinimg.com/564x/9f/b3/a9/9fb3a9dda3877cc7b5589621dd8e93ae.jpg',
  fulname : function (){
    return  this.nom+" "+ this.lastname
  },

},
list={
  nom:'imane',
  lastname:'atouga',
  img_prof:'https://i.pinimg.com/564x/7c/5c/ec/7c5ceceb0f70de2f518b637d04eb35eb.jpg',
  date_publish:'15 / 06 / 2023',
  text_des:" ",
  imgs: 'https://i.pinimg.com/564x/2c/55/21/2c5521af4bfbd2d545c388de165b9bb8.jpg',
  fulname : function (){
    return  this.nom+" "+ this.lastname
  },

},
list={
  nom:'jamal',
  lastname:'hibat allah',
  img_prof:'https://i.pinimg.com/564x/cc/a6/76/cca67681c0189859d946adfc8b6e07e6.jpg',
  date_publish:'15 / 06 / 2023',
  text_des:"j'ai sa dans ma bon marcher ",
  imgs: 'https://i.pinimg.com/564x/38/ea/a2/38eaa298cf24616c9b355286e37e34de.jpg',
  fulname : function (){
    return  this.nom+" "+ this.lastname
  },

},
list={
  nom:'chahd',
  lastname:'idbasllam',
  img_prof:'https://i.pinimg.com/564x/b3/b7/13/b3b7135da2a0eed8ddd2ac65bcf49d33.jpg',
  date_publish:'15 / 06 / 2023',
  text_des:"j'ai sa dans ma bon marcher ",
  imgs: 'https://i.pinimg.com/564x/1f/ff/8e/1fff8ea24730e178a0a98a253c223ef5.jpg',
  fulname : function (){
    return  this.nom+" "+ this.lastname
  },

}
    
]




// console.log(data.length)



let i = 0;
let arr_img=[]
let arr_prf_img=[];
let arr_lik = [];
let arr_dislik=[];

let arr_btn_coment=[]
let page_comenter = document.querySelector(".page-comenter");


let j=0;
 window.onscroll = function(e) {
   console.log(window.innerHeight)
   console.log(window.pageYOffset)
   console.log(father.offsetHeight)

    if((window.innerHeight+ window.pageYOffset)>= father.offsetHeight){


            var i3=0;
           while (i3<4) {
           let cloned_cnt = container.cloneNode(true);
           container.before(cloned_cnt);
           let f_name=data[i].fulname();
           cloned_cnt.querySelector(".cntname").innerHTML=f_name
           cloned_cnt.querySelector('.cntimg img').src= data[i].img_prof;
           cloned_cnt.querySelector(".mohtawa img").src=data[i].imgs;
           cloned_cnt.querySelector('.date-publish ').innerHTML= data[i].date_publish;
           cloned_cnt.querySelector(".text").innerHTML=data[i].text_des;
           cloned_cnt.classList.add("add_visibility");
           i++;
           i3++;
       }

     
   }







}






// let btn_nullcoment = document.querySelector('.back_btnas')

// btn_nullcoment.onclick=()=>{
//   page_comenter.classList.remove("add_visi");

// }



// let btn_send_coment= document.querySelector(".send-coment-btn");

// let input_coment =document.querySelector("#inpt-coment");
// let lbl_comenter = document.querySelector(".lbl-cmnt")
// d=1;
// btn_send_coment.addEventListener("click", ()=>{
//   if(input_coment.value!=''){
//     let coment_clond = lbl_comenter.cloneNode(true);
//     lbl_comenter.before(coment_clond)
//     coment_clond.classList.add("add_dis_flex");
//     coment_clond.querySelector(".name_cmnted").innerHTML= `user ${d}`;
//     d++;
//     coment_clond.querySelector(".commenterSelf").innerHTML= input_coment.value;
//     input_coment.value=""
//   }
// })




// arr_btn_coment.forEach((ntb)=>{
//   ntb.addEventListener("click",()=>{
//     let x2 = arr_btn_coment.indexOf(ntb)
//     page_comenter.classList.add("add_visi");

//   })
//   })









