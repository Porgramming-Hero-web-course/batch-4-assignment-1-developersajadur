{




    const validateKeys = <T>(obj: T, keys: (keyof T)[]) : boolean => {
        return keys.every(key => key in obj);

    }

    type Person = {
        name?: string,
        age?: number,
        email?: string,
        address?: string,
    }
    const person : Person = { name: "Alice", age: 25, email: "alice@example.com" };

    const resultForTrue = validateKeys(person, ["name", "age"])
    const resultForFalse = (validateKeys(person, ["name", "address"]))

    // console.log(resultForTrue);
    // console.log(resultForFalse);




}