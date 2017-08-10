
export class Contact {

  constructor (
      public id: number,
      public name: string,
      public email: string,
      public address: string,
      public phone : number,
  ) {}

}

export class AddContact {

  constructor (
      public name: string,
      public email: string,
      public address: string,
      public phone : number,
  ) {}

}