import getBuffer from "../getBuffer";
import ArrayBufferConverter from "../ArrayBufferConverter";

test("Проверяю работоспособность", () => {
    const buffer = getBuffer();
    const converter = new ArrayBufferConverter();
    converter.load(buffer);
    const expectedData = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(converter.toString()).toBe(expectedData);
});