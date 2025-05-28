# 1. CREATE REVIEW - Membuat review baru
mutation CreateReview {
  createReview(input: {
    user_id: 1
    menu_id: 5
    order_id: 10
    rating: 5
    comment: "Makanan sangat enak dan pelayanan memuaskan!"
    sentiment: "positive"
  }) {
    id
    user_id
    menu_id
    order_id
    rating
    comment
    sentiment
    created_at
    updated_at
  }
}

# 2. CREATE REVIEW KEDUA - Untuk testing get all
mutation CreateSecondReview {
  createReview(input: {
    user_id: 2
    menu_id: 3
    order_id: 15
    rating: 3
    comment: "Makanan biasa saja, tidak terlalu istimewa"
    sentiment: "neutral"
  }) {
    id
    user_id
    menu_id
    order_id
    rating
    comment
    sentiment
    created_at
    updated_at
  }
}

# 3. GET ALL REVIEWS - Mengambil semua review
query GetAllReviews {
  getReviews {
    id
    user_id
    menu_id
    order_id
    rating
    comment
    sentiment
    created_at
    updated_at
  }
}

# 4. GET SINGLE REVIEW - Mengambil review berdasarkan ID
# Ganti angka 1 dengan ID yang sebenarnya dari hasil create
query GetSingleReview {
  getReview(id: 1) {
    id
    user_id
    menu_id
    order_id
    rating
    comment
    sentiment
    created_at
    updated_at
  }
}

# 5. UPDATE REVIEW - Mengupdate review yang sudah ada
# Ganti angka 1 dengan ID yang sebenarnya dari hasil create
mutation UpdateReview {
  updateReview(id: 1, input: {
    user_id: 1
    menu_id: 5
    order_id: 10
    rating: 4
    comment: "Setelah dicoba lagi, rasa lumayan bagus tapi bisa lebih baik"
    sentiment: "positive"
  }) {
    id
    user_id
    menu_id
    order_id
    rating
    comment
    sentiment
    created_at
    updated_at
  }
}

# 6. DELETE REVIEW - Menghapus review
# Ganti angka 2 dengan ID yang sebenarnya dari hasil create
mutation DeleteReview {
  deleteReview(id: 2)
}

# 7. VERIFY DELETE - Cek apakah review sudah terhapus
query VerifyDelete {
  getReviews {
    id
    user_id
    menu_id
    order_id
    rating
    comment
    sentiment
    created_at
    updated_at
  }
}

# 8. TEST ERROR HANDLING - Coba get review yang tidak ada
query GetNonExistentReview {
  getReview(id: 999) {
    id
    user_id
    menu_id
    order_id
    rating
    comment
    sentiment
    created_at
    updated_at
  }
}

# 9. TEST ERROR HANDLING - Coba update review yang tidak ada
mutation UpdateNonExistentReview {
  updateReview(id: 999, input: {
    user_id: 1
    menu_id: 1
    order_id: 1
    rating: 1
    comment: "Test"
    sentiment: "negative"
  }) {
    id
    rating
    comment
  }
}

# 10. TEST ERROR HANDLING - Coba delete review yang tidak ada
mutation DeleteNonExistentReview {
  deleteReview(id: 999)
}