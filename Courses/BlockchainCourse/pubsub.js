const redis = require('redis');

class PubSub {
    constructor() {
        this.publisher = redis.createClient();
        this.subriber = redis.createClient();    
    }



}