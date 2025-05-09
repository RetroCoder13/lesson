class LinkedList{
    constructor(maxSize){
        this.start = null
        this.nextFree = 0
        this.maxSize = maxSize
        this.size = 0
        this.list = {

        }
    }

    addItem(item){
        if(this.size < this.maxSize){
            if(this.size == 0){
                this.list[this.nextFree] = {
                    "item":item,
                    "pointer":null
                }
                this.size++
                this.nextFree++
            } else {
                if(this.size == this.maxSize){
                    throw "LinkedList is full"
                } else {
                    
                }
            }
        }
    }

    removeItem(item){

    }
}