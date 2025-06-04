import express, { Router } from "express"
import isPrime from "../utils/isPrime.js"

const router = Router();

// GET /api/v1/isprime?number=7
// This route checks whether the given number is prime
router.get('/', (req, res) => {
    const numberStr = req.query.number;

    // Validate input: Reject if missing or empty or not-a-number
    if(numberStr === undefined || numberStr.trim() === '' || isNaN(numberStr)){
        return res.status(400)
        .json({
            error: 'Please provide a valid number as a query parameter.'
        })
    }

    // Convert into number
    const number = Number(numberStr);

    // use utility function to check if a number is prime
    const result = isPrime(number);
    res.status(200)
    .json({
        number,
        isPrime : result
    })
})

export default router;