const myRequest = new XMLHttpRequest()
const myStoreId = 6800182
const myToken = 'public_khtTrj2iNrc682fPixDWPmXAGdRm1Sd1';

const myRequestUrl = 'https://app.ecwid.com/api/v3/' + myStoreId + '/products/186439621?&token=' + myToken

let apiResponse = null

myRequest.open('GET', myRequestUrl, true)
myRequest.send()

myRequest.onreadystatechange = function () {
  if (myRequest.readyState == 4 && myRequest.status == 200) {
    apiResponse = myRequest.responseText;
    //console.log(apiResponse); 
  }
};

//option_Размер=S


//filter button

Ecwid.OnPageLoaded.add(function (page) {
  let customFilter = document.getElementById('customFilter');
  let ecwid_prod_browser = document.getElementsByClassName('ecwid-productBrowser')[0];
  if (customFilter === null) { // don't add more than once when user navigates the store pages
    customFilter = document.createElement('a');
    customFilter.id = 'customFilter';
    customFilter.style = 'height:30px;width:30px;';
    customFilter.innerHTML = '<h3>My Title</h3>';
    ecwid_prod_browser.insertAdjacentElement('beforebegin', customFilter)
  }
})

//the script
let newArr = []
Ecwid.OnPageLoaded.add(async function(page){
  if (page.type == "PRODUCT") {
    //нормальный асинхронный GET-запрос, в ответе получаем json
    const myRequest = new XMLHttpRequest()
    const myStoreId = 6800182
    const myToken = 'public_khtTrj2iNrc682fPixDWPmXAGdRm1Sd1';
    const productId = page.productId
  
    const myRequestUrl = 'https://app.ecwid.com/api/v3/' + myStoreId + '/products/' + productId + '?&token=' + myToken
  
    let responseBody = ''
  
    let response = await fetch(myRequestUrl);
  
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      responseBody = await response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  
    // creating an array with products, which quantity = 0
    for (let i = 0; i < responseBody.combinations.length; i++) {
      if (responseBody.combinations[i].quantity === 0) {
        newArr.push(responseBody.combinations[i].options[0].value)
      }
    }
  }
})

Ecwid.OnPageLoaded.add(function (page) {
  for (let i = 0; i <= newArr.length; i++) {
    let labelTags = document.getElementsByTagName("label");
    let searchText = newArr[i];
    let found;
    for (let ind = 0; ind < labelTags.length; ind++) {
      if (labelTags[ind].textContent == searchText) {
        found = labelTags[ind];
        found.parentElement.parentElement.style.display = "none"
        break;
      }
    }
  }
});



for (let i = 0; i <= newArr.length; i++) {
  let labelTags = document.getElementsByTagName("label");
  let searchText = newArr[i];
  let found;
  for (let ind = 0; ind < labelTags.length; ind++) {
    if (labelTags[ind].textContent == searchText) {
      found = labelTags[ind];
      found.parentElement.parentElement.style.display = "none"
      break;
    }
  }
}

//removing odd elements
for (let i = 0; i <= newArr.length; i++) {
  let labelTags = document.getElementsByTagName("label");
  let searchText = newArr[i];
  let found;
  for (let ind = 0; ind < labelTags.length; ind++) {
    if (labelTags[ind].textContent == searchText) {
      found = labelTags[ind];
      found.parentElement.parentElement.style.display = "none"
      break;
    }
  }
}


for (let i = 0; i <= newArr.length; i++) {
  let labelTags = document.getElementsByTagName("label");
  let searchText = newArr[i];
  let found;
  for (let ind = 0; ind < labelTags.length; ind++) {
    if (labelTags[ind].textContent == searchText) {
      found = labelTags[ind];
      found.parentElement.parentElement.style.display = "none"
      break;
    }
  }
}

//removing the odd element from the page, size as an example here

let labelTags = document.getElementsByTagName("label");
let searchText = "L(48)";
let found;

for (let i = 0; i < labelTags.lengthz; i++) {
  if (labelTags[i].textContent == searchText) {
    found = labelTags[i];
    break;
  }
}