class God{
    /**
     * @returns Human[]
     */
      static create(){
        // code
        const Adam = new Man('Adam');
        const Eve = new Woman('Eve');
        return [Adam, Eve];
        //return [ new Man('Adam'), new Woman('Eve') ]
      }
    }
    // code
    class Human {
      constructor(name) {
        this.name = name;
      }
    }
    
    class Man extends Human {
      constructor(name) {
        super(name);
        this.gender = 'Man';
      }
    }
    
    class Woman extends Human {
      constructor(name) {
        super(name);
        this.gender = 'Woman';
      }
    }

    // class God{
    //     /**
    //      * @returns Human[]
    //      */
    //       static create(){
    //         return [new Man, new Woman];
    //       }
    //     }
    //     class Human{}
    //     class Man extends Human{}
    //     class Woman extends Human{}

//     class Human {}
// class Man extends Human {}
// class Woman extends Human {}

// class God{
// /**
//  * @returns Human[]
//  */
//   static create(){
//     return [
//       new Man,
//       new Woman
//     ];
//   }
// }
// code
    
    const humans = God.create();

    console.log(humans[1]);