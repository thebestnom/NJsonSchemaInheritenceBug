# NJsonSchemaInheritenceBug
a minimum project for reproducing convertConstructorInterfaceData not working in inheritence

the model is a base class Dad and inherited class Son, and random class RandomClass

Both Dad and Son have RandomClass inside them, and setting `convertConstructorInterfaceData` to true should add 

`this.{class}RandomClassDto = data.{class}RandomClassDto && !(<any>data.{class}RandomClassDto).toJSON ? new RandomClass(data.{class}RandomClassDto) : <RandomClass>this.{class}RandomClassDto;`

to both constructor


the bug is that only Dad (the base class) have this in the constructor and Son (the inherited class) only calls super


you can run it by first installing with `yarn` (or `npm i`... not judging) then running it by `yarn rerun-nswag` (or `npm run rerun-nswag`)

you can easily see that 