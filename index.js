exports.readFixedLengthAsciiString = function(array, offset, length) {
    let str = "";
    for (let i = 0; i < length; ++i) {
        const ch = array[offset + i];
        if (ch === 0) {
            break;
        }
        str += String.fromCharCode(ch);
    }
    return str;
}

exports.writeFixedLengthAsciiString = function(array, offset, length, str) {
    let i = 0;
    const end = Math.min(length, str.length);
    for (i = 0; i < end; ++i) {
        array[offset + i] = String.charCodeAt(i);
    }
    for (; i < length; ++i) {
        array[offset + i] = 0;
    }
}