const MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/nodeMongodbTest", function(err, db) {
    if (err) {
        throw err;
        console.log("bağlantı sağlanmadı");
    } else {
        console.log("bağlantı sağlandı");

        const kitap = {
            ad: "Deliliğe Övgü",
            basim_yılı: "2000",
            yayın_evi: "yayınevim",
            yazar: "Erasmus"
        }

        db.collection("kitap").insertOne(kitap, function(err, result) {
            if (err) {
                throw err;
                console.log("kaydetme sırasında bir hata oluştu")
            } else {
                console.log("kayıt başarılı");
            }
        })
    }
})