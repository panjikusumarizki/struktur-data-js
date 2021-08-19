function createQueue() {
  const queue = []

  return {
    enqueue: function(value) {
      queue.unshift(value)
    },
    dequeue: function() {
      queue.pop()
    },
    peek: function() {
      return queue[queue.length - 1]
    },
    size: function() {
      return queue.length
    }
  }
}

const q = createQueue();

q.enqueue('antrian 1')
q.enqueue('antrian 2')
q.enqueue('antrian 3')
q.enqueue('antrian 4')

q.dequeue()
q.dequeue()
console.log(q.peek());
console.log(q.size());