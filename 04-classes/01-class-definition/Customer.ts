class Customer{
  private _firstName: string;
    private _lastName: string;
     constructor(name1:string, name2:string ){
this._firstName = name1;
this._lastName = name2;
     }

    get firstName(): string{
return this._firstName;
    }
set lastName(value: string){
this._lastName = value;
}
  }
  let myCustomer = new Customer("Aymen","Amri");
  myCustomer.firstName;
  console.log(myCustomer.firstName);


