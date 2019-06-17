class Dep {
    constructor(){
        this.subscribes = new Set();
    }

    depend() {
        if(activieUpdate){
            this.subscribes.add(activieUpdate);
        }
    }

    notify() {
        this.subscribes.forEach((sub) => {
            sub();
        });
    }
}

let activieUpdate;

function autoRun(update) {

    function innerActive () {
        activieUpdate = innerActive;
        update();
        activieUpdate = null;
    }

    innerActive();
}


function observe(obj) {
    Object.keys(obj).forEach(key => {
        let innerVal = obj[key];

        let dep = new Dep();
        Object.defineProperty(obj,key,{
            configurable: true,
            enumerable : true,
            get() {
                if(activieUpdate) {
                    dep.depend();
                }
                return innerVal;
            },
            set(newVal) {
                if(innerVal !== newVal){
                    innerVal = newVal;
                    dep.notify();
                }
            }
        });
    });
}

module.exports = {
    autoRun,
    observe
}