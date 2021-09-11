var product = [
  {
    "projectID": "61386585cb54ef1dbf31862a",
    "productCatalogID": "8ac69ff275e5c52501761a64118d4cea",
    "id": "8ac69ff275e5c52501761a6412fd4cfe",
    "chargeIDName": "Shipping - Array",
    "device": "[ARCHIVED] Mobile Shuttle HDD - 16TB",
    "productRatePlanChargeAddOnFlag": "No",
    "quantity": 2,
    "chargeType": "OneTime",
    "category": "Base Products",
    "amount": "100.00",
    "discount": "0.00",
    "tax": "21.00",
    "total": "121.00",
    "productImageURL": "Mobile Shuttle.png",
    "productSmallImageURL": "Mobile Shuttle.png",
    "productSpecificationsURL": "https://www.seagate.com/www-content/datasheets/pdfs/lyve-mobile-shuttle-DS2031-4-2101-WW-en_US.pdf",
    "images": [null, null, null, null, null],
    "additionalInfo": {
      "serviceStartDate": "2021-08-31",
      "serviceEndDate": "2021-08-31",
      "amountWithoutTax": 100,
      "taxAmount": 21,
      "chargeDescription": "",
      "chargeName": "Shipping - Array",
      "chargeNumber": null,
      "processingType": "Charge",
      "productName": "[ARCHIVED] Mobile Shuttle HDD - 16TB",
      "productRatePlanChargeId": "8ac69ff275e5c52501761a6412fd4cfe",
      "subscriptionNumber": null,
      "orderLineItemNumber": null,
      "additionalInfo": { "quantity": 2, "unitOfMeasure": "Each" }
    }
  },
  {
    "projectID": "61386585cb54ef1dbf31862a",
    "productCatalogID": "8ac69ff275e5c52501761a64118d4cea",
    "id": "8ac69ff275e5c52501761a64132f4d01",
    "chargeIDName": "Monthly Charge",
    "device": "[ARCHIVED] Mobile Shuttle HDD - 16TB",
    "productRatePlanChargeAddOnFlag": "No",
    "quantity": 2,
    "chargeType": "Recurring",
    "category": "Base Products",
    "amount": "640.00",
    "discount": "0.00",
    "tax": "134.40",
    "total": "774.40",
    "productImageURL": "Mobile Shuttle.png",
    "productSmallImageURL": "Mobile Shuttle.png",
    "productSpecificationsURL": "https://www.seagate.com/www-content/datasheets/pdfs/lyve-mobile-shuttle-DS2031-4-2101-WW-en_US.pdf",
    "images": [null, null, null, null, null],
    "additionalInfo": {
      "serviceStartDate": "2021-08-31",
      "serviceEndDate": "2021-09-29",
      "amountWithoutTax": 640,
      "taxAmount": 134.4,
      "chargeDescription": "",
      "chargeName": "Monthly Charge",
      "chargeNumber": null,
      "processingType": "Charge",
      "productName": "[ARCHIVED] Mobile Shuttle HDD - 16TB",
      "productRatePlanChargeId": "8ac69ff275e5c52501761a64132f4d01",
      "subscriptionNumber": null,
      "orderLineItemNumber": null,
      "additionalInfo": { "quantity": 2, "unitOfMeasure": "Each" }
    }
  }
]


// var b = a.reduce((d, e) => {
//   return d.chargeType == "OneTime" && d
// })

// var total = a.filter((item, e) => {
//   // console.log({item, e});
//     if(item.chargeType == "OneTime")
//       return parseFloat(item.total).toFixed(2)
// })

var rdtotal = product.reduce(function(oldvalue, currvalue, index, fullArray) {
  // console.log({oldvalue, currvalue, index, fullArray});
    if (currvalue.chargeType == "Recurring")
      return parseFloat(currvalue.total).toFixed(2)
    else
      return parseFloat(oldvalue.total).toFixed(2)
})

var chaname = product.reduce(function(oldvalue, currvalue) {
    if (currvalue.chargeType == "Recurring")
      return (parseFloat(currvalue.additionalInfo.amountWithoutTax) + parseFloat(currvalue.additionalInfo.taxAmount)).toFixed(2)
    else
    return (parseFloat(oldvalue.additionalInfo.amountWithoutTax) + parseFloat(oldvalue.additionalInfo.taxAmount)).toFixed(2)
})


console.log({chaname});
