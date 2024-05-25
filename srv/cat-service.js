//import
const cds = require("@sap/cds");
module.exports = cds.service.impl( async function () {
    const training = this.entities;

    this.before("CREATE","Training",req => {
        console.log(req.data);
        if ( req.data.title  = "karnal" )
        {
            console.log("niklo karnal se");
            req.reject(404,"Bhakk!");
        }
    });
    this.after("READ","Training",res => {
        for (let index = 0; index < res.length; index++) {
            res[index].stock = "Medium";          
        }
    });

});