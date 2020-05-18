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
Ecwid.OnPageLoaded.add(async function(page){
  let newArr = []
  if (page.type == "PRODUCT" && window.location.pathname !== "/shop-en") {

    const myRequest = new XMLHttpRequest()
    const myStoreId = 6800182
    const myToken = 'public_khtTrj2iNrc682fPixDWPmXAGdRm1Sd1';
    const productId = page.productId
  
    const myRequestUrl = 'https://app.ecwid.com/api/v3/' + myStoreId + '/products/' + productId + '?&token=' + myToken
  
    let responseBody = ''
  
    let response = await fetch(myRequestUrl);
  
    if (response.ok) {
      responseBody = await response.json();
      console.log(responseBody)
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
  
    // creating an array with products, which quantity = 0
    for (let i = 0; i < responseBody.combinations.length; i++) {
      if (responseBody.combinations[i].quantity == 0) {
        newArr.push(responseBody.combinations[i].options[0].value)
      }
    }

    for (let i = 0; i <= newArr.length; i++) {
      let labelTags = document.getElementsByTagName("label");
      let searchText = newArr[i];
      for (let ind = 0; ind < labelTags.length; ind++) {
        if (labelTags[ind].textContent == searchText) {
          let found = labelTags[ind];
          found.parentElement.parentElement.style.display = "none"
          break;
        }
      }
    }
  } /* ENGLISH VERSION */ else if (page.type == "PRODUCT" && window.location.pathname == "/shop-en") {

    const myRequest = new XMLHttpRequest()
    const myStoreId = 7874372
    const myToken = 'public_G5hpzDadXYMZ1GwRUGXs41wGshsek1QE';
    const productId = page.productId
  
    const myRequestUrl = 'https://app.ecwid.com/api/v3/' + myStoreId + '/products/' + productId + '?&token=' + myToken
  
    let responseBody = ''
  
    let response = await fetch(myRequestUrl);
  
    if (response.ok) {
      responseBody = await response.json();
      console.log(responseBody)
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
  
    // creating an array with products, which quantity = 0
    for (let i = 0; i < responseBody.combinations.length; i++) {
      if (responseBody.combinations[i].quantity == 0) {
        newArr.push(responseBody.combinations[i].options[0].value)
      }
    }

    for (let i = 0; i <= newArr.length; i++) {
      let labelTags = document.getElementsByTagName("label");
      let searchText = newArr[i];
      for (let ind = 0; ind < labelTags.length; ind++) {
        if (labelTags[ind].textContent == searchText) {
          let found = labelTags[ind];
          found.parentElement.parentElement.style.display = "none"
          break;
        }
      }
    }

    document.getElementsByClassName('product-details__label-container')[0].style.display = "none"
  }
});



Ecwid.OnPageLoaded.add(async function(page){
  let newArr = []
  if (page.type == "PRODUCT" && window.location.pathname == "/shop-en") {

    const myRequest = new XMLHttpRequest()
    const myStoreId = 7874372
    const myToken = 'public_G5hpzDadXYMZ1GwRUGXs41wGshsek1QE';
    const productId = page.productId
  
    const myRequestUrl = 'https://app.ecwid.com/api/v3/' + myStoreId + '/products/' + productId + '?&token=' + myToken
  
    let responseBody = ''
  
    let response = await fetch(myRequestUrl);
  
    if (response.ok) {
      responseBody = await response.json();
      console.log(responseBody)
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
  
    // creating an array with products, which quantity = 0
    for (let i = 0; i < responseBody.combinations.length; i++) {
      if (responseBody.combinations[i].quantity == 0) {
        newArr.push(responseBody.combinations[i].options[0].value)
      }
    }

    for (let i = 0; i <= newArr.length; i++) {
      let labelTags = document.getElementsByTagName("label");
      let searchText = newArr[i];
      for (let ind = 0; ind < labelTags.length; ind++) {
        if (labelTags[ind].textContent == searchText) {
          let found = labelTags[ind];
          found.parentElement.parentElement.style.display = "none"
          break;
        }
      }
    }

    document.getElementsByClassName('product-details__label-container')[0].style.display = "none"
   // responseBody=null
  } else{
    console.log('not the english version')
  }
});


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