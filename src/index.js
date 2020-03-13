module.exports = function(a,b){
    calculation = function(){
        const start = new Date(a);
        const end = new Date(b);
        let time = end.getTime() - start.getTime();
        time = time / (24 * 60 * 60 * 1000);
        return Math.round(time)
    }
    const returns = {
        days : calculation(),
        today : calculation() + 1,
        week : Math.round(calculation() / 7),
        currentweek : Math.round(calculation() / 7)+1
    }
    return returns
}