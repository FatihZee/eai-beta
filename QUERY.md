# 📄 QUERY.md – Review GraphQL API

## 1. ➕ CREATE REVIEW – Membuat Review Baru
```graphql
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
````

## 2. ➕ CREATE SECOND REVIEW – Untuk Testing Get All

```graphql
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
```

## 3. 📥 GET ALL REVIEWS – Mengambil Semua Review

```graphql
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
```

## 4. 🔍 GET SINGLE REVIEW – Berdasarkan ID

```graphql
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
```

## 5. ✏️ UPDATE REVIEW – Mengubah Review yang Ada

```graphql
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
```

## 6. ❌ DELETE REVIEW – Menghapus Review Berdasarkan ID

```graphql
mutation DeleteReview {
  deleteReview(id: 2)
}
```

## 7. ✅ VERIFY DELETE – Pastikan Review Sudah Terhapus

```graphql
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
```

## 8. ⚠️ ERROR HANDLING – Get Review yang Tidak Ada

```graphql
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
```

## 9. ⚠️ ERROR HANDLING – Update Review yang Tidak Ada

```graphql
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
```

## 10. ⚠️ ERROR HANDLING – Delete Review yang Tidak Ada

```graphql
mutation DeleteNonExistentReview {
  deleteReview(id: 999)
}
```
