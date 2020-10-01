const MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/nodeMongodbTest", function(err, db) {
    if (err) {
        throw err;
        console.log("bağlantı sağlanmadı");
    } else {
        console.log("bağlantı sağlandı");

        var newBook = {
            ad: "Deliliğe Övgü",
            basim_yılı: "1999",
            yayın_evi: "yayınevim",
            yazar: "Erasmus"
        }

        db.collection("kitap").update({ basim_yılı: "2000" }, newBook, function(err, result) {

            if (err) {
                throw err;
            } else {
                console.log("Update is succesfully !!!!!")

                db.collection("kitap").find({ basim_yılı: "1999" }).toArray(function(err, result) {
                    console.log(result);
                })
            }

        })
    }
});