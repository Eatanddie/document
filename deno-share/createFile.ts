const encoder = new TextEncoder()

const greetText = encoder.encode('hello world\nmy name is tom')

await Deno.writeFile('greet.txt', greetText)