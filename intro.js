function Cat(name, owner) {
  this.name = name;
  this.owner = owner;

};

Cat.prototype.cute_statement = function(){
  console.log(this.owner + " loves " + this.name);
};


var cat1 = new Cat("feline", "felix");
var cat2 = new Cat("leo", "lion");

cat1.cute_statement();
cat2.cute_statement();

Cat.prototype.cute_statement = function(){
  console.log("Everyone loves "+this.name)
}

cat1.cute_statement();
cat2.cute_statement();

Cat.prototype.meow = function(){
  console.log("MEOW MUTHA FUCKA");
};

cat1.meow();
cat2.meow = function(){
  console.log("I'm a proper cat the does not curse");
};

cat2.meow();
cat1.meow();