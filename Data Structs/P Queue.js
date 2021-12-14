const PQ = function() {
    
    this.q = [];
    this.createItem = (item, p) => {item, p};

    this.put = node => {
        if(this.q.length === 0) {
            this.q.push(node)
        } else {
            let isAdded = false;
            for(let i=0; i<this.q.length; i++) {
                if(node.val < this.q[i].val) {
                    this.q.splice(i, 0, node);
                    isAdded = true;
                    break;
                }
            }
            if(!isAdded) {
                this.q.push(node);
            }
        }
    }

    this.dequeue = () => this.queue.shift();

}