import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name."],
      maxLength: [200, "Product name cannot exceed 200 characters."],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price."],
      maxLength: [10, "Product price cannot exceed 10 digits."],
    },
    description: {
      type: String,
      required: [true, "Please enter product name."],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please enter product category."],
      enum: {
        values: [
          "Electronics",
          "Camera",
          "Laptops",
          "Accessories",
          "Ayurbedic Medicine",
          "Food",
          "Books",
          "Sports",
          "Outdoor",
          "Home",
        ],
        message: "Please select correct category.",
      },
    },
    seller: {
      type: String,
      required: [true, "Please enter product seller."],
    },
    sellerAddress: {
      type: String,
      required: [true, "Please enter Seller Address."],
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock."],
    },
    manufactureDate: {
      type: String,
      required: [true, "Please enter manufacture date in YYYY-MM-DD."],
    },
    expireDate: {
      type: String,
      required: [true, "Please enter expire date in YYYY-MM-DD."],
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
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
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
