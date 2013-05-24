
exports.views = {
    list: {
        map: function(doc) {

            var d = {};
            if (doc.name && doc.description) {
                d.name = doc.name;
                d.description = doc.description;

                if (doc._attachments) {
                    for(var filename in doc._attachments) {
                        d.photo = doc._id + "/" + filename;
                        break;
                    }
                }
                emit(doc.name, d);
            }
        }
    }
}