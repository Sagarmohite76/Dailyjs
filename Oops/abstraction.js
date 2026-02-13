// using Abstraction Create a function createCounter() keeps a private count
// returns methods: increment(), decrement(), getCount()

function createCounter() {
    let count = 0; 
    return {
        increment: function() {
            count++;    
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
    
}

        

