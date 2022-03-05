const ulTag = document.getElementById('champs');

$(document).ready(function(){
    if(allChamp.length %2 !=0){
       let liTag = `<h1 style="color:white">Số lượng tướng phải là số chẵn(2,4,6,8,...), hãy cập nhật tướng theo đúng yêu cầu nha Johnny Lưu</h1> `;
        ulTag.insertAdjacentHTML("beforeend", liTag); 
    }
    else if(allChamp.length <8){
        let liTag = `<h1 style="color:white">Số lượng tướng phải lớn hơn hoặc bằng 8, hãy cập nhật tướng theo đúng yêu cầu nha đồng chí Bùi</h1> `;
        ulTag.insertAdjacentHTML("beforeend", liTag);    
    }
    else{
       for (let i = 0; i < allChamp.length; i++) {
  let liTag = `
<a id="${allChamp[i].vitri}" class="card" style="height: 120px;width: 80px;" data-name="${i}"  a-index="${i + 1}">
    <div class="image">
      <img src="${allChamp[i].img}" style="height: 80px;">
    </div>
    <div class="content"  style="color: white;font-size: 1.6ch;margin-top: 0px;">
    ${allChamp[i].name}</div>
  </a>`;
  ulTag.insertAdjacentHTML("beforeend", liTag);
}  
    }
   
});


$( "#search_champs" ).keyup(function() {
    var dInput = $(this).val().toLowerCase();
    $(".card").filter(function() {
      $(this).toggle( $(this).text().toLowerCase().indexOf(dInput) > -1 )
    })
  });

  $(document).on('click','#position_menu a',function(){
    $(this).addClass('active').siblings().removeClass('active');
    var data_posi_menu =$(this).data('position');
    $(".card").filter(function() {
       return  $(this).attr('id') == data_posi_menu
      }).show('normal')
      $(".card").filter(function() {
        return  $(this).attr('id') != data_posi_menu
       }).hide('normal')
  })

  $('#all_lane').click(function(){
      $(this).addClass('active')
      $('.card').show('normal')
      $('#position_menu a').removeClass('active')
  })
