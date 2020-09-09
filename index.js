//0165435b85514d068b1675aedb23a124
let apiKey = '0165435b85514d068b1675aedb23a124';
let newsAccordian = document.getElementById('newsAccordian')
let newsCard = ``
let heading = document.getElementById('heading')
heading.innerHTML = 'India   <img src="india.svg" width="40" height="40" >'
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=in&apiKey=' + apiKey, true);

xhr.onload = function () {
  let newsData = JSON.parse(xhr.responseText);
  newsArticles = newsData.articles
  let index = 0
  newsArticles.forEach(element => {
    newsCard += `<div class="card">
            <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
                <button class="btn  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                  ${element.title}
                </button>
              </h2>
            </div>
        
            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordian">
              <div class="card-body">
                ${element.description} <a href="${element.url}" target="_blank">Read more</a>
              </div>
            </div>
          </div>`

    index++;
  }
  );
  newsAccordian.innerHTML = newsCard

}

xhr.send();

let australia = document.getElementById('au')
australia.addEventListener('click', newsAus) 
function newsAus() {
  let heading = document.getElementById('heading')

  setTimeout(() => {
    heading.innerHTML = 'Australia   <img src="australia.svg" width="40" height="40" >'
  }, 600);
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=au&apiKey=0165435b85514d068b1675aedb23a124', true);

  xhr.onload = function () {
    let newsData = JSON.parse(xhr.responseText);
    newsArticles = newsData.articles
    let index = 0
    newsCard = ``
    newsArticles.forEach(element => {
      newsCard += `<div class="card">
              <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                  <button class="btn  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    ${element.title}
                  </button>
                </h2>
              </div>
          
              <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordian">
                <div class="card-body">
                  ${element.description} <a href="${element.url}" target="_blank">Read more</a>
                </div>
              </div>
            </div>`

      index++;
    }
    );
    newsAccordian.innerHTML = newsCard

  }

  xhr.send();
}

let china = document.getElementById('cn')
china.addEventListener('click',newsChina)
function newsChina() {
  let heading = document.getElementById('heading')

  setTimeout(() => {
    heading.innerHTML = 'China   <img src="china.svg" width="40" height="40" >'
  }, 600);
  let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=cn&apiKey='+apiKey, true);

xhr.onload = function () {
  let newsData = JSON.parse(xhr.responseText);
  newsArticles = newsData.articles
  let index = 0
  newsCard=``
  newsArticles.forEach(element => {
            newsCard += `<div class="card">
            <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
                <button class="btn  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                  ${element.title}
                </button>
              </h2>
            </div>

            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordian">
              <div class="card-body">
                ${element.description} <a href="${element.url}" target="_blank">Read more</a>
              </div>
            </div>
          </div>`

    index++;
  }
  );
  newsAccordian.innerHTML = newsCard

}

xhr.send();

}


let US = document.getElementById('us')
US.addEventListener('click',newsUS)
function newsUS() {
  let heading = document.getElementById('heading')

  setTimeout(() => {
    heading.innerHTML = 'United States   <img src="flag.svg" width="40" height="40" >'
  }, 600);

  let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=us&apiKey='+apiKey, true);

xhr.onload = function () {
  let newsData = JSON.parse(xhr.responseText);
  newsArticles = newsData.articles
  let index = 0
  newsCard=``
  newsArticles.forEach(element => {
            newsCard += `<div class="card">
            <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
                <button class="btn  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                  ${element.title}
                </button>
              </h2>
            </div>

            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordian">
              <div class="card-body">
                ${element.description} <a href="${element.url}" target="_blank">Read more</a>
              </div>
            </div>
          </div>`

    index++;
  }
  );
  newsAccordian.innerHTML = newsCard

}

xhr.send();

}
