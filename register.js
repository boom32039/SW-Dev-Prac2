function checkCondition(){
    // check company name
    const isCompanyNameEmpty = document.getElementById('companyName').value === ''
    // check contact name 
    const isContactNameEmpty = document.getElementById('contactName').value === ''
    // check contact tel 
    const isContactTelEmpty = document.getElementById('contactTel').value === ''
    // check drop down 
    const isBoothSizeEmpty = document.getElementById('boothSize').value === ''

    // check chair amount 
    const isValidChairs = /^([1-9]|10)$/.test(document.getElementById('chairAmount').value)


    const isValid = !isCompanyNameEmpty && !isContactNameEmpty && !isContactTelEmpty && !isBoothSizeEmpty && isValidChairs

    if (!isValid){
        alert('Invalid Input')
    }else{
        alert('success')
    }

}

