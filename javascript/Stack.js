class Stack{
    constructor(maxSize){
        this.maxSize = maxSize
        this.size = 0
        this.stack = []
    }

    push(item){
        if(this.maxSize > this.size){
            this.stack.push(item)
            this.size++
        } else {
            throw "Stack overflow"
        }
    }

    pop(){
        if(this.size > 0){
            this.size--
            return this.stack.pop()
        } else {
            throw "Stack underflow"
        }
    }

    peek(){
        if(this.size > 0){
            return this.stack[this.size-1]
        } else {
            throw "Stack underflow"
        }
    }

    isFull(){
        return this.size == this.maxSize
    }

    isEmpty(){
        return this.size == 0
    }
}