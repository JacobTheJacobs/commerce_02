const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: 1,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

const ProductSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      default: [],
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      required: true,
      type: categorySchema,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = Product = mongoose.model("Product", ProductSchema);
