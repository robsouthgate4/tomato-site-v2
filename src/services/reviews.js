import data from '../db.json'

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const getReviews = (id) =>
    delay(500).then(() => {
        if (!id) {
            return data.reviews
        } else {
            return data.reviews.filter((review) => id === review.id)
        }
    })
