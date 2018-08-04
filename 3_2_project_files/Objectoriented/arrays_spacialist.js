// Objects 

let o = {'user name': 'John', 2:true, var: 10};

// if we are usign non standart keys to our object we have to call them with []
console.log(o['user name'], o[2], o['var']);

// we can check for keys in the object also 
console.log('user name' in o);  


// GO THROW ALL THE KEYS OF THE OBJECT 
let user = {
    0: 'a',
    4: 'b',
    2: 'c'
};
// i in this case is our key, so we are checking utill the i is in user object the for loop will run
for(let i = 0; i in user; i++){
    console.log(i + ":" + user[i]);
}