const fetch = require("node-fetch");

function getCategoryIdWithOcurrence(results) {
  let categoryIdOcurrence = [];
  results.forEach((x)=>{
    if(categoryIdOcurrence.some((val)=>{ return val["category_id"] == x["category_id"] })){
      categoryIdOcurrence.forEach((k)=>{
        if(k["category_id"] === x["category_id"]){ 
          k["occurrence"]++
        }
      })     
    }else{
      let a = {}
      a["category_id"] = x["category_id"]
      a["occurrence"] = 1
      categoryIdOcurrence.push(a);
    }
  });
  categoryIdOcurrence.sort((a, b) => parseFloat(b.occurrence) - parseFloat(a.occurrence));
  categoryIdOcurrence = categoryIdOcurrence.map(function(item) {
    return item['category_id'];
  });
  return categoryIdOcurrence;
}


const search = async function fetchSearch(searhTerm) {
  let response = await fetch(encodeURI(`https://api.mercadolibre.com/sites/MLA/search?q=​:${searhTerm}`));

  if (response.status === 200) {
    let { results = [] } = await response.json();
    const categoryIdOcurrence = getCategoryIdWithOcurrence(results);
    let product = results.filter(item => item.category_id === categoryIdOcurrence[0]).slice(0, 4);

    product = product.map(item => ({
      id: item?.id || "",
      title: item?.title || "",
      seller_city: item?.seller_address?.city?.name || "",
      price: {
        currency: item?.prices.prices[0]?.currency_id || "",
        amount: item?.prices.prices[0]?.amount || 0
      },
      picture: item?.thumbnail || "",
      condition: item?.condition || "",
      free_shipping: item?.shipping?.free_shipping || false
    }));

    const api = {
      author: {
        name: "Diana",
        lastname: "Alvarez"
      },
      categories: categoryIdOcurrence,
      items: product
    }
    return api;
  }
}

module.exports = { search }
