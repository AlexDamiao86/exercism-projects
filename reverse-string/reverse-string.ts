class ReverseString {
    static reverse(message: string): string {
        return message.split('').reverse().join('');
    }
}

export default ReverseString
