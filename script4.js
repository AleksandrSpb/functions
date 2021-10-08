function makeHelloWorld() {
    function helloWorld() {
        console.log('Hello, world!');
    }

    return helloWorld;
}

const helloWorld = makeHelloWorld();

console.log(helloWorld);
helloWorld(); // "Hello world!"
