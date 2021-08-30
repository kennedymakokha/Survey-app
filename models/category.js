const mongoose = require('mongoose');
const Schema = mongoose.Schema;
URLSlugs = require('mongoose-url-slugs');
const CategorySchema = new Schema({


    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

},
    { timestamps: true }
);
CategorySchema.plugin(URLSlugs('title'));
const category = mongoose.model('Category', CategorySchema);

module.exports = category;