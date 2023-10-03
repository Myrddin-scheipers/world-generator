let seed = "";
class randS {
    constructor(seed=null) {
        if(seed!=null) {
            this.seed = seed;
        } else {
            this.seed = Date.now()%4645455524863;
        }
        let tempseed = "";
        if(typeof this.seed!="number"){
            console.log("no number")
            for(let i=0; this.seed.length > i; i++){
                tempseed += Math.abs(this.seed[i].charCodeAt(0) - 97);
            }
            this.seed = Number(tempseed);
            console.log(this.seed)
        }else{
            console.log("number");
        }
        this.next = this.SeedRandom(this.seed);
        this.last = 0;
    }
    Init(seed=this.seed) {
        if (seed = this.seed) {
            this.next = this.SeedRandom(this.seed);
        } else {
            this.seed=seed;
            this.next = this.SeedRandom(this.seed);
        }
    }
    SeedRandom(state1,state2){
        var mod1=4294967087;
        var mod2=4294965887;
        var mul1=65539;
        var mul2=65537;
        if(typeof state1!="number"){
            state1=+new Date();
        }
        if(typeof state2!="number"){
            state2=state1;
        }
        state1=state1%(mod1-1)+1;
        state2=state2%(mod2-1)+1;
        function random(limit){
            state1=(state1*mul1)%mod1;
            state2=(state2*mul2)%mod2;
            if(state1<limit && state2<limit && state1<mod1%limit && state2<mod2%limit){
                this.last = random;
                return random(limit);
            }
            this.last = (state1+state2)%limit;
            return (state1+state2)%limit;
        }
        this.last = random;
        return random;

    }
}
