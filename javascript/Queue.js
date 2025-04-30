class Queue{
    constructor(maxSize){
        this.size = 0
        this.maxSize = maxSize
        this.front = 0
        this.rear = -1
        this.queue = []
        for(let i=0;i<this.maxSize;i++){
            this.queue.push(undefined)
        }
    }

    enQueue(item){
        if(this.size < this.maxSize){
            this.size++
            this.rear++
            if(this.rear >= this.maxSize){
                this.rear = 0
            }
            this.queue[this.rear] = item
        } else {
            return -1
        }
    }

    deQueue(){
        if(this.size > 0){
            this.size--
            this.front++
            if(this.front >= this.maxSize){
                this.front = 0
            }
            return this.queue[this.front-1]
        } else {
            return -1
        }
    }

    isFull(){
        return this.size == this.maxSize
    }

    isEmpty(){
        return this.size == 0
    }
}