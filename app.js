const myRequest =  new XMLHttpRequest()
const myStoreId = 6800182
const myToken = 'public_khtTrj2iNrc682fPixDWPmXAGdRm1Sd1';

const myRequestUrl = 'https://app.ecwid.com/api/v3/'+myStoreId+'/products/filters?filterFields=option_Размер=S&token='+myToken

myRequest.open('GET', myRequestUrl, true)
myRequest.send()

myRequest.onreadystatechange = function() {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
      const apiResponse = myRequest.responseText;
      console.log(apiResponse); 
    }
  };

  //option_Размер=S


//filter button

Ecwid.OnPageLoaded.add(function(page) {
  var customFilter = document.getElementById('customFilter');
  var ecwid_prod_browser = document.getElementsByClassName('ecwid-productBrowser')[0];
  if (customFilter === null){ // don't add more than once when user navigates the store pages
    customFilter = document.createElement('a');
    customFilter.id = 'customFilter';
    customFilter.style = 'height:30px;width:30px;';
    customFilter.innerHTML = '<h3>My Title</h3>';
    ecwid_prod_browser.insertAdjacentElement('beforebegin', customFilter)
  }
})