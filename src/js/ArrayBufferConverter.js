class ArrayBufferConverter {
    constructor() {
        this.buffer = null;
    }

    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        if (this.buffer) {
            const view = new Uint16Array(this.buffer);
            let chars = [];
            for (let i = 0; i < view.length; i++) {
                chars.push(String.fromCharCode(view[i]));
            }
            return chars.join('');
        }
    }
}

export default ArrayBufferConverter
