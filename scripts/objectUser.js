user={
    username:"Admin" ,
    password:"AdminPassword" ,
    dob:"12/12/12",
    ssn:"123-45-6789",
    streetaddress:"123 Street Address",
    zipcode:"12345-6789",
    state:'State',
        changeAddress:function(newAddress){
            listOfStatesAbriviation=['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY']
            addressAsArray=newAddress.split(" ")
            this.state= addressAsArray.filter(element=>{
                for(let i = 0 ; i<listOfStatesAbriviation.length;i++){
                    if(element==listOfStatesAbriviation[i]){return true}
                    else{}}})
            this.zipcode= addressAsArray[addressAsArray.length-1]
                }, 
            changePassword:function(newPassword)
            {   
                this.password=newPassword
                return true}
            }


testAddressChange = '121231 23th street NY 11289'
user.changeAddress(testAddressChange)
console.log(user.state)
console.log(user.zipcode)