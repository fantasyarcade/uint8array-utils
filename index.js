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
        array[offset + i] = str.charCodeAt(i);
    }
    for (; i < length; ++i) {
        array[offset + i] = 0;
    }
}

exports.readUint16BE = function(b, o) {
    return (b[o] << 8) | b[o+1];
}

exports.readUint32BE = function(b, o) {
    return (b[o] << 24) | (b[o+1] << 16) | (b[o+2] << 8) | b[o+3];
}

exports.writeUint16BE = function(b, o, v) {
    b[o] = v >> 8;
    b[o+1] = v;
}

exports.writeUint32BE = function(b, o, v) {
    b[o] = v >> 24;
    b[o+1] = v >> 16;
    b[o+2] = v >> 8;
    b[o+3] = v;
}