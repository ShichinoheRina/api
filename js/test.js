//document.forms.(nameの中身)
const  contactForm = document.forms.contact

// console.log(contactForm.postcode.value);


contactForm.postcode.addEventListener('input',e => {
    if(e.target.value.length === 7){
        const postcode = e.target.value
       fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postcode}`)
       .then(response => response.json())
       .then(data => {
        contactForm.prefecture.value = (data.results[0].address1)
        contactForm.city.value = (data.results[0].address2)
        contactForm.town.value = (data.results[0].address3)
     })
       .catch(error => console.log(error))
    }
});

