// export const data = {
//     new_es6_syntax : [
//                         {
//                             let_const:{
//                                 title:'let, const and Block Scoping',
//                                 type:[{
//                                     question:"'use strict';console.log(productId);var productId = 12;",
//                                     answer:'undefined'
//                                     },{
//                                     question:"'use strict';console.log(productId);var productId = 12;",
//                                     answer:'undefined'
//                                     },{
//                                     question:"'use strict';console.log(productId);var productId = 12;",
//                                     answer:'undefined'
//                                  }]
        
//                              }
//                         }           
//                     ]
// }

export const data = {
    let_const:{
                                title:'let, const and Block Scoping',
                                type:[{
                                        question:"'use strict';console.log(productId);var productId = 12;",
                                        answer:'undefined'
                                    },{
                                        question:"'use strict';console.log(productId);let productId = 12;",
                                        answer:'ReferenceError: productId is not defined'
                                    },{
                                        question:"'use strict';let productId = 12;console.log(productId);",
                                        answer:'12'
                                    },{
                                        question:"'use strict';let productId = 12;console.log(productId);",
                                        answer:'12'
                                    },{
                                        question:"'use strict';let productId = 12;console.log(productId);",
                                        answer:'12'
                                    },{
                                        question:"'use strict';let productId = 12;console.log(productId);",
                                        answer:'12'
                                    },{
                                        question:"'use strict';let productId = 12;console.log(productId);",
                                        answer:'12'
                                    },{
                                        question:"'use strict';let productId = 12;console.log(productId);",
                                        answer:'12'
                                    },{
                                        question:"'use strict';let productId = 12;console.log(productId);",
                                        answer:'12'
                                    },{
                                        question:"'use strict';let productId = 12;console.log(productId);",
                                        answer:'12'
                                    },{
                                        question:"'use strict';let productId = 12;console.log(productId);",
                                        answer:'12'
                                    },{
                                        question:"'use strict';let productId = 12;console.log(productId);",
                                            answer:'12'
                                }]
        
                    },
    arrow_func : {
        title : 'Arrow Functions',
        type : [{
            question : "'use strict';var getPrice = () => 5.99;console.log(typeof getPrice);",
            answer : "function"
        },{
            question : "'use strict';var getPrice = () => 5.99;console.log(typeof getPrice);",
            answer : "function"
        },{
            question : "'use strict';var getPrice = () => 5.99;console.log(typeof getPrice);",
            answer : "function"
        },{
            question : "'use strict';var getPrice = () => 5.99;console.log(typeof getPrice);",
            answer : "function"
        },{
            question : "'use strict';var getPrice = () => 5.99;console.log(typeof getPrice);",
            answer : "function"
        },{
            question : "'use strict';var getPrice = () => 5.99;console.log(typeof getPrice);",
            answer : "function"
        },{
            question : "'use strict';var getPrice = () => 5.99;console.log(typeof getPrice);",
            answer : "function"
        },{
            question : "'use strict';var getPrice = () => 5.99;console.log(typeof getPrice);",
            answer : "function"
        },{
            question : "'use strict';var getPrice = () => 5.99;console.log(typeof getPrice);",
            answer : "function"
        }]
    }
}